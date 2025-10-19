import React, { useState, useRef } from 'react';
import { List } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import * as PDFLib from 'pdf-lib';

interface PagePreview {
    originalIndex: number;
    dataUrl: string;
}

const ReorderPdfPagesPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PagePreview[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setPdfFile(file);
        setIsProcessing(true);
        setPages([]);

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const previews: PagePreview[] = [];
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 0.5 });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const context = canvas.getContext('2d');
                if (context) {
                    // FIX: Add the 'canvas' property to the render parameters to match the expected type.
                    await page.render({ canvasContext: context, viewport: viewport, canvas: canvas }).promise;
                    previews.push({ originalIndex: i - 1, dataUrl: canvas.toDataURL() });
                }
            }
            setPages(previews);
        } catch (err) {
            console.error(err);
            alert("Could not load PDF pages.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDragSort = () => {
        if (dragItem.current === null || dragOverItem.current === null) return;
        const newPages = [...pages];
        const draggedItemContent = newPages.splice(dragItem.current, 1)[0];
        newPages.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setPages(newPages);
    };
    
    const handleSave = async () => {
        if (!pdfFile || pages.length === 0) return;
        setIsProcessing(true);
        try {
            const pdfBytes = await pdfFile.arrayBuffer();
            const originalPdf = await PDFLib.PDFDocument.load(pdfBytes);
            const newPdf = await PDFLib.PDFDocument.create();
            
            const pageIndices = pages.map(p => p.originalIndex);
            const copiedPages = await newPdf.copyPages(originalPdf, pageIndices);
            copiedPages.forEach(page => newPdf.addPage(page));

            const newPdfBytes = await newPdf.save();
            const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `reordered_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error(error);
            alert('Failed to save reordered PDF.');
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <List className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Reorder PDF Pages</h1>
            </div>
            
            {!pdfFile ? (
                 <input type="file" accept="application/pdf" onChange={handleFileChange} />
            ) : (
                <div className="space-y-4">
                     <p className="text-center text-gray-600">Drag and drop the pages to change their order.</p>
                     <div className="p-4 bg-gray-100 rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 min-h-[200px]">
                        {isProcessing && !pages.length && <p>Loading pages...</p>}
                        {pages.map((page, index) => (
                             <div 
                                key={page.originalIndex}
                                className="text-center p-2 bg-white rounded shadow cursor-grab active:cursor-grabbing"
                                draggable
                                onDragStart={() => dragItem.current = index}
                                onDragEnter={() => dragOverItem.current = index}
                                onDragEnd={handleDragSort}
                                onDragOver={(e) => e.preventDefault()}
                             >
                                 <img src={page.dataUrl} alt={`Page ${page.originalIndex + 1}`} className="w-full h-auto border"/>
                                 <p className="mt-1 text-sm font-semibold">{index + 1}</p>
                             </div>
                        ))}
                    </div>
                     <button onClick={handleSave} disabled={isProcessing} className="w-full max-w-md mx-auto block py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:opacity-50">
                        {isProcessing ? 'Saving...' : 'Save Reordered PDF'}
                     </button>
                </div>
            )}
        </div>
    );
};

export default ReorderPdfPagesPage;

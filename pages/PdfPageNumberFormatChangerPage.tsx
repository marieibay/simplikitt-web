import React, { useState } from 'react';
import { PdfPageNumberFormatChangerIcon } from '../components/icons/PdfPageNumberFormatChangerIcon';

declare const PDFLib: any;

const PdfPageNumberFormatChangerPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [position, setPosition] = useState('bottomCenter');
    const [fontSize, setFontSize] = useState(12);
    const [color, setColor] = useState('#000000');
    
    const handleAddNumbers = async () => {
        if (!pdfFile) return;
        setIsProcessing(true);

        try {
            const { PDFDocument, rgb, StandardFonts } = PDFLib;
            const pdfBytes = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(pdfBytes);
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

            const pages = pdfDoc.getPages();
            const colorRgb = {
                r: parseInt(color.slice(1, 3), 16) / 255,
                g: parseInt(color.slice(3, 5), 16) / 255,
                b: parseInt(color.slice(5, 7), 16) / 255,
            };
            
            for (let i = 0; i < pages.length; i++) {
                const page = pages[i];
                const { width, height } = page.getSize();
                const pageNumberText = `${i + 1}`;
                const textWidth = helveticaFont.widthOfTextAtSize(pageNumberText, fontSize);
                const margin = 20;

                let x = 0, y = 0;
                switch(position) {
                    case 'bottomCenter': x = (width - textWidth) / 2; y = margin; break;
                    case 'bottomLeft': x = margin; y = margin; break;
                    case 'bottomRight': x = width - textWidth - margin; y = margin; break;
                    case 'topCenter': x = (width - textWidth) / 2; y = height - fontSize - margin; break;
                    case 'topLeft': x = margin; y = height - fontSize - margin; break;
                    case 'topRight': x = width - textWidth - margin; y = height - fontSize - margin; break;
                }

                page.drawText(pageNumberText, { x, y, font: helveticaFont, size: fontSize, color: rgb(colorRgb.r, colorRgb.g, colorRgb.b) });
            }

            const pdfBytesSaved = await pdfDoc.save();
            const blob = new Blob([pdfBytesSaved], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `numbered_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error(error);
            alert('An error occurred while adding page numbers.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfPageNumberFormatChangerIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Add Page Numbers to PDF</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-6">
                 <div>
                    <label className="block font-medium text-gray-700">1. Select PDF File</label>
                    <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                 <div>
                    <label className="block font-medium text-gray-700">2. Position</label>
                    <select value={position} onChange={e => setPosition(e.target.value)} className="w-full p-2 border rounded-md mt-1">
                        <option value="bottomCenter">Bottom Center</option>
                        <option value="bottomLeft">Bottom Left</option>
                        <option value="bottomRight">Bottom Right</option>
                        <option value="topCenter">Top Center</option>
                        <option value="topLeft">Top Left</option>
                        <option value="topRight">Top Right</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label className="block font-medium text-gray-700">Font Size: {fontSize}px</label>
                        <input type="range" min="8" max="48" value={fontSize} onChange={e => setFontSize(parseInt(e.target.value))} className="w-full mt-1 accent-green-500" />
                    </div>
                     <div>
                        <label className="block font-medium text-gray-700">Color</label>
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-24 h-10 mt-1 p-1 border rounded-md" />
                    </div>
                </div>
                <button onClick={handleAddNumbers} disabled={!pdfFile || isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                    {isProcessing ? 'Processing...' : 'Add Page Numbers & Download'}
                </button>
            </div>
        </div>
    );
};

export default PdfPageNumberFormatChangerPage;

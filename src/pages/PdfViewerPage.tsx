import React, { useState, useRef, useEffect } from 'react';
import { PdfViewerIcon } from '../components/icons/PdfViewerIcon';
import * as pdfjsLib from 'pdfjs-dist';

const PdfViewerPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const renderPdf = async () => {
            if (!file || !canvasContainerRef.current) return;

            // Clear previous canvases
            canvasContainerRef.current.innerHTML = '';

            const arrayBuffer = await file.arrayBuffer();
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            setNumPages(pdf.numPages);

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                canvas.className = "border shadow-md mx-auto mb-4";
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                if (context) {
                    await page.render({ canvasContext: context, viewport: viewport }).promise;
                    canvasContainerRef.current?.appendChild(canvas);
                }
            }
        };

        renderPdf();
    }, [file]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfViewerIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Viewer</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-4xl mx-auto text-center space-y-4">
                <input type="file" accept="application/pdf" onChange={handleFileChange} />
                <div ref={canvasContainerRef} className="mt-4 space-y-4 max-h-[80vh] overflow-y-auto bg-gray-100 p-4 rounded-lg">
                    {!file && <p className="text-gray-500">Upload a PDF to view it.</p>}
                </div>
            </div>
        </div>
    );
};

export default PdfViewerPage;
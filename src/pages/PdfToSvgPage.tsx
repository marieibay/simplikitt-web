import React, { useState } from 'react';
import { PdfToSvgIcon } from '../components/icons/PdfToSvgIcon';

declare const pdfjsLib: any;
declare const JSZip: any;

const PdfToSvgPage: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [status, setStatus] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || file.type !== 'application/pdf') return;

        setIsProcessing(true);
        setStatus('Loading PDF...');
        
        try {
            const zip = new JSZip();
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;

            for (let i = 1; i <= numPages; i++) {
                setStatus(`Converting page ${i}/${numPages}...`);
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const context = canvas.getContext('2d');
                if (context) {
                    await page.render({ canvasContext: context, viewport }).promise;
                    const dataUrl = canvas.toDataURL('image/png');
                    
                    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
  <image href="${dataUrl}" width="${canvas.width}" height="${canvas.height}" />
</svg>`;
                    zip.file(`page_${i}.svg`, svgContent);
                }
            }
            
            setStatus('Creating ZIP file...');
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(zipBlob);
            link.download = `${file.name.replace(/\.pdf$/i, '')}.zip`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error('Error converting PDF to SVG:', error);
            alert('Could not convert PDF. It might be corrupted or encrypted.');
        } finally {
            setIsProcessing(false);
            setStatus('');
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfToSvgIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF to SVG Converter</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center space-y-4">
                <p>Select a PDF to convert each page into an SVG file. The results will be downloaded as a ZIP archive.</p>
                <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={isProcessing} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 disabled:opacity-50" />
                {isProcessing && (
                    <div className="mt-4">
                        <p className="font-semibold animate-pulse">{status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PdfToSvgPage;
import React, { useState } from 'react';
import { PdfPageSizeCheckerIcon } from '../components/icons/PdfPageSizeCheckerIcon';
import * as pdfjsLib from 'pdfjs-dist';

interface PageSize {
    pageNumber: number;
    widthPt: number;
    heightPt: number;
    widthIn: number;
    heightIn: number;
    widthMm: number;
    heightMm: number;
}

const PdfPageSizeCheckerPage: React.FC = () => {
    const [pageSizes, setPageSizes] = useState<PageSize[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || file.type !== 'application/pdf') return;

        setIsLoading(true);
        setPageSizes([]);
        setFileName(file.name);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const sizes: PageSize[] = [];
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 1 });
                const widthPt = viewport.width;
                const heightPt = viewport.height;
                sizes.push({
                    pageNumber: i,
                    widthPt,
                    heightPt,
                    widthIn: widthPt / 72,
                    heightIn: heightPt / 72,
                    widthMm: widthPt * 0.352778,
                    heightMm: heightPt * 0.352778,
                });
            }
            setPageSizes(sizes);
        } catch (error) {
            console.error(error);
            alert('Failed to read PDF page sizes.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfPageSizeCheckerIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Page Size Checker</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-3xl mx-auto space-y-4">
                <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={isLoading} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                {isLoading && <p className="text-center">Analyzing document...</p>}
                {pageSizes.length > 0 && (
                    <div className="max-h-96 overflow-y-auto">
                        <h2 className="text-xl font-semibold mb-2">{fileName}</h2>
                        <table className="w-full text-sm text-left">
                           <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                                <tr>
                                    <th className="px-4 py-2">Page</th>
                                    <th className="px-4 py-2">Dimensions (pt)</th>
                                    <th className="px-4 py-2">Dimensions (in)</th>
                                    <th className="px-4 py-2">Dimensions (mm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pageSizes.map(s => (
                                    <tr key={s.pageNumber} className="border-b">
                                        <td className="px-4 py-2 font-medium">{s.pageNumber}</td>
                                        <td className="px-4 py-2">{s.widthPt.toFixed(2)} x {s.heightPt.toFixed(2)}</td>
                                        <td className="px-4 py-2">{s.widthIn.toFixed(2)} x {s.heightIn.toFixed(2)}</td>
                                        <td className="px-4 py-2">{s.widthMm.toFixed(2)} x {s.heightMm.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PdfPageSizeCheckerPage;
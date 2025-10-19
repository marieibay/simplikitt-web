import React, { useState } from 'react';
import { PdfPageDeleterIcon } from '../components/icons/PdfPageDeleterIcon';

declare const PDFLib: any;

const PdfPageDeleterPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pagesToDelete, setPagesToDelete] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleDelete = async () => {
        if (!pdfFile || !pagesToDelete) {
            alert('Please select a file and enter pages to delete.');
            return;
        }
        setIsProcessing(true);

        try {
            const { PDFDocument } = PDFLib;
            const pdfBytes = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(pdfBytes, {
                ignoreEncryption: true,
            });
            
            const pageCount = pdfDoc.getPageCount();
            const indicesToDelete = pagesToDelete.split(',')
                .flatMap(r => {
                    const trimmed = r.trim();
                    if (trimmed.includes('-')) {
                        const [start, end] = trimmed.split('-').map(Number);
                        return Array.from({ length: end - start + 1 }, (_, i) => start + i - 1);
                    }
                    return Number(trimmed) - 1;
                })
                .filter(i => !isNaN(i) && i >= 0 && i < pageCount);

            const uniqueIndices = [...new Set(indicesToDelete)].sort((a, b) => b - a); // Sort descending to avoid index shifting issues

            if (uniqueIndices.length === 0) {
                alert('Invalid page numbers provided for this document.');
                setIsProcessing(false);
                return;
            }

            for (const index of uniqueIndices) {
                pdfDoc.removePage(index);
            }

            const pdfBytesSaved = await pdfDoc.save();
            const blob = new Blob([pdfBytesSaved], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `edited_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error(error);
            alert('An error occurred while deleting pages.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfPageDeleterIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Delete PDF Pages</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-6">
                <div>
                    <label className="block font-medium text-gray-700">1. Select PDF File</label>
                    <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">2. Pages to Delete</label>
                    <input
                        type="text"
                        value={pagesToDelete}
                        onChange={e => setPagesToDelete(e.target.value)}
                        placeholder="e.g., 2, 4-6, 9"
                        className="w-full p-2 border rounded-md mt-1"
                    />
                </div>
                <button onClick={handleDelete} disabled={!pdfFile || !pagesToDelete || isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                    {isProcessing ? 'Processing...' : 'Delete Pages & Download'}
                </button>
            </div>
        </div>
    );
};

export default PdfPageDeleterPage;
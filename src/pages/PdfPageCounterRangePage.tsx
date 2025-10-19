import React, { useState } from 'react';
import { PdfPageCounterRangeIcon } from '../components/icons/PdfPageCounterRangeIcon';

declare const pdfjsLib: any;

const PdfPageCounterRangePage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [range, setRange] = useState('');
    const [count, setCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const parseRange = (rangeStr: string, max: number): number[] => {
        const indices = new Set<number>();
        const parts = rangeStr.split(',');
        for (const part of parts) {
            const trimmed = part.trim();
            if (trimmed.includes('-')) {
                const [start, end] = trimmed.split('-').map(Number);
                if (!isNaN(start) && !isNaN(end) && start <= end) {
                    for (let i = start; i <= end; i++) {
                        if (i > 0 && i <= max) indices.add(i - 1);
                    }
                }
            } else {
                const num = Number(trimmed);
                if (!isNaN(num) && num > 0 && num <= max) {
                    indices.add(num - 1);
                }
            }
        }
        return Array.from(indices);
    };

    const handleCount = async () => {
        if (!pdfFile || !range) {
            setError('Please select a file and enter a page range.');
            return;
        }
        setIsLoading(true);
        setError('');
        setCount(null);

        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const pageIndices = parseRange(range, pdf.numPages);
            
            if (pageIndices.length === 0) {
                setError('The specified range contains no valid pages for this document.');
            } else {
                setCount(pageIndices.length);
            }
        } catch (err) {
            setError('Could not process the PDF file.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfPageCounterRangeIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Page Counter (Range)</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
                <div>
                    <label className="block font-medium">1. Select PDF File</label>
                    <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                </div>
                <div>
                    <label className="block font-medium">2. Enter Page Range</label>
                    <input
                        type="text"
                        value={range}
                        onChange={e => setRange(e.target.value)}
                        placeholder="e.g., 1-5, 8, 10-12"
                        className="w-full p-2 border rounded-md mt-1"
                    />
                </div>
                <button onClick={handleCount} disabled={!pdfFile || !range || isLoading} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                    {isLoading ? 'Counting...' : 'Count Pages in Range'}
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {count !== null && (
                     <div className="pt-4 text-center">
                        <p className="text-6xl font-bold my-2">{count}</p>
                        <p className="text-xl">pages found in the specified range.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PdfPageCounterRangePage;
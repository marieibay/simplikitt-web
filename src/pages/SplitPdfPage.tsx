
import React, { useState } from 'react';
import { SplitPdfIcon } from '../components/icons/SplitPdfIcon';

declare const PDFLib: any;

const SplitPdfPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [range, setRange] = useState('');
  const [isSplitting, setIsSplitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSplit = async () => {
    if (!file || !range) {
      alert('Please select a file and enter a page range.');
      return;
    }
    setIsSplitting(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
      // FIX: Robustly parse page ranges and ensure flatMap callback always returns an array.
      const pageIndices = range.split(',').flatMap(r => {
        const trimmed = r.trim();
        if (trimmed.includes('-')) {
            const parts = trimmed.split('-').map(s => parseInt(s, 10));
            if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[0] <= parts[1]) {
                const [start, end] = parts;
                return Array.from({ length: end - start + 1 }, (_, i) => start + i - 1);
            }
            return [];
        }
        const num = parseInt(trimmed, 10);
        return !isNaN(num) ? [num - 1] : [];
      }).filter(i => i >= 0 && i < pdf.getPageCount());

      if (pageIndices.length === 0) {
        alert('Invalid page range.');
        setIsSplitting(false);
        return;
      }

      const newPdf = await PDFLib.PDFDocument.create();
      const copiedPages = await newPdf.copyPages(pdf, pageIndices);
      copiedPages.forEach(page => newPdf.addPage(page));
      
      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `split_${file.name}`;
      link.click();
    } catch (error) {
        alert('Error splitting PDF.');
        console.error(error);
    } finally {
        setIsSplitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <SplitPdfIcon className="w-10 h-10 text-green-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Split PDF</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        <input type="text" value={range} onChange={e => setRange(e.target.value)} placeholder="e.g., 1-5, 8, 10-12" className="w-full p-2 border rounded-md" />
        <button onClick={handleSplit} disabled={isSplitting} className="w-full py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 disabled:opacity-50">
          {isSplitting ? 'Splitting...' : 'Split & Download'}
        </button>
      </div>
    </div>
  );
};

export default SplitPdfPage;
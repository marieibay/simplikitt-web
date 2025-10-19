import React, { useState } from 'react';
import { MergePdfIcon } from '../components/icons/MergePdfIcon';

declare const PDFLib: any;

const MergePdfPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
    }
    setIsMerging(true);

    try {
      const mergedPdf = await PDFLib.PDFDocument.create();
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert('An error occurred while merging the PDFs.');
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <MergePdfIcon className="w-10 h-10 text-green-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Merge PDF</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto text-center">
        <p className="mb-4">Select two or more PDF files to combine into one.</p>
        <input type="file" multiple accept="application/pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        
        {files.length > 0 && (
          <ul className="text-left my-4 list-disc list-inside">
            {files.map(f => <li key={f.name}>{f.name}</li>)}
          </ul>
        )}
        
        <button onClick={handleMerge} disabled={isMerging || files.length < 2} className="mt-4 px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:opacity-50">
          {isMerging ? 'Merging...' : 'Merge PDFs & Download'}
        </button>
      </div>
    </div>
  );
};

export default MergePdfPage;

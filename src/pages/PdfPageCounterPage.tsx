import React, { useState } from 'react';
import { PdfPageCounterIcon } from '../components/icons/PdfPageCounterIcon';
import * as pdfjsLib from 'pdfjs-dist';

const PdfPageCounterPage: React.FC = () => {
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      setIsLoading(true);
      setPageCount(null);
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      try {
        const pdf = await loadingTask.promise;
        setPageCount(pdf.numPages);
      } catch (error) {
        console.error('Error counting PDF pages:', error);
        alert('Could not read the PDF file. It may be corrupted or encrypted.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PdfPageCounterIcon className="w-10 h-10 text-green-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Page Counter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center">
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        <div className="mt-8 min-h-[100px] flex items-center justify-center">
            {isLoading ? (
                <p>Counting pages...</p>
            ) : pageCount !== null ? (
                <div>
                    <p className="text-gray-600">{fileName}</p>
                    <p className="text-6xl font-bold my-2">{pageCount}</p>
                    <p className="text-xl">pages</p>
                </div>
            ) : (
                <p className="text-gray-500">Upload a PDF to count its pages.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default PdfPageCounterPage;
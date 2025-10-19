import React, { useState } from 'react';
import { ExcelToCsvIcon } from '../components/icons/ExcelToCsvIcon';

declare const XLSX: any;

const ExcelToCsvPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleConvert = () => {
    if (!file) return;
    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const csv = XLSX.utils.sheet_to_csv(worksheet);

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${file.name.replace(/\.[^/.]+$/, "")}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        alert('Failed to process the Excel file.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ExcelToCsvIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Excel (XLSX) to CSV</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center space-y-4">
        <p>Select an XLSX file to convert to CSV format.</p>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        <button onClick={handleConvert} disabled={!file || isProcessing} className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 disabled:opacity-50">
          {isProcessing ? 'Converting...' : 'Convert & Download CSV'}
        </button>
      </div>
    </div>
  );
};

export default ExcelToCsvPage;

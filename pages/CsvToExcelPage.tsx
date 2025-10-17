import React, { useState } from 'react';
import { CsvToExcelIcon } from '../components/icons/CsvToExcelIcon';

declare const XLSX: any;

const CsvToExcelPage: React.FC = () => {
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
        const text = e.target?.result;
        const data = (text as string).split('\n').map(row => row.split(','));
        
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        
        XLSX.writeFile(workbook, `${file.name.replace(/\.[^/.]+$/, "")}.xlsx`);
      } catch (error) {
        alert('Failed to process the CSV file.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CsvToExcelIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSV to Excel (XLSX)</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center space-y-4">
        <p>Select a CSV file to convert to XLSX format.</p>
        <input type="file" accept=".csv" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        <button onClick={handleConvert} disabled={!file || isProcessing} className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 disabled:opacity-50">
          {isProcessing ? 'Converting...' : 'Convert & Download XLSX'}
        </button>
      </div>
    </div>
  );
};

export default CsvToExcelPage;
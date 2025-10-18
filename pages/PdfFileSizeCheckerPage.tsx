import React, { useState } from 'react';
import { PdfFileSizeCheckerIcon } from '../components/icons/PdfFileSizeCheckerIcon';

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const PdfFileSizeCheckerPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfFileSizeCheckerIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF File Size Checker</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center space-y-4">
                 <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files?.[0] || null)} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                 {file && (
                     <div className="pt-4">
                        <p className="text-gray-600">{file.name}</p>
                        <p className="text-6xl font-bold my-2">{formatBytes(file.size)}</p>
                    </div>
                 )}
            </div>
        </div>
    );
};

export default PdfFileSizeCheckerPage;

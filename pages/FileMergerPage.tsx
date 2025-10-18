import React, { useState } from 'react';
import { FileMergerIcon } from '../components/icons/FileMergerIcon';

const FileMergerPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least two files to merge.');
      return;
    }
    setIsProcessing(true);
    let content = '';
    for (const file of files) {
      const text = await file.text();
      content += `\n\n--- Start of ${file.name} ---\n\n`;
      content += text;
      content += `\n\n--- End of ${file.name} ---\n\n`;
    }

    const blob = new Blob([content.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'merged-file.txt';
    link.click();
    URL.revokeObjectURL(url);
    setIsProcessing(false);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileMergerIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">File Merger</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <p>Select multiple text-based files (.txt, .csv, .md, etc.) to merge them into a single file.</p>
        <input type="file" multiple onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        {files.length > 0 && (
          <div className="my-4">
            <h3 className="font-semibold">Selected Files:</h3>
            <ul className="list-disc list-inside text-sm">
              {files.map(f => <li key={f.name}>{f.name}</li>)}
            </ul>
          </div>
        )}
        <button onClick={handleMerge} disabled={isProcessing || files.length < 2} className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 disabled:opacity-50">
          {isProcessing ? 'Merging...' : 'Merge Files & Download'}
        </button>
      </div>
    </div>
  );
};

export default FileMergerPage;

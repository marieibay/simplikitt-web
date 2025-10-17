import React, { useState } from 'react';
import { FileExtensionChangerIcon } from '../components/icons/FileExtensionChangerIcon';

const FileExtensionChangerPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [newExtension, setNewExtension] = useState('txt');

  const handleDownload = () => {
    if (!file) return;
    const blob = file.slice(0, file.size, file.type);
    const newName = `${file.name.substring(0, file.name.lastIndexOf('.')) || file.name}.${newExtension}`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = newName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileExtensionChangerIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">File Extension Changer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        <input type="text" value={newExtension} onChange={e => setNewExtension(e.target.value)} placeholder="New extension (e.g., log)" className="w-full p-2 border rounded-md" />
        <button onClick={handleDownload} disabled={!file} className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg disabled:opacity-50">
          Download with New Extension
        </button>
      </div>
    </div>
  );
};

export default FileExtensionChangerPage;
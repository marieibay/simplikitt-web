import React, { useState } from 'react';
import { BatchFileRenamerIcon } from '../components/icons/BatchFileRenamerIcon';

declare const JSZip: any;

const BatchFileRenamerPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pattern, setPattern] = useState('new-name-{n}');
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleRenameAndZip = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setStatus('Initializing...');
    const zip = new JSZip();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extension = file.name.split('.').pop() || '';
        const newName = pattern.replace('{n}', (i + 1).toString()) + (extension ? `.${extension}` : '');
        
        setStatus(`Adding ${i + 1}/${files.length}: ${newName}`);
        zip.file(newName, file);
    }
    
    setStatus('Creating ZIP file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'renamed-files.zip';
    link.click();
    URL.revokeObjectURL(link.href);
    
    setIsProcessing(false);
    setStatus('Done!');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BatchFileRenamerIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Batch File Renamer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <p>This tool renames your files and packages them in a ZIP archive for download. It does not modify your original files.</p>
        <div>
          <label className="block font-medium">1. Upload Files</label>
          <input type="file" multiple onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 mt-1" />
        </div>
        <div>
            <label className="block font-medium">2. Renaming Pattern</label>
            <input type="text" value={pattern} onChange={e => setPattern(e.target.value)} className="w-full p-2 border rounded-md mt-1" />
            <p className="text-xs text-gray-500 mt-1">Use {'{n}'} as a placeholder for the file number (e.g., image-{' {n}'}). The original file extension will be preserved.</p>
        </div>
        <button onClick={handleRenameAndZip} disabled={files.length === 0 || isProcessing} className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 disabled:opacity-50">
          {isProcessing ? status : `Rename ${files.length} Files & Download ZIP`}
        </button>
      </div>
    </div>
  );
};

export default BatchFileRenamerPage;

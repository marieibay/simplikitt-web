import React, { useState } from 'react';
import { FileChecksumCalculatorIcon } from '../components/icons/FileChecksumCalculatorIcon';

const FileChecksumCalculatorPage: React.FC = () => {
  const [checksum, setChecksum] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsCalculating(true);
      setChecksum('');
      try {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setChecksum(hashHex);
      } catch (error) {
        console.error('Checksum error:', error);
        alert('Failed to calculate checksum.');
      } finally {
        setIsCalculating(false);
      }
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileChecksumCalculatorIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">File Checksum Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <p>Calculate the SHA-256 checksum of any file to verify its integrity.</p>
        <input type="file" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        {isCalculating && <p>Calculating...</p>}
        {checksum && (
          <div className="relative">
            <textarea value={checksum} readOnly className="w-full h-24 p-2 font-mono text-sm border rounded-md bg-gray-50" />
            <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 rounded-md">{copied ? 'Copied!' : 'Copy'}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileChecksumCalculatorPage;
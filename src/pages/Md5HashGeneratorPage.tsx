
import React, { useState } from 'react';
import { Md5HashGeneratorIcon } from '../components/icons/Md5HashGeneratorIcon';
import CryptoJS from 'crypto-js';

const Md5HashGeneratorPage: React.FC = () => {
  const [mode, setMode] = useState<'text' | 'file'>('text');
  const [textInput, setTextInput] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [hash, setHash] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const generateHashFromText = () => {
    if (!textInput) {
      setHash('');
      return;
    }
    const md5Hash = CryptoJS.MD5(textInput).toString();
    setHash(md5Hash);
    setFile(null); // Clear file if text is used
  };

  const handleFileChange = (selectedFile: File | null) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    setTextInput(''); // Clear text input
    setIsProcessing(true);
    setHash('');

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        if (arrayBuffer) {
          const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
          const md5Hash = CryptoJS.MD5(wordArray).toString();
          setHash(md5Hash);
        }
      } catch (err) {
        console.error("Error hashing file:", err);
        setHash('Error hashing file.');
      } finally {
        setIsProcessing(false);
      }
    };
    reader.onerror = () => {
        setHash('Error reading file.');
        setIsProcessing(false);
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const copyToClipboard = () => {
    if (hash) {
      navigator.clipboard.writeText(hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Md5HashGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">MD5 Hash Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        
        <div className="flex border-b">
          <button onClick={() => setMode('text')} className={`px-4 py-2 font-semibold ${mode === 'text' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}>
            From Text
          </button>
          <button onClick={() => setMode('file')} className={`px-4 py-2 font-semibold ${mode === 'file' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}>
            From File
          </button>
        </div>

        {mode === 'text' ? (
          <div>
            <textarea
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              placeholder="Enter text to hash..."
              className="w-full h-48 p-3 border rounded-lg"
            />
            <button onClick={generateHashFromText} className="mt-4 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">
              Generate MD5 Hash
            </button>
          </div>
        ) : (
          <div>
            <input 
              type="file" 
              onChange={e => handleFileChange(e.target.files ? e.target.files[0] : null)} 
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {file && <p className="text-sm text-gray-600 mt-2">Selected file: {file.name}</p>}
          </div>
        )}

        {(hash || isProcessing) && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">MD5 Hash</label>
            <textarea 
              value={isProcessing ? 'Calculating...' : hash} 
              readOnly 
              className="w-full p-3 border rounded-lg bg-gray-100 font-mono" 
            />
            <button onClick={copyToClipboard} className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md" disabled={!hash || isProcessing}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Md5HashGeneratorPage;
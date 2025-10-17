import React, { useState } from 'react';
import { RandomIdGeneratorIcon } from '../components/icons/RandomIdGeneratorIcon';

const RandomIdGeneratorPage: React.FC = () => {
  const [id, setId] = useState('');
  const [length, setLength] = useState(16);
  const [copied, setCopied] = useState(false);

  const generateId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setId(result);
  };

  const copyToClipboard = () => {
    if (id) {
      navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RandomIdGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Random ID/Key Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label htmlFor="length" className="block font-medium">ID Length: {length}</label>
          <input
            id="length"
            type="range"
            min="4"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-1 accent-indigo-500"
          />
        </div>
        <button onClick={generateId} className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg text-lg">
          Generate ID
        </button>
        {id && (
          <div className="relative">
            <input
              type="text"
              value={id}
              readOnly
              className="w-full p-3 font-mono border rounded-md bg-gray-100"
            />
            <button onClick={copyToClipboard} className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomIdGeneratorPage;

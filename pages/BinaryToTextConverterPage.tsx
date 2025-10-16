import React, { useState } from 'react';
import { BinaryToTextConverterIcon } from '../components/icons/BinaryToTextConverterIcon';

const BinaryToTextConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleConvert = () => {
    setError('');
    const binaryChunks = input.trim().split(/\s+/);
    try {
        const text = binaryChunks.map(chunk => {
            if (!/^[01]+$/.test(chunk)) {
                throw new Error('Invalid binary string detected.');
            }
            return String.fromCharCode(parseInt(chunk, 2));
        }).join('');
        setOutput(text);
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError('An unknown error occurred.');
        }
        setOutput('');
    }
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BinaryToTextConverterIcon className="w-10 h-10 text-gray-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Binary to Text Converter</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input Binary</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter binary string, separated by spaces..."
            className="w-full h-80 p-3 font-mono border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output Text</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-80 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
        </div>
      </div>
      
       {error && <div className="mt-4 text-red-600 bg-red-100 p-3 rounded-lg">{error}</div>}
      
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleConvert} className="px-5 py-2.5 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition shadow-md">
          Convert
        </button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-black transition shadow" disabled={!output}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => { setInput(''); setOutput(''); setError(''); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default BinaryToTextConverterPage;
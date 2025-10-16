import React, { useState, useEffect } from 'react';
import { ReverseTextGeneratorIcon } from '../components/icons/ReverseTextGeneratorIcon';

const ReverseTextGeneratorPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setOutput(input.split('').reverse().join(''));
  }, [input]);

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
        <ReverseTextGeneratorIcon className="w-10 h-10 text-pink-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Reverse Text Generator</h1>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Text to reverse..."
            className="w-full h-64 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-400 focus:border-pink-400 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output (Reversed)</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-64 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition shadow" disabled={!output}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default ReverseTextGeneratorPage;
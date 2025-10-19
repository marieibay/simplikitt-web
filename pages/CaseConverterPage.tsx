import React, { useState } from 'react';
import { CaseSensitive } from 'lucide-react';

const CaseConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleConversion = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    let result = '';
    switch (type) {
      case 'upper':
        result = input.toUpperCase();
        break;
      case 'lower':
        result = input.toLowerCase();
        break;
      case 'title':
        result = input.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
        break;
      case 'sentence':
        result = input.toLowerCase().replace(/(^\w{1}|\.\s*\w{1})/gi, char => char.toUpperCase());
        break;
    }
    setOutput(result);
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
        <CaseSensitive className="w-10 h-10 text-red-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Case Converter</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-64 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Result will appear here..."
            className="w-full h-64 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm focus:ring-red-500 focus:border-red-500 transition"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={() => handleConversion('upper')} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow">UPPERCASE</button>
        <button onClick={() => handleConversion('lower')} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow">lowercase</button>
        <button onClick={() => handleConversion('title')} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow">Title Case</button>
        <button onClick={() => handleConversion('sentence')} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition shadow">Sentence case</button>
        <div className="flex-grow"></div>
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

export default CaseConverterPage;
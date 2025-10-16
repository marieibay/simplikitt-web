import React, { useState } from 'react';
import { RemoveNonAlphanumericCharsIcon } from '../components/icons/RemoveNonAlphanumericCharsIcon';

const RemoveNonAlphanumericCharsPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleRemove = () => {
    setOutput(input.replace(/[^a-zA-Z0-9\s]/g, ''));
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
        <RemoveNonAlphanumericCharsIcon className="w-10 h-10 text-zinc-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Remove Non-Alphanumeric Chars</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Text with #$@! symbols..."
            className="w-full h-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-zinc-500 focus:border-zinc-500 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-80 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleRemove} className="px-5 py-2.5 bg-zinc-500 text-white font-bold rounded-lg hover:bg-zinc-600 transition shadow-md">
          Remove Characters
        </button>
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

export default RemoveNonAlphanumericCharsPage;
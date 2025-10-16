import React, { useState } from 'react';
import { RemoveLettersIcon } from '../components/icons/RemoveLettersIcon';

const RemoveLettersPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleRemove = () => {
    setOutput(input.replace(/[a-zA-Z]/g, ''));
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
        <RemoveLettersIcon className="w-10 h-10 text-lime-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Remove Letters from Text</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea id="input-text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output</label>
          <textarea id="output-text" value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50" />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleRemove} className="px-5 py-2.5 bg-lime-700 text-white font-bold rounded-lg hover:bg-lime-800 transition shadow-md">Remove Letters</button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default RemoveLettersPage;

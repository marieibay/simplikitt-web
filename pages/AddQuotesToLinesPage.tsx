import React, { useState } from 'react';
import { AddQuotesToLinesIcon } from '../components/icons/AddQuotesToLinesIcon';

const AddQuotesToLinesPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [quoteType, setQuoteType] = useState<'single' | 'double'>('double');
  const [copied, setCopied] = useState<boolean>(false);

  const handleApply = () => {
    const quote = quoteType === 'single' ? "'" : '"';
    const lines = input.split('\n');
    const quotedLines = lines.map(line => line.trim() === '' ? line : `${quote}${line}${quote}`);
    setOutput(quotedLines.join('\n'));
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
        <AddQuotesToLinesIcon className="w-10 h-10 text-violet-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Add Quotes to Lines</h1>
      </div>
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2"><input type="radio" name="quote" value="double" checked={quoteType === 'double'} onChange={() => setQuoteType('double')} /> Double Quotes (")</label>
        <label className="flex items-center gap-2"><input type="radio" name="quote" value="single" checked={quoteType === 'single'} onChange={() => setQuoteType('single')} /> Single Quotes (')</label>
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
        <button onClick={handleApply} className="px-5 py-2.5 bg-violet-500 text-white font-bold rounded-lg hover:bg-violet-600 transition shadow-md">Apply Quotes</button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default AddQuotesToLinesPage;

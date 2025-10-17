import React, { useState } from 'react';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';

const StringConcatenatorPage: React.FC = () => {
  const [list, setList] = useState('Apple\nBanana\nOrange');
  const [delimiter, setDelimiter] = useState(', ');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const concatenate = () => {
    const lines = list.split('\n').filter(line => line.trim() !== '');
    setOutput(lines.join(delimiter));
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
        <StringConcatenatorIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">String Concatenator</h1>
      </div>
      <div className="space-y-4">
        <div>
          <label>Delimiter</label>
          <input value={delimiter} onChange={e => setDelimiter(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea value={list} onChange={e => setList(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="List of items, one per line..." />
          <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Concatenated string..." />
        </div>
        <div className="flex gap-4 items-center">
            <button onClick={concatenate} className="px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg">Concatenate</button>
             <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default StringConcatenatorPage;

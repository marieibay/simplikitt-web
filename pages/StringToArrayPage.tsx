import React, { useState } from 'react';
import { StringToArrayIcon } from '../components/icons/StringToArrayIcon';

const StringToArrayPage: React.FC = () => {
  const [input, setInput] = useState('apple, banana, orange');
  const [delimiter, setDelimiter] = useState(',');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = () => {
    const arr = input.split(delimiter).map(item => `'${item.trim()}'`);
    setOutput(`[${arr.join(', ')}]`);
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
        <StringToArrayIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">String to Array Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4 max-w-2xl mx-auto">
        <div>
            <label htmlFor="input-string" className="block font-medium">Input String</label>
            <input id="input-string" value={input} onChange={e => setInput(e.target.value)} className="w-full p-2 border rounded mt-1"/>
        </div>
        <div>
            <label htmlFor="delimiter" className="block font-medium">Delimiter</label>
            <input id="delimiter" value={delimiter} onChange={e => setDelimiter(e.target.value)} className="w-full p-2 border rounded mt-1"/>
        </div>
        <button onClick={convert} className="px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg">Convert</button>
        <div className="relative">
            <textarea value={output} readOnly className="w-full h-48 p-3 border rounded-lg bg-gray-50 font-mono" placeholder="Array output..." />
            <button onClick={copyToClipboard} disabled={!output} className="absolute top-2 right-2 px-3 py-1 bg-gray-200 rounded-md">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default StringToArrayPage;

import React, { useState } from 'react';
import { AlphabeticalLetterGeneratorIcon } from '../components/icons/AlphabeticalLetterGeneratorIcon';

const AlphabeticalLetterGeneratorPage: React.FC = () => {
  const [start, setStart] = useState('A');
  const [end, setEnd] = useState('Z');
  const [separator, setSeparator] = useState(' ');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generateList = () => {
    let result = [];
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
    for (let i = startCode; i <= endCode; i++) {
      result.push(String.fromCharCode(i));
    }
    setOutput(result.join(separator));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <AlphabeticalLetterGeneratorIcon className="w-10 h-10 text-gray-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Alphabetical Letter Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <input type="text" value={start} onChange={e => setStart(e.target.value.toUpperCase())} maxLength={1} className="p-2 border rounded-md w-24" placeholder="Start" />
          <input type="text" value={end} onChange={e => setEnd(e.target.value.toUpperCase())} maxLength={1} className="p-2 border rounded-md w-24" placeholder="End" />
          <input type="text" value={separator} onChange={e => setSeparator(e.target.value)} className="p-2 border rounded-md w-24" placeholder="Separator" />
          <button onClick={generateList} className="px-5 py-2 bg-gray-700 text-white font-bold rounded-lg">Generate</button>
        </div>
        <div className="relative">
          <textarea value={output} readOnly className="w-full h-48 p-3 border rounded-lg bg-gray-50" />
          <button onClick={copyToClipboard} disabled={!output} className="absolute top-2 right-2 px-3 py-1 bg-gray-200 rounded-md">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default AlphabeticalLetterGeneratorPage;

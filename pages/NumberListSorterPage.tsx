import React, { useState } from 'react';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';

const NumberListSorterPage: React.FC = () => {
  const [input, setInput] = useState<string>('10\n2\n50\n1\n5');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleSort = (direction: 'asc' | 'desc') => {
    const numbers = input.split('\n').map(Number).filter(n => !isNaN(n));
    numbers.sort((a, b) => direction === 'asc' ? a - b : b - a);
    setOutput(numbers.join('\n'));
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
        <NumberListSorterIcon className="w-10 h-10 text-yellow-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sort Numbers List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={() => handleSort('asc')} className="px-5 py-2.5 bg-yellow-600 text-white font-bold rounded-lg">Sort Ascending</button>
        <button onClick={() => handleSort('desc')} className="px-5 py-2.5 bg-yellow-600 text-white font-bold rounded-lg">Sort Descending</button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default NumberListSorterPage;

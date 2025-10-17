import React, { useState } from 'react';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';

const OddEvenNumberFilterPage: React.FC = () => {
  const [input, setInput] = useState('1\n2\n3\n4\n5\n6\n7\n8\n9\n10');
  const [output, setOutput] = useState('');
  
  const filter = (type: 'odd' | 'even') => {
    const numbers = input.split('\n').map(Number).filter(n => !isNaN(n));
    const filtered = numbers.filter(n => type === 'even' ? n % 2 === 0 : n % 2 !== 0);
    setOutput(filtered.join('\n'));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <OddEvenNumberFilterIcon className="w-10 h-10 text-lime-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Odd/Even Number Filter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <div className="mt-6 flex gap-4">
        <button onClick={() => filter('even')} className="px-5 py-2.5 bg-lime-500 text-white font-bold rounded-lg">Keep Even Numbers</button>
        <button onClick={() => filter('odd')} className="px-5 py-2.5 bg-lime-500 text-white font-bold rounded-lg">Keep Odd Numbers</button>
      </div>
    </div>
  );
};

export default OddEvenNumberFilterPage;

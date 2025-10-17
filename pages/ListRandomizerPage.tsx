import React, { useState } from 'react';
import { ListRandomizerIcon } from '../components/icons/ListRandomizerIcon';

const ListRandomizerPage: React.FC = () => {
  const [input, setInput] = useState('Apple\nBanana\nOrange\nGrape');
  const [result, setResult] = useState<string | null>(null);

  const randomize = () => {
    const lines = input.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return;
    const randomIndex = Math.floor(Math.random() * lines.length);
    setResult(lines[randomIndex]);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ListRandomizerIcon className="w-10 h-10 text-fuchsia-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">List Randomizer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="list-input" className="block font-medium">Enter list items (one per line)</label>
          <textarea id="list-input" value={input} onChange={e => setInput(e.target.value)} className="w-full h-48 p-2 border rounded-md mt-1" />
        </div>
        <button onClick={randomize} className="w-full py-3 bg-fuchsia-500 text-white font-bold rounded-lg text-lg">Pick a Random Item</button>
        {result && (
          <div className="text-center pt-2">
            <p className="text-lg">Result</p>
            <p className="text-4xl font-bold">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListRandomizerPage;

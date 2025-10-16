import React, { useState } from 'react';
import { RandomNumberGeneratorIcon } from '../components/icons/RandomNumberGeneratorIcon';

const RandomNumberGeneratorPage: React.FC = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    setResult(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RandomNumberGeneratorIcon className="w-10 h-10 text-fuchsia-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Random Number Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div className="flex items-center gap-4">
          <input type="number" value={min} onChange={e => setMin(Number(e.target.value))} className="w-full p-2 border rounded-md" placeholder="Min"/>
          <input type="number" value={max} onChange={e => setMax(Number(e.target.value))} className="w-full p-2 border rounded-md" placeholder="Max" />
        </div>
        <button onClick={generate} className="px-6 py-3 bg-fuchsia-500 text-white font-bold rounded-lg text-lg">Generate</button>
        {result !== null && <p className="text-6xl font-bold my-4">{result}</p>}
      </div>
    </div>
  );
};

export default RandomNumberGeneratorPage;

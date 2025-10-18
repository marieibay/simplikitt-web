import React, { useState } from 'react';
import { RandomDateGeneratorIcon } from '../components/icons/RandomDateGeneratorIcon';

const RandomDateGeneratorPage: React.FC = () => {
  const [startDate, setStartDate] = useState('2020-01-01');
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [result, setResult] = useState<string | null>(null);

  const generate = () => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    if (isNaN(start) || isNaN(end) || start > end) {
      setResult('Invalid date range');
      return;
    }
    const randomTime = start + Math.random() * (end - start);
    setResult(new Date(randomTime).toLocaleDateString());
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RandomDateGeneratorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Random Date Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4 text-center">
        <div className="flex items-center gap-4">
          <div><label>Start Date</label><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
          <div><label>End Date</label><input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        </div>
        <button onClick={generate} className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg text-lg">Generate Date</button>
        {result && <p className="text-4xl font-bold my-4">{result}</p>}
      </div>
    </div>
  );
};

export default RandomDateGeneratorPage;
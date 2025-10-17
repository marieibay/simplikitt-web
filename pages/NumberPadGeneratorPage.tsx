import React, { useState, useMemo } from 'react';
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';

const NumberPadGeneratorPage: React.FC = () => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  const [padding, setPadding] = useState(3);
  
  const list = useMemo(() => {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(i.toString().padStart(padding, '0'));
    }
    return result.join('\n');
  }, [start, end, padding]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <NumberPadGeneratorIcon className="w-10 h-10 text-gray-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Number Pad Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div><label>Start</label><input type="number" value={start} onChange={e => setStart(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
          <div><label>End</label><input type="number" value={end} onChange={e => setEnd(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
          <div><label>Padding</label><input type="number" value={padding} onChange={e => setPadding(Number(e.target.value))} className="w-full p-2 border rounded-md" min="1"/></div>
        </div>
        <textarea value={list} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
    </div>
  );
};

export default NumberPadGeneratorPage;

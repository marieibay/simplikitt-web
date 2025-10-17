import React, { useState, useMemo } from 'react';
import { StandardDeviationIcon } from '../components/icons/StandardDeviationIcon';

const StandardDeviationPage: React.FC = () => {
  const [input, setInput] = useState('1, 2, 3, 4, 5, 6');

  const stdDev = useMemo(() => {
    const nums = input.split(/[\s,]+/).filter(Boolean).map(Number).filter(n => !isNaN(n));
    if (nums.length < 2) return null;
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((acc, val) => acc + (val - mean) ** 2, 0) / nums.length;
    return Math.sqrt(variance).toFixed(4);
  }, [input]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <StandardDeviationIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Standard Deviation Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <div>
          <label>Enter numbers (comma or space separated)</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-32 p-2 border rounded-md mt-1 font-mono" />
        </div>
        <div className="text-center pt-2">
            <p className="text-lg">Standard Deviation (σ)</p>
            <p className="text-4xl font-bold text-teal-600">{stdDev ?? '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default StandardDeviationPage;

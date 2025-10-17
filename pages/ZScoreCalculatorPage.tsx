import React, { useState, useMemo } from 'react';
import { ZScoreCalculatorIcon } from '../components/icons/ZScoreCalculatorIcon';

const ZScoreCalculatorPage: React.FC = () => {
  const [x, setX] = useState('75');
  const [mean, setMean] = useState('70');
  const [stdDev, setStdDev] = useState('5');

  const zScore = useMemo(() => {
    const numX = parseFloat(x);
    const numMean = parseFloat(mean);
    const numStdDev = parseFloat(stdDev);
    if (isNaN(numX) || isNaN(numMean) || isNaN(numStdDev) || numStdDev === 0) return null;
    return ((numX - numMean) / numStdDev).toFixed(4);
  }, [x, mean, stdDev]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ZScoreCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Z-Score Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4">
        <div><label>Data Point (X)</label><input type="number" value={x} onChange={e => setX(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        <div><label>Mean (μ)</label><input type="number" value={mean} onChange={e => setMean(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        <div><label>Standard Deviation (σ)</label><input type="number" value={stdDev} onChange={e => setStdDev(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        <div className="text-center pt-2">
            <p className="text-lg">Z-Score</p>
            <p className="text-4xl font-bold text-teal-600">{zScore ?? '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default ZScoreCalculatorPage;

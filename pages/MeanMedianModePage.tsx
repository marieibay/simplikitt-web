import React, { useState, useMemo } from 'react';
import { MeanMedianModeIcon } from '../components/icons/MeanMedianModeIcon';

const MeanMedianModePage: React.FC = () => {
  const [input, setInput] = useState('1, 2, 2, 3, 4, 5, 5, 5, 6');

  const stats = useMemo(() => {
    const nums = input.split(/[\s,]+/).filter(Boolean).map(Number).filter(n => !isNaN(n));
    if (nums.length === 0) return null;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    const median = nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    
    const counts = nums.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as { [key: number]: number });
    
    let mode: number[] = [];
    let maxCount = 0;
    for (const num in counts) {
      if (counts[num] > maxCount) {
        mode = [Number(num)];
        maxCount = counts[num];
      } else if (counts[num] === maxCount) {
        mode.push(Number(num));
      }
    }
    if (mode.length === nums.length) mode = []; // No mode if all numbers appear same number of times

    return {
      mean: mean.toFixed(2),
      median: median.toFixed(2),
      mode: mode.join(', ') || 'N/A',
    };
  }, [input]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <MeanMedianModeIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Mean, Median, & Mode Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <div>
          <label>Enter numbers (comma or space separated)</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-32 p-2 border rounded-md mt-1 font-mono" />
        </div>
        {stats && (
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-100 rounded-lg"><p className="text-2xl font-bold">{stats.mean}</p><p>Mean</p></div>
            <div className="p-4 bg-gray-100 rounded-lg"><p className="text-2xl font-bold">{stats.median}</p><p>Median</p></div>
            <div className="p-4 bg-gray-100 rounded-lg"><p className="text-2xl font-bold">{stats.mode}</p><p>Mode</p></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeanMedianModePage;

import React, { useState } from 'react';
import { AspectRatioCalculatorIcon } from '../components/icons/AspectRatioCalculatorIcon';

const AspectRatioCalculatorPage: React.FC = () => {
  const [w1, setW1] = useState('16');
  const [h1, setH1] = useState('9');
  const [w2, setW2] = useState('1920');
  const [h2, setH2] = useState('1080');

  const handleW2Change = (val: string) => {
    setW2(val);
    const numW1 = parseFloat(w1), numH1 = parseFloat(h1), numW2 = parseFloat(val);
    if (!isNaN(numW1) && !isNaN(numH1) && !isNaN(numW2) && numW1 > 0) {
      setH2(Math.round((numW2 * numH1) / numW1).toString());
    }
  };
  
  const handleH2Change = (val: string) => {
    setH2(val);
    const numW1 = parseFloat(w1), numH1 = parseFloat(h1), numH2 = parseFloat(val);
    if (!isNaN(numW1) && !isNaN(numH1) && !isNaN(numH2) && numH1 > 0) {
      setW2(Math.round((numH2 * numW1) / numH1).toString());
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <AspectRatioCalculatorIcon className="w-10 h-10 text-cyan-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Aspect Ratio Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <div>
          <label className="font-medium">Original Ratio</label>
          <div className="flex items-center gap-2 mt-1">
            <input type="number" value={w1} onChange={e => setW1(e.target.value)} className="w-full p-2 border rounded-md"/>
            <span>:</span>
            <input type="number" value={h1} onChange={e => setH1(e.target.value)} className="w-full p-2 border rounded-md"/>
          </div>
        </div>
        <div>
          <label className="font-medium">New Dimensions</label>
          <div className="flex items-center gap-2 mt-1">
            <input type="number" value={w2} onChange={e => handleW2Change(e.target.value)} className="w-full p-2 border rounded-md"/>
            <span>&times;</span>
            <input type="number" value={h2} onChange={e => handleH2Change(e.target.value)} className="w-full p-2 border rounded-md"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AspectRatioCalculatorPage;

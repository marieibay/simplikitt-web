import React, { useState, useMemo } from 'react';
import { AreaCalculatorIcon } from '../components/icons/AreaCalculatorIcon';

const AreaCalculatorPage: React.FC = () => {
  const [shape, setShape] = useState<'square' | 'rectangle' | 'circle' | 'triangle'>('rectangle');
  const [val1, setVal1] = useState('10');
  const [val2, setVal2] = useState('5');

  const area = useMemo(() => {
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    if (isNaN(n1) || ( (shape === 'rectangle' || shape === 'triangle') && isNaN(n2) )) return null;

    switch(shape) {
      case 'square': return (n1 * n1).toFixed(2);
      case 'rectangle': return (n1 * n2).toFixed(2);
      case 'circle': return (Math.PI * n1 * n1).toFixed(2);
      case 'triangle': return (0.5 * n1 * n2).toFixed(2);
      default: return null;
    }
  }, [shape, val1, val2]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <AreaCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Area Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <select value={shape} onChange={e => setShape(e.target.value as any)} className="w-full p-2 border rounded-md">
          <option value="rectangle">Rectangle</option>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
          <option value="triangle">Triangle</option>
        </select>
        <div className="grid grid-cols-2 gap-4">
          {shape === 'square' && <div><label>Side</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div>}
          {shape === 'rectangle' && <><div><label>Width</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div><div><label>Height</label><input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-full p-2 border rounded-md"/></div></>}
          {shape === 'circle' && <div><label>Radius</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div>}
          {shape === 'triangle' && <><div><label>Base</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div><div><label>Height</label><input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-full p-2 border rounded-md"/></div></>}
        </div>
        {area && <div className="text-center pt-2"><p className="text-lg">Area</p><p className="text-4xl font-bold text-teal-600">{area}</p></div>}
      </div>
    </div>
  );
};

export default AreaCalculatorPage;

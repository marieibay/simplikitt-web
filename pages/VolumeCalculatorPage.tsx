import React, { useState, useMemo } from 'react';
import { VolumeCalculatorIcon } from '../components/icons/VolumeCalculatorIcon';

const VolumeCalculatorPage: React.FC = () => {
  const [shape, setShape] = useState<'cube' | 'cuboid' | 'sphere' | 'cylinder'>('cuboid');
  const [val1, setVal1] = useState('10');
  const [val2, setVal2] = useState('5');
  const [val3, setVal3] = useState('2');

  const volume = useMemo(() => {
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    const n3 = parseFloat(val3);

    try {
        switch(shape) {
        case 'cube':
            if (isNaN(n1)) return null;
            return (n1 * n1 * n1).toFixed(2);
        case 'cuboid':
            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) return null;
            return (n1 * n2 * n3).toFixed(2);
        case 'sphere':
            if (isNaN(n1)) return null;
            return ((4/3) * Math.PI * Math.pow(n1, 3)).toFixed(2);
        case 'cylinder':
            if (isNaN(n1) || isNaN(n2)) return null;
            return (Math.PI * Math.pow(n1, 2) * n2).toFixed(2);
        default:
            return null;
        }
    } catch {
        return 'Error';
    }
  }, [shape, val1, val2, val3]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <VolumeCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Volume Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <select value={shape} onChange={e => setShape(e.target.value as any)} className="w-full p-2 border rounded-md">
          <option value="cuboid">Cuboid</option>
          <option value="cube">Cube</option>
          <option value="sphere">Sphere</option>
          <option value="cylinder">Cylinder</option>
        </select>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shape === 'cube' && <div><label>Side</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div>}
            {shape === 'cuboid' && <><div><label>Length</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div><div><label>Width</label><input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-full p-2 border rounded-md"/></div><div><label>Height</label><input type="number" value={val3} onChange={e => setVal3(e.target.value)} className="w-full p-2 border rounded-md"/></div></>}
            {shape === 'sphere' && <div><label>Radius</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div>}
            {shape === 'cylinder' && <><div><label>Radius</label><input type="number" value={val1} onChange={e => setVal1(e.target.value)} className="w-full p-2 border rounded-md"/></div><div><label>Height</label><input type="number" value={val2} onChange={e => setVal2(e.target.value)} className="w-full p-2 border rounded-md"/></div></>}
        </div>
        {volume && <div className="text-center pt-2"><p className="text-lg">Volume</p><p className="text-4xl font-bold text-teal-600">{volume}</p></div>}
      </div>
    </div>
  );
};

export default VolumeCalculatorPage;

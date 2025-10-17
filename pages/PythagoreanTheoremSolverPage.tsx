import React, { useState, useMemo } from 'react';
import { PythagoreanTheoremSolverIcon } from '../components/icons/PythagoreanTheoremSolverIcon';

const PythagoreanTheoremSolverPage: React.FC = () => {
  const [a, setA] = useState('3');
  const [b, setB] = useState('4');

  const c = useMemo(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) return null;
    return Math.sqrt(numA * numA + numB * numB).toFixed(4);
  }, [a, b]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PythagoreanTheoremSolverIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Pythagorean Theorem Solver</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <p className="text-center text-xl font-mono">a² + b² = c²</p>
        <div className="grid grid-cols-2 gap-4">
          <div><label>Side a</label><input type="number" value={a} onChange={e => setA(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
          <div><label>Side b</label><input type="number" value={b} onChange={e => setB(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        </div>
        <div className="text-center pt-2">
            <p className="text-lg">Hypotenuse (c)</p>
            <p className="text-4xl font-bold text-teal-600">{c ?? '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default PythagoreanTheoremSolverPage;

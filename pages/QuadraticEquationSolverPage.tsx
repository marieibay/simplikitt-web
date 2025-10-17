import React, { useState, useMemo } from 'react';
import { QuadraticEquationSolverIcon } from '../components/icons/QuadraticEquationSolverIcon';

const QuadraticEquationSolverPage: React.FC = () => {
  const [a, setA] = useState('1');
  const [b, setB] = useState('-3');
  const [c, setC] = useState('2');

  const roots = useMemo(() => {
    const numA = parseFloat(a), numB = parseFloat(b), numC = parseFloat(c);
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) return 'Invalid coefficients';
    if (numA === 0) return 'Not a quadratic equation';

    const discriminant = numB * numB - 4 * numA * numC;
    if (discriminant > 0) {
      const x1 = (-numB + Math.sqrt(discriminant)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(discriminant)) / (2 * numA);
      return `x1 = ${x1.toFixed(4)}, x2 = ${x2.toFixed(4)}`;
    } else if (discriminant === 0) {
      const x = -numB / (2 * numA);
      return `x = ${x.toFixed(4)}`;
    } else {
      return 'No real roots';
    }
  }, [a, b, c]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <QuadraticEquationSolverIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Quadratic Equation Solver</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <p className="text-center text-xl font-mono">ax² + bx + c = 0</p>
        <div className="grid grid-cols-3 gap-4">
          <div><label>a</label><input type="number" value={a} onChange={e => setA(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
          <div><label>b</label><input type="number" value={b} onChange={e => setB(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
          <div><label>c</label><input type="number" value={c} onChange={e => setC(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        </div>
        <div className="text-center pt-2">
            <p className="text-lg">Roots</p>
            <p className="text-2xl font-bold text-teal-600">{roots}</p>
        </div>
      </div>
    </div>
  );
};

export default QuadraticEquationSolverPage;

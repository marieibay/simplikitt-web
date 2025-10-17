import React, { useState, useMemo } from 'react';
import { SquareRootCalculatorIcon } from '../components/icons/SquareRootCalculatorIcon';

const SquareRootCalculatorPage: React.FC = () => {
  const [number, setNumber] = useState('25');
  
  const result = useMemo(() => {
    const num = parseFloat(number);
    if (isNaN(num) || num < 0) return 'Invalid input';
    return Math.sqrt(num).toFixed(6);
  }, [number]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <SquareRootCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Square Root Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="number-input" className="block font-medium">Enter a Number</label>
          <input 
            type="number" 
            id="number-input" 
            value={number} 
            onChange={e => setNumber(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 text-center text-xl"
          />
        </div>
        <div>
            <p className="text-lg">Square Root</p>
            <p className="text-4xl font-bold text-teal-600">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default SquareRootCalculatorPage;

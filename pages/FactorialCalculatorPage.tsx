import React, { useState, useMemo } from 'react';
import { FactorialCalculatorIcon } from '../components/icons/FactorialCalculatorIcon';

const FactorialCalculatorPage: React.FC = () => {
  const [number, setNumber] = useState('5');

  const result = useMemo(() => {
    const n = parseInt(number, 10);
    if (isNaN(n) || n < 0) return 'Invalid input';
    if (n > 1000) return 'Number is too large'; // Performance limit

    try {
      let res = 1n;
      for (let i = 2n; i <= BigInt(n); i++) {
        res *= i;
      }
      return res.toString();
    } catch (e) {
      return 'Error calculating factorial';
    }
  }, [number]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FactorialCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Factorial Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="number-input" className="block font-medium">Enter an Integer (n!)</label>
          <input 
            type="number" 
            id="number-input" 
            value={number} 
            onChange={e => setNumber(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 text-center text-xl"
            step="1"
            min="0"
          />
        </div>
        <div>
            <p className="text-lg">Result</p>
            <div className="p-4 bg-gray-100 rounded-md mt-2">
                <p className="text-2xl font-bold text-teal-600 break-words">{result}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FactorialCalculatorPage;

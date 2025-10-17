import React, { useState, useMemo } from 'react';
import { FractionDecimalConverterIcon } from '../components/icons/FractionDecimalConverterIcon';

const FractionDecimalConverterPage: React.FC = () => {
  const [fraction, setFraction] = useState('1/2');

  const decimal = useMemo(() => {
    try {
      const parts = fraction.split('/');
      if (parts.length !== 2) return 'Invalid fraction';
      const numerator = parseFloat(parts[0]);
      const denominator = parseFloat(parts[1]);
      if (isNaN(numerator) || isNaN(denominator) || denominator === 0) return 'Invalid fraction';
      return (numerator / denominator).toFixed(6);
    } catch {
      return 'Invalid fraction';
    }
  }, [fraction]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FractionDecimalConverterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Fraction to Decimal Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="fraction-input" className="block font-medium">Enter a Fraction (e.g., 3/4)</label>
          <input 
            type="text" 
            id="fraction-input" 
            value={fraction} 
            onChange={e => setFraction(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 text-center text-xl"
          />
        </div>
        <div>
            <p className="text-lg">Decimal Equivalent</p>
            <p className="text-4xl font-bold text-teal-600">{decimal}</p>
        </div>
      </div>
    </div>
  );
};

export default FractionDecimalConverterPage;

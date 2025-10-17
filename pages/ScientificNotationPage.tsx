import React, { useState } from 'react';
import { ScientificNotationIcon } from '../components/icons/ScientificNotationIcon';

const ScientificNotationPage: React.FC = () => {
  const [decimal, setDecimal] = useState('12345');
  const [scientific, setScientific] = useState('1.2345e+4');

  const handleDecimalChange = (val: string) => {
    setDecimal(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setScientific(num.toExponential());
    } else {
      setScientific('Invalid');
    }
  };

  const handleScientificChange = (val: string) => {
    setScientific(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setDecimal(num.toString());
    } else {
      setDecimal('Invalid');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ScientificNotationIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Scientific Notation Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="decimal-input" className="block font-medium">Decimal Number</label>
          <input 
            type="text" 
            id="decimal-input" 
            value={decimal} 
            onChange={e => handleDecimalChange(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 font-mono"
          />
        </div>
        <div>
          <label htmlFor="scientific-input" className="block font-medium">Scientific Notation</label>
          <input 
            type="text" 
            id="scientific-input" 
            value={scientific} 
            onChange={e => handleScientificChange(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 font-mono"
          />
        </div>
      </div>
    </div>
  );
};

export default ScientificNotationPage;

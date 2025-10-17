import React, { useState, useMemo } from 'react';
import { DecimalFractionConverterIcon } from '../components/icons/DecimalFractionConverterIcon';

const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;

const DecimalFractionConverterPage: React.FC = () => {
  const [decimal, setDecimal] = useState('0.75');

  const fraction = useMemo(() => {
    const num = parseFloat(decimal);
    if (isNaN(num)) return 'Invalid decimal';

    let denominator = 1;
    let tempNum = num;
    while(tempNum % 1 !== 0) {
      tempNum *= 10;
      denominator *= 10;
    }
    const numerator = tempNum;
    const commonDivisor = gcd(numerator, denominator);
    return `${numerator / commonDivisor} / ${denominator / commonDivisor}`;
  }, [decimal]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DecimalFractionConverterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Decimal to Fraction Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="decimal-input" className="block font-medium">Enter a Decimal</label>
          <input 
            type="number" 
            id="decimal-input" 
            value={decimal} 
            onChange={e => setDecimal(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 text-center text-xl"
          />
        </div>
        <div>
            <p className="text-lg">Fraction Equivalent</p>
            <p className="text-4xl font-bold text-teal-600">{fraction}</p>
        </div>
      </div>
    </div>
  );
};

export default DecimalFractionConverterPage;

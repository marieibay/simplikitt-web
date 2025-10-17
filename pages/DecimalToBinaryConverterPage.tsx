import React, { useState } from 'react';
import { DecimalToBinaryConverterIcon } from '../components/icons/DecimalToBinaryConverterIcon';

const DecimalToBinaryConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('10');
  const [output, setOutput] = useState<string>('1010');

  const handleConvert = (value: string) => {
    setInput(value);
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setOutput(num.toString(2));
    } else if (value === '') {
      setOutput('');
    } else {
      setOutput('Invalid Input');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DecimalToBinaryConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Decimal to Binary Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label>Decimal</label>
          <input type="number" value={input} onChange={e => handleConvert(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div>
          <label>Binary</label>
          <input value={output} readOnly className="w-full p-2 border rounded-md mt-1 bg-gray-100 font-mono"/>
        </div>
      </div>
    </div>
  );
};

export default DecimalToBinaryConverterPage;

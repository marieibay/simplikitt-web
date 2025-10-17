import React, { useState } from 'react';
import { BinaryToDecimalConverterIcon } from '../components/icons/BinaryToDecimalConverterIcon';

const BinaryToDecimalConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('1010');
  const [output, setOutput] = useState<string>('10');

  const handleConvert = (value: string) => {
    const sanitized = value.replace(/[^01]/g, '');
    setInput(sanitized);
    if (sanitized === '') {
      setOutput('');
      return;
    }
    const num = parseInt(sanitized, 2);
    if (!isNaN(num)) {
      setOutput(num.toString(10));
    } else {
      setOutput('Invalid Input');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BinaryToDecimalConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Binary to Decimal Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label>Binary</label>
          <input type="text" value={input} onChange={e => handleConvert(e.target.value)} className="w-full p-2 border rounded-md mt-1 font-mono"/>
        </div>
        <div>
          <label>Decimal</label>
          <input value={output} readOnly className="w-full p-2 border rounded-md mt-1 bg-gray-100"/>
        </div>
      </div>
    </div>
  );
};

export default BinaryToDecimalConverterPage;

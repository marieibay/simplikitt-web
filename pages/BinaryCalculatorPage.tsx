import React, { useState, useMemo } from 'react';
import { BinaryCalculatorIcon } from '../components/icons/BinaryCalculatorIcon';

const BinaryCalculatorPage: React.FC = () => {
  const [val1, setVal1] = useState('1010'); // 10
  const [val2, setVal2] = useState('0101'); // 5
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');

  const result = useMemo(() => {
    try {
      const num1 = parseInt(val1, 2);
      const num2 = parseInt(val2, 2);
      if (isNaN(num1) || isNaN(num2)) return 'Invalid Input';

      let resDecimal;
      if (operation === 'add') {
        resDecimal = num1 + num2;
      } else {
        resDecimal = num1 - num2;
      }
      return resDecimal.toString(2);
    } catch {
      return 'Error';
    }
  }, [val1, val2, operation]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BinaryCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Binary Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4 font-mono">
        <input type="text" value={val1} onChange={e => setVal1(e.target.value.replace(/[^01]/g, ''))} className="w-full p-2 border rounded-md text-right"/>
        <div className="flex items-center gap-4">
          <select value={operation} onChange={e => setOperation(e.target.value as any)} className="p-2 border rounded-md">
            <option value="add">+</option>
            <option value="subtract">-</option>
          </select>
          <input type="text" value={val2} onChange={e => setVal2(e.target.value.replace(/[^01]/g, ''))} className="w-full p-2 border rounded-md text-right"/>
        </div>
        <hr/>
        <div className="p-2 bg-gray-100 rounded-md text-right">
          <p className="text-2xl font-bold">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default BinaryCalculatorPage;

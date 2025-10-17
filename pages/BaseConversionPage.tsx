import React, { useState, useEffect } from 'react';
import { BaseConversionIcon } from '../components/icons/BaseConversionIcon';

const BaseConversionPage: React.FC = () => {
  const [input, setInput] = useState('255');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(16);
  const [output, setOutput] = useState('');

  useEffect(() => {
    try {
      if (input.trim() === '') {
        setOutput('');
        return;
      }
      const decimalValue = parseInt(input, fromBase);
      if (isNaN(decimalValue)) {
        setOutput('Invalid Input');
      } else {
        setOutput(decimalValue.toString(toBase).toUpperCase());
      }
    } catch (e) {
      setOutput('Error');
    }
  }, [input, fromBase, toBase]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BaseConversionIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Base Converter</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="from-base" className="block font-medium">From Base</label>
            <select id="from-base" value={fromBase} onChange={e => setFromBase(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1">
              <option value="2">Binary</option>
              <option value="8">Octal</option>
              <option value="10">Decimal</option>
              <option value="16">Hexadecimal</option>
            </select>
          </div>
          <div>
            <label htmlFor="to-base" className="block font-medium">To Base</label>
            <select id="to-base" value={toBase} onChange={e => setToBase(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1">
              <option value="2">Binary</option>
              <option value="8">Octal</option>
              <option value="10">Decimal</option>
              <option value="16">Hexadecimal</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="input-value">Input</label>
          <input id="input-value" value={input} onChange={e => setInput(e.target.value)} className="w-full p-2 border rounded-md mt-1 font-mono"/>
        </div>
        <div>
          <label htmlFor="output-value">Output</label>
          <input id="output-value" value={output} readOnly className="w-full p-2 border rounded-md mt-1 bg-gray-100 font-mono" />
        </div>
      </div>
    </div>
  );
};

export default BaseConversionPage;

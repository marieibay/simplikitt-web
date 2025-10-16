
import React, { useState } from 'react';
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';

const PercentageCalculatorPage: React.FC = () => {
  const [val1, setVal1] = useState<string>('');
  const [val2, setVal2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const [val3, setVal3] = useState<string>('');
  const [val4, setVal4] = useState<string>('');
  const [result2, setResult2] = useState<string>('');

  const [val5, setVal5] = useState<string>('');
  const [val6, setVal6] = useState<string>('');
  const [result3, setResult3] = useState<string>('');

  const calculate1 = () => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(((num1 / 100) * num2).toFixed(2));
    }
  };

  const calculate2 = () => {
    const num3 = parseFloat(val3);
    const num4 = parseFloat(val4);
    if (!isNaN(num3) && !isNaN(num4) && num4 !== 0) {
      setResult2(((num3 / num4) * 100).toFixed(2));
    }
  };

  const calculate3 = () => {
    const num5 = parseFloat(val5);
    const num6 = parseFloat(val6);
    if (!isNaN(num5) && !isNaN(num6) && num5 !== 0) {
      const change = num6 - num5;
      setResult3(((change / num5) * 100).toFixed(2));
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PercentageCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Percentage Calculator</h1>
      </div>
      
      <div className="space-y-8">
        {/* Calculator 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">What is X% of Y?</h2>
          <div className="flex flex-wrap items-center gap-4">
            <input type="number" value={val1} onChange={e => {setVal1(e.target.value); calculate1()}} placeholder="X" className="p-2 border rounded-md w-24"/>
            <span className="text-gray-600">% of</span>
            <input type="number" value={val2} onChange={e => {setVal2(e.target.value); calculate1()}} placeholder="Y" className="p-2 border rounded-md w-24"/>
            <button onClick={calculate1} className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">=</button>
            <input type="text" value={result} readOnly placeholder="Result" className="p-2 border rounded-md bg-gray-100 w-32"/>
          </div>
        </div>

        {/* Calculator 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">X is what percent of Y?</h2>
          <div className="flex flex-wrap items-center gap-4">
            <input type="number" value={val3} onChange={e => {setVal3(e.target.value); calculate2()}} placeholder="X" className="p-2 border rounded-md w-24"/>
            <span className="text-gray-600">is what % of</span>
            <input type="number" value={val4} onChange={e => {setVal4(e.target.value); calculate2()}} placeholder="Y" className="p-2 border rounded-md w-24"/>
            <button onClick={calculate2} className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">=</button>
            <input type="text" value={result2 ? `${result2}%` : ''} readOnly placeholder="Result" className="p-2 border rounded-md bg-gray-100 w-32"/>
          </div>
        </div>

        {/* Calculator 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Percentage Change</h2>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-600">From</span>
            <input type="number" value={val5} onChange={e => {setVal5(e.target.value); calculate3()}} placeholder="Old Value" className="p-2 border rounded-md w-24"/>
            <span className="text-gray-600">to</span>
            <input type="number" value={val6} onChange={e => {setVal6(e.target.value); calculate3()}} placeholder="New Value" className="p-2 border rounded-md w-24"/>
            <button onClick={calculate3} className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">=</button>
            <input type="text" value={result3 ? `${result3}%` : ''} readOnly placeholder="Result" className="p-2 border rounded-md bg-gray-100 w-32"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculatorPage;

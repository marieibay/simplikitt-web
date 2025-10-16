import React, { useState, useMemo } from 'react';
import { TipCalculatorIcon } from '../components/icons/TipCalculatorIcon';

const TipCalculatorPage: React.FC = () => {
  const [bill, setBill] = useState('50');
  const [tip, setTip] = useState('15');

  const result = useMemo(() => {
    const b = parseFloat(bill);
    const t = parseFloat(tip);
    if (isNaN(b) || isNaN(t)) return null;
    const tipAmount = b * (t / 100);
    return { tipAmount: tipAmount.toFixed(2), total: (b + tipAmount).toFixed(2) };
  }, [bill, tip]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TipCalculatorIcon className="w-10 h-10 text-yellow-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Tip Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4">
        <div><label>Bill Amount ($)</label><input type="number" value={bill} onChange={e => setBill(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        <div><label>Tip Percentage (%)</label><input type="number" value={tip} onChange={e => setTip(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        {result && (
          <div className="pt-4 space-y-2">
            <div className="flex justify-between"><p>Tip Amount:</p><p className="font-bold">${result.tipAmount}</p></div>
            <div className="flex justify-between text-xl"><p>Total Bill:</p><p className="font-bold">${result.total}</p></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipCalculatorPage;

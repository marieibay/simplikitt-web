import React, { useState, useMemo } from 'react';
import { SalesTaxCalculatorIcon } from '../components/icons/SalesTaxCalculatorIcon';

const SalesTaxCalculatorPage: React.FC = () => {
  const [price, setPrice] = useState('100');
  const [tax, setTax] = useState('8');

  const result = useMemo(() => {
    const p = parseFloat(price);
    const t = parseFloat(tax);
    if (isNaN(p) || isNaN(t)) return null;

    const taxAmount = p * (t / 100);
    return { taxAmount: taxAmount.toFixed(2), total: (p + taxAmount).toFixed(2) };
  }, [price, tax]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <SalesTaxCalculatorIcon className="w-10 h-10 text-amber-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sales Tax Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4">
        <div><label>Price ($)</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        <div><label>Tax Rate (%)</label><input type="number" value={tax} onChange={e => setTax(e.target.value)} className="w-full p-2 border rounded-md mt-1"/></div>
        {result && (
          <div className="pt-4 space-y-2">
            <div className="flex justify-between"><p>Tax Amount:</p><p className="font-bold">${result.taxAmount}</p></div>
            <div className="flex justify-between text-xl"><p>Total:</p><p className="font-bold">${result.total}</p></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesTaxCalculatorPage;

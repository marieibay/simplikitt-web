import React, { useState, useMemo } from 'react';
import { LoanCalculatorIcon } from '../components/icons/LoanCalculatorIcon';

const LoanCalculatorPage: React.FC = () => {
  const [amount, setAmount] = useState('100000');
  const [rate, setRate] = useState('5');
  const [term, setTerm] = useState('30');

  const monthlyPayment = useMemo(() => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || r === 0) return null;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [amount, rate, term]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <LoanCalculatorIcon className="w-10 h-10 text-emerald-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Loan Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label>Loan Amount ($)</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div>
          <label>Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div>
          <label>Loan Term (years)</label>
          <input type="number" value={term} onChange={e => setTerm(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        {monthlyPayment && (
          <div className="pt-4 text-center">
            <p>Monthly Payment</p>
            <p className="text-4xl font-bold my-2">${monthlyPayment.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculatorPage;

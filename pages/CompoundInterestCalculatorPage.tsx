import React, { useState, useMemo } from 'react';
import { CompoundInterestCalculatorIcon } from '../components/icons/CompoundInterestCalculatorIcon';

const CompoundInterestCalculatorPage: React.FC = () => {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [compoundFreq, setCompoundFreq] = useState(12); // monthly

  const futureValue = useMemo(() => {
    const p = principal;
    const r = rate / 100;
    const n = compoundFreq;
    const t = years;
    if (p < 0 || r < 0 || t < 0) return null;
    const amount = p * Math.pow(1 + (r / n), n * t);
    return amount.toFixed(2);
  }, [principal, rate, years, compoundFreq]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CompoundInterestCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Compound Interest Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div><label>Principal Amount ($)</label><input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/></div>
        <div><label>Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/></div>
        <div><label>Years</label><input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/></div>
        <div>
          <label>Compounding Frequency</label>
          <select value={compoundFreq} onChange={e => setCompoundFreq(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1">
            <option value="1">Annually</option>
            <option value="2">Semi-Annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
          </select>
        </div>
        {futureValue && <div className="text-center pt-2"><p className="text-lg">Future Value</p><p className="text-4xl font-bold text-teal-600">${futureValue}</p></div>}
      </div>
    </div>
  );
};

export default CompoundInterestCalculatorPage;
import React, { useState, useMemo } from 'react';
import { LoanAmortizationScheduleIcon } from '../components/icons/LoanAmortizationScheduleIcon';

interface ScheduleItem {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

const LoanAmortizationSchedulePage: React.FC = () => {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(30);

  const schedule = useMemo((): ScheduleItem[] | null => {
    const p = amount;
    const r = rate / 100 / 12;
    const n = term * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r < 0 || n <= 0) return null;
    
    const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let balance = p;
    const amortization: ScheduleItem[] = [];

    for (let i = 1; i <= n; i++) {
        const interest = balance * r;
        const principal = payment - interest;
        balance -= principal;
        amortization.push({ month: i, payment, principal, interest, balance: balance < 0 ? 0 : balance });
    }
    return amortization;
  }, [amount, rate, term]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <LoanAmortizationScheduleIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Loan Amortization Schedule</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-4xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div><label>Loan Amount ($)</label><input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
             <div><label>Interest Rate (%)</label><input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
             <div><label>Loan Term (Years)</label><input type="number" value={term} onChange={e => setTerm(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
        </div>
        {schedule && (
            <div className="max-h-96 overflow-y-auto border rounded-lg">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 sticky top-0"><tr>
                        <th className="p-2">Month</th><th className="p-2">Payment</th><th className="p-2">Principal</th><th className="p-2">Interest</th><th className="p-2">Balance</th>
                    </tr></thead>
                    <tbody>
                        {schedule.map(item => (
                            <tr key={item.month} className="border-b">
                                <td className="p-2 text-center">{item.month}</td>
                                <td className="p-2 text-right">${item.payment.toFixed(2)}</td>
                                <td className="p-2 text-right">${item.principal.toFixed(2)}</td>
                                <td className="p-2 text-right">${item.interest.toFixed(2)}</td>
                                <td className="p-2 text-right">${item.balance.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
      </div>
    </div>
  );
};
export default LoanAmortizationSchedulePage;
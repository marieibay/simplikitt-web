import React, { useState, useMemo } from 'react';
import { MortgageRefinanceCalculatorIcon } from '../components/icons/MortgageRefinanceCalculatorIcon';

const MortgageRefinanceCalculatorPage: React.FC = () => {
    const [currentBalance, setCurrentBalance] = useState(250000);
    const [currentRate, setCurrentRate] = useState(6.5);
    const [currentRemainingTerm, setCurrentRemainingTerm] = useState(25);
    const [newRate, setNewRate] = useState(5.0);
    const [newTerm, setNewTerm] = useState(30);
    const [closingCosts, setClosingCosts] = useState(5000);

    const calculatePayment = (p: number, r: number, n: number) => {
        if (p <= 0 || r <= 0 || n <= 0) return 0;
        const monthlyRate = r / 100 / 12;
        const numberOfPayments = n * 12;
        if (monthlyRate === 0) return p / numberOfPayments;
        return (p * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    };

    const result = useMemo(() => {
        const oldPayment = calculatePayment(currentBalance, currentRate, currentRemainingTerm);
        const newPayment = calculatePayment(currentBalance + closingCosts, newRate, newTerm);
        
        const monthlySavings = oldPayment - newPayment;
        const breakeven = monthlySavings > 0 ? closingCosts / monthlySavings : Infinity;

        return {
            oldPayment: oldPayment.toFixed(2),
            newPayment: newPayment.toFixed(2),
            monthlySavings: monthlySavings.toFixed(2),
            breakeven: isFinite(breakeven) ? breakeven.toFixed(1) : 'N/A'
        };
    }, [currentBalance, currentRate, currentRemainingTerm, newRate, newTerm, closingCosts]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <MortgageRefinanceCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Mortgage Refinance Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4 p-4 border rounded-lg">
                <h3 className="font-bold">Current Loan</h3>
                <div><label>Remaining Balance ($)</label><input type="number" value={currentBalance} onChange={e => setCurrentBalance(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>Interest Rate (%)</label><input type="number" value={currentRate} onChange={e => setCurrentRate(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>Remaining Term (Years)</label><input type="number" value={currentRemainingTerm} onChange={e => setCurrentRemainingTerm(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
            </div>
             <div className="space-y-4 p-4 border rounded-lg">
                <h3 className="font-bold">New Loan</h3>
                <div><label>New Interest Rate (%)</label><input type="number" value={newRate} onChange={e => setNewRate(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>New Term (Years)</label><input type="number" value={newTerm} onChange={e => setNewTerm(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>Closing Costs ($)</label><input type="number" value={closingCosts} onChange={e => setClosingCosts(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
            </div>
        </div>
        {result && (
             <div className="pt-4 text-center space-y-4">
                <h2 className="text-xl font-semibold mb-4">Refinance Summary</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-100 rounded-lg"><p>Old Payment</p><p className="text-2xl font-bold">${result.oldPayment}</p></div>
                    <div className="p-4 bg-green-100 rounded-lg"><p>New Payment</p><p className="text-2xl font-bold">${result.newPayment}</p></div>
                </div>
                 <div className="p-4 bg-blue-100 rounded-lg">
                    <p>Monthly Savings</p>
                    <p className={`text-3xl font-bold ${Number(result.monthlySavings) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${result.monthlySavings}
                    </p>
                </div>
                 <div className="p-4 bg-gray-100 rounded-lg">
                    <p>Breakeven Point (Months)</p>
                    <p className="text-2xl font-bold">{result.breakeven}</p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
export default MortgageRefinanceCalculatorPage;
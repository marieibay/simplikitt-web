import React, { useState, useMemo } from 'react';
import { RetirementSavingsCalculatorIcon } from '../components/icons/RetirementSavingsCalculatorIcon';

const RetirementSavingsCalculatorPage: React.FC = () => {
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(65);
    const [currentSavings, setCurrentSavings] = useState(50000);
    const [monthlyContribution, setMonthlyContribution] = useState(500);
    const [annualRate, setAnnualRate] = useState(7);
    
    const result = useMemo(() => {
        const years = retirementAge - currentAge;
        if (years <= 0) return { futureValue: currentSavings, totalContribution: 0, totalInterest: 0 };
        
        const months = years * 12;
        const monthlyRate = annualRate / 100 / 12;
        
        // Future value of current savings
        const fvOfPrincipal = currentSavings * Math.pow(1 + monthlyRate, months);
        
        // Future value of monthly contributions
        const fvOfContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        
        const futureValue = fvOfPrincipal + fvOfContributions;
        const totalContribution = currentSavings + (monthlyContribution * months);
        const totalInterest = futureValue - totalContribution;
        
        return {
            futureValue: futureValue.toFixed(2),
            totalContribution: totalContribution.toFixed(2),
            totalInterest: totalInterest.toFixed(2)
        };

    }, [currentAge, retirementAge, currentSavings, monthlyContribution, annualRate]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RetirementSavingsCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Retirement Savings Calculator</h1>
      </div>
       <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label>Current Age</label><input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>Retirement Age</label><input type="number" value={retirementAge} onChange={e => setRetirementAge(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>Current Savings ($)</label><input type="number" value={currentSavings} onChange={e => setCurrentSavings(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div><label>Monthly Contribution ($)</label><input type="number" value={monthlyContribution} onChange={e => setMonthlyContribution(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
                <div className="md:col-span-2"><label>Estimated Annual Rate of Return (%)</label><input type="number" value={annualRate} onChange={e => setAnnualRate(Number(e.target.value))} className="w-full p-2 border rounded-md"/></div>
            </div>
            {result && (
                 <div className="pt-4 text-center space-y-4">
                     <div className="p-4 bg-green-100 rounded-lg">
                        <p>Projected Savings at Retirement</p>
                        <p className="text-4xl font-bold text-green-700">${Number(result.futureValue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-100 rounded-lg"><p>Total Contributions</p><p className="text-2xl font-bold">${Number(result.totalContribution).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p></div>
                        <div className="p-4 bg-gray-100 rounded-lg"><p>Total Interest Earned</p><p className="text-2xl font-bold">${Number(result.totalInterest).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p></div>
                    </div>
                </div>
            )}
       </div>
    </div>
  );
};
export default RetirementSavingsCalculatorPage;
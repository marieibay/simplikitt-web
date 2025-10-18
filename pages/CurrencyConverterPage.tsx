import React, { useState, useMemo } from 'react';
import { CurrencyConverterIcon } from '../components/icons/CurrencyConverterIcon';

const staticRates: { [key: string]: number } = {
    'USD': 1,
    'EUR': 0.92,
    'GBP': 0.79,
    'JPY': 157.0,
    'AUD': 1.50,
    'CAD': 1.37,
    'CHF': 0.90,
};

const CurrencyConverterPage: React.FC = () => {
    const [amount, setAmount] = useState('100');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');

    const convertedAmount = useMemo(() => {
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount)) return '...';

        const amountInUsd = numAmount / staticRates[fromCurrency];
        const result = amountInUsd * staticRates[toCurrency];
        return result.toFixed(2);
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CurrencyConverterIcon className="w-10 h-10 text-teal-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Currency Converter</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
                 <p className="text-xs text-center text-gray-500">Note: Exchange rates are for demonstration purposes and are not live.</p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                    <div>
                         <label>From</label>
                        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} className="w-full p-2 border rounded-md mt-1">
                            {Object.keys(staticRates).map(c => <option key={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
                <div className="text-center pt-4">
                    <p className="text-lg">Converted Amount</p>
                    <p className="text-4xl font-bold text-teal-600">{convertedAmount} <span className="text-2xl text-gray-500">{toCurrency}</span></p>
                    <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} className="p-2 border rounded-md mt-2">
                         {Object.keys(staticRates).map(c => <option key={c}>{c}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverterPage;
import React, { useState, useMemo } from 'react';
import { UnitConverterIcon } from '../components/icons/UnitConverterIcon';

const conversionFactors: { [key: string]: { [key: string]: number } } = {
  length: { meters: 1, feet: 3.28084, inches: 39.3701 },
  weight: { kilograms: 1, pounds: 2.20462, ounces: 35.274 },
  temperature: {},
};

const UnitConverterPage: React.FC = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('feet');
  const [input, setInput] = useState<string>('1');

  const output = useMemo(() => {
    const val = parseFloat(input);
    if (isNaN(val)) return '';

    if (category === 'temperature') {
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') return (val * 9/5 + 32).toFixed(2);
      if (fromUnit === 'fahrenheit' && toUnit === 'celsius') return ((val - 32) * 5/9).toFixed(2);
      return val.toFixed(2);
    }

    const factors = conversionFactors[category];
    if (!factors) return '';
    const inBase = val / factors[fromUnit];
    return (inBase * factors[toUnit]).toFixed(4);
  }, [category, fromUnit, toUnit, input]);

  const units = category === 'temperature' ? ['celsius', 'fahrenheit'] : Object.keys(conversionFactors[category]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <UnitConverterIcon className="w-10 h-10 text-lime-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Unit Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <select value={category} onChange={e => {setCategory(e.target.value); setFromUnit(Object.keys(conversionFactors[e.target.value] || {celsius:0})[0]); setToUnit(Object.keys(conversionFactors[e.target.value] || {fahrenheit:0})[1]);}} className="w-full p-2 border rounded-md">
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
        </select>
        <div className="flex items-center gap-4">
          <div className="flex-1"><input type="number" value={input} onChange={e => setInput(e.target.value)} className="w-full p-2 border rounded-md" /></div>
          <div className="flex-1"><input type="text" value={output} readOnly className="w-full p-2 border rounded-md bg-gray-50" /></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1"><select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full p-2 border rounded-md">{units.map(u => <option key={u} value={u}>{u}</option>)}</select></div>
          <div className="flex-1"><select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full p-2 border rounded-md">{units.map(u => <option key={u} value={u}>{u}</option>)}</select></div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverterPage;

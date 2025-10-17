
import React, { useState, useMemo } from 'react';
import { UnitConverterIcon } from '../components/icons/UnitConverterIcon';

const conversionRates: { [key: string]: { [key: string]: number } } = {
  length: {
    meters: 1,
    kilometers: 1000,
    centimeters: 0.01,
    miles: 1609.34,
    feet: 0.3048,
    inches: 0.0254,
  },
  weight: {
    kilograms: 1,
    grams: 0.001,
    milligrams: 0.000001,
    pounds: 0.453592,
    ounces: 0.0283495,
  },
  temperature: {
    celsius: 1,
    fahrenheit: 1,
    kelvin: 1,
  },
};

const UnitConverterPage: React.FC = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('feet');
  const [inputValue, setInputValue] = useState('1');

  const units = Object.keys(conversionRates[category]);

  const convertedValue = useMemo(() => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) return '';

    if (category === 'temperature') {
      let tempInC;
      if (fromUnit === 'celsius') tempInC = input;
      else if (fromUnit === 'fahrenheit') tempInC = (input - 32) * 5 / 9;
      else tempInC = input - 273.15; // Kelvin

      if (toUnit === 'celsius') return tempInC.toFixed(2);
      if (toUnit === 'fahrenheit') return ((tempInC * 9 / 5) + 32).toFixed(2);
      if (toUnit === 'kelvin') return (tempInC + 273.15).toFixed(2);
    } else {
      const rates = conversionRates[category];
      const valueInBase = input * rates[fromUnit];
      const result = valueInBase / rates[toUnit];
      return result.toFixed(4);
    }
    return '';
  }, [inputValue, fromUnit, toUnit, category]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    const newUnits = Object.keys(conversionRates[newCategory]);
    setFromUnit(newUnits[0]);
    setToUnit(newUnits[1]);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <UnitConverterIcon className="w-10 h-10 text-teal-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Unit Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">Category</label>
          <select value={category} onChange={handleCategoryChange} className="w-full p-2 border rounded-md mt-1">
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>From</label>
            <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-full p-2 border rounded-md mt-1" />
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full p-2 border rounded-md mt-2">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label>To</label>
            <input type="text" value={convertedValue} readOnly className="w-full p-2 border rounded-md mt-1 bg-gray-100" />
            <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full p-2 border rounded-md mt-2">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverterPage;

import React, { useState, useMemo } from 'react';
import { UnitConverterIcon } from '../components/icons/UnitConverterIcon';

const unitsData = {
  Length: { meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001, mile: 1609.34, yard: 0.9144, foot: 0.3048, inch: 0.0254 },
  Mass: { gram: 1, kilogram: 1000, milligram: 0.001, pound: 453.592, ounce: 28.3495 },
  Temperature: {
    celsius: (v: number, to: string) => to === 'fahrenheit' ? (v * 9/5) + 32 : (to === 'kelvin' ? v + 273.15 : v),
    fahrenheit: (v: number, to: string) => to === 'celsius' ? (v - 32) * 5/9 : (to === 'kelvin' ? (v - 32) * 5/9 + 273.15 : v),
    kelvin: (v: number, to: string) => to === 'celsius' ? v - 273.15 : (to === 'fahrenheit' ? (v - 273.15) * 9/5 + 32 : v),
  },
};

type Category = keyof typeof unitsData;

const UnitConverterPage: React.FC = () => {
  const [category, setCategory] = useState<Category>('Length');
  const [value, setValue] = useState('1');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('foot');

  const unitOptions = Object.keys(unitsData[category]);

  const result = useMemo(() => {
    const val = parseFloat(value);
    if (isNaN(val)) return '';

    if (category === 'Temperature') {
      const converter = (unitsData.Temperature as any)[fromUnit];
      return converter(val, toUnit).toFixed(2);
    }
    
    const fromFactor = (unitsData[category] as any)[fromUnit];
    const toFactor = (unitsData[category] as any)[toUnit];
    const baseValue = val * fromFactor;
    return (baseValue / toFactor).toFixed(4);

  }, [value, fromUnit, toUnit, category]);

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const newUnits = Object.keys(unitsData[cat]);
    setFromUnit(newUnits[0]);
    setToUnit(newUnits[1] || newUnits[0]);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <UnitConverterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Unit Converter</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          {(Object.keys(unitsData) as Category[]).map(cat => (
            <button key={cat} onClick={() => handleCategoryChange(cat)} className={`flex-1 py-2 rounded-md font-semibold ${category === cat ? 'bg-teal-500 text-white' : 'hover:bg-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-1">
            <label>Value</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
          </div>
          <div className="md:col-span-1">
            <label>From</label>
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div className="md:col-span-1">
            <label>To</label>
            <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <div className="text-center pt-4">
            <p className="text-lg">Result</p>
            <p className="text-4xl font-bold text-teal-600">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default UnitConverterPage;

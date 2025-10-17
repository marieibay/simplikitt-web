import React, { useState } from 'react';
import { UnitConverterIcon } from '../components/icons/UnitConverterIcon';

const unitsData: { [key: string]: { [key: string]: number } } = {
  Length: {
    'Meters (m)': 1,
    'Kilometers (km)': 1000,
    'Centimeters (cm)': 0.01,
    'Millimeters (mm)': 0.001,
    'Miles (mi)': 1609.34,
    'Yards (yd)': 0.9144,
    'Feet (ft)': 0.3048,
    'Inches (in)': 0.0254,
  },
  Mass: {
    'Grams (g)': 1,
    'Kilograms (kg)': 1000,
    'Milligrams (mg)': 0.001,
    'Pounds (lb)': 453.592,
    'Ounces (oz)': 28.3495,
  },
  Temperature: {
    'Celsius (°C)': 1,
    'Fahrenheit (°F)': 1,
    'Kelvin (K)': 1,
  },
};

const UnitConverterPage: React.FC = () => {
  const [category, setCategory] = useState('Length');
  const [fromUnit, setFromUnit] = useState('Meters (m)');
  const [toUnit, setToUnit] = useState('Feet (ft)');
  const [inputValue, setInputValue] = useState('1');
  const [outputValue, setOutputValue] = useState('');

  const convert = React.useCallback(() => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) {
      setOutputValue('');
      return;
    }

    if (category === 'Temperature') {
      let output;
      if (fromUnit === 'Celsius (°C)') {
        if (toUnit === 'Fahrenheit (°F)') output = (input * 9/5) + 32;
        else if (toUnit === 'Kelvin (K)') output = input + 273.15;
        else output = input;
      } else if (fromUnit === 'Fahrenheit (°F)') {
        if (toUnit === 'Celsius (°C)') output = (input - 32) * 5/9;
        else if (toUnit === 'Kelvin (K)') output = ((input - 32) * 5/9) + 273.15;
        else output = input;
      } else { // Kelvin
        if (toUnit === 'Celsius (°C)') output = input - 273.15;
        else if (toUnit === 'Fahrenheit (°F)') output = ((input - 273.15) * 9/5) + 32;
        else output = input;
      }
      setOutputValue(output.toFixed(2));
    } else {
      const fromFactor = unitsData[category][fromUnit];
      const toFactor = unitsData[category][toUnit];
      const result = (input * fromFactor) / toFactor;
      setOutputValue(result.toFixed(4));
    }
  }, [inputValue, fromUnit, toUnit, category]);
  
  React.useEffect(() => {
    convert();
  }, [convert]);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    const units = Object.keys(unitsData[cat]);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <UnitConverterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Unit Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label>Category</label>
          <select value={category} onChange={e => handleCategoryChange(e.target.value)} className="w-full p-2 border rounded-md mt-1">
            {Object.keys(unitsData).map(cat => <option key={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div>
            <label>From</label>
            <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-full p-2 border rounded-md mt-1" />
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {Object.keys(unitsData[category]).map(u => <option key={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label>To</label>
            <input value={outputValue} readOnly className="w-full p-2 border rounded-md mt-1 bg-gray-100" />
            <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {Object.keys(unitsData[category]).map(u => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverterPage;

import React, { useState, useMemo } from 'react';
import { BmiCalculatorIcon } from '../components/icons/BmiCalculatorIcon';

const BmiCalculatorPage: React.FC = () => {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');

  const bmiResult = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = units === 'metric' ? w / ((h / 100) ** 2) : (w / (h ** 2)) * 703;
    
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    return { value: bmi.toFixed(1), category };
  }, [weight, height, units]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BmiCalculatorIcon className="w-10 h-10 text-green-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">BMI Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <div className="flex gap-4">
          <button onClick={() => setUnits('metric')} className={`w-full py-2 rounded-lg ${units === 'metric' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>Metric</button>
          <button onClick={() => setUnits('imperial')} className={`w-full py-2 rounded-lg ${units === 'imperial' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>Imperial</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Weight ({units === 'metric' ? 'kg' : 'lbs'})</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
          </div>
          <div>
            <label>Height ({units === 'metric' ? 'cm' : 'in'})</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
          </div>
        </div>
        {bmiResult && (
          <div className="pt-4 text-center">
            <p>Your BMI is</p>
            <p className="text-5xl font-bold my-2">{bmiResult.value}</p>
            <p className="text-xl font-semibold">{bmiResult.category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculatorPage;

import React, { useState } from 'react';
import { FileSizeConverterIcon } from '../components/icons/FileSizeConverterIcon';

const units = {
  bytes: 1,
  kilobytes: 1024,
  megabytes: 1024 ** 2,
  gigabytes: 1024 ** 3,
};

const FileSizeConverterPage: React.FC = () => {
  const [value, setValue] = useState<string>('1024');
  const [fromUnit, setFromUnit] = useState('kilobytes');

  const convert = (toUnit: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return '...';
    const inBytes = num * units[fromUnit as keyof typeof units];
    return (inBytes / units[toUnit as keyof typeof units]).toFixed(4);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FileSizeConverterIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">File Size Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div className="flex items-center gap-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full p-2 border rounded-md" />
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="p-2 border rounded-md">
            {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(units).map(u => (
            <div key={u} className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">{u}</p>
              <p className="text-lg font-semibold">{convert(u)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileSizeConverterPage;
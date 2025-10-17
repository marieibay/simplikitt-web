import React, { useState } from 'react';
import { JsonToPhpArrayIcon } from '../components/icons/JsonToPhpArrayIcon';

const JsonToPhpArrayPage: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "name": "John",\n  "age": 30,\n  "isStudent": false,\n  "courses": ["Math", "Science"]\n}');
  const [phpOutput, setPhpOutput] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      const obj = JSON.parse(jsonInput);
      const toPhp = (value: any, indent = '  '): string => {
        if (Array.isArray(value)) {
          return `[\n${value.map(item => `${indent}  ${toPhp(item, `${indent}  `)}`).join(',\n')}\n${indent}]`;
        }
        if (typeof value === 'object' && value !== null) {
          return `[\n${Object.entries(value).map(([key, val]) => `${indent}  '${key}' => ${toPhp(val, `${indent}  `)}`).join(',\n')}\n${indent}]`;
        }
        if (typeof value === 'string') {
          return `'${value.replace(/'/g, "\\'")}'`;
        }
        if (typeof value === 'boolean') {
          return value ? 'true' : 'false';
        }
        return value;
      };
      setPhpOutput(`<?php\n\n$array = ${toPhp(obj, '')};\n`);
      setError('');
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsonToPhpArrayIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON to PHP Array Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={jsonInput} onChange={e => setJsonInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={phpOutput} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={convert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonToPhpArrayPage;

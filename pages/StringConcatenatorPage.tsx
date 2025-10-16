import React, { useState } from 'react';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';

const StringConcatenatorPage: React.FC = () => {
  const [input, setInput] = useState('Line 1\nLine 2\nLine 3');
  const [output, setOutput] = useState('');
  const [separator, setSeparator] = useState(', ');

  const concatenate = () => {
    const lines = input.split('\n').filter(line => line.trim() !== '');
    setOutput(lines.join(separator));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <StringConcatenatorIcon className="w-10 h-10 text-sky-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">String Concatenator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div>
          <label className="block font-medium">Separator</label>
          <input value={separator} onChange={e => setSeparator(e.target.value)} className="w-full p-2 border rounded-md"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input lines..."/>
            <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output..."/>
        </div>
        <button onClick={concatenate} className="px-5 py-2.5 bg-sky-600 text-white font-bold rounded-lg">Concatenate</button>
      </div>
    </div>
  );
};

export default StringConcatenatorPage;

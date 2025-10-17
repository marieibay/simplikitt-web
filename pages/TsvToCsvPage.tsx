import React, { useState } from 'react';
import { TsvToCsvIcon } from '../components/icons/TsvToCsvIcon';

const TsvToCsvPage: React.FC = () => {
  const [input, setInput] = useState('col1\tcol2\tcol3\nval1\tval2\tval3');
  const [output, setOutput] = useState('');

  const handleConvert = () => {
    setOutput(input.replace(/\t/g, ','));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TsvToCsvIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">TSV to CSV Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" placeholder="Paste TSV data here..."/>
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" placeholder="CSV output..."/>
      </div>
      <button onClick={handleConvert} className="mt-6 px-5 py-2.5 bg-purple-500 text-white font-bold rounded-lg">Convert</button>
    </div>
  );
};

export default TsvToCsvPage;
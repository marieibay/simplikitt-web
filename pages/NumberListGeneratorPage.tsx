import React, { useState } from 'react';
import { NumberListGeneratorIcon } from '../components/icons/NumberListGeneratorIcon';

const NumberListGeneratorPage: React.FC = () => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(100);
  const [step, setStep] = useState(1);
  const [separator, setSeparator] = useState(' ');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generateList = () => {
    if (step === 0) return;
    let result = [];
    for (let i = start; (step > 0 ? i <= end : i >= end); i += step) {
      result.push(i);
    }
    setOutput(result.join(separator));
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <NumberListGeneratorIcon className="w-10 h-10 text-gray-800" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Number List Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <input type="number" value={start} onChange={e => setStart(Number(e.target.value))} className="p-2 border rounded-md w-24" placeholder="Start"/>
          <input type="number" value={end} onChange={e => setEnd(Number(e.target.value))} className="p-2 border rounded-md w-24" placeholder="End" />
          <input type="number" value={step} onChange={e => setStep(Number(e.target.value))} className="p-2 border rounded-md w-24" placeholder="Step" />
          <input type="text" value={separator} onChange={e => setSeparator(e.target.value)} className="p-2 border rounded-md w-24" placeholder="Separator" />
          <button onClick={generateList} className="px-5 py-2 bg-gray-800 text-white font-bold rounded-lg">Generate</button>
        </div>
        <div className="relative">
          <textarea value={output} readOnly className="w-full h-48 p-3 border rounded-lg bg-gray-50" />
          <button onClick={copyToClipboard} disabled={!output} className="absolute top-2 right-2 px-3 py-1 bg-gray-200 rounded-md">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default NumberListGeneratorPage;

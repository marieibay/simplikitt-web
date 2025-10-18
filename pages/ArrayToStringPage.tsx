import React, { useState } from 'react';
import { ArrayToStringIcon } from '../components/icons/ArrayToStringIcon';

const ArrayToStringPage: React.FC = () => {
  const [input, setInput] = useState('[\n  "one",\n  "two",\n  "three"\n]');
  const [output, setOutput] = useState('');
  const [delimiter, setDelimiter] = useState(',');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = () => {
    try {
      const array = JSON.parse(input);
      if (!Array.isArray(array)) {
        throw new Error('Input is not a valid JSON array.');
      }
      setOutput(array.join(delimiter));
      setError('');
    } catch (e) {
      if (e instanceof Error) setError(e.message);
      else setError('Invalid JSON array');
    }
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ArrayToStringIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Array to String Converter</h1>
      </div>
      <div className="space-y-4">
        <div>
          <label>Delimiter</label>
          <input value={delimiter} onChange={e => setDelimiter(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg font-mono" placeholder="Input array..." />
          <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="String output..." />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex gap-4 items-center">
          <button onClick={convert} className="px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg">Convert</button>
          <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default ArrayToStringPage;

import React, { useState } from 'react';
import { CustomDelimiterConverterIcon } from '../components/icons/CustomDelimiterConverterIcon';

const CustomDelimiterConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('one,two,three');
  const [output, setOutput] = useState<string>('');
  const [fromDelimiter, setFromDelimiter] = useState<string>(',');
  const [toDelimiter, setToDelimiter] = useState<string>('|');
  const [copied, setCopied] = useState<boolean>(false);

  const handleConvert = () => {
    if (!fromDelimiter) return;
    const items = input.split(fromDelimiter);
    setOutput(items.join(toDelimiter));
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
        <CustomDelimiterConverterIcon className="w-10 h-10 text-cyan-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Custom Delimiter Converter</h1>
      </div>
       <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={fromDelimiter}
              onChange={(e) => setFromDelimiter(e.target.value)}
              placeholder="From Delimiter"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={toDelimiter}
              onChange={(e) => setToDelimiter(e.target.value)}
              placeholder="To Delimiter"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input text..." />
          <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output text..." />
        </div>
        <div className="flex flex-wrap gap-3 items-center">
            <button onClick={handleConvert} className="px-5 py-2.5 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition shadow-md">Convert</button>
            <div className="flex-grow"></div>
            <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default CustomDelimiterConverterPage;

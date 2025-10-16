import React, { useState } from 'react';
import { TextRepeaterIcon } from '../components/icons/TextRepeaterIcon';

const TextRepeaterPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [count, setCount] = useState<number>(5);
  const [separator, setSeparator] = useState<string>(' ');
  const [copied, setCopied] = useState<boolean>(false);

  const handleRepeat = () => {
    if (count <= 0) return;
    const repeated = Array(count).fill(input).join(separator);
    setOutput(repeated);
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
        <TextRepeaterIcon className="w-10 h-10 text-emerald-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text Repeater</h1>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-700">Times to Repeat</label>
          <input type="number" id="count" value={count} onChange={(e) => setCount(parseInt(e.target.value, 10))} className="mt-1 p-2 border rounded-md w-24" />
        </div>
        <div>
          <label htmlFor="separator" className="block text-sm font-medium text-gray-700">Separator</label>
          <input type="text" id="separator" value={separator} onChange={(e) => setSeparator(e.target.value)} className="mt-1 p-2 border rounded-md w-24" />
        </div>
      </div>
       <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Text to Repeat</label>
          <input id="input-text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output</label>
          <textarea id="output-text" value={output} readOnly className="w-full h-48 p-3 border rounded-lg bg-gray-50" />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleRepeat} className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition shadow-md">Repeat</button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default TextRepeaterPage;

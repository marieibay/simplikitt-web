import React, { useState } from 'react';
import { TextToOctalConverterIcon } from '../components/icons/TextToOctalConverterIcon';

const TextToOctalConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleConvert = () => {
    const octal = input
      .split('')
      .map(char => char.charCodeAt(0).toString(8).padStart(3, '0'))
      .join(' ');
    setOutput(octal);
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
        <TextToOctalConverterIcon className="w-10 h-10 text-neutral-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text to Octal Converter</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input Text</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text..."
            className="w-full h-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-neutral-600 focus:border-neutral-600 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Octal Output</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-80 p-3 font-mono border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleConvert} className="px-5 py-2.5 bg-neutral-600 text-white font-bold rounded-lg hover:bg-neutral-700 transition shadow-md">
          Convert
        </button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-black transition shadow" disabled={!output}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TextToOctalConverterPage;
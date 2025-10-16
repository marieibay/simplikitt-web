import React, { useState } from 'react';
import { SentenceCaseConverterIcon } from '../components/icons/SentenceCaseConverterIcon';

const SentenceCaseConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const toSentenceCase = (str: string) => {
    return str.toLowerCase().replace(/(^\w{1}|\.\s*\w{1})/gi, (char) => char.toUpperCase());
  };

  const handleConvert = () => {
    setOutput(toSentenceCase(input));
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
        <SentenceCaseConverterIcon className="w-10 h-10 text-red-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sentence Case Converter</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="enter text here. another sentence can start here."
            className="w-full h-64 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-64 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleConvert} className="px-5 py-2.5 bg-red-400 text-white font-bold rounded-lg hover:bg-red-500 transition shadow-md">
          Convert to Sentence Case
        </button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition shadow" disabled={!output}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default SentenceCaseConverterPage;
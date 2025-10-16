import React, { useState } from 'react';
import { TitleCaseAdvancedIcon } from '../components/icons/TitleCaseAdvancedIcon';

const TitleCaseAdvancedPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const toTitleCase = (str: string) => {
    const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v|vs|via)$/i;
    return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (word, index, title) => {
      if (index > 0 && index + word.length !== title.length &&
        word.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
        (title.charAt(index + word.length) !== '-' || title.charAt(index - 1) === '-') &&
        title.charAt(index - 1).search(/[^\s-]/) < 0) {
        return word.toLowerCase();
      }
      if (word.substr(1).search(/[A-Z]|\../) > -1) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.substr(1);
    });
  };

  const handleConvert = () => {
    setOutput(toTitleCase(input));
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
        <TitleCaseAdvancedIcon className="w-10 h-10 text-red-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Advanced Title Case</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="enter a title here..."
            className="w-full h-64 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-600 focus:border-red-600 transition"
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
        <button onClick={handleConvert} className="px-5 py-2.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition shadow-md">
          Convert to Title Case
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

export default TitleCaseAdvancedPage;
import React, { useState } from 'react';
import { AddPrefixSuffixIcon } from '../components/icons/AddPrefixSuffixIcon';

const AddPrefixSuffixPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [suffix, setSuffix] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleApply = () => {
    const lines = input.split('\n');
    const modifiedLines = lines.map(line => `${prefix}${line}${suffix}`);
    setOutput(modifiedLines.join('\n'));
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
        <AddPrefixSuffixIcon className="w-10 h-10 text-teal-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Add Prefix/Suffix to Lines</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="Prefix to add"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder="Suffix to add"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input List</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-64 p-3 border border-gray-300 rounded-lg"
          />
        </div>
         <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output List</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-64 p-3 border border-gray-300 rounded-lg bg-gray-50"
          />
        </div>
        <div className="flex flex-wrap gap-3 items-center">
            <button onClick={handleApply} className="px-5 py-2.5 bg-teal-400 text-white font-bold rounded-lg hover:bg-teal-500 transition shadow-md">
            Apply
            </button>
            <div className="flex-grow"></div>
            <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition shadow">
                {copied ? 'Copied!' : 'Copy'}
            </button>
             <button onClick={() => { setInput(''); setOutput(''); setPrefix(''); setSuffix(''); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                Clear
            </button>
        </div>
      </div>
    </div>
  );
};

export default AddPrefixSuffixPage;
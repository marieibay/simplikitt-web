import React, { useState } from 'react';
import { FontStackGeneratorIcon } from '../components/icons/FontStackGeneratorIcon';

const fontStacks = {
  'sans-serif': 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
  'serif': 'font-family: Georgia, Cambria, "Times New Roman", Times, serif;',
  'monospace': 'font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
};

const FontStackGeneratorPage: React.FC = () => {
  const [stack, setStack] = useState<'sans-serif' | 'serif' | 'monospace'>('sans-serif');
  const [copied, setCopied] = useState(false);

  const code = fontStacks[stack];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FontStackGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Font Stack Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          {(Object.keys(fontStacks) as ('sans-serif' | 'serif' | 'monospace')[]).map(s => (
            <button key={s} onClick={() => setStack(s)} className={`flex-1 py-2 rounded-md font-semibold ${stack === s ? 'bg-indigo-500 text-white' : 'hover:bg-gray-200'}`}>
              {s}
            </button>
          ))}
        </div>
        <div className="relative">
          <pre className="p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">{code}</pre>
          <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 rounded text-white">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default FontStackGeneratorPage;

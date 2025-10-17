import React, { useState } from 'react';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';

const CssPrettifierPage: React.FC = () => {
  const [input, setInput] = useState('.class{color:red;font-size:16px;}');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const prettify = () => {
    // Basic CSS prettifier
    let indentLevel = 0;
    let result = '';
    input.split('').forEach(char => {
      if (char === '{') {
        result += ' {\n';
        indentLevel++;
        result += '  '.repeat(indentLevel);
      } else if (char === '}') {
        indentLevel--;
        result += '\n' + '  '.repeat(indentLevel) + '}\n';
        if (indentLevel > 0) {
            result += '  '.repeat(indentLevel);
        }
      } else if (char === ';') {
        result += ';\n' + '  '.repeat(indentLevel);
      } else {
        result += char;
      }
    });
    setOutput(result.trim());
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
        <CssPrettifierIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Prettifier / Beautifier</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
       <div className="mt-6 flex gap-4 items-center">
        <button onClick={prettify} className="px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg">Prettify</button>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default CssPrettifierPage;

import React, { useState } from 'react';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';

const CssPrettifierPage: React.FC = () => {
  const [input, setInput] = useState('.class { color: red; background: blue; }');
  const [output, setOutput] = useState('');

  const prettify = () => {
    let formatted = input
      .replace(/;/g, ';\n')
      .replace(/{/g, ' {\n')
      .replace(/}/g, '\n}\n');
    
    let indentLevel = 0;
    const lines = formatted.split('\n');
    let result = '';
    lines.forEach(line => {
      line = line.trim();
      if (!line) return;
      if (line.includes('}')) indentLevel--;
      result += '  '.repeat(indentLevel) + line + '\n';
      if (line.includes('{')) indentLevel++;
    });
    setOutput(result.trim());
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssPrettifierIcon className="w-10 h-10 text-blue-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Prettifier</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={prettify} className="mt-6 px-5 py-2.5 bg-blue-400 text-white font-bold rounded-lg">Prettify CSS</button>
    </div>
  );
};

export default CssPrettifierPage;

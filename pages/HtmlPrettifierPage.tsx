import React, { useState } from 'react';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';

const HtmlPrettifierPage: React.FC = () => {
  const [input, setInput] = useState('<div><p>Hello</p></div>');
  const [output, setOutput] = useState('');

  const prettify = () => {
    let indentLevel = 0;
    const indentSize = 2;
    let result = '';
    const lines = input.replace(/>\s*</g, '>\n<').split('\n');
    lines.forEach(line => {
      line = line.trim();
      if (!line) return;
      if (line.startsWith('</')) {
        indentLevel--;
      }
      result += ' '.repeat(indentLevel * indentSize) + line + '\n';
      if (line.startsWith('<') && !line.startsWith('</') && !line.endsWith('/>')) {
        indentLevel++;
      }
    });
    setOutput(result.trim());
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HtmlPrettifierIcon className="w-10 h-10 text-orange-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML Prettifier</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={prettify} className="mt-6 px-5 py-2.5 bg-orange-700 text-white font-bold rounded-lg">Prettify HTML</button>
    </div>
  );
};

export default HtmlPrettifierPage;

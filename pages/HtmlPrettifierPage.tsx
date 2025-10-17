import React, { useState } from 'react';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';

const HtmlPrettifierPage: React.FC = () => {
  const [input, setInput] = useState('<html><body><h1>Hello</h1></body></html>');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const prettify = () => {
    // This is a basic prettifier, a real one would be more complex
    let indent = '';
    const tab = '  ';
    let result = '';
    input.replace(/>\s*</g,'>\n<').split('\n').forEach(node => {
        let trimmedNode = node.trim();
        if (trimmedNode.match( /^\/\w/ )) {
            indent = indent.substring(tab.length);
        }
        result += `${indent}<${trimmedNode.replace('<','').replace('>','')}>\n`;
        if (trimmedNode.match( /^<?\w[^>]*[^\/]$/ ) && !trimmedNode.startsWith('!')) {
            indent += tab;
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
        <HtmlPrettifierIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML Prettifier / Beautifier</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <div className="mt-6 flex gap-4 items-center">
        <button onClick={prettify} className="px-5 py-2.5 bg-orange-500 text-white font-bold rounded-lg">Prettify</button>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default HtmlPrettifierPage;

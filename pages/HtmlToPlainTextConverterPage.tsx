import React, { useState } from 'react';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';

const HtmlToPlainTextConverterPage: React.FC = () => {
  const [input, setInput] = useState('<p>Hello</p>\n<b>World</b>');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = () => {
    const plain = input.replace(/<[^>]+>/g, '');
    setOutput(plain);
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
        <HtmlToPlainTextConverterIcon className="w-10 h-10 text-emerald-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML to Plain Text</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" placeholder="HTML input..."/>
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" placeholder="Plain text output..."/>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={convert} className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-lg">Convert</button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default HtmlToPlainTextConverterPage;

import React, { useState } from 'react';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';

const PlainTextToHtmlConverterPage: React.FC = () => {
  const [input, setInput] = useState('Hello\nThis is a new line.');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = () => {
    const html = input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    setOutput(html.replace(/\n/g, '<br />\n'));
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
        <PlainTextToHtmlConverterIcon className="w-10 h-10 text-emerald-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Plain Text to HTML</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" placeholder="Plain text..."/>
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" placeholder="HTML output..."/>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={convert} className="px-5 py-2.5 bg-emerald-500 text-white font-bold rounded-lg">Convert</button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default PlainTextToHtmlConverterPage;

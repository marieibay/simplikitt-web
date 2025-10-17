import React, { useState } from 'react';
import { JsMinifierIcon } from '../components/icons/JsMinifierIcon';

const JsMinifierPage: React.FC = () => {
  const [input, setInput] = useState('function hello(name) {\n  console.log("Hello, " + name);\n}');
  const [output, setOutput] = useState('');

  const minify = () => {
    // A very basic minifier: removes comments and newlines
    const noComments = input.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|\s+\/\/.*$/gm, '');
    const minified = noComments.replace(/\s+/g, ' ').trim();
    setOutput(minified);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsMinifierIcon className="w-10 h-10 text-yellow-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JS Minifier</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={minify} className="mt-6 px-5 py-2.5 bg-yellow-600 text-white font-bold rounded-lg">Minify JS</button>
    </div>
  );
};

export default JsMinifierPage;

import React, { useState } from 'react';
import { HtmlTagStripperIcon } from '../components/icons/HtmlTagStripperIcon';

const HtmlTagStripperPage: React.FC = () => {
  const [input, setInput] = useState('<p>Hello <b>World</b>!</p>');
  const [output, setOutput] = useState('');

  const stripTags = () => {
    setOutput(input.replace(/<[^>]*>/g, ''));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HtmlTagStripperIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML Tag Stripper</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={stripTags} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Strip Tags</button>
    </div>
  );
};

export default HtmlTagStripperPage;

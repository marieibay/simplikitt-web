import React, { useState } from 'react';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';

const JsCommentStripperPage: React.FC = () => {
  const [input, setInput] = useState('// Single line comment\nconst x = 1; /* Multi-line */');
  const [output, setOutput] = useState('');

  const removeComments = () => {
    // Regex to remove single-line and multi-line comments
    const noComments = input.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|\s+\/\/.*$/gm, '');
    setOutput(noComments);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsCommentStripperIcon className="w-10 h-10 text-yellow-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JS Comment Stripper</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={removeComments} className="mt-6 px-5 py-2.5 bg-yellow-500 text-black font-bold rounded-lg">Strip Comments</button>
    </div>
  );
};

export default JsCommentStripperPage;

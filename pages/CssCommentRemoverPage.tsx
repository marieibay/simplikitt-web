import React, { useState } from 'react';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';

const CssCommentRemoverPage: React.FC = () => {
  const [input, setInput] = useState('/* This is a comment */\n.class { color: red; }');
  const [output, setOutput] = useState('');

  const removeComments = () => {
    const commentRegex = /\/\*[\s\S]*?\*\//g;
    setOutput(input.replace(commentRegex, ''));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssCommentRemoverIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Comment Remover</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={removeComments} className="mt-6 px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg">Remove Comments</button>
    </div>
  );
};

export default CssCommentRemoverPage;

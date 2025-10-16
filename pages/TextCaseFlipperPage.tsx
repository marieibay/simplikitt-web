import React, { useState, useEffect } from 'react';
import { TextCaseFlipperIcon } from '../components/icons/TextCaseFlipperIcon';

const TextCaseFlipperPage: React.FC = () => {
  const [input, setInput] = useState('fLiPpEd CaSe');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const flipped = input.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
    setOutput(flipped);
  }, [input]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TextCaseFlipperIcon className="w-10 h-10 text-blue-300" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text Case Flipper</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input..."/>
        <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output..."/>
      </div>
    </div>
  );
};

export default TextCaseFlipperPage;

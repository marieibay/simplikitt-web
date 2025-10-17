import React, { useState } from 'react';
import { CssPrefixerIcon } from '../components/icons/CssPrefixerIcon';

const CssPrefixerPage: React.FC = () => {
  const [input, setInput] = useState('user-select: none;\ntransition: all 0.5s;');
  const [output, setOutput] = useState('');

  const prefix = () => {
    let result = input;
    const properties = ['user-select', 'transition', 'transform', 'animation', 'border-radius', 'box-shadow', 'filter', 'flexbox', 'writing-mode'];
    properties.forEach(prop => {
      const regex = new RegExp(`([\\s{;]|^)(${prop}:)`, 'gm');
      result = result.replace(regex, `$1-webkit-$2$1$2`);
    });
    setOutput(result);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssPrefixerIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Prefixer</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" placeholder="Enter CSS here..."/>
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" placeholder="Prefixed CSS will appear here..."/>
      </div>
      <button onClick={prefix} className="mt-6 px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Add Prefixes</button>
    </div>
  );
};

export default CssPrefixerPage;

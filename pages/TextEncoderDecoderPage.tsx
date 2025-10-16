import React, { useState } from 'react';
import { TextEncoderDecoderIcon } from '../components/icons/TextEncoderDecoderIcon';

const TextEncoderDecoderPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [keyA, setKeyA] = useState('abcdefghijklmnopqrstuvwxyz');
  const [keyB, setKeyB] = useState('zyxwvu_srqponmlkjihgfedcba');

  const transform = (text: string, from: string, to: string) => {
    let result = '';
    for (const char of text) {
        const index = from.indexOf(char);
        result += index > -1 ? to[index] || char : char;
    }
    return result;
  };
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TextEncoderDecoderIcon className="w-10 h-10 text-rose-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Custom Text Encoder/Decoder</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label>From Key</label><input value={keyA} onChange={e => setKeyA(e.target.value)} className="w-full p-2 border rounded font-mono" />
          <label>To Key</label><input value={keyB} onChange={e => setKeyB(e.target.value)} className="w-full p-2 border rounded font-mono" />
        </div>
        <div>
          <button onClick={() => setOutput(transform(input, keyA, keyB))} className="px-4 py-2 bg-rose-500 text-white rounded">Encode</button>
          <button onClick={() => setOutput(transform(input, keyB, keyA))} className="ml-2 px-4 py-2 bg-rose-500 text-white rounded">Decode</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input text..."/>
        <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output text..." />
      </div>
    </div>
  );
};

export default TextEncoderDecoderPage;

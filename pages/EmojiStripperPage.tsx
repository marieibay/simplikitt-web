import React, { useState } from 'react';
import { EmojiStripperIcon } from '../components/icons/EmojiStripperIcon';

const EmojiStripperPage: React.FC = () => {
  const [input, setInput] = useState('Hello 👋 World 🌎!');
  const [output, setOutput] = useState('');

  const stripEmojis = () => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
    setOutput(input.replace(emojiRegex, '').replace(/\s+/g, ' ').trim());
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <EmojiStripperIcon className="w-10 h-10 text-yellow-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Emoji Stripper</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" />
        <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" />
      </div>
      <button onClick={stripEmojis} className="mt-6 px-5 py-2.5 bg-yellow-500 text-white font-bold rounded-lg">Strip Emojis</button>
    </div>
  );
};

export default EmojiStripperPage;

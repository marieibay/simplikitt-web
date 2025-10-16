import React, { useState } from 'react';
import { TextScramblerIcon } from '../components/icons/TextScramblerIcon';

const TextScramblerPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const scrambleWord = (word: string) => {
    if (word.length <= 3) return word;
    const middle = word.substring(1, word.length - 1).split('');
    for (let i = middle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [middle[i], middle[j]] = [middle[j], middle[i]];
    }
    return word[0] + middle.join('') + word[word.length - 1];
  };

  const handleScramble = () => {
    const scrambledText = input.replace(/\w+/g, scrambleWord);
    setOutput(scrambledText);
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
        <TextScramblerIcon className="w-10 h-10 text-amber-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text Scrambler</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input</label>
          <textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to scramble..."
            className="w-full h-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Output</label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="w-full h-80 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleScramble} className="px-5 py-2.5 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition shadow-md">
          Scramble
        </button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition shadow" disabled={!output}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TextScramblerPage;

import React, { useState } from 'react';
import { LoremIpsumGeneratorIcon } from '../components/icons/LoremIpsumGeneratorIcon';

const loremWords = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

const LoremIpsumGeneratorPage: React.FC = () => {
  const [count, setCount] = useState<number>(5);
  const [type, setType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generateLorem = () => {
    let result = '';
    if (type === 'words') {
        result = Array.from({ length: count }, () => loremWords[Math.floor(Math.random() * loremWords.length)]).join(' ');
    } else if (type === 'sentences') {
        result = Array.from({ length: count }, () => {
            const sentenceLength = Math.floor(Math.random() * 10) + 5;
            const sentence = Array.from({ length: sentenceLength }, () => loremWords[Math.floor(Math.random() * loremWords.length)]).join(' ');
            return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
        }).join(' ');
    } else { // paragraphs
         result = Array.from({ length: count }, () => {
            const numSentences = Math.floor(Math.random() * 4) + 3;
             return Array.from({ length: numSentences }, () => {
                const sentenceLength = Math.floor(Math.random() * 10) + 5;
                const sentence = Array.from({ length: sentenceLength }, () => loremWords[Math.floor(Math.random() * loremWords.length)]).join(' ');
                return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
            }).join(' ');
        }).join('\n\n');
    }
    setOutput(result);
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
        <LoremIpsumGeneratorIcon className="w-10 h-10 text-gray-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Lorem Ipsum Generator</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10))}
            className="p-2 border rounded-md w-24"
            min="1"
            max="100"
          />
          <select value={type} onChange={e => setType(e.target.value as any)} className="p-2 border rounded-md">
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
           <button onClick={generateLorem} className="px-5 py-2.5 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition shadow-md">
            Generate
            </button>
        </div>
        <div className="relative">
             <textarea
                value={output}
                readOnly
                placeholder="Generated text will appear here..."
                className="w-full h-80 p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
                rows={10}
            />
             <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md disabled:opacity-50" disabled={!output}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoremIpsumGeneratorPage;

import React, { useState } from 'react';
import { JsonArrayShufflerIcon } from '../components/icons/JsonArrayShufflerIcon';

const JsonArrayShufflerPage: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('[\n  "Apple",\n  "Banana",\n  "Orange",\n  "Grape"\n]');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const shuffleArray = () => {
    try {
      const array = JSON.parse(jsonInput);
      if (!Array.isArray(array)) {
        throw new Error('Input is not a valid JSON array.');
      }
      
      // Fisher-Yates shuffle algorithm
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      
      setJsonOutput(JSON.stringify(array, null, 2));
      setError('');
    } catch (e) {
      if (e instanceof Error) setError(e.message);
      else setError('Invalid JSON array');
    }
  };

  const copyToClipboard = () => {
    if (jsonOutput) {
      navigator.clipboard.writeText(jsonOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsonArrayShufflerIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON Array Shuffler</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 mb-1">JSON Array Input</label>
          <textarea
            id="json-input"
            value={jsonInput}
            onChange={e => setJsonInput(e.target.value)}
            className="w-full h-80 p-3 border rounded-lg font-mono"
            placeholder='["item1", "item2", "item3"]'
          />
        </div>
        <div>
          <label htmlFor="json-output" className="block text-sm font-medium text-gray-700 mb-1">Shuffled Array Output</label>
           <div className="relative">
            <textarea
              id="json-output"
              value={jsonOutput}
              readOnly
              className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono"
            />
             <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md disabled:opacity-50" disabled={!jsonOutput}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
      <button onClick={shuffleArray} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition shadow-md">Shuffle Array</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonArrayShufflerPage;

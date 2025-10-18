import React, { useState } from 'react';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';

const BulkTextReplacementPage: React.FC = () => {
  const [text, setText] = useState<string>('The quick brown fox jumps over the lazy dog.');
  const [replacements, setReplacements] = useState<string>('fox,cat\ndog,wolf');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleReplace = () => {
    try {
      setError('');
      let newText = text;
      const lines = replacements.split('\n');
      for (const line of lines) {
        const parts = line.split(',');
        if (parts.length >= 2) {
          const find = parts[0];
          const replace = parts.slice(1).join(',');
          if (find) {
            newText = newText.replace(new RegExp(find, 'g'), replace);
          }
        }
      }
      setOutput(newText);
    } catch (e) {
      setError('An error occurred during replacement.');
    }
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
        <BulkTextReplacementIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Bulk Text Replacement</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Replacements (find,replace per line)</label>
            <textarea value={replacements} onChange={e => setReplacements(e.target.value)} className="w-full h-48 p-3 border rounded-lg font-mono" />
          </div>
          <div>
            <label className="block font-medium">Original Text</label>
            <textarea value={text} onChange={e => setText(e.target.value)} className="w-full h-64 p-3 border rounded-lg" />
          </div>
        </div>
        <div>
          <label className="block font-medium">Output</label>
          <textarea value={output} readOnly className="w-full h-full p-3 border rounded-lg bg-gray-50" />
        </div>
      </div>
      <div className="mt-6 flex gap-4 items-center">
        <button onClick={handleReplace} className="px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg">Replace All</button>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default BulkTextReplacementPage;

import React, { useState } from 'react';
import { JsonMinifierIcon } from '../components/icons/JsonMinifierIcon';

const JsonMinifierPage: React.FC = () => {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleMinify = () => {
    if (!inputJson.trim()) {
      setError('Input is empty.');
      setOutputJson('');
      return;
    }
    try {
      const parsed = JSON.parse(inputJson);
      const minified = JSON.stringify(parsed);
      setOutputJson(minified);
      setError(null);
    } catch (err) {
      setError('Invalid JSON input.');
      setOutputJson('');
    }
  };

  const copyToClipboard = () => {
    if (outputJson) {
      navigator.clipboard.writeText(outputJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <JsonMinifierIcon className="w-10 h-10 text-blue-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON Minifier</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <textarea
          value={inputJson}
          onChange={(e) => setInputJson(e.target.value)}
          placeholder="Paste your formatted JSON here..."
          className="w-full h-96 p-3 font-mono text-sm border rounded-lg shadow-sm"
        />
        <div className="relative">
          <textarea
            value={outputJson}
            readOnly
            placeholder="Minified JSON will appear here..."
            className="w-full h-96 p-3 font-mono text-sm border rounded-lg bg-gray-50 shadow-sm"
          />
          <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 rounded-md" disabled={!outputJson}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      {error && <div className="mt-4 text-red-600 bg-red-100 p-3 rounded-lg">{error}</div>}
      
      <div className="mt-6 flex gap-4">
        <button onClick={handleMinify} className="px-6 py-2 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition shadow-md">
          Minify JSON
        </button>
      </div>
    </div>
  );
};

export default JsonMinifierPage;
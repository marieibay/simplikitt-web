
import React, { useState } from 'react';
import { AlignLeft } from 'lucide-react';

const JsonFormatterPage: React.FC = () => {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    if (!inputJson.trim()) {
      setError('Input is empty.');
      setOutputJson('');
      return;
    }
    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutputJson(formatted);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Invalid JSON: ${err.message}`);
      } else {
        setError('An unknown error occurred while parsing JSON.');
      }
      setOutputJson('');
    }
  };

  const handleClear = () => {
    setInputJson('');
    setOutputJson('');
    setError(null);
    setCopied(false);
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
        <AlignLeft className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON Formatter</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <textarea
          value={inputJson}
          onChange={(e) => setInputJson(e.target.value)}
          placeholder="Paste your messy JSON here..."
          className={`w-full h-96 p-3 font-mono text-sm border rounded-lg shadow-sm transition focus:ring-2 ${error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300 focus:border-blue-500'}`}
        />
        <div className="relative">
          <textarea
            value={outputJson}
            readOnly
            placeholder="Formatted JSON will appear here..."
            className="w-full h-96 p-3 font-mono text-sm border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
          />
          <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md disabled:opacity-50" disabled={!outputJson}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      {error && <div className="mt-4 text-red-600 bg-red-100 p-3 rounded-lg">{error}</div>}
      
      <div className="mt-6 flex gap-4">
        <button onClick={handleFormat} className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition shadow-md">
          Format JSON
        </button>
        <button onClick={handleClear} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default JsonFormatterPage;

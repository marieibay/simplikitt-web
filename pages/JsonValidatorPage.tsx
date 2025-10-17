import React, { useState } from 'react';
import { JsonValidatorIcon } from '../components/icons/JsonValidatorIcon';

const JsonValidatorPage: React.FC = () => {
  const [inputJson, setInputJson] = useState('');
  const [result, setResult] = useState<{ status: 'valid' | 'invalid' | 'empty', message: string } | null>(null);

  const handleValidate = () => {
    if (!inputJson.trim()) {
      setResult({ status: 'empty', message: 'Input is empty.' });
      return;
    }
    try {
      JSON.parse(inputJson);
      setResult({ status: 'valid', message: 'JSON is valid!' });
    } catch (err) {
      if (err instanceof Error) {
        setResult({ status: 'invalid', message: `Invalid JSON: ${err.message}` });
      } else {
        setResult({ status: 'invalid', message: 'An unknown error occurred.' });
      }
    }
  };
  
  const resultClasses = {
    valid: 'bg-green-100 text-green-800',
    invalid: 'bg-red-100 text-red-800',
    empty: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <JsonValidatorIcon className="w-10 h-10 text-blue-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON Validator</h1>
      </div>
      
      <textarea
        value={inputJson}
        onChange={(e) => setInputJson(e.target.value)}
        placeholder="Paste your JSON here to validate..."
        className="w-full h-96 p-3 font-mono text-sm border rounded-lg shadow-sm transition focus:ring-2 border-gray-300 focus:ring-blue-300 focus:border-blue-500"
      />
      
      {result && (
        <div className={`mt-4 p-4 rounded-lg font-semibold ${resultClasses[result.status]}`}>
          {result.message}
        </div>
      )}
      
      <div className="mt-6 flex gap-4">
        <button onClick={handleValidate} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md">
          Validate JSON
        </button>
        <button onClick={() => { setInputJson(''); setResult(null); }} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default JsonValidatorPage;
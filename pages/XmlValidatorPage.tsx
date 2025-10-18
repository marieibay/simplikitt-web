import React, { useState } from 'react';
import { XmlValidatorIcon } from '../components/icons/XmlValidatorIcon';

const XmlValidatorPage: React.FC = () => {
  const [xmlInput, setXmlInput] = useState('<root><item>test</item></root>');
  const [result, setResult] = useState<{ status: 'valid' | 'invalid' | 'empty', message: string } | null>(null);

  const handleValidate = () => {
    if (!xmlInput.trim()) {
      setResult({ status: 'empty', message: 'Input is empty.' });
      return;
    }
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, "application/xml");
      if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        throw new Error('Parsing error found.');
      }
      setResult({ status: 'valid', message: 'XML is valid!' });
    } catch (e) {
      if (e instanceof Error) {
        setResult({ status: 'invalid', message: `Invalid XML: ${e.message}` });
      } else {
        setResult({ status: 'invalid', message: 'An unknown error occurred while parsing XML.' });
      }
    }
  };

  const handleClear = () => {
    setXmlInput('');
    setResult(null);
  };
  
  const resultClasses = {
    valid: 'bg-green-100 text-green-800',
    invalid: 'bg-red-100 text-red-800',
    empty: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <XmlValidatorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">XML Validator</h1>
      </div>
      
      <textarea
        value={xmlInput}
        onChange={(e) => setXmlInput(e.target.value)}
        placeholder="Paste your XML here to validate..."
        className={`w-full h-96 p-3 font-mono text-sm border rounded-lg shadow-sm transition focus:ring-2 ${result?.status === 'invalid' ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-indigo-300 focus:border-indigo-500'}`}
      />
      
      {result && <div className={`mt-4 p-4 rounded-lg font-semibold ${resultClasses[result.status]}`}>{result.message}</div>}
      
      <div className="mt-6 flex gap-4">
        <button onClick={handleValidate} className="px-6 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition shadow-md">
          Validate XML
        </button>
        <button onClick={handleClear} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default XmlValidatorPage;

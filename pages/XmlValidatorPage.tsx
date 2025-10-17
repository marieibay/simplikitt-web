import React, { useState } from 'react';
import { XmlValidatorIcon } from '../components/icons/XmlValidatorIcon';

const XmlValidatorPage: React.FC = () => {
  const [xmlInput, setXmlInput] = useState('<root>\n  <item>Hello</item>\n</root>');
  const [result, setResult] = useState<{ status: 'valid' | 'invalid' | 'empty', message: string } | null>(null);

  const handleValidate = () => {
    if (!xmlInput.trim()) {
      setResult({ status: 'empty', message: 'Input is empty.' });
      return;
    }
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, "application/xml");
      const parseError = xmlDoc.getElementsByTagName("parsererror");

      if (parseError.length > 0) {
        throw new Error(parseError[0].textContent || "Invalid XML structure.");
      }
      setResult({ status: 'valid', message: 'XML is well-formed!' });
    } catch (e) {
        if (e instanceof Error) {
            setResult({ status: 'invalid', message: `Invalid XML: ${e.message}` });
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
        <XmlValidatorIcon className="w-10 h-10 text-indigo-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">XML Validator</h1>
      </div>
      <textarea
        value={xmlInput}
        onChange={(e) => setXmlInput(e.target.value)}
        placeholder="Paste your XML here..."
        className="w-full h-96 p-3 font-mono text-sm border rounded-lg shadow-sm"
      />
      {result && <div className={`mt-4 p-4 rounded-lg font-semibold ${resultClasses[result.status]}`}>{result.message}</div>}
      <div className="mt-6 flex gap-4">
        <button onClick={handleValidate} className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg">Validate XML</button>
        <button onClick={() => { setXmlInput(''); setResult(null); }} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg">Clear</button>
      </div>
    </div>
  );
};

export default XmlValidatorPage;

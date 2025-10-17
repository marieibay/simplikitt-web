import React, { useState } from 'react';
import { JsonToXmlConverterIcon } from '../components/icons/JsonToXmlConverterIcon';

const JsonToXmlConverterPage: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "name": "John",\n  "age": 30\n}');
  const [xmlOutput, setXmlOutput] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      const obj = JSON.parse(jsonInput);
      const toXml = (obj: any, root = 'root'): string => {
        let xml = '';
        for (const key in obj) {
          if (Array.isArray(obj[key])) {
            obj[key].forEach((item: any) => {
              xml += `<${key}>${toXml(item)}</${key}>`;
            });
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            xml += `<${key}>${toXml(obj[key])}</${key}>`;
          } else {
            xml += `<${key}>${obj[key]}</${key}>`;
          }
        }
        return xml;
      };
      setXmlOutput(`<${Object.keys(obj)[0] || 'root'}>\n  ${toXml(obj)}\n</${Object.keys(obj)[0] || 'root'}>`);
      setError('');
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsonToXmlConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON to XML Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={jsonInput} onChange={e => setJsonInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={xmlOutput} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={convert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonToXmlConverterPage;


import React, { useState } from 'react';
import { JsonToXmlConverterIcon } from '../components/icons/JsonToXmlConverterIcon';

const JsonToXmlConverterPage: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "user": {\n    "name": "John Doe",\n    "age": 30,\n    "isAdmin": false,\n    "courses": [\n      "Math",\n      "Science"\n    ]\n  }\n}');
  const [xmlOutput, setXmlOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const convertJsonToXml = () => {
    try {
      const json = JSON.parse(jsonInput);
      let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
      
      const toXml = (value: any, name: string, indent: string): string => {
        let xmlString = '';
        if (Array.isArray(value)) {
          value.forEach(item => {
            xmlString += toXml(item, name, indent);
          });
        } else if (typeof value === 'object' && value !== null) {
          let hasChild = false;
          let children = '';
          for (const key in value) {
             if (value.hasOwnProperty(key)) {
                hasChild = true;
                children += toXml(value[key], key, indent + '  ');
             }
          }
          if (hasChild) {
            xmlString += `${indent}<${name}>\n${children}${indent}</${name}>\n`;
          } else {
            xmlString += `${indent}<${name}/>\n`;
          }
        } else {
            const escapedValue = String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
            xmlString += `${indent}<${name}>${escapedValue}</${name}>\n`;
        }
        return xmlString;
      };

      for (const key in json) {
          if (json.hasOwnProperty(key)) {
            xml += toXml(json[key], key, '');
          }
      }
      
      setXmlOutput(xml.trim());
      setError('');
    } catch (e) {
      setError('Invalid JSON input. Please check the format.');
      setXmlOutput('');
    }
  };

  const copyToClipboard = () => {
    if (xmlOutput) {
      navigator.clipboard.writeText(xmlOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsonToXmlConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON to XML Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 mb-1">JSON Input</label>
          <textarea 
            id="json-input"
            value={jsonInput} 
            onChange={e => setJsonInput(e.target.value)} 
            className="w-full h-96 p-3 border rounded-lg font-mono"
            placeholder='{ "root": { "item": "value" } }'
          />
        </div>
        <div>
          <label htmlFor="xml-output" className="block text-sm font-medium text-gray-700 mb-1">XML Output</label>
          <div className="relative">
            <textarea 
              id="xml-output"
              value={xmlOutput} 
              readOnly 
              className="w-full h-96 p-3 border rounded-lg bg-gray-50 font-mono" 
              placeholder="<root>\n  <item>value</item>\n</root>"
            />
            <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md disabled:opacity-50" disabled={!xmlOutput}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
      <button onClick={convertJsonToXml} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition shadow-md">Convert</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonToXmlConverterPage;

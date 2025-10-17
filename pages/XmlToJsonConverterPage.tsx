import React, { useState } from 'react';
import { XmlToJsonConverterIcon } from '../components/icons/XmlToJsonConverterIcon';

const XmlToJsonConverterPage: React.FC = () => {
  const [xmlInput, setXmlInput] = useState('<root><name>John</name><age>30</age></root>');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, "text/xml");
      if (xmlDoc.getElementsByTagName("parsererror").length) {
        throw new Error("Invalid XML");
      }
      const xmlToJson = (xml: any): any => {
        let obj: any = {};
        if (xml.nodeType === 1) { // element
          if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (let j = 0; j < xml.attributes.length; j++) {
              const attribute = xml.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) { // text
          obj = xml.nodeValue;
        }
        if (xml.hasChildNodes()) {
          for(let i = 0; i < xml.childNodes.length; i++) {
            const item = xml.childNodes.item(i);
            const nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
              obj[nodeName] = xmlToJson(item);
            } else {
              if (typeof(obj[nodeName].push) == "undefined") {
                const old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(xmlToJson(item));
            }
          }
        }
        return obj;
      };
      const jsonObj = xmlToJson(xmlDoc);
      setJsonOutput(JSON.stringify(jsonObj, null, 2));
      setError('');
    } catch (e) {
      if (e instanceof Error) setError(e.message);
      else setError("Invalid XML");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <XmlToJsonConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">XML to JSON Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={xmlInput} onChange={e => setXmlInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={jsonOutput} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
      <button onClick={convert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default XmlToJsonConverterPage;

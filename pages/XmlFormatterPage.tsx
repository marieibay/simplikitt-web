import React, { useState } from 'react';
import { XmlFormatterIcon } from '../components/icons/XmlFormatterIcon';

const XmlFormatterPage: React.FC = () => {
  const [input, setInput] = useState<string>('<root><item>Hello</item><item>World</item></root>');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const formatXml = (xml: string) => {
    const tab = '  ';
    let formatted = '';
    let indent= '';
    
    xml.split(/>\s*</).forEach(function(node) {
        if (node.match( /^\/\w/ )) indent = indent.substring(tab.length);
        formatted += indent + '<' + node + '>\r\n';
        if (node.match( /^<?\w[^>]*[^\/]$/ )) indent += tab;
    });
    return formatted.substring(1, formatted.length-3);
  }

  const handleFormat = () => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "application/xml");
      if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        throw new Error('Invalid XML');
      }

      const serializer = new XMLSerializer();
      const xmlString = serializer.serializeToString(xmlDoc);

      setOutput(formatXml(xmlString));
      setError('');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Could not format XML.');
      }
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
        <XmlFormatterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">XML Formatter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <div className="relative">
            <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
            <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 rounded-md" disabled={!output}>
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
      </div>
      <button onClick={handleFormat} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Format XML</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default XmlFormatterPage;

import React, { useState } from 'react';
import { YamlToJsonConverterIcon } from '../components/icons/YamlToJsonConverterIcon';

declare const jsyaml: any;

const YamlToJsonConverterPage: React.FC = () => {
  const [yamlInput, setYamlInput] = useState('name: John Doe\nage: 30\ncity: New York');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      if (typeof jsyaml === 'undefined') {
        throw new Error('YAML library not loaded.');
      }
      const doc = jsyaml.load(yamlInput);
      setJsonOutput(JSON.stringify(doc, null, 2));
      setError('');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
      setJsonOutput('');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <YamlToJsonConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">YAML to JSON Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          value={yamlInput}
          onChange={e => setYamlInput(e.target.value)}
          className="w-full h-80 p-3 border rounded-lg font-mono"
          placeholder="Enter YAML here..."
        />
        <textarea
          value={jsonOutput}
          readOnly
          className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono"
          placeholder="JSON output will appear here..."
        />
      </div>
      <button onClick={handleConvert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default YamlToJsonConverterPage;
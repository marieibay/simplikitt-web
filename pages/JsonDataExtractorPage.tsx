import React, { useState, useMemo } from 'react';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';

const JsonDataExtractorPage: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('{\n  "data": {\n    "items": [\n      { "id": 1, "name": "Apple" },\n      { "id": 2, "name": "Banana" }\n    ]\n  }\n}');
  const [path, setPath] = useState('data.items[1].name');
  
  const extractedData = useMemo(() => {
    try {
      const obj = JSON.parse(jsonInput);
      let current = obj;
      const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
      for (const part of parts) {
        if (current === null || current === undefined) return 'Not found';
        current = current[part];
      }
      return JSON.stringify(current, null, 2);
    } catch (e) {
      if (e instanceof Error && e.message.includes('JSON')) {
        return 'Invalid JSON input.';
      }
      return 'Invalid path or data.';
    }
  }, [jsonInput, path]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsonDataExtractorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON Data Extractor</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium">JSON Input</label>
          <textarea 
            value={jsonInput} 
            onChange={e => setJsonInput(e.target.value)} 
            className="w-full h-96 p-3 border rounded-lg font-mono"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Extraction Path (e.g., key.array[0].value)</label>
            <input 
              value={path} 
              onChange={e => setPath(e.target.value)} 
              className="w-full p-2 border rounded font-mono"
            />
          </div>
          <div>
            <label className="block font-medium">Extracted Data</label>
            <pre className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono overflow-auto">
              {extractedData}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonDataExtractorPage;

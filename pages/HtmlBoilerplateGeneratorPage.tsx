import React, { useState, useMemo } from 'react';
import { HtmlBoilerplateGeneratorIcon } from '../components/icons/HtmlBoilerplateGeneratorIcon';

const HtmlBoilerplateGeneratorPage: React.FC = () => {
  const [title, setTitle] = useState('My Awesome Page');
  const [copied, setCopied] = useState(false);

  const boilerplate = useMemo(() => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`;
  }, [title]);

  const handleCopy = () => {
    navigator.clipboard.writeText(boilerplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HtmlBoilerplateGeneratorIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML5 Boilerplate Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
            <label className="block font-medium">Page Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="relative">
            <pre className="p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">
                <code>{boilerplate}</code>
            </pre>
            <button onClick={handleCopy} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default HtmlBoilerplateGeneratorPage;

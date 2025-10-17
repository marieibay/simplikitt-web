import React, { useState } from 'react';
import { HtaccessRedirectGeneratorIcon } from '../components/icons/HtaccessRedirectGeneratorIcon';

const HtaccessRedirectGeneratorPage: React.FC = () => {
  const [oldUrl, setOldUrl] = useState('/old-page.html');
  const [newUrl, setNewUrl] = useState('https://example.com/new-page.html');
  const [redirectType, setRedirectType] = useState('301');
  const [copied, setCopied] = useState(false);

  const code = `Redirect ${redirectType} ${oldUrl} ${newUrl}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HtaccessRedirectGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">.htaccess Redirect Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
            <label className="block font-medium">Old URL Path</label>
            <input value={oldUrl} onChange={e => setOldUrl(e.target.value)} placeholder="/old-page.html" className="w-full p-2 border rounded font-mono mt-1"/>
        </div>
        <div>
            <label className="block font-medium">New Full URL</label>
            <input value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="https://example.com/new-page.html" className="w-full p-2 border rounded font-mono mt-1"/>
        </div>
        <div>
            <label className="block font-medium">Redirect Type</label>
            <select value={redirectType} onChange={e => setRedirectType(e.target.value)} className="p-2 border rounded mt-1">
                <option value="301">301 Permanent</option>
                <option value="302">302 Temporary</option>
            </select>
        </div>
        <div className="relative">
            <pre className="p-4 bg-gray-100 rounded font-mono overflow-x-auto">{code}</pre>
            <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default HtaccessRedirectGeneratorPage;

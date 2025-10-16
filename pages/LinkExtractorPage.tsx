import React, { useState } from 'react';
import { LinkExtractorIcon } from '../components/icons/LinkExtractorIcon';

const LinkExtractorPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [links, setLinks] = useState('');

  const extractLinks = () => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const foundLinks = input.match(urlRegex) || [];
    setLinks([...new Set(foundLinks)].join('\n'));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <LinkExtractorIcon className="w-10 h-10 text-blue-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Link Extractor from Text</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg" placeholder="Paste text containing links..."/>
        <textarea value={links} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50" placeholder="Extracted links will appear here..."/>
      </div>
      <button onClick={extractLinks} className="mt-6 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg">Extract Links</button>
    </div>
  );
};

export default LinkExtractorPage;

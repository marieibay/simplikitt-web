import React, { useState } from 'react';
import { YouTubeExtractorIcon } from '../components/icons/YouTubeExtractorIcon';

const YouTubeExtractorPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const extractContent = () => {
    const titleMatch = input.match(/<title>(.*?)<\/title>/);
    setTitle(titleMatch ? titleMatch[1].replace(' - YouTube', '') : 'Not Found');
    const descMatch = input.match(/<meta name="description" content="(.*?)"/);
    setDescription(descMatch ? descMatch[1] : 'Not Found');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <YouTubeExtractorIcon className="w-10 h-10 text-red-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">YouTube Content Extractor</h1>
      </div>
      <p className="mb-4 text-gray-600">Note: Go to a YouTube video, right-click, select "View Page Source", copy everything, and paste it below.</p>
      <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-48 p-3 border rounded-lg" placeholder="Paste YouTube page source here..."/>
      <button onClick={extractContent} className="my-4 px-5 py-2 bg-red-500 text-white font-bold rounded-lg">Extract</button>
      <div className="space-y-4">
        <input value={title} readOnly className="w-full p-3 border rounded-lg bg-gray-50" placeholder="Title will appear here"/>
        <textarea value={description} readOnly className="w-full h-48 p-3 border rounded-lg bg-gray-50" placeholder="Description will appear here"/>
      </div>
    </div>
  );
};

export default YouTubeExtractorPage;

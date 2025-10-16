import React, { useState, useEffect } from 'react';
import { TextToSlugConverterIcon } from '../components/icons/TextToSlugConverterIcon';

const TextToSlugConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    setOutput(slugify(input));
  }, [input]);

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <TextToSlugConverterIcon className="w-10 h-10 text-indigo-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text to Slug Converter</h1>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">Input String</label>
          <input
            id="input-text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., My Awesome Blog Post!"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
        </div>
        <div>
          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-1">Generated Slug</label>
          <div className="relative">
            <input
                id="output-text"
                type="text"
                value={output}
                readOnly
                placeholder="my-awesome-blog-post"
                className="w-full p-3 pr-20 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
            />
            <button onClick={copyToClipboard} className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50" disabled={!output}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSlugConverterPage;
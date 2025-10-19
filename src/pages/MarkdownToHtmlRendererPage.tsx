import React, { useState, useEffect } from 'react';
import { MarkdownToHtmlRendererIcon } from '../components/icons/MarkdownToHtmlRendererIcon';
import { marked } from 'marked';

const MarkdownToHtmlRendererPage: React.FC = () => {
  const [markdownInput, setMarkdownInput] = useState('# Hello World\n\nThis is **Markdown**.');
  const [htmlOutput, setHtmlOutput] = useState('');

  useEffect(() => {
    if (typeof marked !== 'undefined') {
      Promise.resolve(marked.parse(markdownInput)).then(setHtmlOutput);
    }
  }, [markdownInput]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <MarkdownToHtmlRendererIcon className="w-10 h-10 text-gray-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Markdown to HTML Renderer</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          value={markdownInput}
          onChange={e => setMarkdownInput(e.target.value)}
          className="w-full h-80 p-3 border rounded-lg font-mono"
          placeholder="Enter Markdown here..."
        />
        <div
          className="w-full h-80 p-3 border rounded-lg bg-gray-50 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlOutput }}
        />
      </div>
    </div>
  );
};

export default MarkdownToHtmlRendererPage;
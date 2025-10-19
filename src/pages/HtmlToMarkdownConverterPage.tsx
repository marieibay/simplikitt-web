import React, { useState, useEffect } from 'react';
import { HtmlToMarkdownConverterIcon } from '../components/icons/HtmlToMarkdownConverterIcon';

declare const TurndownService: any;

const HtmlToMarkdownConverterPage: React.FC = () => {
  const [htmlInput, setHtmlInput] = useState('<h1>Hello World</h1>\n<p>This is <strong>HTML</strong>.</p>');
  const [markdownOutput, setMarkdownOutput] = useState('');
  const [turndownService, setTurndownService] = useState<any>(null);
  
  useEffect(() => {
    if (typeof TurndownService !== 'undefined' && !turndownService) {
        setTurndownService(new TurndownService());
    }
  }, [turndownService]);

  useEffect(() => {
    if (turndownService) {
        setMarkdownOutput(turndownService.turndown(htmlInput));
    }
  }, [htmlInput, turndownService]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HtmlToMarkdownConverterIcon className="w-10 h-10 text-gray-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML to Markdown Converter</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          value={htmlInput}
          onChange={e => setHtmlInput(e.target.value)}
          className="w-full h-80 p-3 border rounded-lg font-mono"
          placeholder="Enter HTML here..."
        />
        <textarea
          value={markdownOutput}
          readOnly
          className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono"
          placeholder="Markdown output will appear here..."
        />
      </div>
    </div>
  );
};

export default HtmlToMarkdownConverterPage;
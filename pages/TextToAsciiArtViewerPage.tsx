import React, { useState, useMemo } from 'react';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';

// Basic FIGlet-like functionality would be very complex.
// This is a simple box-drawing function for demonstration.
const textToAsciiBox = (text: string): string => {
    if (!text) return '';
    const lines = text.split('\n');
    const maxLength = Math.max(...lines.map(l => l.length));
    const border = `+${'-'.repeat(maxLength + 2)}+`;
    const content = lines.map(line => `| ${line.padEnd(maxLength, ' ')} |`).join('\n');
    return `${border}\n${content}\n${border}`;
}

const TextToAsciiArtViewerPage: React.FC = () => {
  const [input, setInput] = useState('Hello ASCII');
  
  const asciiArt = useMemo(() => textToAsciiBox(input), [input]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TextToAsciiArtViewerIcon className="w-10 h-10 text-lime-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text to ASCII Art Viewer</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          className="w-full h-80 p-3 border rounded-lg font-mono"
          placeholder="Enter text here..."
        />
        <pre className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono overflow-auto text-sm">
          {asciiArt}
        </pre>
      </div>
    </div>
  );
};

export default TextToAsciiArtViewerPage;
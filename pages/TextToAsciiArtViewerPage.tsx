import React, { useState, useEffect } from 'react';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';

// A simple FIGlet-like font
const asciiFont: { [key: string]: string[] } = {
  'a': [' __ ', '/__\\', '\\  /'], 'b': ['__ ', '|__]', '|__]'], 'c': [' __', '/  ', '\\__'],
  'd': ['__ ', '|  \\', '|__/'], 'e': ['___', '|__', '|___'], 'f': ['___', '|__', '|  '],
  'g': [' __', '/ __', '\\__]'], 'h': ['|  |', '|__|', '|  |'], 'i': ['_', '|', '|'],
  'j': [' _', ' |', '_|'], 'k': ['|  /', '| /', '| \\'], 'l': ['|  ', '|  ', '|__'],
  'm': ['|\\/|', '|  |', '|  |'], 'n': ['|\\ |', '| \\|', '|  |'], 'o': [' __ ', '/  \\', '\\__/'],
  'p': ['__ ', '|__]', '|   '], 'q': [' __ ', '/  \\', '\\__\\, '], 'r': ['__ ', '|__/', '|  \\'],
  's': [' __', '/__', ' __/'], 't': ['___', ' | ', ' | '], 'u': ['|  |', '|  |', ' \\/ '],
  'v': ['\\  /', ' \\/ ', '    '], 'w': ['|  |', '|  |', '|/\\|'], 'x': ['\\ /', ' X ', '/ \\'],
  'y': ['\\ /', ' | ', ' | '], 'z': ['__', ' /', '/__'],
  ' ': ['   ', '   ', '   '],
};

const TextToAsciiArtViewerPage: React.FC = () => {
  const [input, setInput] = useState('Hello');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const lines = Array(3).fill('');
    for (const char of input.toLowerCase()) {
        const fontChar = asciiFont[char] || asciiFont[' '];
        for (let i = 0; i < 3; i++) {
            lines[i] += fontChar[i] + ' ';
        }
    }
    setOutput(lines.join('\n'));
  }, [input]);

  return (
    // Fix: Corrected `md-p-8` to `md:p-8`
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TextToAsciiArtViewerIcon className="w-10 h-10 text-green-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text to ASCII Art</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <input value={input} onChange={e => setInput(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="Enter text..." />
        <pre className="w-full h-48 p-3 border rounded-lg bg-gray-900 text-white font-mono overflow-auto">{output}</pre>
      </div>
    </div>
  );
};

export default TextToAsciiArtViewerPage;

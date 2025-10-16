import React, { useState, useMemo } from 'react';
import { LineCounterIcon } from '../components/icons/LineCounterIcon';

const LineCounterPage: React.FC = () => {
  const [text, setText] = useState('');
  const lineCount = useMemo(() => text.split('\n').length, [text]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <LineCounterIcon className="w-10 h-10 text-gray-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Line Counter</h1>
      </div>
      <div className="relative">
          <div className="absolute top-0 left-0 bottom-0 w-12 pt-3 pr-2 text-right bg-gray-100 border-r text-gray-400 font-mono select-none rounded-l-lg">
              {Array.from({ length: lineCount }, (_, i) => (
                  <div key={i}>{i + 1}</div>
              ))}
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full h-96 p-3 pl-16 border border-gray-300 rounded-lg font-mono"
          />
      </div>
    </div>
  );
};

export default LineCounterPage;

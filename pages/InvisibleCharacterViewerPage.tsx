import React, { useState, useMemo } from 'react';
import { InvisibleCharacterViewerIcon } from '../components/icons/InvisibleCharacterViewerIcon';

const InvisibleCharacterViewerPage: React.FC = () => {
  const [input, setInput] = useState('Hello\u200BWorld');

  const highlightedOutput = useMemo(() => {
    // \u200B: zero-width space, \u200C: zero-width non-joiner, \u200D: zero-width joiner, \uFEFF: zero-width no-break space
    const invisibleRegex = /[\u200B-\u200D\uFEFF]/g;
    return input.replace(invisibleRegex, '<span class="bg-red-500 text-white rounded px-1">ZWS</span>');
  }, [input]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <InvisibleCharacterViewerIcon className="w-10 h-10 text-red-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Invisible Character Viewer</h1>
      </div>
      <div className="space-y-4">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" />
        <div 
          className="w-full h-64 p-3 border rounded-lg bg-gray-50 whitespace-pre-wrap" 
          dangerouslySetInnerHTML={{ __html: highlightedOutput }}
        />
      </div>
    </div>
  );
};

export default InvisibleCharacterViewerPage;

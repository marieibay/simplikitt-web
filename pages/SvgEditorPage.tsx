import React, { useState } from 'react';
import { SvgEditorIcon } from '../components/icons/SvgEditorIcon';

const SvgEditorPage: React.FC = () => {
  const [svgCode, setSvgCode] = useState('<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />\n</svg>');

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <SvgEditorIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Simple SVG Editor</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea
          value={svgCode}
          onChange={e => setSvgCode(e.target.value)}
          className="w-full h-96 p-3 border rounded-lg font-mono"
          placeholder="Enter SVG code here..."
        />
        <div className="w-full h-96 p-3 border rounded-lg bg-gray-100 flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: svgCode }} />
        </div>
      </div>
    </div>
  );
};

export default SvgEditorPage;
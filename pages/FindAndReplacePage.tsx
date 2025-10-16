import React, { useState } from 'react';
import { FindAndReplaceIcon } from '../components/icons/FindAndReplaceIcon';

const FindAndReplacePage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [find, setFind] = useState<string>('');
  const [replace, setReplace] = useState<string>('');
  const [replaceCount, setReplaceCount] = useState<number | null>(null);

  const handleReplace = () => {
    if (!find) {
      setReplaceCount(0);
      return;
    }
    const regex = new RegExp(find, 'g');
    const newText = text.replace(regex, replace);
    const count = (text.match(regex) || []).length;
    setText(newText);
    setReplaceCount(count);
  };

  const handleClear = () => {
    setText('');
    setFind('');
    setReplace('');
    setReplaceCount(null);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <FindAndReplaceIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Find & Replace Text</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="find-text" className="block text-sm font-medium text-gray-700">Find</label>
            <input
              id="find-text"
              type="text"
              value={find}
              onChange={(e) => setFind(e.target.value)}
              placeholder="Text to find"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="replace-text" className="block text-sm font-medium text-gray-700">Replace with</label>
            <input
              id="replace-text"
              type="text"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
              placeholder="Text to replace with"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="main-text" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="main-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full h-72 p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            rows={10}
          />
        </div>
        <div className="flex flex-wrap gap-3 items-center">
            <button onClick={handleReplace} className="px-5 py-2.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition shadow-md">
            Replace All
            </button>
            <button onClick={handleClear} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
            Clear
            </button>
            {replaceCount !== null && (
            <p className="text-sm text-gray-600">
                Replaced {replaceCount} occurrence(s).
            </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default FindAndReplacePage;
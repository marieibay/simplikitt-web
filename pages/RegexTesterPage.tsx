import React, { useState, useMemo } from 'react';
import { RegexTesterIcon } from '../components/icons/RegexTesterIcon';

const RegexTesterPage: React.FC = () => {
  const [regex, setRegex] = useState('\\d+');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('There are 123 apples and 456 oranges.');
  const [error, setError] = useState('');

  const highlightedText = useMemo(() => {
    try {
      const re = new RegExp(regex, flags);
      setError('');
      return testString.replace(re, match => `<span class="bg-yellow-300 rounded">${match}</span>`);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
      return testString;
    }
  }, [regex, flags, testString]);

  const handleRegexChange = (value: string) => {
    const match = value.match(/^\/(.*)\/([gimuy]*)$/);
    if(match) {
      setRegex(match[1]);
      setFlags(match[2] || '');
    } else {
      setRegex(value);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RegexTesterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Regex Tester</h1>
      </div>
      <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
        <div className="flex gap-2 items-center">
            <span className="text-gray-500 font-mono">/</span>
            <input value={regex} onChange={e => setRegex(e.target.value)} className="w-full p-2 border rounded font-mono" placeholder="your-regex-here"/>
            <span className="text-gray-500 font-mono">/</span>
            <input value={flags} onChange={e => setFlags(e.target.value.replace(/[^gimuy]/g, ''))} className="w-20 p-2 border rounded font-mono" placeholder="flags" />
        </div>
        <textarea value={testString} onChange={e => setTestString(e.target.value)} className="w-full h-48 p-2 border rounded" placeholder="Your test string..."/>
        <div className="p-4 border rounded bg-gray-50 min-h-[10rem] whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: highlightedText }} />
        {error && <p className="text-red-500 p-2 bg-red-100 rounded">{error}</p>}
      </div>
    </div>
  );
};

export default RegexTesterPage;

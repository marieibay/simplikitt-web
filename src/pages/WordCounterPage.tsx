
import React, { useState, useMemo } from 'react';
import { Type } from 'lucide-react';

interface Counts {
  words: number;
  characters: number;
  sentences: number;
  paragraphs: number;
}

const WordCounterPage: React.FC = () => {
  const [text, setText] = useState('');

  const counts: Counts = useMemo(() => {
    if (!text) {
      return { words: 0, characters: 0, sentences: 0, paragraphs: 0 };
    }

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    return { words, characters, sentences, paragraphs };
  }, [text]);

  const StatCard: React.FC<{ label: string; value: number }> = ({ label, value }) => (
    <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
      <p className="text-sm text-gray-600 font-medium">{label}</p>
      <p className="text-3xl font-bold text-green-600">{value}</p>
    </div>
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Type className="w-10 h-10 text-green-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Word / Char Counter</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-300 focus:border-green-500 transition"
          />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          <StatCard label="Words" value={counts.words} />
          <StatCard label="Characters" value={counts.characters} />
          <StatCard label="Sentences" value={counts.sentences} />
          <StatCard label="Paragraphs" value={counts.paragraphs} />
        </div>
      </div>
    </div>
  );
};

export default WordCounterPage;

import React, { useState, useMemo } from 'react';
import { KeywordDensityCheckerIcon } from '../components/icons/KeywordDensityCheckerIcon';

interface KeywordResult {
    word: string;
    count: number;
    density: number;
}

const KeywordDensityCheckerPage: React.FC = () => {
  const [text, setText] = useState('');

  const results: { totalWords: number; keywords: KeywordResult[] } = useMemo(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const totalWords = words.length;

    if (totalWords === 0) {
        return { totalWords: 0, keywords: [] };
    }
    
    const wordCounts: { [key: string]: number } = {};
    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    const keywords = Object.entries(wordCounts)
        .map(([word, count]) => ({
            word,
            count,
            density: (count / totalWords) * 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 20); // Top 20 keywords

    return { totalWords, keywords };
  }, [text]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <KeywordDensityCheckerIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Keyword Density Checker</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here to analyze keyword density..."
            className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition"
          />
        </div>
        
        <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <p className="text-sm text-gray-600 font-medium">Total Words</p>
                <p className="text-3xl font-bold text-orange-600">{results.totalWords}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border max-h-80 overflow-y-auto">
                <h3 className="font-bold mb-2">Top Keywords</h3>
                {results.keywords.length > 0 ? (
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-2 py-2">Keyword</th>
                                <th scope="col" className="px-2 py-2 text-center">Count</th>
                                <th scope="col" className="px-2 py-2 text-right">Density</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.keywords.map(kw => (
                                <tr key={kw.word} className="border-b">
                                    <td className="px-2 py-1 font-medium">{kw.word}</td>
                                    <td className="px-2 py-1 text-center">{kw.count}</td>
                                    <td className="px-2 py-1 text-right">{kw.density.toFixed(2)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center py-4">No keywords to display.</p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordDensityCheckerPage;
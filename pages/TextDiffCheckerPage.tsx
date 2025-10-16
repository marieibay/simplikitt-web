import React, { useState, useMemo } from 'react';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';

// Simple diffing function
const diffLines = (textA: string, textB: string) => {
  const linesA = textA.split('\n');
  const linesB = textB.split('\n');
  const maxLen = Math.max(linesA.length, linesB.length);
  const result: { type: 'common' | 'removed' | 'added'; text: string }[] = [];

  for (let i = 0; i < maxLen; i++) {
    const lineA = linesA[i];
    const lineB = linesB[i];
    if (lineA === lineB) {
      if(lineA !== undefined) result.push({ type: 'common', text: lineA });
    } else {
      if (lineA !== undefined) {
        result.push({ type: 'removed', text: lineA });
      }
      if (lineB !== undefined) {
        result.push({ type: 'added', text: lineB });
      }
    }
  }
  return result;
};


const TextDiffCheckerPage: React.FC = () => {
  const [textA, setTextA] = useState('Hello World\nThis is the original text.');
  const [textB, setTextB] = useState('Hello Universe\nThis is the modified text.');
  
  const diffResult = useMemo(() => diffLines(textA, textB), [textA, textB]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TextDiffCheckerIcon className="w-10 h-10 text-cyan-800" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Text Difference Checker</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="text-a" className="block text-sm font-medium text-gray-700 mb-1">Text A</label>
          <textarea id="text-a" value={textA} onChange={(e) => setTextA(e.target.value)} className="w-full h-64 p-3 border rounded-lg font-mono" />
        </div>
        <div>
          <label htmlFor="text-b" className="block text-sm font-medium text-gray-700 mb-1">Text B</label>
          <textarea id="text-b" value={textB} onChange={(e) => setTextB(e.target.value)} className="w-full h-64 p-3 border rounded-lg font-mono" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Differences</h2>
        <pre className="p-4 bg-gray-50 border rounded-lg max-h-96 overflow-y-auto">
          {diffResult.map((line, index) => {
            const classes = {
              common: 'text-gray-500',
              added: 'bg-green-100 text-green-800',
              removed: 'bg-red-100 text-red-800',
            }[line.type];
            const prefix = {
              common: '  ',
              added: '+ ',
              removed: '- ',
            }[line.type];
            return (
              <div key={index} className={classes}>
                <span>{prefix}</span>
                <span>{line.text}</span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};

export default TextDiffCheckerPage;

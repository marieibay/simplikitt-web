import React, { useState } from 'react';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';

const JsBeautifierPage: React.FC = () => {
  const [input, setInput] = useState('function hello(name){console.log("Hello, "+name);}');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const prettify = () => {
    // Basic JS prettifier, very simplified.
    let indentLevel = 0;
    let result = '';
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (inString) {
            result += char;
            if (char === stringChar && input[i-1] !== '\\') {
                inString = false;
            }
            continue;
        }

        if (char === '"' || char === "'" || char === "`") {
            inString = true;
            stringChar = char;
            result += char;
            continue;
        }

        if (char === '{' || char === '[') {
            result += char + '\n' + '  '.repeat(++indentLevel);
        } else if (char === '}' || char === ']') {
            result += '\n' + '  '.repeat(--indentLevel) + char;
        } else if (char === ';') {
            result += ';\n' + '  '.repeat(indentLevel);
        } else if (char === ',') {
            result += ',\n' + '  '.repeat(indentLevel);
        }
        else {
            result += char;
        }
    }
    setOutput(result.trim());
  };
  
  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <JsBeautifierIcon className="w-10 h-10 text-yellow-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JS Beautifier / Prettifier</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
        <textarea value={output} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
      </div>
       <div className="mt-6 flex gap-4 items-center">
        <button onClick={prettify} className="px-5 py-2.5 bg-yellow-500 text-black font-bold rounded-lg">Prettify</button>
        <button onClick={copyToClipboard} disabled={!output} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg">{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default JsBeautifierPage;

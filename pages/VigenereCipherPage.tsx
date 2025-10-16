import React, { useState } from 'react';
import { VigenereCipherIcon } from '../components/icons/VigenereCipherIcon';

const VigenereCipherPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');

  const vigenereCipher = () => {
    if (!key) {
        setOutput("Please provide a key.");
        return;
    }
    const sanitizedKey = key.toLowerCase().replace(/[^a-z]/g, '');
    let keyIndex = 0;
    const result = input.split('').map(char => {
        const charCode = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
            const keyChar = sanitizedKey[keyIndex % sanitizedKey.length];
            const shift = keyChar.charCodeAt(0) - 'a'.charCodeAt(0);
            const newCharCode = mode === 'encrypt'
                ? ((charCode - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0)
                : ((charCode - 'a'.charCodeAt(0) - shift + 26) % 26) + 'a'.charCodeAt(0);
            keyIndex++;
            return String.fromCharCode(newCharCode);
        } else if (char >= 'A' && char <= 'Z') {
            const keyChar = sanitizedKey[keyIndex % sanitizedKey.length];
            const shift = keyChar.charCodeAt(0) - 'a'.charCodeAt(0);
            const newCharCode = mode === 'encrypt'
                ? ((charCode - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0)
                : ((charCode - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0);
            keyIndex++;
            return String.fromCharCode(newCharCode);
        }
        return char;
    }).join('');
    setOutput(result);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <VigenereCipherIcon className="w-10 h-10 text-gray-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Vigenere Cipher</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <input value={key} onChange={e => setKey(e.target.value)} placeholder="Cipher Key (e.g., 'secret')" className="w-full p-2 border rounded-md" />
        <div className="flex gap-4">
            <button onClick={() => setMode('encrypt')} className={`w-full py-2 rounded-lg ${mode === 'encrypt' ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}>Encrypt</button>
            <button onClick={() => setMode('decrypt')} className={`w-full py-2 rounded-lg ${mode === 'decrypt' ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}>Decrypt</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input..."/>
            <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output..."/>
        </div>
        <button onClick={vigenereCipher} className="px-5 py-2.5 bg-gray-700 text-white font-bold rounded-lg hover:bg-black transition shadow-md">
            {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
        </button>
      </div>
    </div>
  );
};

export default VigenereCipherPage;

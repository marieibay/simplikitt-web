import React, { useState, useEffect } from 'react';
import { CaesarCipherIcon } from '../components/icons/CaesarCipherIcon';

const CaesarCipherPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [shift, setShift] = useState(3);

  const caesarCipher = (str: string, amount: number) => {
    if (amount < 0) return caesarCipher(str, amount + 26);
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) { // Uppercase
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Lowercase
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        result += c;
    }
    return result;
  };

  useEffect(() => {
    setOutput(caesarCipher(input, shift));
  }, [input, shift]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CaesarCipherIcon className="w-10 h-10 text-gray-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Caesar Cipher</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div>
            <label className="block font-medium">Shift: {shift}</label>
            <input type="range" min="-25" max="25" value={shift} onChange={e => setShift(parseInt(e.target.value))} className="w-full mt-1 accent-gray-600" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input..."/>
            <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output..."/>
        </div>
      </div>
    </div>
  );
};

export default CaesarCipherPage;

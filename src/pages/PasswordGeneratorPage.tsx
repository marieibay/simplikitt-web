
import React, { useState, useEffect } from 'react';
import { Key, RefreshCw } from 'lucide-react';

const PasswordGeneratorPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(16);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = () => {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let charPool = lowerChars;
    if (includeUppercase) charPool += upperChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool.length === 0) {
      setPassword('Select at least one character type.');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-2xl">
      <div className="flex items-center gap-4 mb-8">
        <Key className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Password Generator</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <div className="relative mb-4">
          <input 
            type="text" 
            value={password}
            readOnly
            className="w-full p-4 pr-24 text-xl font-mono bg-gray-100 border border-gray-300 rounded-md"
          />
          <button onClick={copyToClipboard} className="absolute top-1/2 right-3 -translate-y-1/2 px-3 py-1 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-gray-700">Password Length</label>
            <span className="text-orange-600 font-bold text-lg">{length}</span>
          </div>
          <input 
            id="length"
            type="range" 
            min="6" 
            max="64"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="h-5 w-5 rounded text-orange-500 focus:ring-orange-500 border-gray-300"/>
              <span>Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="h-5 w-5 rounded text-orange-500 focus:ring-orange-500 border-gray-300"/>
              <span>Numbers (0-9)</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="h-5 w-5 rounded text-orange-500 focus:ring-orange-500 border-gray-300"/>
              <span>Symbols (!@#$)</span>
            </label>
          </div>
        </div>
      </div>
      <button onClick={generatePassword} className="mt-6 w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition shadow-md flex items-center justify-center gap-2">
         <RefreshCw className="w-5 h-5"/>
        Regenerate
      </button>
    </div>
  );
};

export default PasswordGeneratorPage;

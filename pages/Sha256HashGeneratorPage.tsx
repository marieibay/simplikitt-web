import React, { useState } from 'react';
import { Sha256HashGeneratorIcon } from '../components/icons/Sha256HashGeneratorIcon';

const Sha256HashGeneratorPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [hash, setHash] = useState<string>('');
  const [isHashing, setIsHashing] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateHash = async () => {
    if (!input) {
        setHash('');
        return;
    }
    setIsHashing(true);
    try {
      const data = new TextEncoder().encode(input);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setHash(hashHex);
    } catch (error) {
      console.error('Hashing error:', error);
      setHash('Error generating hash.');
    } finally {
        setIsHashing(false);
    }
  };
  
  const copyToClipboard = () => {
    if (hash) {
      navigator.clipboard.writeText(hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Sha256HashGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">SHA-256 Hash Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          className="w-full h-48 p-3 border rounded-lg"
        />
        <button onClick={generateHash} disabled={isHashing} className="px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg disabled:opacity-50">
            {isHashing ? 'Hashing...' : 'Generate SHA-256 Hash'}
        </button>
        {hash && (
            <div className="relative">
                <textarea value={hash} readOnly className="w-full h-24 p-3 border rounded-lg bg-gray-100 font-mono" />
                <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 bg-gray-200 rounded-md">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Sha256HashGeneratorPage;

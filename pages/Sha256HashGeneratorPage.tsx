import React, { useState, useEffect } from 'react';
import { Sha256HashGeneratorIcon } from '../components/icons/Sha256HashGeneratorIcon';

const Sha256HashGeneratorPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [hash, setHash] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  
  useEffect(() => {
    const generateHash = async () => {
        if (!input) {
            setHash('');
            return;
        }
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setHash(hashHex);
    };
    generateHash();
  }, [input]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Sha256HashGeneratorIcon className="w-10 h-10 text-red-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">SHA-256 Hash Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-3xl mx-auto space-y-4">
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text to hash..." className="w-full h-48 p-3 border rounded-lg"/>
        <div className="relative">
            <textarea value={hash} readOnly className="w-full h-24 p-3 font-mono text-sm border rounded-md bg-gray-50"/>
            <button onClick={copyToClipboard} disabled={!hash} className="absolute top-2 right-2 px-3 py-1 bg-gray-200 rounded-md">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default Sha256HashGeneratorPage;
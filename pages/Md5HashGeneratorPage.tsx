import React, { useState, useEffect } from 'react';
import { Md5HashGeneratorIcon } from '../components/icons/Md5HashGeneratorIcon';

declare const CryptoJS: any;

const Md5HashGeneratorPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [hash, setHash] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  
  useEffect(() => {
    if (typeof CryptoJS !== 'undefined') {
        setHash(CryptoJS.MD5(input).toString());
    }
  }, [input]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  if (typeof CryptoJS === 'undefined') {
    return <p>Loading hashing library...</p>
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Md5HashGeneratorIcon className="w-10 h-10 text-red-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">MD5 Hash Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text to hash..." className="w-full h-48 p-3 border rounded-lg"/>
        <div className="relative">
            <input value={hash} readOnly className="w-full p-3 font-mono border rounded-md bg-gray-50"/>
            <button onClick={copyToClipboard} disabled={!hash} className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default Md5HashGeneratorPage;
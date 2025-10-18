
import React, { useState } from 'react';
import { Md5HashGeneratorIcon } from '../components/icons/Md5HashGeneratorIcon';

declare const CryptoJS: any;

const Md5HashGeneratorPage: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [hash, setHash] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const generateHash = () => {
    if (!input) {
      setHash('');
      return;
    }
    const md5Hash = CryptoJS.MD5(input).toString();
    setHash(md5Hash);
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
        <Md5HashGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">MD5 Hash Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          className="w-full h-48 p-3 border rounded-lg"
        />
        <button onClick={generateHash} className="px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">
          Generate MD5 Hash
        </button>
        {hash && (
          <div className="relative">
            <textarea value={hash} readOnly className="w-full p-3 border rounded-lg bg-gray-100 font-mono" />
            <button onClick={copyToClipboard} className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Md5HashGeneratorPage;

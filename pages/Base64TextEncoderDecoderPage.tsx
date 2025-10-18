import React, { useState } from 'react';
import { Base64TextEncoderDecoderIcon } from '../components/icons/Base64TextEncoderDecoderIcon';

const Base64TextEncoderDecoderPage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleEncode = () => {
    try {
      setText(btoa(unescape(encodeURIComponent(text))));
      setError(null);
    } catch (e) {
      setError('Could not encode text. Ensure it contains valid characters.');
    }
  };

  const handleDecode = () => {
    try {
      setText(decodeURIComponent(escape(atob(text))));
      setError(null);
    } catch (e) {
      setError('Could not decode text. The string may be malformed or contain invalid characters.');
    }
  };

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Base64TextEncoderDecoderIcon className="w-10 h-10 text-pink-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Base64 Text Encoder / Decoder</h1>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encode or Base64 to decode..."
        className="w-full h-48 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition"
      />
      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <button onClick={handleEncode} className="px-5 py-2.5 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition shadow-md">
          Encode
        </button>
        <button onClick={handleDecode} className="px-5 py-2.5 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition shadow-md">
          Decode
        </button>
        <div className="flex-grow"></div>
        <button onClick={copyToClipboard} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition shadow" disabled={!text}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => { setText(''); setError(null); }} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Base64TextEncoderDecoderPage;

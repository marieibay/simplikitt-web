import React, { useState } from 'react';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';

const encodings = ['utf-8', 'ibm866', 'iso-8859-2', 'iso-8859-3', 'iso-8859-4', 'iso-8859-5', 'iso-8859-6', 'iso-8859-7', 'iso-8859-8', 'iso-8859-10', 'iso-8859-13', 'iso-8859-14', 'iso-8859-15', 'iso-8859-16', 'koi8-r', 'koi8-u', 'macintosh', 'windows-874', 'windows-1250', 'windows-1251', 'windows-1252', 'windows-1253', 'windows-1254', 'windows-1255', 'windows-1256', 'windows-1257', 'windows-1258', 'x-mac-cyrillic', 'gbk', 'gb18030', 'big5', 'euc-jp', 'iso-2022-jp', 'shift_jis', 'euc-kr', 'utf-16le', 'utf-16be'];

const CharacterSetConverterPage: React.FC = () => {
  const [input, setInput] = useState<string>('Hello World!');
  const [output, setOutput] = useState<string>('');
  const [fromEncoding, setFromEncoding] = useState('utf-8');
  const [toEncoding, setToEncoding] = useState('iso-8859-1');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      setError('');
      // Note: Browser support for TextEncoder is limited to UTF-8 for encoding.
      // This tool simulates the conversion for demonstration by decoding and re-encoding.
      // A full implementation would require a library for arbitrary encoding.
      if (fromEncoding !== 'utf-8') {
        setError('For this demo, input encoding must be UTF-8. Browsers can only encode to UTF-8.');
        // If we had a polyfill/library, we would encode with fromEncoding first.
      }

      const encoder = new TextEncoder(); // Encodes to UTF-8 bytes
      const encodedBytes = encoder.encode(input);
      
      const decoder = new TextDecoder(toEncoding);
      const decodedString = decoder.decode(encodedBytes);
      
      setOutput(decodedString);

    } catch (e) {
      if (e instanceof Error) {
        setError(`Conversion failed: ${e.message}`);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CharacterSetConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Character Set Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">From Encoding</label>
            <select value={fromEncoding} onChange={e => setFromEncoding(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {encodings.map(enc => <option key={enc} value={enc}>{enc}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-medium">To Encoding</label>
            <select value={toEncoding} onChange={e => setToEncoding(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {encodings.map(enc => <option key={enc} value={enc}>{enc}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-3 border rounded-lg" placeholder="Input text..." />
          <textarea value={output} readOnly className="w-full h-64 p-3 border rounded-lg bg-gray-50" placeholder="Output text..." />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleConvert} className="px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
      </div>
    </div>
  );
};

export default CharacterSetConverterPage;

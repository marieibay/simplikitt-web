import React, { useState, useMemo } from 'react';
import { Base64ImageSizeCalculatorIcon } from '../components/icons/Base64ImageSizeCalculatorIcon';

const Base64ImageSizeCalculatorPage: React.FC = () => {
  const [base64, setBase64] = useState('');

  const size = useMemo(() => {
    if (!base64) return null;
    let padding = 0;
    if (base64.endsWith('==')) padding = 2;
    else if (base64.endsWith('=')) padding = 1;
    const bytes = (base64.length * 3 / 4) - padding;
    if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    if (bytes > 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${bytes} Bytes`;
  }, [base64]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Base64ImageSizeCalculatorIcon className="w-10 h-10 text-gray-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Base64 Image Size Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <textarea
          value={base64}
          onChange={e => setBase64(e.target.value.replace(/\s/g, ''))}
          className="w-full h-48 p-3 border rounded-lg font-mono"
          placeholder="Paste Base64 string here..."
        />
        <div className="text-center">
          <p className="text-lg">Approximate File Size</p>
          <p className="text-4xl font-bold">{size || '...'}</p>
        </div>
      </div>
    </div>
  );
};

export default Base64ImageSizeCalculatorPage;
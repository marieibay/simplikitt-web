import React, { useState } from 'react';
import { ImageToBase64Icon } from '../components/icons/ImageToBase64Icon';

interface Result {
  name: string;
  dataUrl: string;
}

const ImageToBase64Page: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsProcessing(true);
      const files = Array.from(e.target.files);
      const newResults: Result[] = [];
      for (const file of files) {
        const dataUrl = await new Promise<string>(resolve => {
          const reader = new FileReader();
          reader.onload = e => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        });
        newResults.push({ name: file.name, dataUrl });
      }
      setResults(newResults);
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ImageToBase64Icon className="w-10 h-10 text-yellow-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image to Base64 (Bulk)</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-4xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">Upload Images</label>
          <input type="file" multiple accept="image/*" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100 mt-1" />
        </div>
        {isProcessing && <p>Processing images...</p>}
        {results.length > 0 && (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {results.map((res, i) => (
              <div key={i}>
                <p className="font-semibold">{res.name}</p>
                <textarea readOnly value={res.dataUrl} className="w-full h-24 p-2 font-mono text-xs border rounded-md bg-gray-50"/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageToBase64Page;

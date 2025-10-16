import React, { useState } from 'react';
import { PdfMetadataViewerIcon } from '../components/icons/PdfMetadataViewerIcon';

declare const pdfjsLib: any;

interface Metadata { [key: string]: any; }

const PdfMetadataViewerPage: React.FC = () => {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setIsLoading(true);
      setMetadata(null);
      const arrayBuffer = await file.arrayBuffer();
      try {
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const meta = await pdf.getMetadata();
        setMetadata(meta.info);
      } catch (error) {
        alert('Could not read metadata.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PdfMetadataViewerIcon className="w-10 h-10 text-green-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Metadata Viewer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        {isLoading && <p>Loading metadata...</p>}
        {metadata && (
          <div className="text-left font-mono text-sm bg-gray-50 p-4 rounded-md overflow-x-auto">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key}><span className="font-bold">{key}:</span> {value}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfMetadataViewerPage;
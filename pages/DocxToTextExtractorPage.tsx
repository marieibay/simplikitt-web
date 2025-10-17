import React, { useState } from 'react';
import { DocxToTextExtractorIcon } from '../components/icons/DocxToTextExtractorIcon';

declare const mammoth: any;

const DocxToTextExtractorPage: React.FC = () => {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setText('');
      try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        setText(result.value);
      } catch (error) {
        alert('Failed to extract text from DOCX file.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DocxToTextExtractorIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">DOCX to Text Extractor</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <input type="file" accept=".docx" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        <textarea value={isProcessing ? 'Extracting...' : text} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50" />
      </div>
    </div>
  );
};

export default DocxToTextExtractorPage;
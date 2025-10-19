import React, { useState } from 'react';
import { PdfToTextExtractorIcon } from '../components/icons/PdfToTextExtractorIcon';
import * as pdfjsLib from 'pdfjs-dist';

const PdfToTextExtractorPage: React.FC = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setIsLoading(true);
      setText('');
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          fullText += textContent.items.map((item: any) => item.str).join(' ');
          fullText += '\n\n--- Page ' + i + ' ---\n\n';
        }
        setText(fullText);
      } catch (error) {
        alert('Could not extract text from PDF.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PdfToTextExtractorIcon className="w-10 h-10 text-green-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF to Text Extractor</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-3xl mx-auto space-y-4">
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        <textarea value={isLoading ? 'Extracting text...' : text} readOnly className="w-full h-96 p-3 border rounded-lg bg-gray-50" />
      </div>
    </div>
  );
};

export default PdfToTextExtractorPage;
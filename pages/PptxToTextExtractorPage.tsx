import React, { useState } from 'react';
import { PptxToTextExtractorIcon } from '../components/icons/PptxToTextExtractorIcon';

declare const JSZip: any;

const PptxToTextExtractorPage: React.FC = () => {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setText('');
      try {
        const zip = await JSZip.loadAsync(file);
        const slideFiles = zip.file(/ppt\/slides\/slide\d+\.xml/);
        let fullText = '';
        const parser = new DOMParser();

        for (const slideFile of slideFiles) {
          const content = await slideFile.async('string');
          const xmlDoc = parser.parseFromString(content, 'application/xml');
          const textNodes = xmlDoc.getElementsByTagName('a:t');
          for (let i = 0; i < textNodes.length; i++) {
            if(textNodes[i].textContent) {
              fullText += textNodes[i].textContent + ' ';
            }
          }
          fullText += '\n';
        }
        setText(fullText.trim().replace(/\s+/g, ' '));
      } catch (error) {
        alert('Failed to extract text from PPTX file. The file may be corrupt or in an unsupported format.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PptxToTextExtractorIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PPTX to Text Extractor</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <input type="file" accept=".pptx" onChange={handleFileChange} disabled={isProcessing} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        <textarea value={isProcessing ? 'Extracting text from slides...' : text} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50" />
      </div>
    </div>
  );
};

export default PptxToTextExtractorPage;

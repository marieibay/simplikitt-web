import React, { useState } from 'react';
import { DocxHeaderFooterExtractorIcon } from '../components/icons/DocxHeaderFooterExtractorIcon';
import JSZip from 'jszip';

const DocxHeaderFooterExtractorPage: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const [footerText, setFooterText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setHeaderText('');
      setFooterText('');
      try {
        const zip = await JSZip.loadAsync(file);
        const parser = new DOMParser();

        const extractTextFromXml = async (files: any[]) => {
            let fullText = '';
            for (const file of files) {
                const content = await file.async('string');
                const xmlDoc = parser.parseFromString(content, "application/xml");
                const textNodes = xmlDoc.getElementsByTagName('w:t');
                for (let i = 0; i < textNodes.length; i++) {
                    if(textNodes[i].textContent) {
                       fullText += textNodes[i].textContent + ' ';
                    }
                }
                fullText += '\n---\n';
            }
            return fullText.replace(/\s+/g, ' ').trim();
        }

        const headerFiles = zip.file(/word\/header\d+\.xml/);
        setHeaderText(await extractTextFromXml(headerFiles));

        const footerFiles = zip.file(/word\/footer\d+\.xml/);
        setFooterText(await extractTextFromXml(footerFiles));

      } catch (error) {
        alert('Failed to process DOCX file. It might be corrupt or an unsupported format.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DocxHeaderFooterExtractorIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">DOCX Header/Footer Extractor</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <input type="file" accept=".docx" onChange={handleFileChange} disabled={isProcessing} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        {isProcessing && <p className="text-center animate-pulse">Extracting...</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h3 className="font-semibold">Extracted Header Text</h3>
                <textarea value={headerText} readOnly className="w-full h-48 p-2 border rounded-md bg-gray-50 mt-1"/>
            </div>
             <div>
                <h3 className="font-semibold">Extracted Footer Text</h3>
                <textarea value={footerText} readOnly className="w-full h-48 p-2 border rounded-md bg-gray-50 mt-1"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DocxHeaderFooterExtractorPage;
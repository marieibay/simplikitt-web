import React, { useState } from 'react';
import { PdfToDocxIcon } from '../components/icons/PdfToDocxIcon';

declare const pdfjsLib: any;

const PdfToDocxPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsProcessing(true);
    setText('');
    try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          fullText += textContent.items.map((item: any) => item.str).join(' ');
          fullText += '\n\n';
        }
        setText(fullText);
      } catch (error) {
        alert('Could not extract text from PDF. The file may be encrypted or corrupted.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${file?.name.replace(/\.pdf$/i, '')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PdfToDocxIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF to DOCX Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <p className="text-sm text-gray-600">This tool extracts the text from your PDF. You can then copy it or download it as a .txt file to use in any word processor. <br/><strong>Note:</strong> Formatting and images will be lost.</p>
        <input type="file" accept=".pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
        <textarea value={isProcessing ? 'Extracting text...' : text} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50" />
        <button onClick={handleDownload} disabled={!text || isProcessing} className="px-5 py-2.5 bg-green-500 text-white font-bold rounded-lg disabled:opacity-50">
          Download as .txt
        </button>
      </div>
    </div>
  );
};

export default PdfToDocxPage;

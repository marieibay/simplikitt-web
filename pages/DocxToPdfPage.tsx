import React, { useState, useRef } from 'react';
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';

declare const mammoth: any;
declare const html2pdf: any;

const DocxToPdfPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsProcessing(true);
    setHtmlContent(null);
    
    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setHtmlContent(result.value);
    } catch (error) {
      alert('Failed to process DOCX file. It might be corrupted.');
      console.error(error);
      setFile(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConvert = () => {
    if (!previewRef.current || !file) return;
    setIsProcessing(true);

    const opt = {
      margin: 0.5,
      filename: `${file.name.replace(/\.docx$/, '')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(previewRef.current).set(opt).save().then(() => {
        setIsProcessing(false);
    });
  };
  
  const handleClear = () => {
      setFile(null);
      setHtmlContent(null);
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DocxToPdfIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">DOCX to PDF Converter</h1>
      </div>
      
      {!htmlContent ? (
        <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center space-y-4">
          <p className="text-sm text-gray-600">Converts your DOCX file to a PDF, preserving most formatting, styles, and images. Complex layouts may differ slightly.</p>
          <input type="file" accept=".docx" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
           {isProcessing && <p className="animate-pulse">Processing document...</p>}
        </div>
      ) : (
        <div className="space-y-6">
            <div className="flex justify-center items-center gap-4">
                <button onClick={handleConvert} disabled={isProcessing} className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 disabled:opacity-50 text-lg">
                    {isProcessing ? 'Generating PDF...' : 'Convert & Download PDF'}
                </button>
                 <button onClick={handleClear} disabled={isProcessing} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 disabled:opacity-50">
                    Clear
                </button>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-center mb-4">Preview</h2>
                <div 
                    ref={previewRef}
                    className="p-8 bg-white rounded-lg shadow-lg border max-w-4xl mx-auto prose lg:prose-xl"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>
        </div>
      )}
    </div>
  );
};

export default DocxToPdfPage;
import React, { useState } from 'react';
import { PdfPasswordRemoverIcon } from '../components/icons/PdfPasswordRemoverIcon';
import * as PDFLib from 'pdf-lib';

const PdfPasswordRemoverPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleRemovePassword = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer, {
        // This option is important for some protected files
        ignoreEncryption: true,
      });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `unlocked_${file.name}`;
      link.click();
    } catch (error) {
      alert('Could not remove password. The file might be heavily encrypted or corrupted.');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PdfPasswordRemoverIcon className="w-10 h-10 text-green-800" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Password Remover</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto text-center space-y-4">
        <p>This tool attempts to remove owner passwords that restrict permissions like printing or copying. It may not work for user passwords that prevent opening the file.</p>
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
        <button onClick={handleRemovePassword} disabled={!file || isProcessing} className="w-full py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-green-900 disabled:opacity-50">
          {isProcessing ? 'Processing...' : 'Remove Password & Download'}
        </button>
      </div>
    </div>
  );
};

export default PdfPasswordRemoverPage;
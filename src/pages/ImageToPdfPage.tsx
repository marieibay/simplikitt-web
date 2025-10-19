import React, { useState } from 'react';
import * as PDFLib from 'pdf-lib';

interface ImageToPdfPageProps {
  Icon: React.FC<any>;
  title: string;
  color: string;
  acceptedFileType: 'image/jpeg' | 'image/png';
}

const ImageToPdfPage: React.FC<ImageToPdfPageProps> = ({ Icon, title, color, acceptedFileType }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    try {
      const pdfDoc = await PDFLib.PDFDocument.create();
      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const image = acceptedFileType === 'image/jpeg' 
          ? await pdfDoc.embedJpg(arrayBuffer)
          : await pdfDoc.embedPng(arrayBuffer);
        
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `converted.pdf`;
      link.click();
    } catch (error) {
      alert('Error converting images to PDF.');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className={`flex items-center gap-4 mb-8 text-${color}-600`}>
        <Icon className="w-10 h-10" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto text-center space-y-4">
        <input type="file" multiple accept={acceptedFileType} onChange={handleFileChange} className={`w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-${color}-50 file:text-${color}-700 hover:file:bg-${color}-100`} />
        {files.length > 0 && (
          <ul className="text-left my-4 list-disc list-inside">
            {files.map(f => <li key={f.name}>{f.name}</li>)}
          </ul>
        )}
        <button onClick={handleConvert} disabled={isProcessing || files.length === 0} className={`w-full py-3 bg-${color}-600 text-white font-bold rounded-lg hover:bg-${color}-700 disabled:opacity-50`}>
          {isProcessing ? 'Converting...' : 'Convert to PDF & Download'}
        </button>
      </div>
    </div>
  );
};

export default ImageToPdfPage;

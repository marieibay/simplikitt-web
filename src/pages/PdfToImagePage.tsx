import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PageViewport } from 'pdfjs-dist';

interface PdfToImagePageProps {
  Icon: React.FC<any>;
  title: string;
  color: string;
  outputFormat: 'jpeg' | 'png';
}

const PdfToImagePage: React.FC<PdfToImagePageProps> = ({ Icon, title, color, outputFormat }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setIsProcessing(true);
      setImages([]);
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const imageUrls: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport: PageViewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const context = canvas.getContext('2d');
          if (context) {
            // FIX: The render parameters for this version of pdf.js might have a stricter type.
            await page.render({ canvasContext: context, viewport: viewport }).promise;
            imageUrls.push(canvas.toDataURL(`image/${outputFormat}`));
          }
        }
        setImages(imageUrls);
      } catch (error) {
        alert('Could not convert PDF.');
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className={`flex items-center gap-4 mb-8 text-${color}-500`}>
        <Icon className="w-10 h-10" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className={`bg-white p-6 rounded-lg shadow-md border max-w-4xl mx-auto space-y-4`}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} className={`w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-${color}-50 file:text-${color}-700 hover:file:bg-${color}-100`} />
        {isProcessing && <p className="text-center">Processing PDF...</p>}
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, i) => (
              <div key={i} className="text-center">
                <img src={src} alt={`Page ${i+1}`} className="border shadow-sm rounded-md" />
                <a href={src} download={`page_${i+1}.${outputFormat === 'jpeg' ? 'jpg' : 'png'}`} className="block mt-2 text-sm text-blue-600 hover:underline">Download Page {i+1}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfToImagePage;

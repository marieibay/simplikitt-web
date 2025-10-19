import React, { useState } from 'react';
import { ImageToGrayscaleIcon } from '../components/icons/ImageToGrayscaleIcon';
import JSZip from 'jszip';

const ImageToGrayscalePage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleConvertAndZip = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setStatus('Initializing...');
    const zip = new JSZip();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setStatus(`Converting ${i + 1}/${files.length}: ${file.name}`);
        
        const imageBitmap = await createImageBitmap(file);
        const canvas = document.createElement('canvas');
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const ctx = canvas.getContext('2d');
        if(!ctx) continue;
        
        ctx.filter = 'grayscale(100%)';
        ctx.drawImage(imageBitmap, 0, 0);

        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, file.type));
        if (blob) {
            zip.file(`grayscale-${file.name}`, blob);
        }
    }
    
    setStatus('Creating ZIP file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'grayscale-images.zip';
    link.click();
    
    setIsProcessing(false);
    setStatus('Done!');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ImageToGrayscaleIcon className="w-10 h-10 text-gray-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image to Grayscale (Bulk)</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">1. Upload Images</label>
          <input type="file" multiple accept="image/*" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 mt-1" />
        </div>
        <button onClick={handleConvertAndZip} disabled={files.length === 0 || isProcessing} className="w-full py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 disabled:opacity-50">
          {isProcessing ? status : `Convert ${files.length} Images & Download ZIP`}
        </button>
      </div>
    </div>
  );
};

export default ImageToGrayscalePage;
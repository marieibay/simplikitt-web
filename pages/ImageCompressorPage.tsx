
import React, { useState } from 'react';
import { ImageCompressorIcon } from '../components/icons/ImageCompressorIcon';
import JSZip from 'jszip';

const ImageCompressorPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState<number>(0.75);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files).filter((file: File) => file.type === 'image/jpeg'));
    }
  };

  const handleCompressAndZip = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setStatus('Initializing...');
    const zip = new JSZip();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setStatus(`Compressing ${i + 1}/${files.length}: ${file.name}`);
        
        const imageBitmap = await createImageBitmap(file);
        const canvas = document.createElement('canvas');
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const ctx = canvas.getContext('2d');
        if(!ctx) continue;
        
        ctx.drawImage(imageBitmap, 0, 0);

        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', quality));
        if (blob) {
            zip.file(`compressed-${file.name}`, blob);
        }
    }
    
    setStatus('Creating ZIP file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'compressed-images.zip';
    link.click();
    
    setIsProcessing(false);
    setStatus('Done!');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ImageCompressorIcon className="w-10 h-10 text-purple-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Compressor (Bulk, JPG only)</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">1. Upload JPG Images</label>
          <input type="file" multiple accept="image/jpeg" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 mt-1" />
        </div>
        <div>
            <label className="block font-medium">2. Set JPEG Quality: {Math.round(quality * 100)}%</label>
            <input type="range" min="0.1" max="1" step="0.05" value={quality} onChange={e => setQuality(Number(e.target.value))} className="w-full accent-purple-400" />
        </div>
        <button onClick={handleCompressAndZip} disabled={files.length === 0 || isProcessing} className="w-full py-3 bg-purple-400 text-white font-bold rounded-lg hover:bg-purple-500 disabled:opacity-50">
          {isProcessing ? status : `Compress ${files.length} Images & Download ZIP`}
        </button>
      </div>
    </div>
  );
};

export default ImageCompressorPage;
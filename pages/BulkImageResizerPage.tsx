import React, { useState } from 'react';
import { BoxSelect } from 'lucide-react';
import JSZip from 'jszip';

const BulkImageResizerPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [width, setWidth] = useState<number>(1024);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleResizeAndZip = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setStatus('Initializing...');
    const zip = new JSZip();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setStatus(`Resizing ${i + 1}/${files.length}: ${file.name}`);
        
        const imageBitmap = await createImageBitmap(file);
        const originalWidth = imageBitmap.width;
        const originalHeight = imageBitmap.height;
        const aspectRatio = originalHeight / originalWidth;
        const newHeight = Math.round(width * aspectRatio);

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = newHeight;
        const ctx = canvas.getContext('2d');
        if(!ctx) continue;
        
        ctx.drawImage(imageBitmap, 0, 0, width, newHeight);

        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, file.type));
        if (blob) {
            zip.file(file.name, blob);
        }
    }
    
    setStatus('Creating ZIP file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'resized-images.zip';
    link.click();
    
    setIsProcessing(false);
    setStatus('Done!');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BoxSelect className="w-10 h-10 text-purple-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Bulk Image Resizer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">1. Upload Images</label>
          <input type="file" multiple accept="image/*" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 mt-1" />
        </div>
        <div>
            <label className="block font-medium">2. Set Max Width: {width}px</label>
            <input type="range" min="100" max="4000" step="10" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full accent-purple-600" />
        </div>
        <button onClick={handleResizeAndZip} disabled={files.length === 0 || isProcessing} className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:opacity-50">
          {isProcessing ? status : `Resize ${files.length} Images & Download ZIP`}
        </button>
      </div>
    </div>
  );
};

export default BulkImageResizerPage;
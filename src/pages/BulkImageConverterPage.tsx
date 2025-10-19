import React, { useState } from 'react';

declare const JSZip: any;

interface BulkImageConverterPageProps {
  Icon: React.FC<any>;
  title: string;
  fromFormat: 'jpeg' | 'png';
  toFormat: 'jpeg' | 'png';
  color: string;
}

export const BulkImageConverterPage: React.FC<BulkImageConverterPageProps> = ({ Icon, title, fromFormat, toFormat, color }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // FIX: Explicitly type 'file' as File to resolve 'type' property error.
      setFiles(Array.from(e.target.files).filter((file: File) => file.type === `image/${fromFormat}`));
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
        
        if (fromFormat === 'png' && toFormat === 'jpeg') {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(imageBitmap, 0, 0);

        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, `image/${toFormat}`));
        if (blob) {
            const newName = file.name.replace(/\.[^/.]+$/, "") + `.${toFormat === 'jpeg' ? 'jpg' : 'png'}`;
            zip.file(newName, blob);
        }
    }
    
    setStatus('Creating ZIP file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = `converted-images.zip`;
    link.click();
    
    setIsProcessing(false);
    setStatus('Done!');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className={`flex items-center gap-4 mb-8 text-${color}-500`}>
        <Icon className="w-10 h-10" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">1. Upload {fromFormat.toUpperCase()} Images</label>
          <input type="file" multiple accept={`image/${fromFormat}`} onChange={handleFileChange} className={`w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-${color}-50 file:text-${color}-700 hover:file:bg-${color}-100 mt-1`} />
        </div>
        <button onClick={handleConvertAndZip} disabled={files.length === 0 || isProcessing} className={`w-full py-3 bg-${color}-500 text-white font-bold rounded-lg hover:bg-${color}-600 disabled:opacity-50`}>
          {isProcessing ? status : `Convert ${files.length} Images to ${toFormat.toUpperCase()} & Download ZIP`}
        </button>
      </div>
    </div>
  );
};
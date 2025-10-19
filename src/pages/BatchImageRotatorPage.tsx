import React, { useState } from 'react';
import { BatchImageRotatorIcon } from '../components/icons/BatchImageRotatorIcon';
import JSZip from 'jszip';

const BatchImageRotatorPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [angle, setAngle] = useState(90);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleRotateAndZip = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setStatus('Initializing...');
    const zip = new JSZip();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setStatus(`Rotating ${i + 1}/${files.length}: ${file.name}`);
        
        const imageBitmap = await createImageBitmap(file);
        const canvas = document.createElement('canvas');
        const rads = angle * Math.PI / 180;
        const sin = Math.abs(Math.sin(rads));
        const cos = Math.abs(Math.cos(rads));
        const w = imageBitmap.width;
        const h = imageBitmap.height;
        canvas.width = w * cos + h * sin;
        canvas.height = w * sin + h * cos;

        const ctx = canvas.getContext('2d');
        if(!ctx) continue;
        
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(rads);
        ctx.drawImage(imageBitmap, -w / 2, -h / 2);

        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, file.type));
        if (blob) {
            zip.file(`rotated-${file.name}`, blob);
        }
    }
    
    setStatus('Creating ZIP file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = 'rotated-images.zip';
    link.click();
    
    setIsProcessing(false);
    setStatus('Done!');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BatchImageRotatorIcon className="w-10 h-10 text-fuchsia-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Batch Image Rotator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">1. Upload Images</label>
          <input type="file" multiple accept="image/*" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-fuchsia-50 file:text-fuchsia-700 hover:file:bg-fuchsia-100 mt-1" />
        </div>
        <div>
            <label className="block font-medium">2. Set Rotation Angle: {angle}°</label>
            <select value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1">
                <option value="90">90° Clockwise</option>
                <option value="180">180°</option>
                <option value="-90">90° Counter-Clockwise</option>
            </select>
        </div>
        <button onClick={handleRotateAndZip} disabled={files.length === 0 || isProcessing} className="w-full py-3 bg-fuchsia-600 text-white font-bold rounded-lg hover:bg-fuchsia-700 disabled:opacity-50">
          {isProcessing ? status : `Rotate ${files.length} Images & Download ZIP`}
        </button>
      </div>
    </div>
  );
};

export default BatchImageRotatorPage;
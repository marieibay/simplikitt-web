import React, { useState } from 'react';
import { ImageOptimizationCheckerIcon } from '../components/icons/ImageOptimizationCheckerIcon';

const ImageOptimizationCheckerPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dims, setDims] = useState<{w: number, h: number} | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
        setFile(f);
        const img = new Image();
        img.src = URL.createObjectURL(f);
        img.onload = () => {
            setDims({ w: img.width, h: img.height });
        }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ImageOptimizationCheckerIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Optimization Checker</h1>
      </div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && dims && (
        <div className="mt-4 space-y-2">
            <p><strong>File Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
            <p><strong>Dimensions:</strong> {dims.w} x {dims.h} px</p>
            {file.size > 500 * 1024 && <p className="text-red-500">Suggestion: This image is large. Consider compressing it.</p>}
            {dims.w > 1920 && <p className="text-red-500">Suggestion: The width is large for web use. Consider resizing it.</p>}
        </div>
      )}
    </div>
  );
};

export default ImageOptimizationCheckerPage;

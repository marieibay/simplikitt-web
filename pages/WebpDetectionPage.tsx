import React, { useState, useEffect } from 'react';
import { WebpDetectionIcon } from '../components/icons/WebpDetectionIcon';

const WebpDetectionPage: React.FC = () => {
  const [supportsWebp, setSupportsWebp] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWebp = () => {
      const img = new Image();
      img.onload = () => setSupportsWebp(true);
      img.onerror = () => setSupportsWebp(false);
      img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    checkWebp();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <WebpDetectionIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">WebP Support Detection</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center">
        {supportsWebp === null && <p>Checking...</p>}
        {supportsWebp === true && <p className="text-2xl text-green-600 font-bold">Your browser supports WebP!</p>}
        {supportsWebp === false && <p className="text-2xl text-red-600 font-bold">Your browser does not support WebP.</p>}
      </div>
    </div>
  );
};

export default WebpDetectionPage;

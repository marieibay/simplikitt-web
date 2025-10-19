import React, { useState, useRef, useEffect } from 'react';
import { Maximize } from 'lucide-react';

const ImageResizerPage: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [originalDims, setOriginalDims] = useState<{ w: number; h: number } | null>(null);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [scale, setScale] = useState<string>('100');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(new Image());

  useEffect(() => {
    if (preview) {
      const img = imageRef.current;
      img.src = preview;
      img.onload = () => {
        setOriginalDims({ w: img.width, h: img.height });
        setWidth(img.width.toString());
        setHeight(img.height.toString());
        setScale('100');
      };
    } else {
      setOriginalDims(null);
      setWidth('');
      setHeight('');
    }
  }, [preview]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setResizedUrl(null);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleDimensionChange = (value: string, type: 'width' | 'height') => {
    const numValue = parseInt(value, 10);
    if (!originalDims) return;
    const ratio = originalDims.w / originalDims.h;

    if (type === 'width') {
      setWidth(value);
      if (maintainAspectRatio && !isNaN(numValue)) {
        setHeight(Math.round(numValue / ratio).toString());
      }
    } else {
      setHeight(value);
      if (maintainAspectRatio && !isNaN(numValue)) {
        setWidth(Math.round(numValue * ratio).toString());
      }
    }
  };
  
  const handleScaleChange = (value: string) => {
    setScale(value);
    const numScale = parseFloat(value);
    if (originalDims && !isNaN(numScale)) {
        setWidth(Math.round(originalDims.w * (numScale / 100)).toString());
        setHeight(Math.round(originalDims.h * (numScale / 100)).toString());
    }
  }

  const handleResize = () => {
    if (!preview || !width || !height) return;
    setIsResizing(true);
    setResizedUrl(null);
    
    const w = parseInt(width, 10);
    const h = parseInt(height, 10);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert("Please enter valid width and height.");
        setIsResizing(false);
        return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(imageRef.current, 0, 0, w, h);
      const outputFormat = imageFile?.type === 'image/png' ? 'image/png' : 'image/jpeg';
      const dataUrl = canvas.toDataURL(outputFormat);
      setResizedUrl(dataUrl);
    }
    setIsResizing(false);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Maximize className="w-12 h-12 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Resizer</h1>
      </div>

      {!preview ? (
        <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
          <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition shadow-lg text-lg">
            Select Image to Resize
          </button>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
          <p className="mt-4 text-gray-600">Your image is processed on your device and never uploaded.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Resize Options</h2>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">By Percentage</label>
                <div className="flex items-center gap-2 mt-1">
                    <input type="range" min="1" max="200" value={scale} onChange={(e) => handleScaleChange(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                    <input type="number" value={scale} onChange={(e) => handleScaleChange(e.target.value)} className="p-2 w-20 border rounded-md text-center" />
                    <span className="font-semibold">%</span>
                </div>
              </div>
              <hr/>
              <div>
                 <label className="text-sm font-medium text-gray-700">By Pixels</label>
                <div className="flex items-center gap-4 mt-1">
                  <input type="number" placeholder="Width" value={width} onChange={(e) => handleDimensionChange(e.target.value, 'width')} className="p-2 w-full border rounded-md" />
                  <span className="text-gray-500 text-xl">&times;</span>
                  <input type="number" placeholder="Height" value={height} onChange={(e) => handleDimensionChange(e.target.value, 'height')} className="p-2 w-full border rounded-md" />
                </div>
              </div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" checked={maintainAspectRatio} onChange={() => setMaintainAspectRatio(!maintainAspectRatio)} className="h-4 w-4 rounded text-purple-500 focus:ring-purple-500 border-gray-300" />
                <span>Maintain aspect ratio</span>
              </label>
            </div>
            <button onClick={handleResize} disabled={isResizing} className="w-full mt-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition shadow-md disabled:opacity-70">
              {isResizing ? 'Resizing...' : 'Resize Image'}
            </button>
            {resizedUrl && (
                 <a href={resizedUrl} download={`resized-${imageFile?.name}`} className="block text-center mt-4 w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                    Download Resized Image
                </a>
             )}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Preview</h2>
            <div className="p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
                <img src={preview} alt="Preview" className="max-w-full max-h-96 h-auto shadow-lg" />
            </div>
             <div className="text-sm text-gray-600 mt-2">Original: {originalDims?.w} x {originalDims?.h} pixels</div>
             <button onClick={() => {setImageFile(null); setPreview(null); setResizedUrl(null); if(fileInputRef.current) fileInputRef.current.value = ""}} className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                Clear Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageResizerPage;

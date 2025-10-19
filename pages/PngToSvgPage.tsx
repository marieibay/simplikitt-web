import React, { useState, useRef } from 'react';
import { Replace } from 'lucide-react';

const PngToSvgPage: React.FC = () => {
  const [pngFile, setPngFile] = useState<File | null>(null);
  const [pngPreview, setPngPreview] = useState<string | null>(null);
  const [imageDims, setImageDims] = useState<{ w: number; h: number } | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'image/png') {
      setPngFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        setPngPreview(src);
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImageDims({ w: img.width, h: img.height });
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid PNG file.');
      setPngFile(null);
      setPngPreview(null);
      setImageDims(null);
    }
  };

  const handleConvertAndDownload = () => {
    if (!pngPreview || !imageDims || !pngFile) return;
    
    setIsConverting(true);
    
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${imageDims.w}" height="${imageDims.h}">
  <image href="${pngPreview}" width="${imageDims.w}" height="${imageDims.h}" />
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pngFile.name.replace(/\.png$/i, '')}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setIsConverting(false);
  };

  const clearFile = () => {
    setPngFile(null);
    setPngPreview(null);
    setImageDims(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Replace className="w-10 h-10 text-orange-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PNG to SVG Converter</h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <p className="text-sm text-gray-600">
          This tool embeds your PNG file into an SVG wrapper. This does not convert the image to vector paths, but it provides a valid SVG file containing your original image.
        </p>

        {!pngPreview ? (
          <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition shadow-lg text-lg"
            >
              Select PNG Image
            </button>
            <input
              type="file"
              accept="image/png"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg border flex items-center justify-center">
                <img src={pngPreview} alt="PNG Preview" className="max-w-full max-h-80 h-auto shadow-md" />
            </div>
            {imageDims && <p className="text-center text-gray-500">Dimensions: {imageDims.w} &times; {imageDims.h}</p>}
             <div className="flex gap-4">
                <button
                onClick={handleConvertAndDownload}
                disabled={isConverting}
                className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 disabled:opacity-50 transition shadow-md"
                >
                {isConverting ? 'Converting...' : 'Convert & Download SVG'}
                </button>
                <button 
                    onClick={clearFile}
                    className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow"
                >
                    Clear
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PngToSvgPage;
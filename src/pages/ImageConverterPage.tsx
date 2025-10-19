import React, { useState, useRef } from 'react';
import { Replace } from 'lucide-react';

const ImageConverterPage: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('png');
  const [jpegQuality, setJpegQuality] = useState<number>(0.92);
  const [convertedImageUrl, setConvertedImageUrl] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [originalFileName, setOriginalFileName] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setOriginalFileName(file.name.substring(0, file.name.lastIndexOf('.')) || file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setConvertedImageUrl(null);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleConvert = () => {
    if (!preview) return;
    setIsConverting(true);
    setConvertedImageUrl(null);

    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL(`image/${outputFormat}`, jpegQuality);
        setConvertedImageUrl(dataUrl);
      }
      setIsConverting(false);
    };
  };
  
  const getOutputFileName = () => {
      return `${originalFileName}.${outputFormat === 'jpeg' ? 'jpg' : 'png'}`;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Replace className="w-12 h-12 text-yellow-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JPG & PNG Converter</h1>
      </div>

      {!preview ? (
        <div className="text-center">
            <button 
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition shadow-lg text-lg"
            >
                Select Image
            </button>
            <input type="file" accept="image/png, image/jpeg" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
            <p className="mt-4 text-gray-600">Upload a JPG or PNG to start converting.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Original Image</h2>
                <img src={preview} alt="Original preview" className="rounded-lg shadow-md border max-w-full h-auto" />
                <button 
                    onClick={() => {
                        setPreview(null);
                        setConvertedImageUrl(null);
                        if(fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow"
                >
                    Clear Image
                </button>
            </div>
            <div>
                 <h2 className="text-xl font-semibold mb-4 text-gray-700">Conversion Options</h2>
                 <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700">Convert to:</label>
                        <div className="mt-2 flex gap-4">
                            <button onClick={() => setOutputFormat('png')} className={`px-4 py-2 rounded-lg font-semibold w-24 transition ${outputFormat === 'png' ? 'bg-yellow-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>PNG</button>
                            <button onClick={() => setOutputFormat('jpeg')} className={`px-4 py-2 rounded-lg font-semibold w-24 transition ${outputFormat === 'jpeg' ? 'bg-yellow-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>JPG</button>
                        </div>
                    </div>
                    {outputFormat === 'jpeg' && (
                        <div>
                            <label htmlFor="quality" className="block font-medium text-gray-700">JPG Quality: {Math.round(jpegQuality * 100)}%</label>
                            <input
                                id="quality"
                                type="range"
                                min="0.1"
                                max="1"
                                step="0.01"
                                value={jpegQuality}
                                onChange={(e) => setJpegQuality(parseFloat(e.target.value))}
                                className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                            />
                        </div>
                    )}
                 </div>
                 <button onClick={handleConvert} disabled={isConverting} className="w-full mt-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition shadow-md disabled:opacity-70 disabled:cursor-wait">
                    {isConverting ? 'Converting...' : 'Convert Image'}
                 </button>
                 
                 {convertedImageUrl && (
                    <div className="mt-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-700">Result</h3>
                        <img src={convertedImageUrl} alt="Converted result" className="mt-2 mx-auto rounded-lg shadow-md border max-w-full h-auto max-h-48" />
                         <a href={convertedImageUrl} download={getOutputFileName()} className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                            Download Converted Image
                        </a>
                    </div>
                 )}
            </div>
        </div>
      )}
    </div>
  );
};

export default ImageConverterPage;

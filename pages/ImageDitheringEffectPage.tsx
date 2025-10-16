import React, { useState, useRef, useEffect } from 'react';
import { ImageDitheringEffectIcon } from '../components/icons/ImageDitheringEffectIcon';

const BAYER_MATRIX = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
];

const ImageDitheringEffectPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(new Image());
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageRef.current.src = event.target?.result as string;
                imageRef.current.onload = () => setImageSrc(imageRef.current.src);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (!imageSrc || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = imageRef.current;
        
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        if (ctx) {
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const matrixSize = 4;
            
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const i = (y * canvas.width + x) * 4;
                    const luminance = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
                    const threshold = (BAYER_MATRIX[y % matrixSize][x % matrixSize] / (matrixSize * matrixSize)) * 255;
                    const value = luminance > threshold ? 255 : 0;
                    data[i] = data[i + 1] = data[i + 2] = value;
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }
    }, [imageSrc]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'dithered-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageDitheringEffectIcon className="w-10 h-10 text-gray-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Dithering Effect</h1>
            </div>
            {!imageSrc ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition shadow-lg text-lg">
                        Select Image
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Original</h3>
                        <img src={imageSrc} alt="Original" className="max-w-full h-auto rounded-lg shadow-md border" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Dithered</h3>
                        <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg shadow-md border"></canvas>
                        <button onClick={handleDownload} className="w-full mt-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                            Download Dithered Image
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageDitheringEffectPage;

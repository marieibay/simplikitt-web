import React, { useState, useRef, useEffect } from 'react';
import { ImageReflectionGeneratorIcon } from '../components/icons/ImageReflectionGeneratorIcon';

const ImageReflectionGeneratorPage: React.FC = () => {
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
        canvas.height = img.naturalHeight * 1.5;

        if (ctx) {
            ctx.drawImage(img, 0, 0);
            ctx.save();
            ctx.translate(0, img.naturalHeight);
            ctx.scale(1, -1);
            ctx.drawImage(img, 0, -img.naturalHeight, img.naturalWidth, img.naturalHeight);
            ctx.restore();
            
            ctx.globalCompositeOperation = 'destination-out';
            const gradient = ctx.createLinearGradient(0, img.naturalHeight, 0, canvas.height);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0.7)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 1)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, img.naturalHeight, canvas.width, img.naturalHeight * 0.5);
        }
    }, [imageSrc]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'reflected-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageReflectionGeneratorIcon className="w-10 h-10 text-blue-300" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Reflection Generator</h1>
            </div>

            {!imageSrc ? (
                 <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-blue-300 text-white font-bold rounded-lg hover:bg-blue-400 transition shadow-lg text-lg">
                        Select Image
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
            ) : (
                <div className="text-center">
                    <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg shadow-md border"></canvas>
                    <button onClick={handleDownload} className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                        Download Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageReflectionGeneratorPage;

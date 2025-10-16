import React, { useState, useRef, useEffect } from 'react';
import { ImageWarpingToolIcon } from '../components/icons/ImageWarpingToolIcon';

const ImageWarpingToolPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);
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

        canvas.width = img.naturalWidth + Math.abs(skewY * img.naturalHeight);
        canvas.height = img.naturalHeight + Math.abs(skewX * img.naturalWidth);
        
        if (ctx) {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.setTransform(1, skewX, skewY, 1, skewY > 0 ? skewY * img.naturalHeight : 0, skewX > 0 ? skewX * img.naturalWidth : 0);
            ctx.drawImage(img, 0, 0);
            ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        }
    }, [imageSrc, skewX, skewY]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'warped-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageWarpingToolIcon className="w-10 h-10 text-indigo-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Skew (Warp) Tool</h1>
            </div>
            {!imageSrc ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition shadow-lg text-lg">
                        Select Image
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-2">Preview</h3>
                        <div className="p-4 bg-gray-100 rounded-lg border flex items-center justify-center min-h-[400px]">
                            <canvas ref={canvasRef} className="max-w-full max-h-[500px]"></canvas>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Controls</h3>
                        <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                            <div>
                                <label className="block font-medium">Horizontal Skew: {skewX.toFixed(2)}</label>
                                <input type="range" min="-1" max="1" step="0.05" value={skewX} onChange={(e) => setSkewX(parseFloat(e.target.value))} className="w-full mt-1 accent-indigo-600" />
                            </div>
                            <div>
                                <label className="block font-medium">Vertical Skew: {skewY.toFixed(2)}</label>
                                <input type="range" min="-1" max="1" step="0.05" value={skewY} onChange={(e) => setSkewY(parseFloat(e.target.value))} className="w-full mt-1 accent-indigo-600" />
                            </div>
                            <button onClick={handleDownload} className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                Download Image
                            </button>
                            <button onClick={() => { setImageSrc(''); setSkewX(0); setSkewY(0); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="w-full mt-2 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                                Clear Image
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageWarpingToolPage;

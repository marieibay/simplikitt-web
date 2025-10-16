import React, { useState, useRef, useEffect } from 'react';
import { ImageHueSaturationAdjusterIcon } from '../components/icons/ImageHueSaturationAdjusterIcon';

const ImageHueSaturationAdjusterPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(100);
    const [brightness, setBrightness] = useState(100);
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
            ctx.filter = `hue-rotate(${hue}deg) saturate(${saturation}%) brightness(${brightness}%)`;
            ctx.drawImage(img, 0, 0);
        }
    }, [imageSrc, hue, saturation, brightness]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = `adjusted-image.png`;
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };
    
    const resetFilters = () => {
        setHue(0);
        setSaturation(100);
        setBrightness(100);
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageHueSaturationAdjusterIcon className="w-10 h-10 text-pink-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Hue, Saturation & Brightness</h1>
            </div>

            {!imageSrc ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-pink-400 text-white font-bold rounded-lg hover:bg-pink-500 transition shadow-lg text-lg">
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
                                <label className="block font-medium">Hue Rotate: {hue}°</label>
                                <input type="range" min="0" max="360" value={hue} onChange={(e) => setHue(parseInt(e.target.value))} className="w-full mt-1 accent-pink-400" />
                            </div>
                            <div>
                                <label className="block font-medium">Saturation: {saturation}%</label>
                                <input type="range" min="0" max="200" value={saturation} onChange={(e) => setSaturation(parseInt(e.target.value))} className="w-full mt-1 accent-pink-400" />
                            </div>
                            <div>
                                <label className="block font-medium">Brightness: {brightness}%</label>
                                <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(parseInt(e.target.value))} className="w-full mt-1 accent-pink-400" />
                            </div>
                            <button onClick={resetFilters} className="w-full mt-2 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Reset</button>
                            <button onClick={handleDownload} className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                Download Image
                            </button>
                             <button onClick={() => { setImageSrc(''); resetFilters(); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="w-full mt-2 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                                Clear Image
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageHueSaturationAdjusterPage;
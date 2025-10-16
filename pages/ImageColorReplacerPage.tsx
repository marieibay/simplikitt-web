import React, { useState, useRef, useEffect } from 'react';
import { ImageColorReplacerIcon } from '../components/icons/ImageColorReplacerIcon';

const ImageColorReplacerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [fromColor, setFromColor] = useState('#ff0000');
    const [toColor, setToColor] = useState('#0000ff');
    const [tolerance, setTolerance] = useState(50);
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
    
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
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
            const from = hexToRgb(fromColor);
            const to = hexToRgb(toColor);
            
            if (from && to) {
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    
                    const dist = Math.sqrt(
                      Math.pow(r - from.r, 2) + 
                      Math.pow(g - from.g, 2) + 
                      Math.pow(b - from.b, 2)
                    );

                    if (dist <= tolerance) {
                        data[i] = to.r;
                        data[i + 1] = to.g;
                        data[i + 2] = to.b;
                    }
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }
    }, [imageSrc, fromColor, toColor, tolerance]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'color-replaced-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageColorReplacerIcon className="w-10 h-10 text-red-300" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Color Replacer</h1>
            </div>

            {!imageSrc ? (
                 <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-red-300 text-white font-bold rounded-lg hover:bg-red-400 transition shadow-lg text-lg">
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
                            <div className="flex gap-4">
                                <div>
                                    <label className="block font-medium">From Color</label>
                                    <input type="color" value={fromColor} onChange={(e) => setFromColor(e.target.value)} className="w-full h-10 mt-1 p-1 border rounded-md" />
                                </div>
                                <div>
                                    <label className="block font-medium">To Color</label>
                                    <input type="color" value={toColor} onChange={(e) => setToColor(e.target.value)} className="w-full h-10 mt-1 p-1 border rounded-md" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-medium">Tolerance: {tolerance}</label>
                                <input type="range" min="0" max="150" value={tolerance} onChange={(e) => setTolerance(parseInt(e.target.value))} className="w-full mt-1 accent-red-300" />
                            </div>
                            <button onClick={handleDownload} className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                Download Image
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageColorReplacerPage;
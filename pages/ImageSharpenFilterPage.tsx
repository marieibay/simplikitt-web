import React, { useState, useRef, useEffect } from 'react';
import { ImageSharpenFilterIcon } from '../components/icons/ImageSharpenFilterIcon';

const ImageSharpenFilterPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(new Image());
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageRef.current.src = event.target?.result as string;
                imageRef.current.onload = () => {
                     setImageSrc(imageRef.current.src);
                     // Display original image initially
                     const canvas = canvasRef.current;
                     if (canvas) {
                        const ctx = canvas.getContext('2d');
                        canvas.width = imageRef.current.naturalWidth;
                        canvas.height = imageRef.current.naturalHeight;
                        ctx?.drawImage(imageRef.current, 0, 0);
                     }
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    const applySharpen = () => {
        if (!imageSrc || !canvasRef.current) return;
        setIsProcessing(true);
        
        // Use a timeout to allow the UI to update to "Processing..."
        setTimeout(() => {
            const canvas = canvasRef.current!;
            const ctx = canvas.getContext('2d')!;
            const img = imageRef.current;
            
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);

            const weights = [0, -1, 0, -1, 5, -1, 0, -1, 0];
            const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const side = Math.round(Math.sqrt(weights.length));
            const halfSide = Math.floor(side / 2);
            const src = pixels.data;
            const sw = pixels.width;
            const sh = pixels.height;
            const w = sw;
            const h = sh;
            const output = ctx.createImageData(w, h);
            const dst = output.data;

            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const sy = y;
                    const sx = x;
                    const dstOff = (y * w + x) * 4;
                    let r = 0, g = 0, b = 0;
                    for (let cy = 0; cy < side; cy++) {
                        for (let cx = 0; cx < side; cx++) {
                            const scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
                            const scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
                            const srcOff = (scy * sw + scx) * 4;
                            const wt = weights[cy * side + cx];
                            r += src[srcOff] * wt;
                            g += src[srcOff + 1] * wt;
                            b += src[srcOff + 2] * wt;
                        }
                    }
                    dst[dstOff] = r;
                    dst[dstOff + 1] = g;
                    dst[dstOff + 2] = b;
                    dst[dstOff + 3] = src[dstOff + 3];
                }
            }
            ctx.putImageData(output, 0, 0);
            setIsProcessing(false);
        }, 10);
    };

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = `sharpened-image.png`;
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageSharpenFilterIcon className="w-10 h-10 text-sky-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Sharpen Filter</h1>
            </div>

            {!imageSrc ? (
                 <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition shadow-lg text-lg">
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
                             <button onClick={applySharpen} disabled={isProcessing} className="w-full mt-4 py-2 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition shadow-md disabled:opacity-50">
                                {isProcessing ? 'Processing...' : 'Apply Sharpen'}
                            </button>
                            <button onClick={handleDownload} className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                Download Image
                            </button>
                            <button onClick={() => { setImageSrc(''); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="w-full mt-2 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                                Clear Image
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSharpenFilterPage;

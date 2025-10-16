import React, { useState, useRef, useEffect } from 'react';
import { AddRoundedCornersToImageIcon } from '../components/icons/AddRoundedCornersToImageIcon';

const AddRoundedCornersToImagePage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [radius, setRadius] = useState(50);
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
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(canvas.width - radius, 0);
            ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
            ctx.lineTo(canvas.width, canvas.height - radius);
            ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height);
            ctx.lineTo(radius, canvas.height);
            ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, 0, 0);
        }
    }, [imageSrc, radius]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'rounded-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <AddRoundedCornersToImageIcon className="w-10 h-10 text-violet-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Add Rounded Corners</h1>
            </div>

            {!imageSrc ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-violet-500 text-white font-bold rounded-lg hover:bg-violet-600 transition shadow-lg text-lg">
                        Select Image
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-2">Preview</h3>
                        <div className="p-4 checkerboard rounded-lg border flex items-center justify-center min-h-[400px]">
                            <canvas ref={canvasRef} className="max-w-full max-h-[500px]"></canvas>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Controls</h3>
                        <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                            <div>
                                <label className="block font-medium">Corner Radius: {radius}px</label>
                                <input type="range" min="0" max={Math.min(imageRef.current.naturalWidth, imageRef.current.naturalHeight) / 2} value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} className="w-full mt-1 accent-violet-500" />
                            </div>
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

export default AddRoundedCornersToImagePage;
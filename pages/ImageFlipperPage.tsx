import React, { useState, useRef, useEffect } from 'react';
import { ImageFlipperIcon } from '../components/icons/ImageFlipperIcon';

const ImageFlipperPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [flipHorizontal, setFlipHorizontal] = useState(false);
    const [flipVertical, setFlipVertical] = useState(false);
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
            ctx.save();
            const scaleH = flipHorizontal ? -1 : 1;
            const scaleV = flipVertical ? -1 : 1;
            const posX = flipHorizontal ? -canvas.width : 0;
            const posY = flipVertical ? -canvas.height : 0;
            ctx.scale(scaleH, scaleV);
            ctx.drawImage(img, posX, posY);
            ctx.restore();
        }
    }, [imageSrc, flipHorizontal, flipVertical]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'flipped-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageFlipperIcon className="w-10 h-10 text-green-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Flipper</h1>
            </div>

            {!imageSrc ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-green-400 text-white font-bold rounded-lg hover:bg-green-500 transition shadow-lg text-lg">
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
                               <button onClick={() => setFlipHorizontal(!flipHorizontal)} className={`w-full py-2 font-semibold rounded-lg transition ${flipHorizontal ? 'bg-green-400 text-white' : 'bg-gray-200'}`}>Flip Horizontal</button>
                               <button onClick={() => setFlipVertical(!flipVertical)} className={`w-full py-2 font-semibold rounded-lg transition ${flipVertical ? 'bg-green-400 text-white' : 'bg-gray-200'}`}>Flip Vertical</button>
                            </div>
                            <button onClick={handleDownload} className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                Download Flipped Image
                            </button>
                             <button onClick={() => { setImageSrc(''); setFlipHorizontal(false); setFlipVertical(false); if(fileInputRef.current) fileInputRef.current.value = ""; }} className="w-full mt-2 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                                Clear Image
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageFlipperPage;
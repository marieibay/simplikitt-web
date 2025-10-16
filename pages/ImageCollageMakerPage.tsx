import React, { useState, useRef, useEffect } from 'react';
import { ImageCollageMakerIcon } from '../components/icons/ImageCollageMakerIcon';

const ImageCollageMakerPage: React.FC = () => {
    const [images, setImages] = useState<string[]>(Array(4).fill(''));
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const newImages = [...images];
                newImages[index] = event.target?.result as string;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const loadedImages = images.map(src => {
            if (!src) return null;
            const img = new Image();
            img.src = src;
            return img;
        });

        const allImagesLoaded = Promise.all(loadedImages.map(img => img ? new Promise(resolve => img.onload = resolve) : Promise.resolve()));

        allImagesLoaded.then(() => {
            canvas.width = 1000;
            canvas.height = 1000;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const positions = [
                { x: 0, y: 0, w: 500, h: 500 },
                { x: 500, y: 0, w: 500, h: 500 },
                { x: 0, y: 500, w: 500, h: 500 },
                { x: 500, y: 500, w: 500, h: 500 },
            ];

            loadedImages.forEach((img, i) => {
                if (img) {
                    const pos = positions[i];
                    ctx.drawImage(img, pos.x, pos.y, pos.w, pos.h);
                }
            });
        });

    }, [images]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'collage.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageCollageMakerIcon className="w-10 h-10 text-orange-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Collage Maker (2x2)</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Upload Images</h3>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-md border">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className="aspect-square bg-gray-100 rounded-md flex items-center justify-center relative">
                                {images[i] ? (
                                    <img src={images[i]} alt={`Slot ${i+1}`} className="object-cover w-full h-full rounded-md" />
                                ) : (
                                    <span className="text-gray-400">Slot {i+1}</span>
                                )}
                                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, i)} className="absolute inset-0 opacity-0 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                     <h3 className="text-xl font-semibold mb-2">Collage Preview</h3>
                     <div className="p-4 bg-gray-100 rounded-lg border flex items-center justify-center">
                        <canvas ref={canvasRef} className="max-w-full h-auto shadow-lg" width="500" height="500"></canvas>
                     </div>
                     <button onClick={handleDownload} disabled={images.every(img => !img)} className="w-full mt-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg disabled:opacity-50">
                        Download Collage
                     </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCollageMakerPage;
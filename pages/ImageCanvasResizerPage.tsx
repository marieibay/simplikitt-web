import React, { useState, useRef, useEffect } from 'react';
import { ImageCanvasResizerIcon } from '../components/icons/ImageCanvasResizerIcon';

const ImageCanvasResizerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [position, setPosition] = useState('center');
    const [bgColor, setBgColor] = useState('#ffffff');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(new Image());
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageRef.current.src = event.target?.result as string;
                imageRef.current.onload = () => {
                    setImageSrc(imageRef.current.src);
                    setWidth(imageRef.current.naturalWidth);
                    setHeight(imageRef.current.naturalHeight);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (!imageSrc || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = imageRef.current;
        
        canvas.width = width;
        canvas.height = height;

        if (ctx) {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            let x = 0, y = 0;
            const dw = width - img.naturalWidth;
            const dh = height - img.naturalHeight;

            if (position.includes('Center')) x = dw / 2;
            if (position.includes('Right')) x = dw;
            if (position.includes('middle')) y = dh / 2;
            if (position.includes('Bottom')) y = dh;

            ctx.drawImage(img, x, y);
        }
    }, [imageSrc, width, height, position, bgColor]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'canvas-resized-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageCanvasResizerIcon className="w-10 h-10 text-purple-300" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Canvas Resizer</h1>
            </div>

            {!imageSrc ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-purple-300 text-white font-bold rounded-lg hover:bg-purple-400 transition shadow-lg text-lg">
                        Select Image
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold mb-2">Preview</h3>
                        <div className="p-4 checkerboard rounded-lg border flex items-center justify-center min-h-[400px]">
                            <canvas ref={canvasRef} className="max-w-full max-h-[500px] bg-white"></canvas>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Controls</h3>
                        <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                            <div className="flex items-center gap-4">
                                <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className="p-2 w-full border rounded-md" placeholder="Width"/>
                                <span className="text-gray-500 text-xl">&times;</span>
                                <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="p-2 w-full border rounded-md" placeholder="Height"/>
                            </div>
                            <div>
                                <label className="block font-medium">Position</label>
                                <select value={position} onChange={e => setPosition(e.target.value)} className="mt-1 w-full p-2 border rounded-md">
                                    <option value="topLeft">Top Left</option>
                                    <option value="topCenter">Top Center</option>
                                    <option value="topRight">Top Right</option>
                                    <option value="middleLeft">Middle Left</option>
                                    <option value="center">Center</option>
                                    <option value="middleRight">Middle Right</option>
                                    <option value="bottomLeft">Bottom Left</option>
                                    <option value="bottomCenter">Bottom Center</option>
                                    <option value="bottomRight">Bottom Right</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-medium">Background Color</label>
                                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 mt-1 p-1 border rounded-md" />
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

export default ImageCanvasResizerPage;
import React, { useState, useRef, useEffect } from 'react';
import { ImageTextOverlayIcon } from '../components/icons/ImageTextOverlayIcon';

const ImageTextOverlayPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [text, setText] = useState('Hello World');
    const [fontSize, setFontSize] = useState(50);
    const [fontColor, setFontColor] = useState('#FFFFFF');
    const [position, setPosition] = useState('center');
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
            
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = fontColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            let x = canvas.width / 2;
            let y = canvas.height / 2;

            if (position.includes('top')) y = fontSize;
            if (position.includes('bottom')) y = canvas.height - fontSize / 2;
            if (position.includes('left')) {
                ctx.textAlign = 'left';
                x = 20;
            }
            if (position.includes('right')) {
                ctx.textAlign = 'right';
                x = canvas.width - 20;
            }

            ctx.fillText(text, x, y);
        }
    }, [imageSrc, text, fontSize, fontColor, position]);

    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = 'text-overlay-image.png';
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageTextOverlayIcon className="w-10 h-10 text-blue-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Text Overlay</h1>
            </div>

            {!imageSrc ? (
                 <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-blue-400 text-white font-bold rounded-lg hover:bg-blue-500 transition shadow-lg text-lg">
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
                                <label className="block font-medium">Text</label>
                                <input type="text" value={text} onChange={e => setText(e.target.value)} className="w-full mt-1 p-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block font-medium">Font Size: {fontSize}px</label>
                                <input type="range" min="10" max="200" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full mt-1 accent-blue-400" />
                            </div>
                            <div>
                                <label className="block font-medium">Font Color</label>
                                <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} className="w-full h-10 mt-1 p-1 border rounded-md" />
                            </div>
                             <div>
                                <label className="block font-medium">Position</label>
                                <select value={position} onChange={e => setPosition(e.target.value)} className="mt-1 w-full p-2 border rounded-md">
                                    <option value="center">Center</option>
                                    <option value="topLeft">Top Left</option>
                                    <option value="topCenter">Top Center</option>
                                    <option value="topRight">Top Right</option>
                                    <option value="bottomLeft">Bottom Left</option>
                                    <option value="bottomCenter">Bottom Center</option>
                                    <option value="bottomRight">Bottom Right</option>
                                </select>
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

export default ImageTextOverlayPage;
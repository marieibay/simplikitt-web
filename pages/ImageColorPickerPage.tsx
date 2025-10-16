import React, { useState, useRef, MouseEvent } from 'react';
import { ImageColorPickerIcon } from '../components/icons/ImageColorPickerIcon';

const ImageColorPickerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [hoveredColor, setHoveredColor] = useState<string>('#ffffff');
    const [pickedColor, setPickedColor] = useState<string>('');
    const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, visible: false });
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const src = event.target?.result as string;
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    const canvas = canvasRef.current;
                    if (canvas) {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx?.drawImage(img, 0, 0);
                        setImageSrc(src);
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    };
    
    const rgbToHex = (r: number, g: number, b: number) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const color = rgbToHex(pixel[0], pixel[1], pixel[2]);
            setHoveredColor(color);
        }
        setMagnifierPos({ x: e.clientX, y: e.clientY, visible: true });
    };

    const handleMouseClick = () => {
        setPickedColor(hoveredColor);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageColorPickerIcon className="w-10 h-10 text-red-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Color Picker</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-2">Image Canvas</h3>
                    <div className="p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                        {imageSrc ? (
                            <canvas
                                ref={canvasRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => setMagnifierPos(p => ({ ...p, visible: false }))}
                                onClick={handleMouseClick}
                                className="max-w-full h-auto cursor-crosshair"
                            />
                        ) : (
                            <div className="text-center py-24">
                               <p className="text-gray-500">Upload an image to start picking colors.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                     <h3 className="text-xl font-semibold mb-2">Controls & Colors</h3>
                     <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"/>
                        <div className="text-center">
                            <p>Hover Color</p>
                            <div className="flex items-center justify-center gap-4 p-2 border rounded-md">
                                <div className="w-10 h-10 rounded-full border" style={{ backgroundColor: hoveredColor }}></div>
                                <span className="font-mono">{hoveredColor}</span>
                            </div>
                        </div>
                         <div className="text-center">
                            <p>Picked Color (Click to set)</p>
                            <div className="flex items-center justify-center gap-4 p-2 border rounded-md bg-gray-50">
                                <div className="w-10 h-10 rounded-full border" style={{ backgroundColor: pickedColor || 'transparent' }}></div>
                                <span className="font-mono">{pickedColor}</span>
                                {pickedColor && <button onClick={() => copyToClipboard(pickedColor)} className="text-sm bg-gray-200 px-2 py-1 rounded">Copy</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {magnifierPos.visible && imageSrc && (
                <div
                    className="pointer-events-none absolute w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden"
                    style={{ left: magnifierPos.x - 64, top: magnifierPos.y - 64 }}
                >
                    <canvas 
                       ref={(node) => {
                           if (node && canvasRef.current) {
                               const magnifyCtx = node.getContext('2d');
                               node.width = 128;
                               node.height = 128;
                               if(magnifyCtx) {
                                   magnifyCtx.imageSmoothingEnabled = false;
                                   const rect = canvasRef.current.getBoundingClientRect();
                                   const x = magnifierPos.x - rect.left;
                                   const y = magnifierPos.y - rect.top;
                                   magnifyCtx.drawImage(canvasRef.current, x-8, y-8, 16, 16, 0, 0, 128, 128);
                               }
                           }
                       }}
                    />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 border border-black"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageColorPickerPage;
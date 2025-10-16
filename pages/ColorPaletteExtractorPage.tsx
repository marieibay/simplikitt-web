import React, { useState, useRef } from 'react';
import { ColorPaletteExtractorIcon } from '../components/icons/ColorPaletteExtractorIcon';

const ColorPaletteExtractorPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [palette, setPalette] = useState<string[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setImageSrc(event.target?.result as string);
            reader.readAsDataURL(file);
            setPalette([]);
        }
    };
    
    // Simple quantization algorithm
    const extractPalette = () => {
        if (!imageSrc) return;
        setIsProcessing(true);
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            const pixelCount = pixels.length / 4;

            const colorMap: { [key: string]: number } = {};
            for (let i = 0; i < pixelCount; i += 10) { // Sample every 10 pixels
                const offset = i * 4;
                const r = pixels[offset] >> 4; // Quantize to 4 bits per channel
                const g = pixels[offset + 1] >> 4;
                const b = pixels[offset + 2] >> 4;
                const key = `${r},${g},${b}`;
                colorMap[key] = (colorMap[key] || 0) + 1;
            }

            const sortedColors = Object.keys(colorMap)
                .sort((a, b) => colorMap[b] - colorMap[a])
                .slice(0, 8) // Get top 8 colors
                .map(key => {
                    const [r, g, b] = key.split(',').map(c => parseInt(c, 10) * 16);
                    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
                });
            
            setPalette(sortedColors);
            setIsProcessing(false);
        };
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ColorPaletteExtractorIcon className="w-10 h-10 text-emerald-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Color Palette Extractor</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                     <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                         <h3 className="text-xl font-semibold">1. Upload Image</h3>
                         <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"/>
                         {imageSrc && <img src={imageSrc} alt="Input preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />}
                         <button onClick={extractPalette} disabled={!imageSrc || isProcessing} className="w-full py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition disabled:opacity-50">
                            {isProcessing ? 'Extracting...' : '2. Extract Palette'}
                         </button>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Extracted Colors</h3>
                    {palette.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {palette.map((color, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-full h-24 rounded-lg shadow-inner border" style={{ backgroundColor: color }}></div>
                                    <p className="mt-2 font-mono text-sm">{color}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center min-h-[200px] flex items-center justify-center">
                            <p className="text-gray-500">Your color palette will appear here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ColorPaletteExtractorPage;
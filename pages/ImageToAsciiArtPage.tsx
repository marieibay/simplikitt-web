import React, { useState, useRef } from 'react';
import { ImageToAsciiArtIcon } from '../components/icons/ImageToAsciiArtIcon';

const ASCII_CHARS = '`^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';

const ImageToAsciiArtPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [asciiArt, setAsciiArt] = useState<string>('');
    const [charDensity, setCharDensity] = useState(10); // Lower is more dense
    const [isProcessing, setIsProcessing] = useState(false);
    const imageRef = useRef<HTMLImageElement>(new Image());
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const src = event.target?.result as string;
                setImageSrc(src);
                imageRef.current.src = src;
            };
            reader.readAsDataURL(file);
        }
    };
    
    const convertToAscii = () => {
        setIsProcessing(true);
        setTimeout(() => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            const img = imageRef.current;
            const MAX_WIDTH = 100;
            const scaleFactor = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;
            canvas.width = img.width * scaleFactor;
            canvas.height = img.height * scaleFactor;
            
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let art = '';

            for (let y = 0; y < canvas.height; y += charDensity) {
                for (let x = 0; x < canvas.width; x += charDensity / 2) {
                    const i = (y * canvas.width + x) * 4;
                    const r = data[i], g = data[i+1], b = data[i+2];
                    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    const charIndex = Math.floor(brightness * (ASCII_CHARS.length - 1));
                    art += ASCII_CHARS[charIndex];
                }
                art += '\n';
            }
            setAsciiArt(art);
            setIsProcessing(false);
        }, 10);
    };
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(asciiArt);
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageToAsciiArtIcon className="w-10 h-10 text-lime-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image to ASCII Art</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Upload & Controls</h3>
                    <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lime-50 file:text-lime-700 hover:file:bg-lime-100"/>
                        {imageSrc && <img src={imageSrc} alt="Input preview" className="max-w-full h-auto max-h-48 mx-auto rounded-md" />}
                        <div>
                             <label className="block font-medium">Character Density (Lower is denser): {charDensity}</label>
                             <input type="range" min="4" max="20" step="1" value={charDensity} onChange={e => setCharDensity(parseInt(e.target.value))} className="w-full mt-1 accent-lime-500" />
                        </div>
                        <button onClick={convertToAscii} disabled={!imageSrc || isProcessing} className="w-full py-2 bg-lime-500 text-white font-bold rounded-lg hover:bg-lime-600 transition disabled:opacity-50">
                            {isProcessing ? 'Converting...' : 'Convert to ASCII'}
                        </button>
                    </div>
                </div>
                <div>
                     <h3 className="text-xl font-semibold mb-2">ASCII Result</h3>
                     <div className="relative">
                        <pre className="p-4 bg-gray-900 text-white rounded-lg text-xs leading-tight font-mono whitespace-pre overflow-auto min-h-[400px]">
                            {asciiArt || 'Your ASCII art will appear here...'}
                        </pre>
                        {asciiArt && <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded-md">Copy</button>}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ImageToAsciiArtPage;
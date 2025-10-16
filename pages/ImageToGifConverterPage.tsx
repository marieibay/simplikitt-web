import React, { useState, useRef } from 'react';
import { ImageToGifConverterIcon } from '../components/icons/ImageToGifConverterIcon';

// Simple GIF encoder for single frames
const toGif = (canvas: HTMLCanvasElement): Blob => {
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { width, height, data } = imageData;

    const indexedPixels = new Uint8Array(width * height);
    const colorPalette = new Uint8Array(256 * 3);
    const paletteMap: { [key: string]: number } = {};
    let paletteIndex = 0;

    // Simple quantization: just grab the first 256 colors
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2];
        const colorKey = `${r},${g},${b}`;
        if (!(colorKey in paletteMap)) {
            if (paletteIndex < 256) {
                paletteMap[colorKey] = paletteIndex;
                colorPalette[paletteIndex * 3] = r;
                colorPalette[paletteIndex * 3 + 1] = g;
                colorPalette[paletteIndex * 3 + 2] = b;
                paletteIndex++;
            }
        }
        indexedPixels[i/4] = paletteMap[colorKey] || 0;
    }

    const buffer = new ArrayBuffer(13 + (paletteIndex * 3) + 10 + (width * height) + 1);
    const view = new Uint8Array(buffer);
    let offset = 0;

    // Header
    view.set([0x47, 0x49, 0x46, 0x38, 0x39, 0x61]); // 'GIF89a'
    offset += 6;

    // Logical Screen Descriptor
    view[offset++] = width & 0xFF; view[offset++] = (width >> 8) & 0xFF;
    view[offset++] = height & 0xFF; view[offset++] = (height >> 8) & 0xFF;
    view[offset++] = 0xF7; // Packed field: Global Color Table Flag, 8 bits per color, sorted, 256 colors
    view[offset++] = 0; // Background color index
    view[offset++] = 0; // Pixel aspect ratio
    
    // Global Color Table
    view.set(colorPalette.slice(0, paletteIndex * 3), offset);
    offset += (paletteIndex * 3);
    for(let i = paletteIndex; i < 256; i++) {
      view[offset++] = 0; view[offset++] = 0; view[offset++] = 0;
    }

    // Image Descriptor
    view[offset++] = 0x2C; // Image separator
    view.set([0, 0, 0, 0], offset); // Image left/top
    offset += 4;
    view[offset++] = width & 0xFF; view[offset++] = (width >> 8) & 0xFF;
    view[offset++] = height & 0xFF; view[offset++] = (height >> 8) & 0xFF;
    view[offset++] = 0; // No local color table

    // Image Data (simplified, no LZW compression)
    view[offset++] = 8; // LZW Minimum Code Size
    const dataSize = width * height;
    view[offset++] = dataSize & 0xFF;
    view[offset++] = (dataSize >> 8) & 0xFF;
    view.set(indexedPixels, offset);
    offset += dataSize;
    view[offset++] = 0; // Block terminator

    // Trailer
    view[offset++] = 0x3B;

    return new Blob([buffer], {type: 'image/gif'});
};


const ImageToGifConverterPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [gifUrl, setGifUrl] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const src = event.target?.result as string;
                setImageSrc(src);
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    const canvas = canvasRef.current;
                    if(canvas) {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx?.drawImage(img, 0, 0);
                        const gifBlob = toGif(canvas);
                        setGifUrl(URL.createObjectURL(gifBlob));
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageToGifConverterIcon className="w-10 h-10 text-pink-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image to GIF Converter</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                     <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <h3 className="text-xl font-semibold">Upload Image</h3>
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"/>
                        {imageSrc && <img src={imageSrc} alt="Input preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />}
                    </div>
                </div>
                 <div>
                     <h3 className="text-xl font-semibold mb-2">Result</h3>
                     <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px] flex items-center justify-center">
                        {gifUrl ? (
                            <div className="text-center">
                                <img src={gifUrl} alt="GIF preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />
                                <a href={gifUrl} download="converted-image.gif" className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                    Download GIF
                                </a>
                            </div>
                        ) : (
                             <p className="text-gray-500 text-center">Your GIF will be generated here.</p>
                        )}
                     </div>
                </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default ImageToGifConverterPage;

import React, { useState, useRef } from 'react';
import { ImageToBmpConverterIcon } from '../components/icons/ImageToBmpConverterIcon';

// Custom BMP Encoder
const toBmp = (canvas: HTMLCanvasElement): Blob => {
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { width, height, data } = imageData;
    
    const fileHeaderSize = 14;
    const dibHeaderSize = 40;
    const rowPadding = (4 - (width * 3) % 4) % 4;
    const rowSize = width * 3 + rowPadding;
    const pixelDataSize = rowSize * height;
    const fileSize = fileHeaderSize + dibHeaderSize + pixelDataSize;

    const buffer = new ArrayBuffer(fileSize);
    const view = new DataView(buffer);

    // File Header
    view.setUint16(0, 0x424D, false); // 'BM'
    view.setUint32(2, fileSize, true);
    view.setUint32(10, fileHeaderSize + dibHeaderSize, true);
    
    // DIB Header
    view.setUint32(14, dibHeaderSize, true);
    view.setInt32(18, width, true);
    view.setInt32(22, -height, true); // Negative height for top-down bitmap
    view.setUint16(26, 1, true); // Color planes
    view.setUint16(28, 24, true); // Bits per pixel
    view.setUint32(30, 0, true); // Compression (none)
    view.setUint32(34, pixelDataSize, true);

    // Pixel Data
    let offset = fileHeaderSize + dibHeaderSize;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            view.setUint8(offset++, data[i + 2]); // B
            view.setUint8(offset++, data[i + 1]); // G
            view.setUint8(offset++, data[i]);     // R
        }
        for (let p = 0; p < rowPadding; p++) {
            view.setUint8(offset++, 0);
        }
    }

    return new Blob([buffer], { type: 'image/bmp' });
};

const ImageToBmpConverterPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [bmpUrl, setBmpUrl] = useState<string>('');
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
                        const bmpBlob = toBmp(canvas);
                        setBmpUrl(URL.createObjectURL(bmpBlob));
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageToBmpConverterIcon className="w-10 h-10 text-cyan-800" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image to BMP Converter</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                     <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <h3 className="text-xl font-semibold">Upload Image</h3>
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"/>
                        {imageSrc && <img src={imageSrc} alt="Input preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />}
                    </div>
                </div>
                 <div>
                     <h3 className="text-xl font-semibold mb-2">Result</h3>
                     <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px] flex items-center justify-center">
                        {bmpUrl ? (
                            <div className="text-center">
                                <p className="mb-4">BMP conversion successful.</p>
                                <a href={bmpUrl} download="converted-image.bmp" className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                    Download BMP Image
                                </a>
                            </div>
                        ) : (
                             <p className="text-gray-500 text-center">Your downloadable BMP file will be generated here.</p>
                        )}
                     </div>
                </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default ImageToBmpConverterPage;
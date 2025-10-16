import React, { useState, useRef } from 'react';
import { ImageMetadataRemoverIcon } from '../components/icons/ImageMetadataRemoverIcon';

declare const piexif: any;

const ImageMetadataRemoverPage: React.FC = () => {
    const [originalImage, setOriginalImage] = useState<string>('');
    const [cleanImage, setCleanImage] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);
    const originalFileRef = useRef<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            originalFileRef.current = file;
            const reader = new FileReader();
            reader.onload = (event) => {
                setOriginalImage(event.target?.result as string);
                setCleanImage('');
            };
            reader.readAsDataURL(file);
        }
    };
    
    const removeMetadata = () => {
        if (!originalImage || !originalFileRef.current) return;
        setIsProcessing(true);
        
        const fileType = originalFileRef.current.type;
        
        if (fileType === 'image/jpeg') {
            try {
                const stripped = piexif.remove(originalImage);
                setCleanImage(stripped);
            } catch(e) {
                console.error("piexif.js failed, falling back to canvas method.", e);
                // Fallback for corrupted EXIF
                processWithCanvas();
            }
        } else {
            // For PNG, GIF, etc., canvas method is reliable
            processWithCanvas();
        }
        setIsProcessing(false);
    };

    const processWithCanvas = () => {
        const img = new Image();
        img.src = originalImage;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL(originalFileRef.current!.type);
            setCleanImage(dataUrl);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageMetadataRemoverIcon className="w-10 h-10 text-red-700" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Metadata Remover</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
                    <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"/>
                        {originalImage && <img src={originalImage} alt="Input preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />}
                        <button onClick={removeMetadata} disabled={!originalImage || isProcessing} className="w-full py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition disabled:opacity-50">
                            {isProcessing ? 'Stripping Metadata...' : 'Remove Metadata'}
                        </button>
                    </div>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold mb-2">Cleaned Image</h3>
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px] flex items-center justify-center">
                        {cleanImage ? (
                            <div className="text-center">
                                <img src={cleanImage} alt="Cleaned preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />
                                <a href={cleanImage} download={`clean-${originalFileRef.current?.name}`} className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                    Download Clean Image
                                </a>
                            </div>
                        ) : (
                             <p className="text-gray-500 text-center">Your metadata-free image will appear here.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageMetadataRemoverPage;

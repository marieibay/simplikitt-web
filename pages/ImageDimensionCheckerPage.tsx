import React, { useState, useRef } from 'react';
import { ImageDimensionCheckerIcon } from '../components/icons/ImageDimensionCheckerIcon';

const ImageDimensionCheckerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [dimensions, setDimensions] = useState<{w: number, h: number} | null>(null);
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
                    setDimensions({ w: img.naturalWidth, h: img.naturalHeight });
                };
            };
            reader.readAsDataURL(file);
        }
    };
    
    const clearImage = () => {
        setImageSrc('');
        setDimensions(null);
        if(fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageDimensionCheckerIcon className="w-10 h-10 text-green-700" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Dimension Checker</h1>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border text-center">
                <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition shadow-lg text-lg">
                    Select Image
                </button>
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                
                {imageSrc && (
                    <div className="mt-8">
                        <img src={imageSrc} alt="Preview" className="max-w-sm h-auto mx-auto rounded-lg shadow-md border" />
                        <div className="mt-6 bg-gray-100 p-4 rounded-lg inline-block">
                             <p className="text-2xl font-bold text-gray-800">
                                {dimensions?.w} <span className="font-normal text-gray-500">&times;</span> {dimensions?.h}
                             </p>
                             <p className="text-sm text-gray-600">Width &times; Height (pixels)</p>
                        </div>
                        <br/>
                        <button onClick={clearImage} className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageDimensionCheckerPage;

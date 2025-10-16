import React, { useState, useRef } from 'react';
import { ImageTilingPreviewerIcon } from '../components/icons/ImageTilingPreviewerIcon';

const ImageTilingPreviewerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImageSrc(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageTilingPreviewerIcon className="w-10 h-10 text-gray-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Tiling Previewer</h1>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md border mb-8">
                 <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
                 <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"/>
            </div>

            <h3 className="text-xl font-semibold mb-2">Tiled Preview</h3>
            <div 
                className="w-full h-[60vh] rounded-lg border-2 border-dashed border-gray-300"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto'
                }}
            >
                {!imageSrc && (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 bg-white/70 p-4 rounded-md">Upload an image to see the tiled preview.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageTilingPreviewerPage;
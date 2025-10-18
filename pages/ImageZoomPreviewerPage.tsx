import React, { useState, useRef } from 'react';
import { ImageZoomPreviewerIcon } from '../components/icons/ImageZoomPreviewerIcon';

const ImageZoomPreviewerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [zoom, setZoom] = useState(1);
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageZoomPreviewerIcon className="w-10 h-10 text-blue-700" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Zoom Previewer</h1>
            </div>
            {!imageSrc ? (
                <input type="file" accept="image/*" onChange={e => {
                    const file = e.target.files?.[0];
                    if(file) {
                        const reader = new FileReader();
                        reader.onload = e => setImageSrc(e.target?.result as string);
                        reader.readAsDataURL(file);
                    }
                }} />
            ) : (
                <div>
                    <div className="w-full h-[60vh] overflow-auto border rounded-lg flex items-center justify-center bg-gray-100">
                        <img src={imageSrc} alt="zoom preview" style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }} />
                    </div>
                    <input type="range" min="0.1" max="5" step="0.1" value={zoom} onChange={e => setZoom(Number(e.target.value))} className="w-full mt-4" />
                </div>
            )}
        </div>
    );
};

export default ImageZoomPreviewerPage;

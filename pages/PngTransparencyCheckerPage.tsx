import React, { useState, useRef } from 'react';
import { PngTransparencyCheckerIcon } from '../components/icons/PngTransparencyCheckerIcon';

const PngTransparencyCheckerPage: React.FC = () => {
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
                <PngTransparencyCheckerIcon className="w-10 h-10 text-slate-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PNG Transparency Checker</h1>
            </div>

            <div className="space-y-6">
                 <div className="p-6 bg-white rounded-lg shadow-md border">
                     <h3 className="text-xl font-semibold mb-4">Upload PNG Image</h3>
                     <input type="file" accept="image/png" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100"/>
                </div>

                <div className="p-4 checkerboard rounded-lg border-2 border-dashed border-gray-300 min-h-[400px] flex items-center justify-center">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Transparency Check" className="max-w-full max-h-[60vh] shadow-lg" />
                    ) : (
                        <p className="text-gray-500 bg-white/50 p-4 rounded-md">Upload a PNG to check its transparency.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PngTransparencyCheckerPage;
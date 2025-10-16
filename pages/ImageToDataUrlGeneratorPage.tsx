import React, { useState, useRef } from 'react';
import { ImageToDataUrlGeneratorIcon } from '../components/icons/ImageToDataUrlGeneratorIcon';

const ImageToDataUrlGeneratorPage: React.FC = () => {
    const [dataUrl, setDataUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setDataUrl(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(dataUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    const clear = () => {
        setDataUrl('');
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageToDataUrlGeneratorIcon className="w-10 h-10 text-indigo-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image to Data URL</h1>
            </div>

            <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-md border">
                     <h3 className="text-xl font-semibold mb-4">Upload Image</h3>
                     <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"/>
                </div>

                {dataUrl && (
                    <div className="p-6 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-semibold mb-4">Generated Data URL</h3>
                        <div className="relative">
                            <textarea value={dataUrl} readOnly className="w-full h-48 p-2 font-mono text-xs border rounded-md bg-gray-50"></textarea>
                            <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md">
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <button onClick={clear} className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">Clear</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageToDataUrlGeneratorPage;
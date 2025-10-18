import React, { useState } from 'react';
import { ImageHeaderInfoViewerIcon } from '../components/icons/ImageHeaderInfoViewerIcon';

const ImageHeaderInfoViewerPage: React.FC = () => {
    const [header, setHeader] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                const buffer = e.target?.result as ArrayBuffer;
                const view = new Uint8Array(buffer, 0, 16);
                const hex = Array.from(view).map(b => b.toString(16).padStart(2, '0')).join(' ');
                setHeader(hex.toUpperCase());
            }
            reader.readAsArrayBuffer(file);
        }
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageHeaderInfoViewerIcon className="w-10 h-10 text-gray-700" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">File Header Info Viewer</h1>
            </div>
            <input type="file" onChange={handleFileChange} />
            {header && <pre className="mt-4 p-4 bg-gray-100 rounded font-mono">{header}</pre>}
        </div>
    );
};

export default ImageHeaderInfoViewerPage;

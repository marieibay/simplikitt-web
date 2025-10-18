import React, { useState } from 'react';
import { ImageDownloadButtonGeneratorIcon } from '../components/icons/ImageDownloadButtonGeneratorIcon';

const ImageDownloadButtonGeneratorPage: React.FC = () => {
    const [dataUrl, setDataUrl] = useState('');
    const [fileName, setFileName] = useState('image.png');
    const [buttonText, setButtonText] = useState('Download Image');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = e => setDataUrl(e.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const code = `<a href="${dataUrl}" download="${fileName}">${buttonText}</a>`;

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageDownloadButtonGeneratorIcon className="w-10 h-10 text-green-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Download Button Generator</h1>
            </div>
            <div className="space-y-4">
                <input type="file" onChange={handleFileChange} />
                <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} placeholder="File Name" className="w-full p-2 border rounded" />
                <input type="text" value={buttonText} onChange={e => setButtonText(e.target.value)} placeholder="Button Text" className="w-full p-2 border rounded" />
                {dataUrl && <pre className="p-4 bg-gray-100 rounded font-mono">{code}</pre>}
            </div>
        </div>
    );
};

export default ImageDownloadButtonGeneratorPage;

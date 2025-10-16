import React, { useState, useRef } from 'react';
import { ImageToCssBackgroundGeneratorIcon } from '../components/icons/ImageToCssBackgroundGeneratorIcon';

const ImageToCssBackgroundGeneratorPage: React.FC = () => {
    const [dataUrl, setDataUrl] = useState('');
    const [bgRepeat, setBgRepeat] = useState('no-repeat');
    const [bgSize, setBgSize] = useState('cover');
    const [bgPosition, setBgPosition] = useState('center center');
    const [copied, setCopied] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setDataUrl(event.target?.result as string);
            reader.readAsDataURL(file);
        }
    };
    
    const cssCode = `.your-class {\n  background-image: url('${dataUrl}');\n  background-repeat: ${bgRepeat};\n  background-size: ${bgSize};\n  background-position: ${bgPosition};\n}`;
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(cssCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageToCssBackgroundGeneratorIcon className="w-10 h-10 text-blue-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Background Generator</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-xl font-semibold mb-2">Controls</h3>
                    <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <div>
                            <label className="block font-medium">1. Upload Image</label>
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="mt-1 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                        </div>
                        <div>
                            <label className="block font-medium">Background Repeat</label>
                            <select value={bgRepeat} onChange={e => setBgRepeat(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
                                <option>no-repeat</option><option>repeat</option><option>repeat-x</option><option>repeat-y</option>
                            </select>
                        </div>
                         <div>
                            <label className="block font-medium">Background Size</label>
                            <select value={bgSize} onChange={e => setBgSize(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
                                <option>cover</option><option>contain</option><option>auto</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-medium">Background Position</label>
                            <select value={bgPosition} onChange={e => setBgPosition(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
                                <option>center center</option><option>left top</option><option>left center</option><option>left bottom</option><option>right top</option><option>right center</option><option>right bottom</option><option>center top</option><option>center bottom</option>
                            </select>
                        </div>
                    </div>
                     <div className="mt-4 p-4 bg-white rounded-lg shadow-md border">
                        <h3 className="text-xl font-semibold mb-2">Generated CSS</h3>
                        <div className="relative">
                            <pre className="p-4 bg-gray-900 text-white rounded-lg text-sm font-mono whitespace-pre-wrap overflow-auto min-h-[150px]">
                                {dataUrl ? cssCode : '/* CSS will appear here... */'}
                            </pre>
                            {dataUrl && <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded-md">{copied ? 'Copied!': 'Copy'}</button>}
                         </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[400px]" style={{
                        backgroundImage: `url(${dataUrl})`,
                        backgroundRepeat: bgRepeat,
                        backgroundSize: bgSize,
                        backgroundPosition: bgPosition
                    }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageToCssBackgroundGeneratorPage;

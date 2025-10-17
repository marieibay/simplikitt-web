import React, { useState } from 'react';
import { FontStackGeneratorIcon } from '../components/icons/FontStackGeneratorIcon';

const commonStacks = {
    "Sans-Serif": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    "Serif": "Georgia, 'Times New Roman', Times, serif",
    "Monospace": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

const FontStackGeneratorPage: React.FC = () => {
    const [fontStack, setFontStack] = useState(commonStacks["Sans-Serif"]);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`font-family: ${fontStack};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <FontStackGeneratorIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Font Stack Generator</h1>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border space-y-4 max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2">
                    {Object.keys(commonStacks).map(name => (
                        <button key={name} onClick={() => setFontStack(commonStacks[name as keyof typeof commonStacks])} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                            {name}
                        </button>
                    ))}
                </div>
                
                <textarea 
                    value={fontStack}
                    onChange={e => setFontStack(e.target.value)}
                    className="w-full h-32 p-3 font-mono border rounded-lg"
                />

                <div className="relative">
                    <pre className="p-4 bg-gray-800 text-white rounded-lg overflow-x-auto">
                        {`font-family: ${fontStack};`}
                    </pre>
                    <button onClick={handleCopy} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 rounded-md text-white hover:bg-gray-700">
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FontStackGeneratorPage;

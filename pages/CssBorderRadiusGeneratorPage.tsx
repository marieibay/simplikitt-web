import React, { useState } from 'react';
import { CssBorderRadiusGeneratorIcon } from '../components/icons/CssBorderRadiusGeneratorIcon';

const CssBorderRadiusGeneratorPage: React.FC = () => {
    const [topLeft, setTopLeft] = useState(25);
    const [topRight, setTopRight] = useState(25);
    const [bottomRight, setBottomRight] = useState(25);
    const [bottomLeft, setBottomLeft] = useState(25);
    const [copied, setCopied] = useState(false);

    const borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`border-radius: ${borderRadius};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CssBorderRadiusGeneratorIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Border Radius Generator</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
                    <div><label>Top Left: {topLeft}px</label><input type="range" min="0" max="200" value={topLeft} onChange={e => setTopLeft(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Top Right: {topRight}px</label><input type="range" min="0" max="200" value={topRight} onChange={e => setTopRight(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Bottom Right: {bottomRight}px</label><input type="range" min="0" max="200" value={bottomRight} onChange={e => setBottomRight(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Bottom Left: {bottomLeft}px</label><input type="range" min="0" max="200" value={bottomLeft} onChange={e => setBottomLeft(Number(e.target.value))} className="w-full"/></div>
                </div>
                <div>
                    <div className="w-full h-64 rounded-lg bg-gray-200 flex items-center justify-center p-8">
                        <div className="w-48 h-48 bg-indigo-500" style={{ borderRadius }}></div>
                    </div>
                    <div className="relative mt-4">
                        <pre className="p-4 bg-gray-800 text-white rounded-lg">border-radius: {borderRadius};</pre>
                        <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 rounded text-white">{copied ? 'Copied!' : 'Copy'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssBorderRadiusGeneratorPage;

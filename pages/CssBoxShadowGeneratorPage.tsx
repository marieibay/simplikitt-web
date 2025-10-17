import React, { useState } from 'react';
import { CssBoxShadowGeneratorIcon } from '../components/icons/CssBoxShadowGeneratorIcon';

const CssBoxShadowGeneratorPage: React.FC = () => {
    const [offsetX, setOffsetX] = useState(10);
    const [offsetY, setOffsetY] = useState(10);
    const [blur, setBlur] = useState(5);
    const [spread, setSpread] = useState(0);
    const [color, setColor] = useState('#000000');
    const [opacity, setOpacity] = useState(0.5);
    const [inset, setInset] = useState(false);
    const [copied, setCopied] = useState(false);

    const colorWithOpacity = () => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    const shadow = `${inset ? 'inset ' : ''}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${colorWithOpacity()}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`box-shadow: ${shadow};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CssBoxShadowGeneratorIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Box Shadow Generator</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
                    <div><label>Offset X: {offsetX}px</label><input type="range" min="-50" max="50" value={offsetX} onChange={e => setOffsetX(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Offset Y: {offsetY}px</label><input type="range" min="-50" max="50" value={offsetY} onChange={e => setOffsetY(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Blur: {blur}px</label><input type="range" min="0" max="50" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Spread: {spread}px</label><input type="range" min="-50" max="50" value={spread} onChange={e => setSpread(Number(e.target.value))} className="w-full"/></div>
                    <div><label>Opacity: {opacity}</label><input type="range" min="0" max="1" step="0.05" value={opacity} onChange={e => setOpacity(Number(e.target.value))} className="w-full"/></div>
                    <div className="flex items-center gap-4">
                        <label>Color</label><input type="color" value={color} onChange={e => setColor(e.target.value)} />
                        <label className="flex items-center gap-2"><input type="checkbox" checked={inset} onChange={() => setInset(!inset)} /> Inset</label>
                    </div>
                </div>
                <div>
                    <div className="w-full h-64 rounded-lg bg-gray-200 flex items-center justify-center p-8">
                        <div className="w-32 h-32 bg-white rounded-lg" style={{ boxShadow: shadow }}></div>
                    </div>
                    <div className="relative mt-4">
                        <pre className="p-4 bg-gray-800 text-white rounded-lg overflow-x-auto">box-shadow: {shadow};</pre>
                        <button onClick={copyToClipboard} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 rounded text-white">{copied ? 'Copied!' : 'Copy'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssBoxShadowGeneratorPage;

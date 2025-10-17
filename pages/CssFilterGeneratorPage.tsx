import React, { useState } from 'react';
import { CssFilterGeneratorIcon } from '../components/icons/CssFilterGeneratorIcon';

const CssFilterGeneratorPage: React.FC = () => {
    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [grayscale, setGrayscale] = useState(0);
    const [hueRotate, setHueRotate] = useState(0);
    const [invert, setInvert] = useState(0);
    const [opacity, setOpacity] = useState(100);
    const [saturate, setSaturate] = useState(100);
    const [sepia, setSepia] = useState(0);

    const filterValue = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)`;

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CssFilterGeneratorIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Filter Generator</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-2 bg-white p-6 rounded-lg shadow-md border">
                    <label>Blur: {blur}px</label><input type="range" min="0" max="20" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Brightness: {brightness}%</label><input type="range" min="0" max="200" value={brightness} onChange={e => setBrightness(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Contrast: {contrast}%</label><input type="range" min="0" max="200" value={contrast} onChange={e => setContrast(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Grayscale: {grayscale}%</label><input type="range" min="0" max="100" value={grayscale} onChange={e => setGrayscale(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Hue Rotate: {hueRotate}deg</label><input type="range" min="0" max="360" value={hueRotate} onChange={e => setHueRotate(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Invert: {invert}%</label><input type="range" min="0" max="100" value={invert} onChange={e => setInvert(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Opacity: {opacity}%</label><input type="range" min="0" max="100" value={opacity} onChange={e => setOpacity(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Saturate: {saturate}%</label><input type="range" min="0" max="200" value={saturate} onChange={e => setSaturate(Number(e.target.value))} className="w-full accent-indigo-500"/>
                    <label>Sepia: {sepia}%</label><input type="range" min="0" max="100" value={sepia} onChange={e => setSepia(Number(e.target.value))} className="w-full accent-indigo-500"/>
                </div>
                <div>
                    <img src="https://picsum.photos/400" alt="preview" className="rounded-lg" style={{ filter: filterValue }} />
                    <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto text-sm">filter: {filterValue};</pre>
                </div>
            </div>
        </div>
    );
};

export default CssFilterGeneratorPage;

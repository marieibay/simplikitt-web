import React, { useState, useMemo } from 'react';
import { ColorContrastCheckerIcon } from '../components/icons/ColorContrastCheckerIcon';

const ColorContrastCheckerPage: React.FC = () => {
    const [textColor, setTextColor] = useState('#ffffff');
    const [bgColor, setBgColor] = useState('#000000');

    const getLuminance = (hex: string) => {
        const rgb = parseInt(hex.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        const a = [r, g, b].map(v => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    };

    const contrast = useMemo(() => {
        const lum1 = getLuminance(textColor);
        const lum2 = getLuminance(bgColor);
        const brightest = Math.max(lum1, lum2);
        const darkest = Math.min(lum1, lum2);
        return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
    }, [textColor, bgColor]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ColorContrastCheckerIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Color Contrast Checker</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div><label>Text Color</label><input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} /><input type="text" value={textColor} onChange={e => setTextColor(e.target.value)} className="ml-2 p-1 border rounded"/></div>
                    <div><label>Background Color</label><input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} /><input type="text" value={bgColor} onChange={e => setBgColor(e.target.value)} className="ml-2 p-1 border rounded"/></div>
                </div>
                <div>
                    <div className="p-8 rounded-lg text-center" style={{ backgroundColor: bgColor, color: textColor }}>
                        <h2 className="text-2xl font-bold">Preview Text</h2>
                        <p>This is how your text will look.</p>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-lg">Contrast Ratio</p>
                        <p className="text-4xl font-bold">{contrast}</p>
                        <div>
                            <p>WCAG AA: {Number(contrast) >= 4.5 ? '✅ Pass' : '❌ Fail'}</p>
                            <p>WCAG AAA: {Number(contrast) >= 7 ? '✅ Pass' : '❌ Fail'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorContrastCheckerPage;

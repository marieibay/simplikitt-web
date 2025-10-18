import React, { useState, useCallback, useEffect } from 'react';
import { HexRgbConverterIcon } from '../components/icons/HexRgbConverterIcon';

const HexRgbConverterPage: React.FC = () => {
    const [hex, setHex] = useState('#ffffff');
    const [rgb, setRgb] = useState('255, 255, 255');

    const hexToRgb = (h: string) => {
        let r = '0', g = '0', b = '0';
        if (h.length === 4) {
            r = '0x' + h[1] + h[1];
            g = '0x' + h[2] + h[2];
            b = '0x' + h[3] + h[3];
        } else if (h.length === 7) {
            r = '0x' + h[1] + h[2];
            g = '0x' + h[3] + h[4];
            b = '0x' + h[5] + h[6];
        }
        return `${+r}, ${+g}, ${+b}`;
    };

    const rgbToHex = (r: number, g: number, b: number) => 
        '#' + [r, g, b].map(x => {
            const hexVal = x.toString(16);
            return hexVal.length === 1 ? '0' + hexVal : hexVal;
        }).join('');

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHex = e.target.value;
        setHex(newHex);
        if (/^#[0-9A-F]{6}$/i.test(newHex) || /^#[0-9A-F]{3}$/i.test(newHex)) {
            setRgb(hexToRgb(newHex));
        }
    };
    
    const handleRgbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newRgb = e.target.value;
        setRgb(newRgb);
        const parts = newRgb.split(',').map(s => parseInt(s.trim(), 10));
        if (parts.length === 3 && parts.every(p => !isNaN(p) && p >= 0 && p <= 255)) {
            setHex(rgbToHex(parts[0], parts[1], parts[2]));
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <HexRgbConverterIcon className="w-10 h-10 text-rose-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Hex/RGB Color Converter</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
                <div className="w-full h-32 rounded-lg border" style={{ backgroundColor: hex }}></div>
                <div>
                    <label className="block font-medium">Hex</label>
                    <input type="text" value={hex} onChange={handleHexChange} className="w-full p-2 border rounded-md font-mono"/>
                </div>
                 <div>
                    <label className="block font-medium">RGB</label>
                    <input type="text" value={rgb} onChange={handleRgbChange} className="w-full p-2 border rounded-md font-mono"/>
                </div>
            </div>
        </div>
    );
};

export default HexRgbConverterPage;

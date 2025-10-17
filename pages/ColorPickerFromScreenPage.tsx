import React, { useState } from 'react';
import { ColorPickerFromScreenIcon } from '../components/icons/ColorPickerFromScreenIcon';

const ColorPickerFromScreenPage: React.FC = () => {
    const [color, setColor] = useState('#ffffff');
    const [copied, setCopied] = useState(false);

    const openPicker = async () => {
        if (!('EyeDropper' in window)) {
            alert('Your browser does not support the EyeDropper API.');
            return;
        }
        const eyeDropper = new (window as any).EyeDropper();
        try {
            const result = await eyeDropper.open();
            setColor(result.sRGBHex);
        } catch (e) {
            console.log('Picker cancelled');
        }
    };

    const copyColor = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ColorPickerFromScreenIcon className="w-10 h-10 text-rose-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Color Picker from Screen</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
                <button onClick={openPicker} className="px-6 py-3 bg-rose-500 text-white font-bold rounded-lg text-lg">
                    Pick a Color
                </button>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-24 h-24 rounded-full border-4 border-gray-200" style={{ backgroundColor: color }}></div>
                    <p className="text-3xl font-mono">{color}</p>
                </div>
                <button onClick={copyColor} className="px-4 py-2 bg-gray-200 rounded-md">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default ColorPickerFromScreenPage;

import React, { useState } from 'react';
import { ColorPaletteGeneratorIcon } from '../components/icons/ColorPaletteGeneratorIcon';

const ColorPaletteGeneratorPage: React.FC = () => {
  const [palette, setPalette] = useState<string[]>([]);

  const generatePalette = () => {
    const newPalette: string[] = [];
    const baseHue = Math.random() * 360;
    for(let i = 0; i < 5; i++) {
        const hue = (baseHue + i * (360/5)) % 360;
        const saturation = 50 + Math.random() * 50;
        const lightness = 40 + Math.random() * 30;
        newPalette.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    setPalette(newPalette);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ColorPaletteGeneratorIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Color Palette Generator</h1>
      </div>
      <button onClick={generatePalette} className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg mb-4">Generate Palette</button>
      <div className="flex h-64">
          {palette.map((color, i) => (
              <div key={i} style={{ backgroundColor: color }} className="flex-1 flex items-end justify-center p-2 text-white font-mono text-sm shadow-inner">
                  {color}
              </div>
          ))}
      </div>
    </div>
  );
};

export default ColorPaletteGeneratorPage;

import React, { useState, useMemo } from 'react';
import { ColorPaletteGeneratorIcon } from '../components/icons/ColorPaletteGeneratorIcon';

// Basic color manipulation functions
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const ColorPaletteGeneratorPage: React.FC = () => {
  const [baseColor, setBaseColor] = useState('#3b82f6');

  const palette = useMemo(() => {
    const baseRgb = hexToRgb(baseColor);
    if (!baseRgb) return [];
    
    const shades = Array.from({ length: 5 }, (_, i) => {
      const factor = (i - 2) * 0.2; // -0.4, -0.2, 0, 0.2, 0.4
      const r = Math.max(0, Math.min(255, baseRgb.r + 255 * factor));
      const g = Math.max(0, Math.min(255, baseRgb.g + 255 * factor));
      const b = Math.max(0, Math.min(255, baseRgb.b + 255 * factor));
      return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
    });
    return shades;
  }, [baseColor]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ColorPaletteGeneratorIcon className="w-10 h-10 text-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Color Palette Generator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-xl mx-auto space-y-4">
        <div>
          <label className="block font-medium">Base Color</label>
          <div className="flex items-center gap-2 mt-1">
            <input type="color" value={baseColor} onChange={e => setBaseColor(e.target.value)} className="h-10 w-10"/>
            <input type="text" value={baseColor} onChange={e => setBaseColor(e.target.value)} className="p-2 border rounded w-full" />
          </div>
        </div>
        <div className="flex">
          {palette.map((color, i) => (
            <div key={i} className="flex-1 text-center">
              <div style={{ backgroundColor: color }} className="h-24"></div>
              <p className="font-mono text-sm mt-1">{color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteGeneratorPage;

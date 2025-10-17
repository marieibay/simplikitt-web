import React, { useState, useMemo } from 'react';
import { ColorContrastCheckerIcon } from '../components/icons/ColorContrastCheckerIcon';

const ColorContrastCheckerPage: React.FC = () => {
  const [fgColor, setFgColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#000000');

  const getLuminance = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;

    r /= 255; g /= 255; b /= 255;

    r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const contrastRatio = useMemo(() => {
    const lum1 = getLuminance(fgColor);
    const lum2 = getLuminance(bgColor);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }, [fgColor, bgColor]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ColorContrastCheckerIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Color Contrast Checker</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
          <div>
            <label className="block font-medium">Foreground Color</label>
            <div className="flex items-center gap-2 mt-1">
              <input type="color" value={fgColor} onChange={e => setFgColor(e.target.value)} className="h-10 w-10"/>
              <input type="text" value={fgColor} onChange={e => setFgColor(e.target.value)} className="p-2 border rounded w-full" />
            </div>
          </div>
          <div>
            <label className="block font-medium">Background Color</label>
             <div className="flex items-center gap-2 mt-1">
              <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="h-10 w-10"/>
              <input type="text" value={bgColor} onChange={e => setBgColor(e.target.value)} className="p-2 border rounded w-full" />
            </div>
          </div>
        </div>
        <div>
          <div className="p-8 rounded-lg border-2 border-gray-200" style={{ backgroundColor: bgColor, color: fgColor }}>
            <h2 className="text-2xl font-bold">Preview Text</h2>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="mt-4 text-center bg-white p-6 rounded-lg shadow-md border">
            <p className="text-lg">Contrast Ratio</p>
            <p className="text-4xl font-bold">{contrastRatio.toFixed(2)}:1</p>
            {contrastRatio >= 4.5 && <p className="text-green-600 font-semibold mt-2">Passes WCAG AA</p>}
            {contrastRatio < 4.5 && <p className="text-red-600 font-semibold mt-2">Fails WCAG AA</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorContrastCheckerPage;

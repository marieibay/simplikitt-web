import React, { useState } from 'react';
import { CssBoxShadowGeneratorIcon } from '../components/icons/CssBoxShadowGeneratorIcon';

const CssBoxShadowGeneratorPage: React.FC = () => {
  const [offsetX, setOffsetX] = useState(10);
  const [offsetY, setOffsetY] = useState(10);
  const [blur, setBlur] = useState(20);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.5);
  const [inset, setInset] = useState(false);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const shadow = `${inset ? 'inset ' : ''}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssBoxShadowGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Box Shadow Generator</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
          <label>Offset X: {offsetX}px</label>
          <input type="range" min="-50" max="50" value={offsetX} onChange={e => setOffsetX(Number(e.target.value))} className="w-full accent-indigo-500" />
          <label>Offset Y: {offsetY}px</label>
          <input type="range" min="-50" max="50" value={offsetY} onChange={e => setOffsetY(Number(e.target.value))} className="w-full accent-indigo-500" />
          <label>Blur: {blur}px</label>
          <input type="range" min="0" max="100" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full accent-indigo-500" />
          <label>Spread: {spread}px</label>
          <input type="range" min="-50" max="50" value={spread} onChange={e => setSpread(Number(e.target.value))} className="w-full accent-indigo-500" />
          <label>Opacity: {opacity}</label>
          <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={e => setOpacity(Number(e.target.value))} className="w-full accent-indigo-500" />
          <label>Color</label>
          <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          <label>
            <input type="checkbox" checked={inset} onChange={() => setInset(!inset)} className="mr-2" /> Inset
          </label>
        </div>
        <div>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg" style={{ boxShadow: shadow }}>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">Preview</div>
          </div>
          <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto">box-shadow: {shadow};</pre>
        </div>
      </div>
    </div>
  );
};

export default CssBoxShadowGeneratorPage;

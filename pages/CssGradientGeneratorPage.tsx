import React, { useState } from 'react';
import { CssGradientGeneratorIcon } from '../components/icons/CssGradientGeneratorIcon';

const CssGradientGeneratorPage: React.FC = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [angle, setAngle] = useState(90);

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssGradientGeneratorIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Gradient Generator</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label>Color 1</label>
            <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
          </div>
          <div>
            <label>Color 2</label>
            <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
          </div>
          <div>
            <label>Angle: {angle}°</label>
            <input type="range" min="0" max="360" value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full" />
          </div>
        </div>
        <div>
          <div className="w-full h-64 rounded-lg" style={{ background: gradient }}></div>
          <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg">background: {gradient};</pre>
        </div>
      </div>
    </div>
  );
};

export default CssGradientGeneratorPage;

import React, { useState } from 'react';
import { CssFlexboxPlaygroundIcon } from '../components/icons/CssFlexboxPlaygroundIcon';

const CssFlexboxPlaygroundPage: React.FC = () => {
  const [numItems, setNumItems] = useState(3);
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');
  const [flexDirection, setFlexDirection] = useState('row');
  const [gap, setGap] = useState(16);

  const items = Array.from({ length: numItems }, (_, i) => i + 1);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssFlexboxPlaygroundIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Flexbox Playground</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4 bg-white p-6 rounded-lg shadow-md border">
          <div>
            <label className="block font-medium">Number of Items: {numItems}</label>
            <input type="range" min="1" max="8" value={numItems} onChange={e => setNumItems(Number(e.target.value))} className="w-full accent-indigo-500" />
          </div>
          <div>
            <label className="block font-medium">justify-content</label>
            <select value={justifyContent} onChange={e => setJustifyContent(e.target.value)} className="w-full p-2 border rounded">
              {['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-medium">align-items</label>
            <select value={alignItems} onChange={e => setAlignItems(e.target.value)} className="w-full p-2 border rounded">
              {['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-medium">flex-direction</label>
            <select value={flexDirection} onChange={e => setFlexDirection(e.target.value)} className="w-full p-2 border rounded">
              {['row', 'row-reverse', 'column', 'column-reverse'].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-medium">gap: {gap}px</label>
            <input type="range" min="0" max="50" value={gap} onChange={e => setGap(Number(e.target.value))} className="w-full accent-indigo-500" />
          </div>
        </div>
        <div className="lg:col-span-2">
            <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[400px]">
                <div 
                    style={{ 
                        display: 'flex',
                        justifyContent,
                        alignItems,
                        flexDirection: flexDirection as any,
                        gap: `${gap}px`,
                        minHeight: '350px'
                    }}
                >
                    {items.map(item => (
                        <div key={item} className="bg-indigo-500 text-white p-4 rounded-lg flex items-center justify-center min-w-[80px]">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto">
                {`.container {\n  display: flex;\n  justify-content: ${justifyContent};\n  align-items: ${alignItems};\n  flex-direction: ${flexDirection};\n  gap: ${gap}px;\n}`}
            </pre>
        </div>
      </div>
    </div>
  );
};

export default CssFlexboxPlaygroundPage;

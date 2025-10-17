import React, { useState } from 'react';
import { CssGridPlaygroundIcon } from '../components/icons/CssGridPlaygroundIcon';

const CssGridPlaygroundPage: React.FC = () => {
  const [numItems, setNumItems] = useState(6);
  const [gridTemplateColumns, setGridTemplateColumns] = useState('1fr 1fr 1fr');
  const [gap, setGap] = useState(16);

  const items = Array.from({ length: numItems }, (_, i) => i + 1);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CssGridPlaygroundIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSS Grid Playground</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4 bg-white p-6 rounded-lg shadow-md border">
          <div>
            <label className="block font-medium">Number of Items: {numItems}</label>
            <input type="range" min="1" max="12" value={numItems} onChange={e => setNumItems(Number(e.target.value))} className="w-full accent-indigo-500" />
          </div>
          <div>
            <label className="block font-medium">grid-template-columns</label>
            <input type="text" value={gridTemplateColumns} onChange={e => setGridTemplateColumns(e.target.value)} className="w-full p-2 border rounded font-mono" />
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
                        display: 'grid',
                        gridTemplateColumns,
                        gap: `${gap}px`
                    }}
                >
                    {items.map(item => (
                        <div key={item} className="bg-indigo-500 text-white p-4 rounded-lg flex items-center justify-center min-h-[80px]">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <pre className="mt-4 p-4 bg-gray-800 text-white rounded-lg overflow-x-auto">
                {`.container {\n  display: grid;\n  grid-template-columns: ${gridTemplateColumns};\n  gap: ${gap}px;\n}`}
            </pre>
        </div>
      </div>
    </div>
  );
};

export default CssGridPlaygroundPage;

import React, { useState, useRef, useEffect } from 'react';
import { ImageFilterPresetLibraryIcon } from '../components/icons/ImageFilterPresetLibraryIcon';

const PRESETS = {
    'None': '',
    'Gingham': 'contrast(1.1) brightness(1.1)',
    'Clarendon': 'contrast(1.2) saturate(1.35)',
    'Lark': 'contrast(.9) brightness(1.1) saturate(1.1)',
    'Moon': 'grayscale(1) contrast(1.1) brightness(1.1)',
    'Inkwell': 'sepia(.3) contrast(1.1) brightness(1.1) grayscale(1)',
    'Nashville': 'sepia(.2) contrast(1.2) brightness(1.05) hue-rotate(-15deg)',
    '1977': 'contrast(1.1) brightness(1.1) saturate(1.3) hue-rotate(-10deg)',
};

const ImageFilterPresetLibraryPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(new Image());
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageRef.current.src = event.target?.result as string;
                imageRef.current.onload = () => setImageSrc(imageRef.current.src);
            };
            reader.readAsDataURL(file);
        }
    };
    
    useEffect(() => {
        if (!imageSrc || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = imageRef.current;
        
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        if (ctx) {
            ctx.filter = activeFilter;
            ctx.drawImage(img, 0, 0);
        }
    }, [imageSrc, activeFilter]);
    
    const handleDownload = () => {
        if (canvasRef.current) {
            const link = document.createElement('a');
            link.download = `filtered-image.png`;
            link.href = canvasRef.current.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageFilterPresetLibraryIcon className="w-10 h-10 text-teal-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Filter Presets</h1>
            </div>

            {!imageSrc ? (
                 <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-teal-400 text-white font-bold rounded-lg hover:bg-teal-500 transition shadow-lg text-lg">
                        Select Image
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                         <h3 className="text-xl font-semibold mb-2">Preview</h3>
                         <div className="p-4 bg-gray-100 rounded-lg border flex items-center justify-center min-h-[400px]">
                            <canvas ref={canvasRef} className="max-w-full max-h-[500px]"></canvas>
                         </div>
                         <button onClick={handleDownload} className="w-full mt-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                            Download Filtered Image
                        </button>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold mb-2">Filters</h3>
                        <div className="p-4 bg-white rounded-lg shadow-md border space-y-2 max-h-[600px] overflow-y-auto">
                           {Object.entries(PRESETS).map(([name, filter]) => (
                               <button key={name} onClick={() => setActiveFilter(filter)} className="w-full flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 transition">
                                   <canvas 
                                      className="w-16 h-16 rounded-md border"
                                      ref={node => {
                                          if (node) {
                                              const ctx = node.getContext('2d');
                                              node.width = 64;
                                              node.height = 64;
                                              if (ctx) {
                                                  ctx.filter = filter;
                                                  ctx.drawImage(imageRef.current, 0, 0, 64, 64);
                                              }
                                          }
                                      }}
                                    />
                                    <span className="font-semibold">{name}</span>
                               </button>
                           ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageFilterPresetLibraryPage;
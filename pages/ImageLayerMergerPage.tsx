import React, { useState, useRef, useEffect } from 'react';
import { ImageLayerMergerIcon } from '../components/icons/ImageLayerMergerIcon';

const ImageLayerMergerPage: React.FC = () => {
    const [img1, setImg1] = useState<string>('');
    const [img2, setImg2] = useState<string>('');
    const [blendMode, setBlendMode] = useState('source-over');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, layer: 1 | 2) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                if(layer === 1) setImg1(e.target?.result as string);
                else setImg2(e.target?.result as string);
            }
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas || !img1 || !img2) return;
        const ctx = canvas.getContext('2d');
        if(!ctx) return;
        
        const image1 = new Image();
        image1.src = img1;
        image1.onload = () => {
            canvas.width = image1.width;
            canvas.height = image1.height;
            const image2 = new Image();
            image2.src = img2;
            image2.onload = () => {
                ctx.drawImage(image1, 0, 0);
                // FIX: Cast blendMode to GlobalCompositeOperation to satisfy TypeScript.
                ctx.globalCompositeOperation = blendMode as GlobalCompositeOperation;
                 ctx.drawImage(image2, 0, 0, image1.width, image1.height);
                 ctx.globalCompositeOperation = 'source-over'; // reset
            }
        }
    }, [img1, img2, blendMode]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageLayerMergerIcon className="w-10 h-10 text-purple-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Layer Merger (2 Layers)</h1>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <input type="file" accept="image/*" onChange={e => handleFileChange(e, 1)} />
                    <input type="file" accept="image/*" onChange={e => handleFileChange(e, 2)} />
                    <select value={blendMode} onChange={e => setBlendMode(e.target.value)} className="w-full p-2 border rounded">
                        <option value="source-over">Normal</option>
                        <option value="multiply">Multiply</option>
                        <option value="screen">Screen</option>
                        <option value="overlay">Overlay</option>
                        <option value="darken">Darken</option>
                        <option value="lighten">Lighten</option>
                        <option value="difference">Difference</option>
                    </select>
                </div>
                <div className="lg:col-span-2">
                    <canvas ref={canvasRef} className="w-full h-auto border rounded-lg shadow-md"></canvas>
                </div>
             </div>
        </div>
    );
};

export default ImageLayerMergerPage;
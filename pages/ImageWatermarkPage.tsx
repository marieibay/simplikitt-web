import React, { useState, useRef, useEffect } from 'react';
import { ImageWatermarkIcon } from '../components/icons/ImageWatermarkIcon';

const ImageWatermarkPage: React.FC = () => {
    const [baseImage, setBaseImage] = useState<File | null>(null);
    const [watermarkImage, setWatermarkImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [resultUrl, setResultUrl] = useState<string>('');
    const [position, setPosition] = useState('center');
    const [opacity, setOpacity] = useState(0.5);
    const [scale, setScale] = useState(0.2);
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const baseImgRef = useRef<HTMLImageElement>(new Image());
    const watermarkImgRef = useRef<HTMLImageElement>(new Image());

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'base' | 'watermark') => {
        const file = e.target.files?.[0];
        if (file) {
            if (type === 'base') setBaseImage(file);
            if (type === 'watermark') setWatermarkImage(file);
        }
    };
    
    const applyWatermark = () => {
        const canvas = canvasRef.current;
        const baseImg = baseImgRef.current;
        const watermarkImg = watermarkImgRef.current;
        if (!canvas || !baseImg.src || !watermarkImg.src) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        canvas.width = baseImg.naturalWidth;
        canvas.height = baseImg.naturalHeight;
        
        ctx.drawImage(baseImg, 0, 0);

        const watermarkWidth = watermarkImg.naturalWidth * scale;
        const watermarkHeight = watermarkImg.naturalHeight * scale;

        let x = 0, y = 0;
        switch(position) {
            case 'topLeft': x = 10; y = 10; break;
            case 'topRight': x = canvas.width - watermarkWidth - 10; y = 10; break;
            case 'bottomLeft': x = 10; y = canvas.height - watermarkHeight - 10; break;
            case 'bottomRight': x = canvas.width - watermarkWidth - 10; y = canvas.height - watermarkHeight - 10; break;
            case 'center':
            default:
                x = (canvas.width - watermarkWidth) / 2;
                y = (canvas.height - watermarkHeight) / 2;
                break;
        }

        ctx.globalAlpha = opacity;
        ctx.drawImage(watermarkImg, x, y, watermarkWidth, watermarkHeight);
        ctx.globalAlpha = 1.0;
        
        setPreviewUrl(canvas.toDataURL('image/png'));
    };
    
    useEffect(() => {
        let baseReader: FileReader | null = null;
        if (baseImage) {
            baseReader = new FileReader();
            baseReader.onload = (e) => {
                baseImgRef.current.src = e.target?.result as string;
                baseImgRef.current.onload = applyWatermark;
            };
            baseReader.readAsDataURL(baseImage);
        }
        let watermarkReader: FileReader | null = null;
        if (watermarkImage) {
            watermarkReader = new FileReader();
            watermarkReader.onload = (e) => {
                watermarkImgRef.current.src = e.target?.result as string;
                watermarkImgRef.current.onload = applyWatermark;
            };
            watermarkReader.readAsDataURL(watermarkImage);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseImage, watermarkImage]);

    useEffect(() => {
        applyWatermark();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, opacity, scale]);
    
    const handleDownload = () => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const link = document.createElement('a');
        link.download = 'watermarked-image.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageWatermarkIcon className="w-10 h-10 text-rose-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Watermark</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold mb-2">Preview</h3>
                    <div className="p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[400px]">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Watermark preview" className="max-w-full max-h-[500px]" />
                        ) : (
                            <p>Upload a base image and a watermark to see a preview.</p>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Controls</h3>
                    <div className="space-y-4 p-4 bg-white rounded-lg shadow-md border">
                        <div>
                            <label className="block font-medium">1. Base Image</label>
                            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'base')} className="mt-1 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"/>
                        </div>
                         <div>
                            <label className="block font-medium">2. Watermark Image</label>
                            <input type="file" accept="image/png, image/svg+xml" onChange={(e) => handleFileChange(e, 'watermark')} className="mt-1 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"/>
                        </div>
                        <div>
                            <label className="block font-medium">Position</label>
                            <select value={position} onChange={e => setPosition(e.target.value)} className="mt-1 w-full p-2 border rounded-md">
                                <option value="center">Center</option>
                                <option value="topLeft">Top Left</option>
                                <option value="topRight">Top Right</option>
                                <option value="bottomLeft">Bottom Left</option>
                                <option value="bottomRight">Bottom Right</option>
                            </select>
                        </div>
                         <div>
                            <label className="block font-medium">Opacity: {Math.round(opacity * 100)}%</label>
                            <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} className="w-full mt-1 accent-rose-500" />
                        </div>
                        <div>
                            <label className="block font-medium">Scale: {Math.round(scale * 100)}%</label>
                            <input type="range" min="0.05" max="1" step="0.05" value={scale} onChange={e => setScale(parseFloat(e.target.value))} className="w-full mt-1 accent-rose-500" />
                        </div>
                         <button onClick={handleDownload} disabled={!previewUrl} className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg disabled:opacity-50">
                            Download Watermarked Image
                        </button>
                    </div>
                </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default ImageWatermarkPage;

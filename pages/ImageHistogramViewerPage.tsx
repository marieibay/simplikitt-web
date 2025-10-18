import React, { useState, useRef, useEffect } from 'react';
import { ImageHistogramViewerIcon } from '../components/icons/ImageHistogramViewerIcon';

const ImageHistogramViewerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const histogramCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(new Image());
    
    useEffect(() => {
        if (!imageSrc || !histogramCanvasRef.current) return;
        const img = imageRef.current;
        img.src = imageSrc;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if(!ctx) return;
            
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;
            
            const rHist = new Array(256).fill(0);
            const gHist = new Array(256).fill(0);
            const bHist = new Array(256).fill(0);

            for (let i = 0; i < data.length; i += 4) {
                rHist[data[i]]++;
                gHist[data[i+1]]++;
                bHist[data[i+2]]++;
            }
            
            const histCanvas = histogramCanvasRef.current!;
            const histCtx = histCanvas.getContext('2d')!;
            histCanvas.width = 256;
            histCanvas.height = 150;
            histCtx.clearRect(0,0, 256, 150);
            
            const drawHist = (hist: number[], color: string) => {
                const max = Math.max(...hist);
                histCtx.beginPath();
                histCtx.strokeStyle = color;
                histCtx.moveTo(0, 150 - (hist[0] / max) * 150);
                for(let i = 1; i < 256; i++) {
                    histCtx.lineTo(i, 150 - (hist[i] / max) * 150);
                }
                histCtx.stroke();
            }
            
            drawHist(rHist, 'red');
            drawHist(gHist, 'green');
            drawHist(bHist, 'blue');
        }
    }, [imageSrc]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageHistogramViewerIcon className="w-10 h-10 text-indigo-700" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Histogram Viewer</h1>
            </div>
            <input type="file" accept="image/*" onChange={e => {
                const file = e.target.files?.[0];
                if(file) setImageSrc(URL.createObjectURL(file));
            }} />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <img src={imageSrc} alt="preview" className="w-full"/>
                <canvas ref={histogramCanvasRef} className="w-full h-auto border"></canvas>
            </div>
        </div>
    );
};

export default ImageHistogramViewerPage;

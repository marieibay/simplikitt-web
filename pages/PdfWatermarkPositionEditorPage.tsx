import React, { useState } from 'react';
import { PdfWatermarkPositionEditorIcon } from '../components/icons/PdfWatermarkPositionEditorIcon';

declare const PDFLib: any;

const PdfWatermarkPositionEditorPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [watermarkFile, setWatermarkFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [opacity, setOpacity] = useState(0.5);
    const [scale, setScale] = useState(0.25);
    const [position, setPosition] = useState('center');

    const handleWatermark = async () => {
        if (!pdfFile || !watermarkFile) {
            alert('Please select both a PDF and a watermark image.');
            return;
        }
        setIsProcessing(true);

        try {
            const pdfBytes = await pdfFile.arrayBuffer();
            const watermarkBytes = await watermarkFile.arrayBuffer();
            const { PDFDocument } = PDFLib;
            const pdfDoc = await PDFDocument.load(pdfBytes);
            
            let watermarkImage;
            if (watermarkFile.type === 'image/png') {
                watermarkImage = await pdfDoc.embedPng(watermarkBytes);
            } else if (watermarkFile.type === 'image/jpeg') {
                watermarkImage = await pdfDoc.embedJpg(watermarkBytes);
            } else {
                throw new Error('Unsupported watermark image type. Please use PNG or JPG.');
            }

            const pages = pdfDoc.getPages();
            for (const page of pages) {
                const { width, height } = page.getSize();
                const watermarkDims = watermarkImage.scale(scale);
                const margin = 20;

                let x = 0, y = 0;
                switch(position) {
                    case 'topLeft': x = margin; y = height - watermarkDims.height - margin; break;
                    case 'topCenter': x = (width - watermarkDims.width) / 2; y = height - watermarkDims.height - margin; break;
                    case 'topRight': x = width - watermarkDims.width - margin; y = height - watermarkDims.height - margin; break;
                    case 'centerLeft': x = margin; y = (height - watermarkDims.height) / 2; break;
                    case 'center': x = (width - watermarkDims.width) / 2; y = (height - watermarkDims.height) / 2; break;
                    case 'centerRight': x = width - watermarkDims.width - margin; y = (height - watermarkDims.height) / 2; break;
                    case 'bottomLeft': x = margin; y = margin; break;
                    case 'bottomCenter': x = (width - watermarkDims.width) / 2; y = margin; break;
                    case 'bottomRight': x = width - watermarkDims.width - margin; y = margin; break;
                }

                page.drawImage(watermarkImage, {
                    x,
                    y,
                    width: watermarkDims.width,
                    height: watermarkDims.height,
                    opacity: opacity,
                });
            }

            const pdfBytesSaved = await pdfDoc.save();
            const blob = new Blob([pdfBytesSaved], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `watermarked_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error(error);
            alert('An error occurred while adding the watermark.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfWatermarkPositionEditorIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Watermark Position Editor</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-6">
                <div>
                    <label className="block font-medium text-gray-700">1. Select PDF File</label>
                    <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                 <div>
                    <label className="block font-medium text-gray-700">2. Select Watermark Image (PNG/JPG)</label>
                    <input type="file" accept="image/png, image/jpeg" onChange={e => setWatermarkFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                 <div>
                    <label className="block font-medium text-gray-700">3. Position</label>
                    <div className="grid grid-cols-3 gap-2 mt-1 max-w-xs mx-auto">
                        {['topLeft', 'topCenter', 'topRight', 'centerLeft', 'center', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight'].map(pos => (
                            <button key={pos} onClick={() => setPosition(pos)} className={`p-4 rounded-md transition ${position === pos ? 'bg-green-600' : 'bg-gray-200 hover:bg-gray-300'}`}></button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium text-gray-700">Opacity: {Math.round(opacity * 100)}%</label>
                        <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} className="w-full mt-1 accent-green-500" />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700">Scale: {Math.round(scale * 100)}%</label>
                        <input type="range" min="0.05" max="1" step="0.05" value={scale} onChange={e => setScale(parseFloat(e.target.value))} className="w-full mt-1 accent-green-500" />
                    </div>
                </div>
                <button onClick={handleWatermark} disabled={!pdfFile || !watermarkFile || isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                    {isProcessing ? 'Processing...' : 'Apply Watermark & Download'}
                </button>
            </div>
        </div>
    );
};

export default PdfWatermarkPositionEditorPage;

import React, { useState } from 'react';
import { PdfWatermarkAdderTextIcon } from '../components/icons/PdfWatermarkAdderTextIcon';

declare const PDFLib: any;

const PdfWatermarkAdderTextPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [watermarkText, setWatermarkText] = useState('CONFIDENTIAL');
    const [isProcessing, setIsProcessing] = useState(false);
    const [opacity, setOpacity] = useState(0.5);
    const [fontSize, setFontSize] = useState(50);
    const [color, setColor] = useState('#ff0000');

    const handleWatermark = async () => {
        if (!pdfFile) {
            alert('Please select a PDF file.');
            return;
        }
        setIsProcessing(true);

        try {
            const { PDFDocument, rgb, StandardFonts } = PDFLib;
            const pdfBytes = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(pdfBytes);
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

            const pages = pdfDoc.getPages();
            const colorRgb = {
                r: parseInt(color.slice(1, 3), 16) / 255,
                g: parseInt(color.slice(3, 5), 16) / 255,
                b: parseInt(color.slice(5, 7), 16) / 255,
            };

            for (const page of pages) {
                const { width, height } = page.getSize();
                const textWidth = helveticaFont.widthOfTextAtSize(watermarkText, fontSize);
                page.drawText(watermarkText, {
                    x: (width - textWidth) / 2,
                    y: height / 2,
                    font: helveticaFont,
                    size: fontSize,
                    color: rgb(colorRgb.r, colorRgb.g, colorRgb.b),
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
                <PdfWatermarkAdderTextIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Add Text Watermark to PDF</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-6">
                <div>
                    <label className="block font-medium text-gray-700">1. Select PDF File</label>
                    <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                 <div>
                    <label className="block font-medium text-gray-700">2. Watermark Text</label>
                    <input type="text" value={watermarkText} onChange={e => setWatermarkText(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium text-gray-700">Opacity: {Math.round(opacity * 100)}%</label>
                        <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={e => setOpacity(parseFloat(e.target.value))} className="w-full mt-1 accent-green-500" />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700">Font Size: {fontSize}px</label>
                        <input type="range" min="10" max="150" step="1" value={fontSize} onChange={e => setFontSize(parseInt(e.target.value, 10))} className="w-full mt-1 accent-green-500" />
                    </div>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Color</label>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-24 h-10 mt-1 p-1 border rounded-md" />
                </div>
                <button onClick={handleWatermark} disabled={!pdfFile || isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                    {isProcessing ? 'Processing...' : 'Add Watermark & Download'}
                </button>
            </div>
        </div>
    );
};
export default PdfWatermarkAdderTextPage;
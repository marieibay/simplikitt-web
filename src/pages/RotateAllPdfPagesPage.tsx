import React, { useState } from 'react';
import { RotateCw as RotateAllPdfPagesIcon } from 'lucide-react';

declare const PDFLib: any;

const RotateAllPdfPagesPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [angle, setAngle] = useState(90);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleRotate = async () => {
        if (!pdfFile) return;
        setIsProcessing(true);

        try {
            const { PDFDocument, degrees } = PDFLib;
            const pdfBytes = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFDocument.load(pdfBytes, {
                ignoreEncryption: true,
            });

            const pages = pdfDoc.getPages();
            pages.forEach((page: any) => {
                const currentRotation = page.getRotation().angle;
                page.setRotation(degrees(currentRotation + angle));
            });

            const pdfBytesSaved = await pdfDoc.save();
            const blob = new Blob([pdfBytesSaved], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `rotated_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error(error);
            alert('An error occurred while rotating the PDF.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <RotateAllPdfPagesIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Rotate All PDF Pages</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-6">
                <div>
                    <label className="block font-medium text-gray-700">1. Select PDF File</label>
                    <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                <div>
                    <label className="block font-medium text-gray-700">2. Select Rotation Angle</label>
                    <select value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1">
                        <option value="90">90° Clockwise</option>
                        <option value="180">180°</option>
                        <option value="270">270° Clockwise (90° Counter-clockwise)</option>
                    </select>
                </div>
                <button onClick={handleRotate} disabled={!pdfFile || isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                    {isProcessing ? 'Rotating...' : 'Rotate & Download'}
                </button>
            </div>
        </div>
    );
};

export default RotateAllPdfPagesPage;

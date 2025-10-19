import React, { useState, useRef } from 'react';
import { PdfDocumentCropperIcon } from '../components/icons/PdfDocumentCropperIcon';
import ReactCrop, { type Crop, centerCrop, makeAspectCrop } from 'react-image-crop';

declare const pdfjsLib: any;
declare const PDFLib: any;

const PdfDocumentCropperPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState<Crop>();
    const [isProcessing, setIsProcessing] = useState(false);
    const [originalPdfDims, setOriginalPdfDims] = useState<{ width: number, height: number } | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
            setIsProcessing(true);
            
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 1.5 });

            setOriginalPdfDims({ width: viewport.width / 1.5, height: viewport.height / 1.5 });

            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const context = canvas.getContext('2d');
            if (context) {
                await page.render({ canvasContext: context, viewport }).promise;
                setImgSrc(canvas.toDataURL('image/png'));
            }
            setIsProcessing(false);
        }
    };

    const handleCrop = async () => {
        if (!pdfFile || !crop || !originalPdfDims) return;
        setIsProcessing(true);

        try {
            const pdfBytes = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
            const pages = pdfDoc.getPages();

            const { width: originalWidth, height: originalHeight } = originalPdfDims;
            
            // Convert percentage crop to absolute points for pdf-lib
            const x = (crop.x / 100) * originalWidth;
            const y = (crop.y / 100) * originalHeight;
            const cropWidth = (crop.width / 100) * originalWidth;
            const cropHeight = (crop.height / 100) * originalHeight;

            pages.forEach(page => {
                // pdf-lib's crop box is relative to the page's original bottom-left corner
                page.setCropBox(x, originalHeight - y - cropHeight, cropWidth, cropHeight);
            });

            const pdfBytesSaved = await pdfDoc.save();
            const blob = new Blob([pdfBytesSaved as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `cropped_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error(error);
            alert('Failed to crop PDF.');
        } finally {
            setIsProcessing(false);
        }
    };
    
     const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const newCrop = centerCrop(
            makeAspectCrop({ unit: '%', width: 90 }, width / height, width, height),
            width,
            height
        );
        setCrop(newCrop);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfDocumentCropperIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Crop PDF Document</h1>
            </div>

            {!pdfFile ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full max-w-md text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                    <p className="mt-4 text-gray-600">Upload a PDF to begin cropping.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    <p className="text-center text-gray-600">Define the crop area on the first page. This crop will be applied to <strong>all pages</strong> of the document.</p>
                    <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
                        {isProcessing && !imgSrc && <p>Loading PDF preview...</p>}
                        {imgSrc && (
                             <ReactCrop
                                crop={crop}
                                onChange={(_, percentCrop) => setCrop(percentCrop)}
                                aspect={undefined}
                            >
                                <img ref={imgRef} src={imgSrc} onLoad={onImageLoad} alt="Crop preview" style={{ maxHeight: '60vh' }} />
                            </ReactCrop>
                        )}
                    </div>
                     <div className="text-center">
                        <button onClick={handleCrop} disabled={isProcessing || !crop} className="w-full max-w-md py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                            {isProcessing ? 'Processing...' : 'Crop All Pages & Download'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PdfDocumentCropperPage;

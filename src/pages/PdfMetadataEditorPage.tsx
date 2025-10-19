import React, { useState } from 'react';
import { PdfMetadataEditorIcon } from '../components/icons/PdfMetadataEditorIcon';

declare const PDFLib: any;

interface Metadata {
    title: string;
    author: string;
    subject: string;
    keywords: string;
    creator: string;
    producer: string;
}

const PdfMetadataEditorPage: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [metadata, setMetadata] = useState<Partial<Metadata>>({});
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setPdfFile(file);
        setIsProcessing(true);
        try {
            const pdfBytes = await file.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes, { ignoreEncryption: true });
            setMetadata({
                title: pdfDoc.getTitle(),
                author: pdfDoc.getAuthor(),
                subject: pdfDoc.getSubject(),
                keywords: pdfDoc.getKeywords(),
                creator: pdfDoc.getCreator(),
                producer: pdfDoc.getProducer(),
            });
        } catch (err) {
            console.error(err);
            alert('Could not read PDF metadata.');
        } finally {
            setIsProcessing(false);
        }
    };
    
    const handleMetadataChange = (field: keyof Metadata, value: string) => {
        setMetadata(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        if (!pdfFile) return;
        setIsProcessing(true);
        try {
            const pdfBytes = await pdfFile.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes, { ignoreEncryption: true });
            
            if (metadata.title) pdfDoc.setTitle(metadata.title);
            if (metadata.author) pdfDoc.setAuthor(metadata.author);
            if (metadata.subject) pdfDoc.setSubject(metadata.subject);
            if (metadata.keywords) pdfDoc.setKeywords(metadata.keywords.split(',').map(k => k.trim()));
            if (metadata.creator) pdfDoc.setCreator(metadata.creator);
            
            const newPdfBytes = await pdfDoc.save();
            const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `metadata_${pdfFile.name}`;
            link.click();
            URL.revokeObjectURL(link.href);
        } catch (err) {
            console.error(err);
            alert('Failed to save metadata.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfMetadataEditorIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Metadata Editor</h1>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
                <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={isProcessing} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                {isProcessing && !Object.keys(metadata).length && <p>Loading metadata...</p>}
                {Object.keys(metadata).length > 0 && (
                    <div className="space-y-4">
                        {(Object.keys(metadata) as (keyof Metadata)[]).map(key => (
                            <div key={key}>
                                <label className="block font-medium capitalize">{key}</label>
                                <input 
                                    type="text"
                                    value={metadata[key] || ''}
                                    onChange={e => handleMetadataChange(key, e.target.value)}
                                    className="w-full p-2 border rounded-md mt-1"
                                    disabled={key === 'producer'}
                                />
                            </div>
                        ))}
                         <button onClick={handleSave} disabled={isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50">
                            {isProcessing ? 'Saving...' : 'Save Metadata & Download'}
                        </button>
                    </div>
                )}
             </div>
        </div>
    );
};

export default PdfMetadataEditorPage;
import React, { useState } from 'react';
import { PdfTextReplacerIcon } from '../components/icons/PdfTextReplacerIcon';

declare const pdfjsLib: any;
declare const PDFLib: any;

const PdfTextReplacerPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');
    const [originalText, setOriginalText] = useState('');
    const [modifiedText, setModifiedText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile || selectedFile.type !== 'application/pdf') {
            setFile(null);
            setOriginalText('');
            setModifiedText('');
            return;
        }
        setFile(selectedFile);
        setIsProcessing(true);
        try {
            const arrayBuffer = await selectedFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let fullText = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                fullText += textContent.items.map((item: any) => item.str).join(' ') + '\n';
            }
            setOriginalText(fullText);
            setModifiedText(fullText);
        } catch (error) {
            alert('Could not extract text from PDF.');
            console.error(error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleReplace = () => {
        if (!findText) return;
        const newText = modifiedText.replace(new RegExp(findText, 'g'), replaceText);
        setModifiedText(newText);
    };

    const handleDownload = async () => {
        if (!modifiedText) return;
        setIsProcessing(true);
        try {
            const { PDFDocument, StandardFonts, rgb } = PDFLib;
            const pdfDoc = await PDFDocument.create();
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
            
            // Simple text-to-page logic
            const lines = modifiedText.split('\n');
            let page = pdfDoc.addPage();
            const { width, height } = page.getSize();
            const fontSize = 12;
            const margin = 50;
            let y = height - margin;

            for (const line of lines) {
                // Handle long lines that need wrapping
                const words = line.split(' ');
                let currentLine = '';
                for (const word of words) {
                    const currentWidth = font.widthOfTextAtSize(currentLine + ' ' + word, fontSize);
                    if (currentWidth < width - (margin * 2)) {
                        currentLine += (currentLine === '' ? '' : ' ') + word;
                    } else {
                        if (y < margin) {
                            page = pdfDoc.addPage();
                            y = height - margin;
                        }
                        page.drawText(currentLine, { x: margin, y, font, size: fontSize, color: rgb(0, 0, 0) });
                        y -= fontSize * 1.2;
                        currentLine = word;
                    }
                }

                if (currentLine !== '') {
                     if (y < margin) {
                        page = pdfDoc.addPage();
                        y = height - margin;
                    }
                    page.drawText(currentLine, { x: margin, y, font, size: fontSize, color: rgb(0, 0, 0) });
                    y -= fontSize * 1.2;
                }
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `replaced_text_${file?.name || 'document'}.pdf`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            alert('Failed to generate new PDF.');
            console.error(error);
        } finally {
            setIsProcessing(false);
        }
    };


    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfTextReplacerIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Text Replacer</h1>
            </div>
             <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md" role="alert">
                <p className="font-bold">How this tool works:</p>
                <p>This tool extracts all text from your PDF, allows you to find and replace words, and then generates a <strong>new, unformatted PDF</strong> with the modified text. The original layout, fonts, and images will be lost.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
                <div className="space-y-2">
                    <label className="block font-medium">1. Upload PDF</label>
                    <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={isProcessing} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
                {isProcessing && <p className="text-center animate-pulse">Processing PDF...</p>}
                {originalText && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium">2. Find Text</label>
                                <input type="text" value={findText} onChange={e => setFindText(e.target.value)} className="w-full p-2 border rounded-md"/>
                            </div>
                            <div>
                                <label className="block font-medium">3. Replace With</label>
                                <input type="text" value={replaceText} onChange={e => setReplaceText(e.target.value)} className="w-full p-2 border rounded-md"/>
                            </div>
                        </div>
                        <button onClick={handleReplace} className="px-5 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">Replace All in Text Below</button>

                        <div>
                            <label className="block font-medium">4. Review and Edit Text</label>
                            <textarea value={modifiedText} onChange={e => setModifiedText(e.target.value)} className="w-full h-80 p-2 border rounded-md font-mono" />
                        </div>
                         <button onClick={handleDownload} disabled={isProcessing} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:opacity-50 transition">
                            {isProcessing ? 'Generating PDF...' : '5. Download as New PDF'}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PdfTextReplacerPage;
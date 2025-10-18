import React, { useState } from 'react';
import { FileTypeCheckerIcon } from '../components/icons/FileTypeCheckerIcon';

const signatures: { [key: string]: string } = {
  '89504E47': 'PNG (Portable Network Graphics)',
  'FFD8FFE0': 'JPEG (Joint Photographic Experts Group)',
  'FFD8FFEE': 'JPEG (Joint Photographic Experts Group)',
  'FFD8FFDB': 'JPEG (Joint Photographic Experts Group)',
  '47494638': 'GIF (Graphics Interchange Format)',
  '25504446': 'PDF (Portable Document Format)',
  '504B0304': 'ZIP archive (e.g., .zip, .docx, .pptx, .xlsx)',
  'D0CF11E0': 'Microsoft Office document (e.g., .doc, .xls, .ppt)',
  '3C3F786D': 'XML (eXtensible Markup Language)',
  '7B22': 'JSON (JavaScript Object Notation)',
  '3C21444F': 'HTML (HyperText Markup Language)',
};

const FileTypeCheckerPage: React.FC = () => {
    const [result, setResult] = useState('');
    const [isChecking, setIsChecking] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsChecking(true);
        const reader = new FileReader();
        reader.onload = (event) => {
            const buffer = event.target?.result as ArrayBuffer;
            const view = new Uint8Array(buffer, 0, 4);
            const hex = Array.from(view).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
            
            setResult(signatures[hex] || 'Unknown or text-based file type.');
            setIsChecking(false);
        };
        reader.onerror = () => {
            setResult('Could not read file.');
            setIsChecking(false);
        }
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <FileTypeCheckerIcon className="w-10 h-10 text-purple-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">File Type Checker</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto text-center space-y-4">
                <p>Upload any file to check its type based on its "magic number" (binary signature).</p>
                <input type="file" onChange={handleFileChange} disabled={isChecking} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
                <div className="h-24 flex items-center justify-center">
                    {isChecking ? <p className="animate-pulse">Checking...</p> : result && <p className="text-2xl font-bold text-gray-800">{result}</p>}
                </div>
            </div>
        </div>
    );
};

export default FileTypeCheckerPage;

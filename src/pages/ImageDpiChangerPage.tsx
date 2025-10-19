import React, { useState, useRef } from 'react';
import { ImageDpiChangerIcon } from '../components/icons/ImageDpiChangerIcon';
import * as piexif from 'piexif-ts';

const ImageDpiChangerPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [newDpi, setNewDpi] = useState<number>(300);
    const [modifiedImage, setModifiedImage] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);
    const originalImageRef = useRef<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'image/jpeg') {
            const reader = new FileReader();
            reader.onload = (event) => {
                const src = event.target?.result as string;
                setImageSrc(src);
                originalImageRef.current = src;
                setModifiedImage('');
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a JPG image. DPI modification for other formats is not supported.');
        }
    };

    const changeDpi = () => {
        if (!originalImageRef.current) return;
        setIsProcessing(true);
        try {
            const exifObj = piexif.load(originalImageRef.current);
            const dpi = [newDpi, 1];
            exifObj['0th'][piexif.ImageIFD.XResolution] = dpi;
            exifObj['0th'][piexif.ImageIFD.YResolution] = dpi;
            exifObj['1st'][piexif.ImageIFD.XResolution] = dpi;
            exifObj['1st'][piexif.ImageIFD.YResolution] = dpi;
            const exifStr = piexif.dump(exifObj);
            const newImage = piexif.insert(exifStr, originalImageRef.current);
            setModifiedImage(newImage);
        } catch (error) {
            console.error(error);
            alert('Could not process EXIF data. The image may be corrupted or lack EXIF info.');
        }
        setIsProcessing(false);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageDpiChangerIcon className="w-10 h-10 text-cyan-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image DPI Changer (JPG only)</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                     <div className="p-4 bg-white rounded-lg shadow-md border space-y-4">
                        <h3 className="text-xl font-semibold">1. Upload JPG Image</h3>
                        <input type="file" accept="image/jpeg" ref={fileInputRef} onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"/>
                        {imageSrc && <img src={imageSrc} alt="Input preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />}
                        {imageSrc && (
                            <>
                                <div>
                                    <label className="block font-medium">2. Set New DPI: {newDpi}</label>
                                    <select value={newDpi} onChange={e => setNewDpi(parseInt(e.target.value))} className="mt-1 w-full p-2 border rounded-md">
                                        <option value="72">72 DPI (Screen)</option>
                                        <option value="96">96 DPI (Windows Default)</option>
                                        <option value="150">150 DPI (Draft Print)</option>
                                        <option value="300">300 DPI (High-Quality Print)</option>
                                    </select>
                                </div>
                                <button onClick={changeDpi} disabled={isProcessing} className="w-full py-2 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition disabled:opacity-50">
                                    {isProcessing ? 'Processing...' : '3. Change DPI'}
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div>
                     <h3 className="text-xl font-semibold mb-2">Result</h3>
                     <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px] flex items-center justify-center">
                        {modifiedImage ? (
                            <div className="text-center">
                                <img src={modifiedImage} alt="Result preview" className="max-w-full h-auto max-h-64 mx-auto rounded-md" />
                                <a href={modifiedImage} download="dpi-changed-image.jpg" className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                    Download Modified Image
                                </a>
                            </div>
                        ) : (
                             <p className="text-gray-500 text-center">Your image with updated DPI will appear here.</p>
                        )}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDpiChangerPage;
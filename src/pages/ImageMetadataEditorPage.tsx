import React, { useState } from 'react';
import { FileCog as ImageMetadataEditorIcon } from 'lucide-react';
import * as piexif from 'piexif-ts';

const ImageMetadataEditorPage: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [modifiedImage, setModifiedImage] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'image/jpeg') {
            const reader = new FileReader();
            reader.onload = (event) => {
                const src = event.target?.result as string;
                setImageSrc(src);
                try {
                    const exifObj = piexif.load(src);
                    setArtist(exifObj['0th'][piexif.ImageIFD.Artist] || '');
                    setDescription(exifObj['0th'][piexif.ImageIFD.ImageDescription] || '');
                } catch {
                    // No EXIF data
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a JPG file.');
        }
    };

    const handleSave = () => {
        try {
            const exifObj = piexif.load(imageSrc);
            exifObj['0th'][piexif.ImageIFD.Artist] = artist;
            exifObj['0th'][piexif.ImageIFD.ImageDescription] = description;
            const exifStr = piexif.dump(exifObj);
            const newImage = piexif.insert(exifStr, imageSrc);
            setModifiedImage(newImage);
        } catch (e) {
            alert('Failed to save metadata.');
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageMetadataEditorIcon className="w-10 h-10 text-slate-600" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Metadata Editor (JPG)</h1>
            </div>
            {!imageSrc ? (
                <input type="file" accept="image/jpeg" onChange={handleFileChange} />
            ) : (
                <div className="grid grid-cols-2 gap-8">
                    <img src={imageSrc} alt="preview" className="w-full"/>
                    <div className="space-y-4">
                        <input value={artist} onChange={e => setArtist(e.target.value)} placeholder="Artist" className="w-full p-2 border rounded"/>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full h-32 p-2 border rounded"/>
                        <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save Metadata</button>
                        {modifiedImage && <a href={modifiedImage} download="edited-image.jpg" className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Download</a>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageMetadataEditorPage;

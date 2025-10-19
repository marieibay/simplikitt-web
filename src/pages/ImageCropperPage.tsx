import React, { useState, useRef } from 'react';
import { Crop } from 'lucide-react';
import ReactCrop, { type Crop as T_Crop, centerCrop, makeAspectCrop } from 'react-image-crop';

const ImageCropperPage: React.FC = () => {
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop, ] = useState<T_Crop>();
    const [aspect, setAspect] = useState<number | undefined>(undefined);
    const [croppedImageUrl, setCroppedImageUrl] = useState('');
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined); // Makes crop preview update between images.
            const reader = new FileReader();
            reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const newCrop = centerCrop(
            makeAspectCrop({ unit: '%', width: 90 }, aspect || width / height, width, height),
            width,
            height
        );
        setCrop(newCrop);
    };

    const handleCrop = async () => {
        if (!crop || !imgRef.current || !canvasRef.current) {
            return;
        }

        const image = imgRef.current;
        const canvas = canvasRef.current;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = Math.floor(crop.width * scaleX);
        canvas.height = Math.floor(crop.height * scaleY);

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('No 2d context');
        }

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            canvas.width,
            canvas.height
        );
        
        setCroppedImageUrl(canvas.toDataURL('image/png'));
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <Crop className="w-10 h-10 text-rose-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Image Cropper</h1>
            </div>

            {!imgSrc ? (
                 <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <button onClick={() => fileInputRef.current?.click()} className="px-6 py-3 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition shadow-lg text-lg">
                        Select Image to Crop
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={onSelectFile} className="hidden" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <ReactCrop
                            crop={crop}
                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                            aspect={aspect}
                            minWidth={100}
                            minHeight={100}
                        >
                            <img ref={imgRef} src={imgSrc} onLoad={onImageLoad} alt="Crop preview" style={{ maxHeight: '70vh' }} />
                        </ReactCrop>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-700">Crop Options</h3>
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => setAspect(1/1)} className="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300">1:1</button>
                            <button onClick={() => setAspect(16/9)} className="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300">16:9</button>
                            <button onClick={() => setAspect(4/3)} className="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300">4:3</button>
                            <button onClick={() => setAspect(undefined)} className="px-3 py-1.5 text-sm bg-gray-200 rounded-md hover:bg-gray-300">Free</button>
                        </div>
                        <button onClick={handleCrop} className="w-full py-2 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition shadow-md">
                            Crop Image
                        </button>
                         {croppedImageUrl && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Result:</h3>
                                <img src={croppedImageUrl} alt="Cropped result" className="mt-2 border rounded-md shadow-sm max-w-full" />
                                <a href={croppedImageUrl} download="cropped-image.png" className="block text-center mt-2 w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                    Download Cropped Image
                                </a>
                            </div>
                        )}
                        <button onClick={() => { setImgSrc(''); setCroppedImageUrl(''); if (fileInputRef.current) fileInputRef.current.value = ""; }} className="w-full mt-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
                            Clear Image
                        </button>
                    </div>
                </div>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
};

export default ImageCropperPage;

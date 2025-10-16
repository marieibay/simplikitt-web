import React, { useState } from 'react';
import { ImageToBase64DecoderIcon } from '../components/icons/ImageToBase64DecoderIcon';

const ImageToBase64DecoderPage: React.FC = () => {
    const [base64, setBase64] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const handleDecode = () => {
        setError('');
        setImageUrl('');
        if (!base64.trim()) {
            setError('Please paste a Base64 string.');
            return;
        }
        try {
            // Basic validation
            const dataUrlRegex = /^data:image\/[a-z]+;base64,/;
            if (dataUrlRegex.test(base64)) {
                setImageUrl(base64);
            } else {
                // Try to construct a data URL. Assume PNG, but this may fail for other types.
                // A more robust solution might try to guess the type from magic numbers.
                atob(base64); // This will throw an error if not valid base64
                setImageUrl(`data:image/png;base64,${base64}`);
            }
        } catch (e) {
            setError('Invalid Base64 string. Could not decode.');
        }
    };
    
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ImageToBase64DecoderIcon className="w-10 h-10 text-blue-200" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Base64 to Image</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Input Base64 String</h3>
                    <textarea
                        value={base64}
                        onChange={(e) => setBase64(e.target.value)}
                        placeholder="Paste your Base64 string here..."
                        className="w-full h-64 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition font-mono text-sm"
                    />
                    <button onClick={handleDecode} className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition shadow-md">
                        Decode
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Result</h3>
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px] flex items-center justify-center">
                        {imageUrl ? (
                            <div className="text-center">
                                <img src={imageUrl} alt="Decoded" className="max-w-full h-auto max-h-64 mx-auto rounded-md border" />
                                <a href={imageUrl} download="decoded-image.png" className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg">
                                    Download Image
                                </a>
                            </div>
                        ) : (
                             <p className="text-gray-500 text-center">Your decoded image will appear here.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageToBase64DecoderPage;
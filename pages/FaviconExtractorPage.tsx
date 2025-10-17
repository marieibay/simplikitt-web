import React, { useState } from 'react';
import { FaviconExtractorIcon } from '../components/icons/FaviconExtractorIcon';

const FaviconExtractorPage: React.FC = () => {
    const [url, setUrl] = useState('https://google.com');
    const [faviconUrl, setFaviconUrl] = useState('');

    const extractFavicon = () => {
        if (!url) return;
        try {
            const domain = new URL(url).hostname;
            // Using Google's favicon service as a reliable fallback
            setFaviconUrl(`https://www.google.com/s2/favicons?domain=${domain}&sz=64`);
        } catch (e) {
            alert('Invalid URL');
        }
    };
    
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <FaviconExtractorIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Favicon Extractor</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4 text-center">
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" className="w-full p-2 border rounded font-mono"/>
                <button onClick={extractFavicon} className="px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Extract</button>
                {faviconUrl && <img src={faviconUrl} alt="favicon" className="mx-auto" />}
            </div>
        </div>
    );
};

export default FaviconExtractorPage;

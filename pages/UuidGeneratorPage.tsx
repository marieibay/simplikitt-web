import React, { useState, useEffect } from 'react';
import { UuidGeneratorIcon } from '../components/icons/UuidGeneratorIcon';

const UuidGeneratorPage: React.FC = () => {
    const [uuid, setUuid] = useState('');
    const [copied, setCopied] = useState(false);

    const generateUuid = () => {
        setUuid(crypto.randomUUID());
    };

    useEffect(() => {
        generateUuid();
    }, []);

    const copyToClipboard = () => {
        if (uuid) {
            navigator.clipboard.writeText(uuid);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <UuidGeneratorIcon className="w-10 h-10 text-purple-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">UUID/GUID Generator</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
                <div className="relative">
                    <input type="text" value={uuid} readOnly className="w-full p-3 font-mono border rounded-md bg-gray-100" />
                    <button onClick={copyToClipboard} className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-md">
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <button onClick={generateUuid} className="px-5 py-2.5 bg-purple-500 text-white font-bold rounded-lg">
                    Generate New UUID
                </button>
            </div>
        </div>
    );
};

export default UuidGeneratorPage;

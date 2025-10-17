import React, { useState, useEffect } from 'react';
import { LocalStorageViewerIcon } from '../components/icons/LocalStorageViewerIcon';

const LocalStorageViewerPage: React.FC = () => {
    const [storage, setStorage] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const items: { [key: string]: string } = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                items[key] = localStorage.getItem(key) || '';
            }
        }
        setStorage(items);
    }, []);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <LocalStorageViewerIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Local Storage Viewer</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <table className="w-full text-sm">
                    <thead><tr className="border-b"><th className="p-2 text-left">Key</th><th className="p-2 text-left">Value</th></tr></thead>
                    <tbody>
                        {Object.entries(storage).map(([key, value]) => (
                            <tr key={key} className="border-b"><td className="p-2 font-mono">{key}</td><td className="p-2 font-mono break-all">{value}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LocalStorageViewerPage;

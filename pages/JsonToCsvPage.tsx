import React, { useState } from 'react';
import { JsonToCsvIcon } from '../components/icons/JsonToCsvIcon';

const JsonToCsvPage: React.FC = () => {
    const [jsonInput, setJsonInput] = useState('[{"id":1,"name":"apple"},{"id":2,"name":"banana"}]');
    const [csvOutput, setCsvOutput] = useState('');
    const [error, setError] = useState('');

    const convert = () => {
        try {
            const arr = JSON.parse(jsonInput);
            if (!Array.isArray(arr) || arr.length === 0) {
                setError('Input must be a non-empty array of objects.');
                return;
            }
            const headers = Object.keys(arr[0]);
            let csv = headers.join(',') + '\n';
            arr.forEach(row => {
                csv += headers.map(header => JSON.stringify(row[header] || '')).join(',') + '\n';
            });
            setCsvOutput(csv);
            setError('');
        } catch (e) {
            setError('Invalid JSON input.');
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <JsonToCsvIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON to CSV Converter</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <textarea value={jsonInput} onChange={e => setJsonInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
                <textarea value={csvOutput} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
            </div>
            <button onClick={convert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default JsonToCsvPage;

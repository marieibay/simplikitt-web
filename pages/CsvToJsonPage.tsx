import React, { useState } from 'react';
import { CsvToJsonIcon } from '../components/icons/CsvToJsonIcon';

const CsvToJsonPage: React.FC = () => {
    const [csvInput, setCsvInput] = useState('id,name\n1,apple\n2,banana');
    const [jsonOutput, setJsonOutput] = useState('');
    const [error, setError] = useState('');

    const convert = () => {
        try {
            const lines = csvInput.trim().split('\n');
            const headers = lines[0].split(',');
            const result = lines.slice(1).map(line => {
                const values = line.split(',');
                return headers.reduce((obj, header, index) => {
                    (obj as any)[header.trim()] = values[index]?.trim();
                    return obj;
                }, {});
            });
            setJsonOutput(JSON.stringify(result, null, 2));
            setError('');
        } catch (e) {
            setError('Invalid CSV input.');
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CsvToJsonIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSV to JSON Converter</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <textarea value={csvInput} onChange={e => setCsvInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
                <textarea value={jsonOutput} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50 font-mono" />
            </div>
            <button onClick={convert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg">Convert</button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default CsvToJsonPage;

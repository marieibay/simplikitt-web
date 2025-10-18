import React, { useState } from 'react';
import { JsonToSqlInsertIcon } from '../components/icons/JsonToSqlInsertIcon';

const JsonToSqlInsertPage: React.FC = () => {
    const [jsonInput, setJsonInput] = useState('[{\n  "id": 1,\n  "name": "Apple",\n  "is_fruit": true\n}, {\n  "id": 2,\n  "name": "Carrot",\n  "is_fruit": false\n}]');
    const [tableName, setTableName] = useState('products');
    const [sqlOutput, setSqlOutput] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    const convert = () => {
        try {
            const data = JSON.parse(jsonInput);
            if (!Array.isArray(data) || data.length === 0) {
                setError('Input must be a non-empty array of objects.');
                return;
            }
            if (!tableName.trim()) {
                setError('Table name cannot be empty.');
                return;
            }

            const headers = Object.keys(data[0]);
            const sqlStatements = data.map(row => {
                const values = headers.map(header => {
                    const value = row[header];
                    if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`; // Escape single quotes
                    if (value === null) return 'NULL';
                    if (typeof value === 'boolean') return value ? '1' : '0';
                    return value; // numbers
                }).join(', ');
                return `INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${values});`;
            });

            setSqlOutput(sqlStatements.join('\n'));
            setError('');
        } catch (e) {
            setError('Invalid JSON input. Please provide an array of objects.');
        }
    };
    
    const copyToClipboard = () => {
        if (sqlOutput) {
            navigator.clipboard.writeText(sqlOutput);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <JsonToSqlInsertIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">JSON to SQL Insert</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block font-medium">Table Name</label>
                        <input value={tableName} onChange={e => setTableName(e.target.value)} placeholder="Table Name" className="w-full p-2 border rounded font-mono"/>
                    </div>
                    <div>
                        <label className="block font-medium">JSON Array of Objects</label>
                        <textarea value={jsonInput} onChange={e => setJsonInput(e.target.value)} className="w-full h-80 p-3 border rounded-lg font-mono" />
                    </div>
                </div>
                 <div className="relative">
                    <label className="block font-medium">Generated SQL</label>
                    <textarea value={sqlOutput} readOnly className="w-full h-96 p-3 border rounded-lg bg-gray-50 font-mono" />
                     <button onClick={copyToClipboard} className="absolute top-8 right-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md disabled:opacity-50" disabled={!sqlOutput}>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <button onClick={convert} className="mt-6 px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition shadow-md">Convert</button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default JsonToSqlInsertPage;

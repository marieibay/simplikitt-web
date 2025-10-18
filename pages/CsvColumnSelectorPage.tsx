import React, { useState } from 'react';
import { CsvColumnSelectorIcon } from '../components/icons/CsvColumnSelectorIcon';

const CsvColumnSelectorPage: React.FC = () => {
    const [fileContent, setFileContent] = useState('');
    const [headers, setHeaders] = useState<string[]>([]);
    const [selectedColumns, setSelectedColumns] = useState<{ [key: number]: boolean }>({});
    const [outputCsv, setOutputCsv] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target?.result as string;
                setFileContent(content);
                const firstLine = content.split('\n')[0];
                const fileHeaders = firstLine.split(',');
                setHeaders(fileHeaders);
                const initialSelection: { [key: number]: boolean } = {};
                fileHeaders.forEach((_, index) => {
                    initialSelection[index] = true;
                });
                setSelectedColumns(initialSelection);
                setOutputCsv('');
            };
            reader.readAsText(file);
        }
    };

    const handleColumnToggle = (index: number) => {
        setSelectedColumns(prev => ({ ...prev, [index]: !prev[index] }));
    };
    
    const processCsv = () => {
        setIsProcessing(true);
        const lines = fileContent.split('\n');
        const selectedIndices = Object.keys(selectedColumns).filter(index => selectedColumns[Number(index)]).map(Number);
        
        let newCsv = '';
        lines.forEach(line => {
            if(line.trim() === '') return;
            const values = line.split(',');
            const newRow = selectedIndices.map(index => values[index] || '');
            newCsv += newRow.join(',') + '\n';
        });

        setOutputCsv(newCsv.trim());
        setIsProcessing(false);
    };
    
     const handleDownload = () => {
        const blob = new Blob([outputCsv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'selected_columns.csv';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CsvColumnSelectorIcon className="w-10 h-10 text-purple-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSV Column Selector</h1>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md border max-w-4xl mx-auto space-y-4">
                <input type="file" accept=".csv" onChange={handleFileChange} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />
                {headers.length > 0 && (
                    <>
                        <div>
                            <h3 className="font-semibold">Select Columns to Keep:</h3>
                            <div className="flex flex-wrap gap-2 mt-2 p-2 border rounded-md">
                                {headers.map((header, index) => (
                                    <label key={index} className="flex items-center gap-2 p-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
                                        <input type="checkbox" checked={selectedColumns[index] || false} onChange={() => handleColumnToggle(index)} className="form-checkbox h-5 w-5 text-purple-600"/>
                                        <span className="font-mono text-sm">{header.trim()}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button onClick={processCsv} disabled={isProcessing} className="px-5 py-2 bg-purple-500 text-white font-bold rounded-lg">{isProcessing ? "Processing..." : "Process CSV"}</button>
                        {outputCsv && (
                            <div>
                                <h3 className="font-semibold">Result:</h3>
                                <textarea value={outputCsv} readOnly className="w-full h-64 p-2 border rounded-md bg-gray-50 font-mono" />
                                <button onClick={handleDownload} className="mt-2 px-5 py-2 bg-green-500 text-white font-bold rounded-lg">Download Result</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CsvColumnSelectorPage;

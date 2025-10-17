import React, { useState } from 'react';
import { CsvViewerIcon } from '../components/icons/CsvViewerIcon';

const CsvViewerPage: React.FC = () => {
  const [csv, setCsv] = useState('header1,header2\nvalue1,value2');
  
  const data = csv.split('\n').map(row => row.split(','));

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CsvViewerIcon className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">CSV Viewer</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <textarea value={csv} onChange={e => setCsv(e.target.value)} className="w-full h-96 p-3 border rounded-lg font-mono" />
        <div className="overflow-auto h-96 border rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                {data[0]?.map((header, i) => <th key={i} className="p-2 border">{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, i) => (
                <tr key={i} className="border-b">
                  {row.map((cell, j) => <td key={j} className="p-2 border">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CsvViewerPage;

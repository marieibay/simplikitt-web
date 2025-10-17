import React, { useState } from 'react';
import { DateFormatConverterIcon } from '../components/icons/DateFormatConverterIcon';

const DateFormatConverterPage: React.FC = () => {
  const [inputDate, setInputDate] = useState(new Date().toISOString().slice(0, 10));
  const [format, setFormat] = useState('MM/DD/YYYY');
  const [output, setOutput] = useState('');

  const formatDate = () => {
    try {
      const date = new Date(inputDate);
      // add timezone offset to avoid being off by one day
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      if (isNaN(date.getTime())) {
        setOutput('Invalid Date');
        return;
      }
      const M = date.getMonth() + 1;
      const D = date.getDate();
      const Y = date.getFullYear();
      let formatted = format.replace('MM', M.toString().padStart(2, '0'));
      formatted = formatted.replace('DD', D.toString().padStart(2, '0'));
      formatted = formatted.replace('YYYY', Y.toString());
      setOutput(formatted);
    } catch {
      setOutput('Invalid Date');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DateFormatConverterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Date Format Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label>Date</label>
          <input type="date" value={inputDate} onChange={e => setInputDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div>
          <label>Format (MM, DD, YYYY)</label>
          <input type="text" value={format} onChange={e => setFormat(e.target.value)} className="w-full p-2 border rounded-md mt-1" placeholder="e.g., YYYY-MM-DD" />
        </div>
        <button onClick={formatDate} className="px-5 py-2 bg-teal-500 text-white font-bold rounded-lg">Format</button>
        {output && (
          <div>
            <label>Result</label>
            <input value={output} readOnly className="w-full p-2 border rounded-md mt-1 bg-gray-100" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateFormatConverterPage;

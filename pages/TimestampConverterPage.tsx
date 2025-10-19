
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TimestampConverterPage: React.FC = () => {
  const [unixTimestamp, setUnixTimestamp] = useState<string>('');
  const [humanDate, setHumanDate] = useState<string>('');
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(Math.floor(Date.now() / 1000));
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTimestampToDate = () => {
    const ts = parseInt(unixTimestamp, 10);
    if (!isNaN(ts)) {
      const date = new Date(ts * 1000);
      setHumanDate(date.toUTCString());
    } else {
      setHumanDate('Invalid Timestamp');
    }
  };

  const handleDateToTimestamp = () => {
    const date = new Date(humanDate);
    if (!isNaN(date.getTime())) {
      setUnixTimestamp(Math.floor(date.getTime() / 1000).toString());
    } else {
      setUnixTimestamp('Invalid Date');
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Clock className="w-10 h-10 text-blue-800" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Timestamp Converter</h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Current Unix Timestamp</h2>
        <div className="relative">
          <p className="text-3xl font-mono text-blue-800 mt-2 p-3 bg-gray-100 rounded-md">{currentTimestamp}</p>
          <button onClick={() => copyToClipboard(currentTimestamp.toString(), 'current')} className="absolute top-1/2 right-3 -translate-y-1/2 px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md">
            {copied === 'current' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Timestamp to Date</h2>
          <label htmlFor="timestamp" className="block text-sm font-medium text-gray-600">Unix Timestamp</label>
          <input 
            id="timestamp"
            type="number"
            value={unixTimestamp}
            onChange={(e) => setUnixTimestamp(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="e.g. 1672531200"
          />
          <button onClick={handleTimestampToDate} className="w-full mt-3 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition">Convert to Date</button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Date to Timestamp</h2>
          <label htmlFor="humandate" className="block text-sm font-medium text-gray-600">Date String (UTC)</label>
          <input 
            id="humandate"
            type="text"
            value={humanDate}
            onChange={(e) => setHumanDate(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            placeholder="e.g. Sun, 01 Jan 2023 00:00:00 GMT"
          />
          <button onClick={handleDateToTimestamp} className="w-full mt-3 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition">Convert to Timestamp</button>
        </div>
      </div>
    </div>
  );
};

export default TimestampConverterPage;
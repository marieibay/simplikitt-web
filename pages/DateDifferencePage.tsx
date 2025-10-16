import React, { useState, useMemo } from 'react';
import { DateDifferenceIcon } from '../components/icons/DateDifferenceIcon';

const DateDifferencePage: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

  const difference = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return null;
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return {
      days: diffDays,
      weeks: (diffDays / 7).toFixed(2),
      months: (diffDays / 30.44).toFixed(2), // Average days in a month
    };
  }, [startDate, endDate]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DateDifferenceIcon className="w-10 h-10 text-sky-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Date Difference Calculator</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-date" className="block font-medium">Start Date</label>
            <input type="date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
          </div>
          <div>
            <label htmlFor="end-date" className="block font-medium">End Date</label>
            <input type="date" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
          </div>
        </div>
        {difference && (
          <div className="pt-4 text-center">
            <h2 className="text-xl font-semibold mb-4">Duration</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg"><p className="text-3xl font-bold">{difference.days}</p><p className="text-sm">Days</p></div>
              <div className="p-4 bg-gray-100 rounded-lg"><p className="text-3xl font-bold">{difference.weeks}</p><p className="text-sm">Weeks</p></div>
              <div className="p-4 bg-gray-100 rounded-lg"><p className="text-3xl font-bold">{difference.months}</p><p className="text-sm">Months</p></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateDifferencePage;

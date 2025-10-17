import React, { useState, useMemo } from 'react';
import { DateToDayOfYearIcon } from '../components/icons/DateToDayOfYearIcon';

const DateToDayOfYearPage: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const dayOfYear = useMemo(() => {
    try {
      const d = new Date(date);
      const start = new Date(d.getFullYear(), 0, 0);
      const diff = d.getTime() - start.getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.floor(diff / oneDay);
    } catch {
      return 'Invalid Date';
    }
  }, [date]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DateToDayOfYearIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Date to Day of Year</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="date-input" className="block font-medium">Select a Date</label>
          <input type="date" id="date-input" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div>
          <p className="text-lg">Day of the Year</p>
          <p className="text-6xl font-bold text-teal-600">{dayOfYear}</p>
        </div>
      </div>
    </div>
  );
};

export default DateToDayOfYearPage;

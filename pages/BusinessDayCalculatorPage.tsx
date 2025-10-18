import React, { useState, useMemo } from 'react';
import { BusinessDayCalculatorIcon } from '../components/icons/BusinessDayCalculatorIcon';

const BusinessDayCalculatorPage: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [daysToAdd, setDaysToAdd] = useState(10);

  const resultDate = useMemo(() => {
    const date = new Date(startDate);
    if (isNaN(date.getTime())) return 'Invalid Date';

    // Adjust for timezone to avoid off-by-one errors
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    
    let count = 0;
    const direction = daysToAdd > 0 ? 1 : -1;
    
    while (count < Math.abs(daysToAdd)) {
        date.setDate(date.getDate() + direction);
        const dayOfWeek = date.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // 0 = Sunday, 6 = Saturday
            count++;
        }
    }
    return date.toLocaleDateString();
  }, [startDate, daysToAdd]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <BusinessDayCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Business Day Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4">
        <div>
          <label>Start Date</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div>
          <label>Business Days to Add/Subtract</label>
          <input type="number" value={daysToAdd} onChange={e => setDaysToAdd(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div className="text-center pt-2">
            <p className="text-lg">Resulting Date</p>
            <p className="text-4xl font-bold text-teal-600">{resultDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessDayCalculatorPage;
import React, { useState, useMemo } from 'react';
import { DayOfTheWeekCalculatorIcon } from '../components/icons/DayOfTheWeekCalculatorIcon';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DayOfTheWeekCalculatorPage: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const dayOfWeek = useMemo(() => {
    try {
      const d = new Date(date);
      // Adjust for timezone offset to prevent off-by-one day errors
      d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
      return days[d.getDay()];
    } catch {
      return 'Invalid Date';
    }
  }, [date]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <DayOfTheWeekCalculatorIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Day of the Week Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="date-input" className="block font-medium">Select a Date</label>
          <input type="date" id="date-input" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <p className="text-4xl font-bold text-teal-600">{dayOfWeek}</p>
      </div>
    </div>
  );
};

export default DayOfTheWeekCalculatorPage;

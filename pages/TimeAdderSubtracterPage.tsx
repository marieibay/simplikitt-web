import React, { useState, useMemo } from 'react';
import { TimeAdderSubtracterIcon } from '../components/icons/TimeAdderSubtracterIcon';

const TimeAdderSubtracterPage: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const resultDate = useMemo(() => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Invalid Date';
    d.setDate(d.getDate() + days);
    d.setHours(d.getHours() + hours);
    d.setMinutes(d.getMinutes() + minutes);
    return d.toLocaleString();
  }, [date, days, hours, minutes]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TimeAdderSubtracterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Time Adder / Subtracter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
        <div>
          <label>Start Date & Time</label>
          <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div><label>Days</label><input type="number" value={days} onChange={e => setDays(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/></div>
          <div><label>Hours</label><input type="number" value={hours} onChange={e => setHours(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/></div>
          <div><label>Minutes</label><input type="number" value={minutes} onChange={e => setMinutes(Number(e.target.value))} className="w-full p-2 border rounded-md mt-1"/></div>
        </div>
        <div className="text-center pt-4">
          <p className="text-lg font-semibold">Resulting Date & Time</p>
          <p className="text-2xl font-bold text-teal-600">{resultDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeAdderSubtracterPage;

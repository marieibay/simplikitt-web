import React, { useState, useMemo } from 'react';
import { LeapYearCheckerIcon } from '../components/icons/LeapYearCheckerIcon';

const LeapYearCheckerPage: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const isLeap = useMemo(() => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }, [year]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <LeapYearCheckerIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Leap Year Checker</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="year-input" className="block font-medium">Enter a Year</label>
          <input type="number" id="year-input" value={year} onChange={e => setYear(parseInt(e.target.value, 10))} className="w-full p-2 border rounded-md mt-1 text-center text-xl"/>
        </div>
        <p className="text-3xl font-bold">
          {year} is {isLeap ? <span className="text-green-600">a leap year</span> : <span className="text-red-600">not a leap year</span>}.
        </p>
      </div>
    </div>
  );
};

export default LeapYearCheckerPage;

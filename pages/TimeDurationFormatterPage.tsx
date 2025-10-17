import React, { useState, useMemo } from 'react';
import { TimeDurationFormatterIcon } from '../components/icons/TimeDurationFormatterIcon';

const TimeDurationFormatterPage: React.FC = () => {
  const [seconds, setSeconds] = useState('3661'); // e.g., 1 hour, 1 minute, 1 second

  const formatted = useMemo(() => {
    const num = parseInt(seconds, 10);
    if (isNaN(num)) return 'Invalid input';
    const h = Math.floor(num / 3600).toString().padStart(2, '0');
    const m = Math.floor((num % 3600) / 60).toString().padStart(2, '0');
    const s = (num % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }, [seconds]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TimeDurationFormatterIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Time Duration Formatter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="seconds-input" className="block font-medium">Enter Duration in Seconds</label>
          <input 
            type="number" 
            id="seconds-input" 
            value={seconds} 
            onChange={e => setSeconds(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 text-center text-xl"
          />
        </div>
        <div>
            <p className="text-lg">Formatted Duration (HH:MM:SS)</p>
            <p className="text-4xl font-bold text-teal-600 font-mono">{formatted}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeDurationFormatterPage;

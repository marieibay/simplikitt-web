import React, { useState, useEffect } from 'react';
import { WorldClockIcon } from '../components/icons/WorldClockIcon';

const timeZones = [
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Paris', tz: 'Europe/Paris' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' },
  { name: 'Dubai', tz: 'Asia/Dubai' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles' },
  { name: 'UTC', tz: 'UTC' },
];

const WorldClockPage: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <WorldClockIcon className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">World Clock</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {timeZones.map(({ name, tz }) => (
          <div key={name} className="bg-white p-4 rounded-lg shadow-md border">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-3xl font-bold font-mono text-teal-600">
              {new Intl.DateTimeFormat('en-US', { timeStyle: 'medium', timeZone: tz }).format(time)}
            </p>
             <p className="text-sm text-gray-500">
              {new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: tz }).format(time)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClockPage;

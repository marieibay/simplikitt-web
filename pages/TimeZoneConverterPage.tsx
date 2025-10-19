import React, { useState, useEffect } from 'react';
import { TimeZoneConverterIcon } from '../components/icons/TimeZoneConverterIcon';

let timeZones: string[];
try {
  // Use the Intl API to get a comprehensive list of IANA time zones supported by the browser.
  // @ts-ignore - supportedValuesOf might not be in older TS lib versions.
  timeZones = Intl.supportedValuesOf('timeZone');
} catch (e) {
  console.warn("Intl.supportedValuesOf is not supported, using a fallback list of timezones.");
  // A fallback list of common IANA time zones.
  const fallbackTimeZones = [
    'UTC',
    'GMT',
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'America/Denver',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Asia/Tokyo',
    'Asia/Dubai',
    'Asia/Kolkata',
    'Australia/Sydney',
    'Africa/Cairo',
  ];
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (!fallbackTimeZones.includes(userTimeZone)) {
      fallbackTimeZones.push(userTimeZone);
  }
  // Remove duplicates and sort alphabetically
  timeZones = [...new Set(fallbackTimeZones)].sort();
}

const TimeZoneConverterPage: React.FC = () => {
  const [fromTimeZone, setFromTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [toTimeZone, setToTimeZone] = useState('Europe/London');
  const [fromTime, setFromTime] = useState(new Date());
  
  const toTime = new Intl.DateTimeFormat('en-US', {
    timeZone: toTimeZone,
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  }).format(fromTime);
  
  useEffect(() => {
    const timer = setInterval(() => setFromTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <TimeZoneConverterIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Time Zone Converter</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-3xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">From</label>
            <select value={fromTimeZone} onChange={e => setFromTimeZone(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {timeZones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </select>
            <div className="mt-2 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-2xl font-bold">{new Intl.DateTimeFormat('en-US', { timeStyle: 'medium', timeZone: fromTimeZone }).format(fromTime)}</p>
            </div>
          </div>
          <div>
            <label className="block font-medium">To</label>
            <select value={toTimeZone} onChange={e => setToTimeZone(e.target.value)} className="w-full p-2 border rounded-md mt-1">
              {timeZones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </select>
            <div className="mt-2 p-4 bg-gray-100 rounded-md text-center">
               <p className="text-2xl font-bold">{new Intl.DateTimeFormat('en-US', { timeStyle: 'medium', timeZone: toTimeZone }).format(fromTime)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeZoneConverterPage;
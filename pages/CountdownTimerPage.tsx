
import React, { useState, useEffect, useRef } from 'react';
import { CountdownTimerIcon } from '../components/icons/CountdownTimerIcon';

const CountdownTimerPage: React.FC = () => {
  const [initialTime, setInitialTime] = useState({ h: 0, m: 5, s: 0 });
  const [time, setTime] = useState(300);
  const [isActive, setIsActive] = useState(false);
  // Fix: Use `number` for the interval ID in a browser environment instead of `NodeJS.Timeout`.
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = window.setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      // Optional: Add sound or notification
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, time]);

  const handleStart = () => {
    const totalSeconds = initialTime.h * 3600 + initialTime.m * 60 + initialTime.s;
    if (time === 0) setTime(totalSeconds);
    setIsActive(true);
  };

  const handlePause = () => setIsActive(false);

  const handleReset = () => {
    setIsActive(false);
    const totalSeconds = initialTime.h * 3600 + initialTime.m * 60 + initialTime.s;
    setTime(totalSeconds);
  };

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <CountdownTimerIcon className="w-10 h-10 text-indigo-400" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Countdown Timer</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto text-center space-y-4">
        {!isActive && time > 0 ? (
          <div className="flex items-center justify-center gap-2">
            <input type="number" value={initialTime.h} onChange={e => setInitialTime({...initialTime, h: parseInt(e.target.value)})} className="w-24 p-2 border rounded text-2xl text-center" /> :
            <input type="number" value={initialTime.m} onChange={e => setInitialTime({...initialTime, m: parseInt(e.target.value)})} className="w-24 p-2 border rounded text-2xl text-center" /> :
            <input type="number" value={initialTime.s} onChange={e => setInitialTime({...initialTime, s: parseInt(e.target.value)})} className="w-24 p-2 border rounded text-2xl text-center" />
          </div>
        ) : (
          <p className="text-7xl font-mono font-bold">{formatTime(time)}</p>
        )}
        <div className="flex justify-center gap-4">
          {!isActive && <button onClick={handleStart} className="px-6 py-2 bg-indigo-500 text-white rounded-lg">Start</button>}
          {isActive && <button onClick={handlePause} className="px-6 py-2 bg-yellow-500 text-white rounded-lg">Pause</button>}
          <button onClick={handleReset} className="px-6 py-2 bg-gray-500 text-white rounded-lg">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerPage;
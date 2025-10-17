
import React, { useState, useEffect, useRef } from 'react';
import { StopwatchIcon } from '../components/icons/StopwatchIcon';

const StopwatchPage: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  // Fix: Use `number` for the interval ID in a browser environment instead of `NodeJS.Timeout`.
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, time]);

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setLaps([]);
  };
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (t: number) => {
    const ms = `0${t % 1000}`.slice(-3, -1);
    const s = `0${Math.floor(t / 1000) % 60}`.slice(-2);
    const m = `0${Math.floor(t / 60000) % 60}`.slice(-2);
    return `${m}:${s}.${ms}`;
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <StopwatchIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Stopwatch</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto text-center space-y-4">
        <p className="text-7xl font-mono font-bold">{formatTime(time)}</p>
        <div className="flex justify-center gap-4">
          {!isActive ? (
            <button onClick={handleStart} className="px-6 py-2 bg-green-500 text-white rounded-lg w-24">Start</button>
          ) : (
            <button onClick={handleStop} className="px-6 py-2 bg-red-500 text-white rounded-lg w-24">Stop</button>
          )}
          <button onClick={handleLap} disabled={!isActive} className="px-6 py-2 bg-blue-500 text-white rounded-lg w-24 disabled:opacity-50">Lap</button>
          <button onClick={handleReset} className="px-6 py-2 bg-gray-500 text-white rounded-lg w-24">Reset</button>
        </div>
        {laps.length > 0 && (
          <div className="text-left max-h-48 overflow-y-auto border-t pt-4">
            {laps.map((lap, i) => (
              <div key={i} className="flex justify-between font-mono">
                <span>Lap {i + 1}</span>
                <span>{formatTime(lap)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StopwatchPage;
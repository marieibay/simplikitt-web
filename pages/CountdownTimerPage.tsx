import React, { useState, useEffect, useRef } from 'react';
import { CountdownTimerIcon } from '../components/icons/CountdownTimerIcon';

const CountdownTimerPage: React.FC = () => {
    const [initialSeconds, setInitialSeconds] = useState(60);
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);
    // FIX: Use ReturnType<typeof setInterval> for browser compatibility instead of NodeJS.Timeout
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isActive && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds(s => s - 1);
            }, 1000);
        } else if (seconds === 0) {
             if (intervalRef.current) clearInterval(intervalRef.current);
             setIsActive(false);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive, seconds]);

    const toggle = () => setIsActive(!isActive);
    const reset = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsActive(false);
        setSeconds(initialSeconds);
    };

    const formatTime = (totalSeconds: number) => {
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CountdownTimerIcon className="w-10 h-10 text-teal-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Countdown Timer</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
                <div>
                    <label>Set Timer (seconds)</label>
                    <input type="number" value={initialSeconds} onChange={e => {
                        const newTime = Number(e.target.value);
                        setInitialSeconds(newTime);
                        if (!isActive) setSeconds(newTime);
                    }} className="w-full p-2 border rounded-md mt-1"/>
                </div>
                <p className="text-6xl font-mono">{formatTime(seconds)}</p>
                <div className="flex gap-4 justify-center">
                    <button onClick={toggle} className="px-6 py-2 bg-teal-500 text-white rounded-lg">{isActive ? 'Pause' : 'Start'}</button>
                    <button onClick={reset} className="px-6 py-2 bg-gray-200 rounded-lg">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimerPage;

import React, { useState, useEffect, useRef } from 'react';
import { Timer } from 'lucide-react';

const StopwatchPage: React.FC = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTime(t => t + 10);
            }, 10);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive]);
    
    const toggle = () => setIsActive(!isActive);
    const reset = () => {
        setIsActive(false);
        setTime(0);
        setLaps([]);
    };
    const lap = () => setLaps([...laps, time]);
    
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
        const milliseconds = (ms % 1000).toString().padStart(3, '0').slice(0, 2);
        return `${minutes}:${seconds}.${milliseconds}`;
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <Timer className="w-10 h-10 text-teal-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Stopwatch</h1>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
                <p className="text-6xl font-mono">{formatTime(time)}</p>
                <div className="flex gap-4 justify-center">
                    <button onClick={toggle} className="px-6 py-2 bg-teal-500 text-white rounded-lg w-24">{isActive ? 'Stop' : 'Start'}</button>
                    <button onClick={lap} disabled={!isActive} className="px-6 py-2 bg-gray-200 rounded-lg disabled:opacity-50">Lap</button>
                    <button onClick={reset} className="px-6 py-2 bg-gray-200 rounded-lg">Reset</button>
                </div>
                <div className="h-48 overflow-y-auto border rounded-md text-left p-2 font-mono">
                    {laps.map((lapTime, i) => (
                        <div key={i} className="flex justify-between p-1 border-b">
                            <span>Lap {i + 1}</span>
                            <span>{formatTime(lapTime)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default StopwatchPage;
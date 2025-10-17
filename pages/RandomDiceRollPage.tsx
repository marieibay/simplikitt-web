import React, { useState } from 'react';
import { RandomDiceRollIcon } from '../components/icons/RandomDiceRollIcon';

const RandomDiceRollPage: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    setIsRolling(true);
    setResult(null);
    setTimeout(() => {
      setResult(Math.floor(Math.random() * 6) + 1);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RandomDiceRollIcon className="w-10 h-10 text-fuchsia-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Random Dice Roll</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div className="h-32 flex items-center justify-center">
            {isRolling && <p className="text-2xl animate-pulse">Rolling...</p>}
            {result && <p className="text-8xl font-bold">{result}</p>}
        </div>
        <button onClick={roll} disabled={isRolling} className="px-8 py-4 bg-fuchsia-500 text-white font-bold rounded-lg text-xl hover:bg-fuchsia-600 disabled:opacity-50">
          Roll Die
        </button>
      </div>
    </div>
  );
};

export default RandomDiceRollPage;

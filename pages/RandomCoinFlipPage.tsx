import React, { useState } from 'react';
import { RandomCoinFlipIcon } from '../components/icons/RandomCoinFlipIcon';

const RandomCoinFlipPage: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flip = () => {
    setIsFlipping(true);
    setResult(null);
    setTimeout(() => {
      setResult(Math.random() < 0.5 ? 'Heads' : 'Tails');
      setIsFlipping(false);
    }, 500);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <RandomCoinFlipIcon className="w-10 h-10 text-fuchsia-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Random Coin Flip</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4 text-center">
        <div className="h-32 flex items-center justify-center">
            {isFlipping && <p className="text-2xl animate-pulse">Flipping...</p>}
            {result && <p className="text-6xl font-bold">{result}</p>}
        </div>
        <button onClick={flip} disabled={isFlipping} className="px-8 py-4 bg-fuchsia-500 text-white font-bold rounded-lg text-xl hover:bg-fuchsia-600 disabled:opacity-50">
          Flip Coin
        </button>
      </div>
    </div>
  );
};

export default RandomCoinFlipPage;

import React, { useState, useMemo } from 'react';
import { PasswordStrengthCheckerIcon } from '../components/icons/PasswordStrengthCheckerIcon';

const PasswordStrengthCheckerPage: React.FC = () => {
  const [password, setPassword] = useState('');

  const strength = useMemo(() => {
    let score = 0;
    if (!password) {
        return { text: 'Enter a password', color: 'bg-gray-200' };
    }
    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-9]/)) score++;
    
    const levels = [
      { text: 'Very Weak', color: 'bg-red-500' },
      { text: 'Weak', color: 'bg-orange-500' },
      { text: 'Medium', color: 'bg-yellow-500' },
      { text: 'Strong', color: 'bg-blue-500' },
      { text: 'Very Strong', color: 'bg-green-500' },
    ];
    
    return levels[Math.min(score, 4)];
  }, [password]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PasswordStrengthCheckerIcon className="w-10 h-10 text-orange-600" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Password Strength Checker</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-md mx-auto space-y-4">
        <input 
          type="text" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          className="w-full p-3 border rounded-md text-xl"
          placeholder="Enter a password..."
        />
        <div>
            <div className="flex items-center gap-4">
                <div className={`w-full h-4 rounded-full transition-colors ${strength.color}`}></div>
                <span className="font-semibold whitespace-nowrap">{strength.text}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthCheckerPage;

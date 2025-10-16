import React, { useState, useMemo } from 'react';
import { AgeCalculatorIcon } from '../components/icons/AgeCalculatorIcon';

const AgeCalculatorPage: React.FC = () => {
  const [birthDate, setBirthDate] = useState('2000-01-01');

  const age = useMemo(() => {
    const today = new Date();
    const dob = new Date(birthDate);
    if (isNaN(dob.getTime())) return null;

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
  }, [birthDate]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <AgeCalculatorIcon className="w-10 h-10 text-rose-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Age Calculator</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="birthdate" className="block font-medium">Enter your Date of Birth</label>
          <input type="date" id="birthdate" value={birthDate} onChange={e => setBirthDate(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
        </div>
        {age && (
          <div className="pt-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Your Age is</h2>
            <p className="text-3xl font-bold">
              <span className="text-rose-600">{age.years}</span> years, <span className="text-rose-600">{age.months}</span> months, & <span className="text-rose-600">{age.days}</span> days
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculatorPage;

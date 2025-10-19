import React, { useState } from 'react';
import { Key } from 'lucide-react';

interface ButtonProps {
  value: string;
  className?: string;
}

const ScientificCalculatorPage: React.FC = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value: string) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      // Basic sanitization
      const sanitized = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/%/g, '/100')
        .replace(/π/g, 'Math.PI')
        .replace(/√/g, 'Math.sqrt')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/\^/g, '**');

      // More robust check to prevent arbitrary code execution
      if (/[^0-9\s()+\-*/.,MathPIsqrtcota**lgne]/.test(sanitized)) {
        throw new Error("Invalid characters in expression");
      }
      // eslint-disable-next-line no-eval
      const result = eval(sanitized);
      setDisplay(result.toString());
    } catch (e) {
      setDisplay('Error');
    }
  };

  const clear = () => setDisplay('');
  const backspace = () => setDisplay(display.slice(0, -1));

  const buttons = [
    '(', ')', '%', 'C',
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];
  
  const sciButtons = [
      'sin', 'cos', 'tan', 'π',
      '√', '^', 'log', 'ln',
  ];

  const Button: React.FC<ButtonProps> = ({ value, className = '' }) => {
    const action = value === '=' ? calculate : (value === 'C' ? clear : () => handleClick(value));
    return (
        <button onClick={action} className={`p-4 rounded-lg text-xl font-semibold transition ${className}`}>
            {value}
        </button>
    );
  };
  
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <Key className="w-10 h-10 text-teal-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Scientific Calculator</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl border max-w-md mx-auto">
        <input type="text" value={display} readOnly className="w-full bg-gray-100 p-4 text-right text-3xl font-mono rounded-lg mb-4" />
        <div className="grid grid-cols-4 gap-2">
            {sciButtons.map(btn => <Button key={btn} value={btn} className="bg-gray-200 hover:bg-gray-300" />)}
        </div>
        <hr className="my-2"/>
        <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn, i) => {
                let classes = 'bg-gray-100 hover:bg-gray-200';
                if ('÷×-+=C'.includes(btn)) classes = 'bg-orange-400 hover:bg-orange-500 text-white';
                if (btn === '=') classes += ' col-span-1';
                 if (btn === 'C') classes = 'bg-red-400 hover:bg-red-500 text-white';
                return <Button key={i} value={btn} className={classes} />
            })}
             <button onClick={backspace} className="p-4 rounded-lg text-xl font-semibold transition bg-gray-200 hover:bg-gray-300">
                &larr;
            </button>
        </div>
      </div>
    </div>
  );
};
export default ScientificCalculatorPage;
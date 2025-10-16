import React from 'react';
import { Link } from 'react-router-dom';
import { SimpliKittLogo } from '../assets/SimpliKittLogo';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group" aria-label="SimpliKitt Home">
          <SimpliKittLogo className="h-9 w-auto transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            SimpliKitt
          </span>
        </Link>
      </div>
    </header>
  );
};

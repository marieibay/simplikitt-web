import React from 'react';
import { Link } from 'react-router-dom';
import { SimpliKittLogo } from '../assets/SimpliKittLogo';

export const Header: React.FC = () => {
  return (
    <header className="main-header bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-8 md:py-12 text-center">
        <Link to="/" className="inline-block group" aria-label="SimpliKitt Home">
          <h1 className="flex items-center justify-center gap-3 sm:gap-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <SimpliKittLogo className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
            <span>SimpliKitt</span>
          </h1>
        </Link>
        <p className="mt-2 text-lg md:text-xl text-purple-200">
          Instant, No-Cost Utility. Solve Daily Digital Problems. Fast.
        </p>
      </div>
    </header>
  );
};


import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} SimpliKitt.com. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built for speed, privacy, and simplicity.</p>
      </div>
    </footer>
  );
};

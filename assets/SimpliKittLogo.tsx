import React from 'react';

export const SimpliKittLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://i.imgur.com/GtWkrQE.png" 
      alt="SimpliKitt Logo" 
      className={className} 
      aria-hidden="true" 
    />
  );
};
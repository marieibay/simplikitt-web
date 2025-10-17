import React, { SVGProps } from 'react';

export const RandomDiceRollIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <path d="M12 7v.01" />
    <path d="M16 12v.01" />
    <path d="M8 12v.01" />
    <path d="M12 17v.01" />
  </svg>
);

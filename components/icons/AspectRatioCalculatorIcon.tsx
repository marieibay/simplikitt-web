import React, { SVGProps } from 'react';

export const AspectRatioCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <path d="M12 9v6" />
    <path d="M15 10.5h-3" />
    <path d="M9 13.5h3" />
  </svg>
);

import React, { SVGProps } from 'react';

export const TipCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="18" x="4" y="3" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h3" />
    <path d="M16 15h.01" />
  </svg>
);

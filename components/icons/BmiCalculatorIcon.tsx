import React, { SVGProps } from 'react';

export const BmiCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a5 5 0 0 0-5 5c0 1.5.7 3.2 3 4" />
    <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.7 3.2-3 4" />
    <path d="M15 11h-3" />
    <path d="M12 11V7" />
    <path d="M12 11v11" />
    <path d="M12 15a4 4 0 0 0 4-4" />
    <path d="M12 15a4 4 0 0 1-4-4" />
  </svg>
);

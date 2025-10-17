import React, { SVGProps } from 'react';

export const RandomCoinFlipIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 2v20" />
    <path d="M12 12c-2.67 0-5 1.33-5 4" />
    <path d="M12 12c2.67 0 5-1.33 5-4" />
  </svg>
);

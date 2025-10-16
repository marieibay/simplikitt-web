import React, { SVGProps } from 'react';

export const TextDiffCheckerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20" />
    <path d="M4 8h4" />
    <path d="M4 16h4" />
    <path d="M20 8h-4" />
    <path d="M20 16h-4" />
    <path d="M10 5l-2 2 2 2" />
    <path d="M14 19l2-2-2-2" />
  </svg>
);

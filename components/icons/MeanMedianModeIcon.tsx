import React, { SVGProps } from 'react';

export const MeanMedianModeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 20V4" />
    <path d="M20 20V4" />
    <path d="M4 12h16" />
    <path d="M10 4h4" />
    <path d="M10 20h4" />
  </svg>
);

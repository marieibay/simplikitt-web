import React, { SVGProps } from 'react';

export const ImageHueShifterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m12 2 4 4" />
    <path d="m16 6 2-4" />
    <path d="m6 18 2 4" />
    <path d="m8 20 4-4" />
  </svg>
);

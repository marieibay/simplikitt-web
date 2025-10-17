import React, { SVGProps } from 'react';

export const BaseConversionIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 13v4" />
    <path d="M15 5v4" />
    <path d="M12.5 9h5" />
    <path d="M8 12h-2" />
    <path d="M6 12l-2-2 2-2" />
    <path d="M20 12h-2" />
    <path d="M18 12l2-2-2-2" />
  </svg>
);

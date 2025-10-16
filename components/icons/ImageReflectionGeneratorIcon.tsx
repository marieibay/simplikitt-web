import React, { SVGProps } from 'react';

export const ImageReflectionGeneratorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 11h18" />
    <path d="m5 18-2-7" />
    <path d="m19 18 2-7" />
    <path d="m12 11 2 7" />
    <path d="m9 18-2-7" />
  </svg>
);

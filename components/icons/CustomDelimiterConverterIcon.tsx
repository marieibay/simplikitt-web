import React, { SVGProps } from 'react';

export const CustomDelimiterConverterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 6h8" />
    <path d="M8 18h8" />
    <path d="m13 12-2-2 2-2" />
    <path d="m11 12 2 2-2 2" />
    <path d="M4 6v12" />
    <path d="M20 6v12" />
  </svg>
);


import React, { SVGProps } from 'react';

export const BinaryCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M8 6h8"></path>
    <path d="M10 10v4"></path>
    <path d="M10 12h2"></path>
    <path d="M14 10a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2"></path>
  </svg>
);

import React, { SVGProps } from 'react';

export const AddQuotesToLinesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
    <path d="M8 5v2" />
    <path d="M6 7V5" />
    <path d="M18 11v2" />
    <path d="M16 13v-2" />
  </svg>
);

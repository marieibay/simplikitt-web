import React, { SVGProps } from 'react';

export const ListRandomizerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
    <path d="m16 7-3-3-3 3" />
    <path d="m8 17 3 3 3-3" />
    <path d="M13 4v16" />
  </svg>
);

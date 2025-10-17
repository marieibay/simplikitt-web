import React, { SVGProps } from 'react';

export const CssPrefixerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12h16" />
    <path d="M4 6h16" />
    <path d="M10 4v4" />
    <path d="M14 4v4" />
    <path d="M10 16v4" />
    <path d="M14 16v4" />
  </svg>
);

import React, { SVGProps } from 'react';

export const InvisibleCharacterViewerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m12 16-2-4 2-4" />
    <path d="m16 12-2-2" />
  </svg>
);

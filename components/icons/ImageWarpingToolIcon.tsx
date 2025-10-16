import React, { SVGProps } from 'react';

export const ImageWarpingToolIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 6c8 0 8 12 16 12" />
    <path d="M20 6c-8 0-8 12-16 12" />
    <rect width="20" height="20" x="2" y="2" rx="2" />
  </svg>
);

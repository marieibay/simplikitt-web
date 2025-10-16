
import React, { SVGProps } from 'react';

export const ImageFlipperIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v18" />
    <path d="m16 7-4 4-4-4" />
    <path d="m16 17-4-4-4 4" />
    <path d="M3 12h18" />
    <path d="m7 16 4-4-4-4" />
    <path d="m17 16-4-4 4-4" />
  </svg>
);

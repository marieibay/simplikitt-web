
import React, { SVGProps } from 'react';

export const ImageCompressorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 9V5H5v5" />
    <path d="M14 15v5h5v-5" />
    <path d="M5 9.5 9.5 5" />
    <path d="M15 14.5 19.5 19" />
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

import React, { SVGProps } from 'react';

export const ImageShadowGeneratorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="14" x="5" y="5" rx="2" />
    <path d="M19 9v10a2 2 0 0 1-2 2H9" fill="currentColor" opacity="0.4" />
  </svg>
);

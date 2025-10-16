import React, { SVGProps } from 'react';

export const ImageOpacitySliderIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12h20" />
    <path d="M12 2a10 10 0 0 0-5.5 18" />
    <path d="M12 2a10 10 0 0 1 5.5 18" />
  </svg>
);

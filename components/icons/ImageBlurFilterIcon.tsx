
import React, { SVGProps } from 'react';

export const ImageBlurFilterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="6" r="1" />
    <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="6" cy="18" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="18" cy="18" r="1" fill="currentColor" opacity="0.2" />
  </svg>
);

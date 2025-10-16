import React, { SVGProps } from 'react';

export const ImageDitheringEffectIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <circle cx="8" cy="8" r="0.5" fill="currentColor" />
    <circle cx="12" cy="8" r="0.5" fill="currentColor" />
    <circle cx="16" cy="8" r="0.5" fill="currentColor" />
    <circle cx="10" cy="12" r="0.5" fill="currentColor" />
    <circle cx="14" cy="12" r="0.5" fill="currentColor" />
    <circle cx="8" cy="16" r="0.5" fill="currentColor" />
    <circle cx="12" cy="16" r="0.5" fill="currentColor" />
    <circle cx="16" cy="16" r="0.5" fill="currentColor" />
  </svg>
);

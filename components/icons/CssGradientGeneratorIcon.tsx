import React, { SVGProps } from 'react';

export const CssGradientGeneratorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor: 'currentColor', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: 'currentColor', stopOpacity: 0.2}} />
      </linearGradient>
    </defs>
    <rect width="18" height="18" x="3" y="3" rx="2" fill="url(#grad1)" />
  </svg>
);

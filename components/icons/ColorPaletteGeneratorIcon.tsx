import React, { SVGProps } from 'react';

export const ColorPaletteGeneratorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 0 0 20V2z" />
    <path d="M12 2a10 10 0 0 1 0 20V2z" transform="rotate(120 12 12)" />
    <path d="M12 2a10 10 0 0 1 0 20V2z" transform="rotate(240 12 12)" />
  </svg>
);

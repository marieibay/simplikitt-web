import React, { SVGProps } from 'react';

export const SvgEditorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m10 10-4 4 4 4" />
    <path d="m14 4-4 4 4 4" />
    <path d="M20 4v16" />
    <path d="M4 12h8" />
  </svg>
);
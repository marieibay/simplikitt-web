
import React, { SVGProps } from 'react';

export const DuplicateLineRemoverIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 17H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h7" />
    <path d="M15 12H9" />
    <path d="M13 14v-4" />
    <path d="M15 7h7v10h-7z" />
  </svg>
);

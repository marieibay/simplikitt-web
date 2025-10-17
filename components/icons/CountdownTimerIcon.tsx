
import React, { SVGProps } from 'react';

export const CountdownTimerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2h12" />
    <path d="M6 22h12" />
    <path d="M12 12v-2" />
    <path d="M12 14v2" />
    <path d="m18 6-4 4-4-4" />
    <path d="m6 18 4-4 4 4" />
  </svg>
);

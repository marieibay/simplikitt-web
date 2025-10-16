import React, { SVGProps } from 'react';

export const TimeZoneConverterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M22 12H2" />
    <path d="M12 2c-3 3-4 9-4 9s1-6 4-9z" />
    <path d="M12 2c3 3 4 9 4 9s-1-6-4-9z" />
  </svg>
);

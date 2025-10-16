
import React, { SVGProps } from 'react';

export const ImageToBase64Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M5 13.5 8 11l4 4" />
    <path d="m14 8 3-3" />
    <path d="M15 11h4.5a2 2 0 0 1 0 4H15V9.5a2 2 0 0 1 4 0V11" />
    <path d="M15 13.5a2 2 0 0 1 4 0" />
  </svg>
);

import React, { SVGProps } from 'react';

export const ImageTilingPreviewerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="6" height="6" x="3" y="3" rx="1" />
    <rect width="6" height="6" x="15" y="3" rx="1" />
    <rect width="6" height="6" x="3" y="15" rx="1" />
    <rect width="6" height="6" x="15" y="15" rx="1" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
  </svg>
);

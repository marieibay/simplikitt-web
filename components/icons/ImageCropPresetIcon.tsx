import React, { SVGProps } from 'react';

export const ImageCropPresetIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22v-8" />
    <path d="M22 12h-8" />
    <path d="M2 12h8" />
    <path d="M12 2v8" />
    <rect width="20" height="20" x="2" y="2" rx="2" />
  </svg>
);

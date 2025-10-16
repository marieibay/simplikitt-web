import React, { SVGProps } from 'react';

export const ImageMirrorEffectIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20" />
    <path d="m3 11 9-9" />
    <path d="m21 11-9-9" />
  </svg>
);

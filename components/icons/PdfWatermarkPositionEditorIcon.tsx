import React, { SVGProps } from 'react';

export const PdfWatermarkPositionEditorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <rect x="9" y="13" width="6" height="5" rx="1" />
    <path d="M12 13v-2" />
    <path d="M12 18v2" />
    <path d="M9 15.5h-2" />
    <path d="M15 15.5h2" />
  </svg>
);

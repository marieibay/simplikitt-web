
import React, { SVGProps } from 'react';

export const VolumeCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
        <path d="M3 8v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8" />
        <path d="m21 8-9 4-9-4" />
        <path d="M12 12v9" />
    </svg>
);

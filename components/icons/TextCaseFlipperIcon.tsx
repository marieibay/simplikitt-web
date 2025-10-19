import React, { SVGProps } from 'react';
import { CaseSensitive } from 'lucide-react';

export const TextCaseFlipperIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <CaseSensitive {...props} />
);

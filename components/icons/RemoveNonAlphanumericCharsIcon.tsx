import React, { SVGProps } from 'react';
import { Eraser } from 'lucide-react';

export const RemoveNonAlphanumericCharsIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Eraser {...props} />
);

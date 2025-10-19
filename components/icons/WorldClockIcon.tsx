import React, { SVGProps } from 'react';
import { Globe } from 'lucide-react';

export const WorldClockIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Globe {...props} />
);

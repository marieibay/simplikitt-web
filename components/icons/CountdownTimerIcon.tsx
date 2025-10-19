import React, { SVGProps } from 'react';
import { Timer } from 'lucide-react';

export const CountdownTimerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Timer {...props} />
);

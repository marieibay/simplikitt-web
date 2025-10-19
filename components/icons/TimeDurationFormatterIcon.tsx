import React, { SVGProps } from 'react';
import { Timer } from 'lucide-react';

export const TimeDurationFormatterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Timer {...props} />
);

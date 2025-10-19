import React, { SVGProps } from 'react';
import { CalendarDays } from 'lucide-react';

export const DateDifferenceIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <CalendarDays {...props} />
);

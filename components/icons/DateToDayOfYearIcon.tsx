import React, { SVGProps } from 'react';
import { CalendarRange } from 'lucide-react';

export const DateToDayOfYearIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <CalendarRange {...props} />
);

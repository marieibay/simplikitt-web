import React, { SVGProps } from 'react';
import { CalendarCheck } from 'lucide-react';

export const LeapYearCheckerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <CalendarCheck {...props} />
);

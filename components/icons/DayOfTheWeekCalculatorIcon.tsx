import React, { SVGProps } from 'react';
import { Calendar } from 'lucide-react';

export const DayOfTheWeekCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Calendar {...props} />
);

import React, { SVGProps } from 'react';
import { Calendar } from 'lucide-react';

export const DateFormatConverterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Calendar {...props} />
);

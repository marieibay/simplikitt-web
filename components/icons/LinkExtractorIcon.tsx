import React, { SVGProps } from 'react';
import { Link } from 'lucide-react';

export const LinkExtractorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Link {...props} />
);

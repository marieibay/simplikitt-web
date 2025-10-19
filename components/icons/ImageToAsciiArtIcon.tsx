import React, { SVGProps } from 'react';
import { Code } from 'lucide-react';

export const ImageToAsciiArtIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Code {...props} />
);

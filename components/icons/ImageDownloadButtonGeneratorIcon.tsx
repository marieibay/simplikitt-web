import React, { SVGProps } from 'react';
import { FileDown } from 'lucide-react';

export const ImageDownloadButtonGeneratorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileDown {...props} />
);

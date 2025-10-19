import React, { SVGProps } from 'react';
import { FileImage } from 'lucide-react';

export const PdfToSvgIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileImage {...props} />
);

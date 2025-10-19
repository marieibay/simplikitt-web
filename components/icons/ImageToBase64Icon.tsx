import React, { SVGProps } from 'react';
import { FileOutput } from 'lucide-react';

export const ImageToBase64Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileOutput {...props} />
);

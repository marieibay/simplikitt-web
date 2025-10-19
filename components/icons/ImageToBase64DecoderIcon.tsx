import React, { SVGProps } from 'react';
import { FileInput } from 'lucide-react';

export const ImageToBase64DecoderIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileInput {...props} />
);

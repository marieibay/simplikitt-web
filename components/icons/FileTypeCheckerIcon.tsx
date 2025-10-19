import React, { SVGProps } from 'react';
import { FileQuestion } from 'lucide-react';

export const FileTypeCheckerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileQuestion {...props} />
);

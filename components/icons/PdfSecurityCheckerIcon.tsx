import React, { SVGProps } from 'react';
import { FileLock } from 'lucide-react';

export const PdfSecurityCheckerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileLock {...props} />
);

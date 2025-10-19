import React, { SVGProps } from 'react';
import { FileLock } from 'lucide-react';

export const PdfSecurityLevelCheckerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileLock {...props} />
);

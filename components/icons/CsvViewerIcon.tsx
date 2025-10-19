import React, { SVGProps } from 'react';
import { FileText } from 'lucide-react';

export const CsvViewerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FileText {...props} />
);

import React, { SVGProps } from 'react';
import { PenTool } from 'lucide-react';

export const SvgEditorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <PenTool {...props} />
);

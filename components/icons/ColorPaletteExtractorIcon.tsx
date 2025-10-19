import React, { SVGProps } from 'react';
import { Palette } from 'lucide-react';

export const ColorPaletteExtractorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Palette {...props} />
);

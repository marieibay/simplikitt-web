import React, { SVGProps } from 'react';
import { FlipHorizontal } from 'lucide-react';

export const ImageMirrorEffectIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <FlipHorizontal {...props} />
);

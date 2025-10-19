import React, { SVGProps } from 'react';
import { Crop } from 'lucide-react';

export const ImageCropperIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Crop {...props} />
);

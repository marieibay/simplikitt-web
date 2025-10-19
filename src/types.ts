import { FC, SVGProps } from 'react';

export interface Tool {
  name: string;
  description: string;
  path: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  Page: FC;
  borderColor: string;
  category: string;
  isPremium?: boolean;
}

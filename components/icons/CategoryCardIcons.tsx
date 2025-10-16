import React from 'react';

// The props passed will include className, which is compatible with <img>
interface IconProps extends React.HTMLAttributes<HTMLImageElement> {}

export const CatImageToolIcon: React.FC<IconProps> = (props) => (
  <img src="/assets/category-icons/image-tools.png" alt="Image Tools Icon" {...props} />
);

export const CatTextToolIcon: React.FC<IconProps> = (props) => (
  <img src="/assets/category-icons/text-tools.png" alt="Text & List Tools Icon" {...props} />
);

export const CatPdfToolIcon: React.FC<IconProps> = (props) => (
  <img src="/assets/category-icons/pdf-tools.png" alt="PDF & Document Tools Icon" {...props} />
);

export const CatFileConverterIcon: React.FC<IconProps> = (props) => (
  <img src="/assets/category-icons/file-converters.png" alt="File Converters & Utilities Icon" {...props} />
);

export const CatCalculatorIcon: React.FC<IconProps> = (props) => (
  <img src="/assets/category-icons/calculators.png" alt="Calculators & Time Tools Icon" {...props} />
);

export const CatDeveloperToolIcon: React.FC<IconProps> = (props) => (
  <img src="/assets/category-icons/developer-tools.png" alt="Web & Developer Tools Icon" {...props} />
);
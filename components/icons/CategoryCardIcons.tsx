import React from 'react';

// The props passed will include className, which is compatible with <img>
interface IconProps extends React.HTMLAttributes<HTMLImageElement> {}

export const CatImageToolIcon: React.FC<IconProps> = (props) => (
  <img src="https://i.imgur.com/2fSinTK.png" alt="Image Tools Icon" {...props} />
);

export const CatTextToolIcon: React.FC<IconProps> = (props) => (
  <img src="https://i.imgur.com/pWLz7Qk.png" alt="Text & List Tools Icon" {...props} />
);

export const CatPdfToolIcon: React.FC<IconProps> = (props) => (
  <img src="https://i.imgur.com/fcPM5or.png" alt="PDF & Document Tools Icon" {...props} />
);

export const CatFileConverterIcon: React.FC<IconProps> = (props) => (
  <img src="https://i.imgur.com/hCEBg9R.png" alt="File Converters & Utilities Icon" {...props} />
);

export const CatCalculatorIcon: React.FC<IconProps> = (props) => (
  <img src="https://i.imgur.com/Aj5fAOO.png" alt="Calculators & Time Tools Icon" {...props} />
);

export const CatDeveloperToolIcon: React.FC<IconProps> = (props) => (
  <img src="https://i.imgur.com/2KCBdel.png" alt="Web & Developer Tools Icon" {...props} />
);
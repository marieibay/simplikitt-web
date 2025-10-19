import React, { SVGProps } from 'react';
import { Image, Type, FileText, File, Calculator, Code } from 'lucide-react';

export const CatImageToolIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <Image {...props} stroke="white" />;
export const CatTextToolIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <Type {...props} stroke="white" />;
export const CatPdfToolIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <FileText {...props} stroke="white" />;
export const CatFileConverterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <File {...props} stroke="white" />;
export const CatCalculatorIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <Calculator {...props} stroke="white" />;
export const CatDeveloperToolIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <Code {...props} stroke="white" />;

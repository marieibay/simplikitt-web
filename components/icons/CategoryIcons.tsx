import React, { SVGProps } from 'react';
import { ImageIcon, TypeIcon, FileTextIcon, FileIcon, CalculatorIcon, CodeIcon } from 'lucide-react';

export const ImageCategoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <ImageIcon {...props} />;
export const TextCategoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <TypeIcon {...props} />;
export const PdfCategoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <FileTextIcon {...props} />;
export const FileCategoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <FileIcon {...props} />;
export const CalculatorCategoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <CalculatorIcon {...props} />;
export const DeveloperCategoryIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => <CodeIcon {...props} />;

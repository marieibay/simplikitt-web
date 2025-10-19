import React from 'react';
import { PdfToPngIcon } from '../components/icons/PdfToPngIcon';
import PdfToImagePage from './PdfToImagePage';

const PdfToPngPage: React.FC = () => {
  return (
    <PdfToImagePage
      Icon={PdfToPngIcon}
      title="PDF to PNG Converter"
      color="green"
      outputFormat="png"
    />
  );
};

export default PdfToPngPage;

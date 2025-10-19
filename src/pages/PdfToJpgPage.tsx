import React from 'react';
import { PdfToJpgIcon } from '../components/icons/PdfToJpgIcon';
import PdfToImagePage from './PdfToImagePage';

const PdfToJpgPage: React.FC = () => {
  return (
    <PdfToImagePage
      Icon={PdfToJpgIcon}
      title="PDF to JPG Converter"
      color="green"
      outputFormat="jpeg"
    />
  );
};

export default PdfToJpgPage;

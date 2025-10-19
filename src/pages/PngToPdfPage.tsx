import React from 'react';
import { PngToPdfIcon } from '../components/icons/PngToPdfIcon';
import ImageToPdfPage from './ImageToPdfPage';

const PngToPdfPage: React.FC = () => {
  return (
    <ImageToPdfPage
      Icon={PngToPdfIcon}
      title="PNG to PDF Converter"
      color="green"
      acceptedFileType="image/png"
    />
  );
};

export default PngToPdfPage;

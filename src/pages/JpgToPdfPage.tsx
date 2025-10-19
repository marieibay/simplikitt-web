import React from 'react';
import { JpgToPdfIcon } from '../components/icons/JpgToPdfIcon';
import ImageToPdfPage from './ImageToPdfPage';

const JpgToPdfPage: React.FC = () => {
  return (
    <ImageToPdfPage
      Icon={JpgToPdfIcon}
      title="JPG to PDF Converter"
      color="green"
      acceptedFileType="image/jpeg"
    />
  );
};

export default JpgToPdfPage;

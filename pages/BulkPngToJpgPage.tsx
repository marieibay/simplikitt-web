import React from 'react';
import { PngToJpgBulkIcon } from '../components/icons/PngToJpgBulkIcon';
import { BulkImageConverterPage } from './BulkImageConverterPage';

const BulkPngToJpgPage: React.FC = () => {
  return (
    <BulkImageConverterPage
      Icon={PngToJpgBulkIcon}
      title="Bulk PNG to JPG Converter"
      fromFormat="png"
      toFormat="jpeg"
      color="yellow"
    />
  );
};

export default BulkPngToJpgPage;

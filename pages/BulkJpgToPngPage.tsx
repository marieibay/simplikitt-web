import React from 'react';
import { JpgToPngBulkIcon } from '../components/icons/JpgToPngBulkIcon';
import { BulkImageConverterPage } from './BulkImageConverterPage';

const BulkJpgToPngPage: React.FC = () => {
  return (
    <BulkImageConverterPage
      Icon={JpgToPngBulkIcon}
      title="Bulk JPG to PNG Converter"
      fromFormat="jpeg"
      toFormat="png"
      color="yellow"
    />
  );
};

export default BulkJpgToPngPage;

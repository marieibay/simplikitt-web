import React from 'react';
import { FlipHorizontal } from 'lucide-react';
import { BulkImageConverterPage } from './BulkImageConverterPage';

const BulkJpgToPngPage: React.FC = () => {
  return (
    <BulkImageConverterPage
      Icon={FlipHorizontal}
      title="Bulk JPG to PNG Converter"
      fromFormat="jpeg"
      toFormat="png"
      color="yellow"
    />
  );
};

export default BulkJpgToPngPage;

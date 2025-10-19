import React from 'react';
import { FlipHorizontal } from 'lucide-react';
import { BulkImageConverterPage } from './BulkImageConverterPage';

const BulkPngToJpgPage: React.FC = () => {
  return (
    <BulkImageConverterPage
      Icon={FlipHorizontal}
      title="Bulk PNG to JPG Converter"
      fromFormat="png"
      toFormat="jpeg"
      color="yellow"
    />
  );
};

export default BulkPngToJpgPage;

import React from 'react';
import { ImageToBlackAndWhiteIcon } from '../components/icons/ImageToBlackAndWhiteIcon';
// FIX: Changed to a named import since ImageFilterBasePage is now a named export.
import { ImageFilterBasePage } from './ImageBlurFilterPage';

const ImageToBlackAndWhitePage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageToBlackAndWhiteIcon}
        title="Adjustable Black & White"
        color="black"
        filterName="grayscale"
        initialValue={100}
        min={0}
        max={100}
        step={1}
        unit="%"
    />
);

export default ImageToBlackAndWhitePage;
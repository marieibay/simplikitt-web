import React from 'react';
import { ImageToBlackAndWhiteIcon } from '../components/icons/ImageToBlackAndWhiteIcon';
// FIX: Changed to a named import to get the correct base component.
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

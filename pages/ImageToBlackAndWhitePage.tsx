import React from 'react';
import { ImageToBlackAndWhiteIcon } from '../components/icons/ImageToBlackAndWhiteIcon';
import { ImageFilterBasePage } from './ImageBlurFilterPage'; 

const ImageToBlackAndWhitePage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageToBlackAndWhiteIcon}
        title="Adjustable Black & White"
        // FIX: Changed color from "black" to "gray" to match valid color classes.
        color="gray"
        filterName="grayscale"
        initialValue={100}
        min={0}
        max={100}
        step={1}
        unit="%"
    />
);

export default ImageToBlackAndWhitePage;
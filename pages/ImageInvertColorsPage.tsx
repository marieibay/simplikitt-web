import React from 'react';
import { ImageInvertColorsIcon } from '../components/icons/ImageInvertColorsIcon';
// FIX: Changed to a named import since ImageFilterBasePage is now a named export.
import { ImageFilterBasePage } from './ImageBlurFilterPage'; 

const ImageInvertColorsPage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageInvertColorsIcon}
        title="Image Invert Colors"
        color="slate"
        filterName="invert"
        initialValue={0}
        min={0}
        max={100}
        step={1}
        unit="%"
    />
);

export default ImageInvertColorsPage;
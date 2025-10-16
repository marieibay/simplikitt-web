import React from 'react';
import { ImageContrastAdjusterIcon } from '../components/icons/ImageContrastAdjusterIcon';
// FIX: Changed to a named import to get the correct base component.
import { ImageFilterBasePage } from './ImageBlurFilterPage';

const ImageContrastAdjusterPage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageContrastAdjusterIcon}
        title="Image Contrast Adjuster"
        color="neutral"
        filterName="contrast"
        initialValue={100}
        min={0}
        max={200}
        step={1}
        unit="%"
    />
);

export default ImageContrastAdjusterPage;

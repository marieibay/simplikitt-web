import React from 'react';
import { ImageLightnessAdjusterIcon } from '../components/icons/ImageLightnessAdjusterIcon';
// FIX: Changed to a named import to get the correct base component.
import { ImageFilterBasePage } from './ImageBlurFilterPage';

const ImageLightnessAdjusterPage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageLightnessAdjusterIcon}
        title="Image Lightness Adjuster"
        color="yellow"
        filterName="brightness"
        initialValue={100}
        min={0}
        max={200}
        step={1}
        unit="%"
    />
);

export default ImageLightnessAdjusterPage;

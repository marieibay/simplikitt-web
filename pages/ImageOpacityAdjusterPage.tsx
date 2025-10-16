import React from 'react';
import { ImageOpacityAdjusterIcon } from '../components/icons/ImageOpacityAdjusterIcon';
// FIX: Changed to a named import to get the correct base component.
import { ImageFilterBasePage } from './ImageBlurFilterPage';

const ImageOpacityAdjusterPage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageOpacityAdjusterIcon}
        title="Image Opacity Adjuster"
        color="gray"
        filterName="opacity"
        initialValue={100}
        min={0}
        max={100}
        step={1}
        unit="%"
    />
);

export default ImageOpacityAdjusterPage;

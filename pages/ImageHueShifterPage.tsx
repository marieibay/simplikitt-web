import React from 'react';
import { ImageHueShifterIcon } from '../components/icons/ImageHueShifterIcon';
// FIX: Changed to a named import since ImageFilterBasePage is now a named export.
import { ImageFilterBasePage } from './ImageBlurFilterPage';

const ImageHueShifterPage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageHueShifterIcon}
        title="Image Hue Shifter"
        color="pink"
        filterName="hue-rotate"
        initialValue={0}
        min={0}
        max={360}
        step={1}
        unit="deg"
    />
);

export default ImageHueShifterPage;
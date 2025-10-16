import React from 'react';
import { ImageSepiaFilterIcon } from '../components/icons/ImageSepiaFilterIcon';

// This is a generic base component for simple canvas filter tools
// To avoid repetition, we can reuse it for blur, sepia, invert, etc.
// A more robust implementation might put this in its own components/ dir
// FIX: Changed to a named import to get the correct base component.
import { ImageFilterBasePage } from './ImageBlurFilterPage'; 

const ImageSepiaFilterPage: React.FC = () => (
    <ImageFilterBasePage
        Icon={ImageSepiaFilterIcon}
        title="Image Sepia Filter"
        color="amber"
        filterName="sepia"
        initialValue={0}
        min={0}
        max={100}
        step={1}
        unit="%"
    />
);

export default ImageSepiaFilterPage;

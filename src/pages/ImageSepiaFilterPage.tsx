import React from 'react';
import { ImageSepiaFilterIcon } from '../components/icons/ImageSepiaFilterIcon';
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

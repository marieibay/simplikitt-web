import { Tool } from '../types';
import HomePage from '../pages/HomePage';
import ImageResizerPage from '../pages/ImageResizerPage';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import WordCounterPage from '../pages/WordCounterPage';
import ImageConverterPage from '../pages/ImageConverterPage';
import CaseConverterPage from '../pages/CaseConverterPage';
import TimestampConverterPage from '../pages/TimestampConverterPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import PercentageCalculatorPage from '../pages/PercentageCalculatorPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';

import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';

// New Icon Imports
import { BulkImageResizerIcon } from '../components/icons/BulkImageResizerIcon';
import { ImageCompressorIcon } from '../components/icons/ImageCompressorIcon';
import { ImageToBase64Icon } from '../components/icons/ImageToBase64Icon';
import { ImageToGrayscaleIcon } from '../components/icons/ImageToGrayscaleIcon';
import { JpgToPngBulkIcon } from '../components/icons/JpgToPngBulkIcon';
import { PngToJpgBulkIcon } from '../components/icons/PngToJpgBulkIcon';
import { ImageCropperIcon } from '../components/icons/ImageCropperIcon';
import { ImageWatermarkIcon } from '../components/icons/ImageWatermarkIcon';
import { ImageRotatorIcon } from '../components/icons/ImageRotatorIcon';
import { ImageBlurFilterIcon } from '../components/icons/ImageBlurFilterIcon';
import { ImageSepiaFilterIcon } from '../components/icons/ImageSepiaFilterIcon';
import { ImageSharpenFilterIcon } from '../components/icons/ImageSharpenFilterIcon';
import { ImageInvertColorsIcon } from '../components/icons/ImageInvertColorsIcon';
import { ImageOpacityAdjusterIcon } from '../components/icons/ImageOpacityAdjusterIcon';
import { ImageHueSaturationAdjusterIcon } from '../components/icons/ImageHueSaturationAdjusterIcon';
import { ImageFlipperIcon } from '../components/icons/ImageFlipperIcon';
import { ImageToAsciiArtIcon } from '../components/icons/ImageToAsciiArtIcon';
import { ImageContrastAdjusterIcon } from '../components/icons/ImageContrastAdjusterIcon';
import { ColorPaletteExtractorIcon } from '../components/icons/ColorPaletteExtractorIcon';
import { ImageColorPickerIcon } from '../components/icons/ImageColorPickerIcon';
import { AddBorderToImageIcon } from '../components/icons/AddBorderToImageIcon';
import { AddRoundedCornersToImageIcon } from '../components/icons/AddRoundedCornersToImageIcon';
import { ImageCollageMakerIcon } from '../components/icons/ImageCollageMakerIcon';
import { ImageToDataUrlGeneratorIcon } from '../components/icons/ImageToDataUrlGeneratorIcon';
import { ImageDpiChangerIcon } from '../components/icons/ImageDpiChangerIcon';
import { ImageFilterPresetLibraryIcon } from '../components/icons/ImageFilterPresetLibraryIcon';
import { ImageTextOverlayIcon } from '../components/icons/ImageTextOverlayIcon';
import { PngTransparencyCheckerIcon } from '../components/icons/PngTransparencyCheckerIcon';
import { ImagePixelateFilterIcon } from '../components/icons/ImagePixelateFilterIcon';
import { ImageToBmpConverterIcon } from '../components/icons/ImageToBmpConverterIcon';
import { ImageToGifConverterIcon } from '../components/icons/ImageToGifConverterIcon';
import { ImageMirrorEffectIcon } from '../components/icons/ImageMirrorEffectIcon';
import { ImageWarpingToolIcon } from '../components/icons/ImageWarpingToolIcon';
import { ImageTintAdjusterIcon } from '../components/icons/ImageTintAdjusterIcon';
import { ImageLightnessAdjusterIcon } from '../components/icons/ImageLightnessAdjusterIcon';
import { ImageThresholdFilterIcon } from '../components/icons/ImageThresholdFilterIcon';
import { ImageDitheringEffectIcon } from '../components/icons/ImageDitheringEffectIcon';
import { ImageToCssBackgroundGeneratorIcon } from '../components/icons/ImageToCssBackgroundGeneratorIcon';
import { ImageMetadataRemoverIcon } from '../components/icons/ImageMetadataRemoverIcon';
import { ImageDimensionCheckerIcon } from '../components/icons/ImageDimensionCheckerIcon';
import { ImageWatermarkPositionerIcon } from '../components/icons/ImageWatermarkPositionerIcon';
import { ImageCanvasResizerIcon } from '../components/icons/ImageCanvasResizerIcon';
import { ImageHueShifterIcon } from '../components/icons/ImageHueShifterIcon';
import { ImageNoiseGeneratorIcon } from '../components/icons/ImageNoiseGeneratorIcon';
import { ImageToBase64DecoderIcon } from '../components/icons/ImageToBase64DecoderIcon';
import { BatchImageRotatorIcon } from '../components/icons/BatchImageRotatorIcon';
import { ImageShadowGeneratorIcon } from '../components/icons/ImageShadowGeneratorIcon';
import { ImageToBlackAndWhiteIcon } from '../components/icons/ImageToBlackAndWhiteIcon';
import { ImageTilingPreviewerIcon } from '../components/icons/ImageTilingPreviewerIcon';
import { ImageColorReplacerIcon } from '../components/icons/ImageColorReplacerIcon';


// New Page Imports
import BulkImageResizerPage from '../pages/BulkImageResizerPage';
import ImageCompressorPage from '../pages/ImageCompressorPage';
import ImageToBase64Page from '../pages/ImageToBase64Page';
import ImageToGrayscalePage from '../pages/ImageToGrayscalePage';
import BulkJpgToPngPage from '../pages/BulkJpgToPngPage';
import BulkPngToJpgPage from '../pages/BulkPngToJpgPage';
import ImageCropperPage from '../pages/ImageCropperPage';
import ImageWatermarkPage from '../pages/ImageWatermarkPage';
import ImageRotatorPage from '../pages/ImageRotatorPage';
import ImageBlurFilterPage from '../pages/ImageBlurFilterPage';
import ImageSepiaFilterPage from '../pages/ImageSepiaFilterPage';
import ImageSharpenFilterPage from '../pages/ImageSharpenFilterPage';
import ImageInvertColorsPage from '../pages/ImageInvertColorsPage';
import ImageOpacityAdjusterPage from '../pages/ImageOpacityAdjusterPage';
import ImageHueSaturationAdjusterPage from '../pages/ImageHueSaturationAdjusterPage';
import ImageFlipperPage from '../pages/ImageFlipperPage';
import ImageToAsciiArtPage from '../pages/ImageToAsciiArtPage';
import ImageContrastAdjusterPage from '../pages/ImageContrastAdjusterPage';
import ColorPaletteExtractorPage from '../pages/ColorPaletteExtractorPage';
import ImageColorPickerPage from '../pages/ImageColorPickerPage';
import AddBorderToImagePage from '../pages/AddBorderToImagePage';
import AddRoundedCornersToImagePage from '../pages/AddRoundedCornersToImagePage';
import ImageCollageMakerPage from '../pages/ImageCollageMakerPage';
import ImageToDataUrlGeneratorPage from '../pages/ImageToDataUrlGeneratorPage';
import ImageDpiChangerPage from '../pages/ImageDpiChangerPage';
import ImageFilterPresetLibraryPage from '../pages/ImageFilterPresetLibraryPage';
import ImageTextOverlayPage from '../pages/ImageTextOverlayPage';
import PngTransparencyCheckerPage from '../pages/PngTransparencyCheckerPage';
import ImagePixelateFilterPage from '../pages/ImagePixelateFilterPage';
import ImageToBmpConverterPage from '../pages/ImageToBmpConverterPage';
import ImageToGifConverterPage from '../pages/ImageToGifConverterPage';
import ImageMirrorEffectPage from '../pages/ImageMirrorEffectPage';
import ImageWarpingToolPage from '../pages/ImageWarpingToolPage';
import ImageTintAdjusterPage from '../pages/ImageTintAdjusterPage';
import ImageLightnessAdjusterPage from '../pages/ImageLightnessAdjusterPage';
import ImageThresholdFilterPage from '../pages/ImageThresholdFilterPage';
import ImageDitheringEffectPage from '../pages/ImageDitheringEffectPage';
import ImageToCssBackgroundGeneratorPage from '../pages/ImageToCssBackgroundGeneratorPage';
import ImageMetadataRemoverPage from '../pages/ImageMetadataRemoverPage';
import ImageDimensionCheckerPage from '../pages/ImageDimensionCheckerPage';
import ImageWatermarkPositionerPage from '../pages/ImageWatermarkPositionerPage';
import ImageCanvasResizerPage from '../pages/ImageCanvasResizerPage';
import ImageHueShifterPage from '../pages/ImageHueShifterPage';
import ImageNoiseGeneratorPage from '../pages/ImageNoiseGeneratorPage';
import ImageToBase64DecoderPage from '../pages/ImageToBase64DecoderPage';
import BatchImageRotatorPage from '../pages/BatchImageRotatorPage';
import ImageShadowGeneratorPage from '../pages/ImageShadowGeneratorPage';
import ImageToBlackAndWhitePage from '../pages/ImageToBlackAndWhitePage';
import ImageTilingPreviewerPage from '../pages/ImageTilingPreviewerPage';
import ImageColorReplacerPage from '../pages/ImageColorReplacerPage';


export const TOOLS: Tool[] = [
  {
    name: 'Image Resizer',
    description: 'Resize images for social media or web in seconds. Uses Canvas API.',
    path: '/image-resizer',
    Icon: ImageResizerIcon,
    Page: ImageResizerPage,
    borderColor: 'border-purple-500',
    category: 'Image Tools',
  },
  {
    name: 'JPG & PNG Converter',
    description: 'Convert between the two most common image formats.',
    path: '/image-converter',
    Icon: ImageConverterIcon,
    Page: ImageConverterPage,
    borderColor: 'border-yellow-500',
    category: 'Image Tools',
  },
  {
    name: 'Bulk Image Resizer',
    description: 'Resize multiple images at once to a consistent size.',
    path: '/bulk-image-resizer',
    Icon: BulkImageResizerIcon,
    Page: BulkImageResizerPage,
    borderColor: 'border-purple-600',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Image Compressor',
    description: 'Reduce the file size of multiple images with adjustable quality.',
    path: '/image-compressor',
    Icon: ImageCompressorIcon,
    Page: ImageCompressorPage,
    borderColor: 'border-purple-400',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Image to Base64',
    description: 'Encode multiple images into Base64 strings for web embedding.',
    path: '/image-to-base64',
    Icon: ImageToBase64Icon,
    Page: ImageToBase64Page,
    borderColor: 'border-yellow-600',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Image to Grayscale',
    description: 'Convert multiple color images into black and white.',
    path: '/image-to-grayscale',
    Icon: ImageToGrayscaleIcon,
    Page: ImageToGrayscalePage,
    borderColor: 'border-gray-500',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Bulk JPG to PNG',
    description: 'Convert multiple JPG images to PNG format in one batch.',
    path: '/bulk-jpg-to-png',
    Icon: JpgToPngBulkIcon,
    Page: BulkJpgToPngPage,
    borderColor: 'border-yellow-400',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Bulk PNG to JPG',
    description: 'Convert multiple PNG images to JPG format with quality settings.',
    path: '/bulk-png-to-jpg',
    Icon: PngToJpgBulkIcon,
    Page: BulkPngToJpgPage,
    borderColor: 'border-yellow-700',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Image Cropper',
    description: 'Crop images to a specific ratio like 1:1, 16:9, or custom dimensions.',
    path: '/image-cropper',
    Icon: ImageCropperIcon,
    Page: ImageCropperPage,
    borderColor: 'border-rose-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Watermark',
    description: 'Add a custom logo or text watermark to your images.',
    path: '/image-watermark',
    Icon: ImageWatermarkIcon,
    Page: ImageWatermarkPage,
    borderColor: 'border-rose-400',
    category: 'Image Tools',
  },
  {
    name: 'Image Rotator',
    description: 'Rotate an image by a custom angle with a simple slider.',
    path: '/image-rotator',
    Icon: ImageRotatorIcon,
    Page: ImageRotatorPage,
    borderColor: 'border-fuchsia-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Blur Filter',
    description: 'Apply a blur effect to your image with adjustable intensity.',
    path: '/image-blur-filter',
    Icon: ImageBlurFilterIcon,
    Page: ImageBlurFilterPage,
    borderColor: 'border-fuchsia-400',
    category: 'Image Tools',
  },
  {
    name: 'Image Sepia Filter',
    description: 'Applies a sepia tone effect for a vintage look.',
    path: '/image-sepia-filter',
    Icon: ImageSepiaFilterIcon,
    Page: ImageSepiaFilterPage,
    borderColor: 'border-amber-600',
    category: 'Image Tools',
  },
  {
    name: 'Image Sharpen Filter',
    description: 'Applies a basic sharpening filter to enhance details.',
    path: '/image-sharpen-filter',
    Icon: ImageSharpenFilterIcon,
    Page: ImageSharpenFilterPage,
    borderColor: 'border-sky-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Invert Colors',
    description: 'Inverts the color palette for a negative effect.',
    path: '/image-invert-colors',
    Icon: ImageInvertColorsIcon,
    Page: ImageInvertColorsPage,
    borderColor: 'border-slate-700',
    category: 'Image Tools',
  },
  {
    name: 'Image Opacity Adjuster',
    description: 'Changes the transparency level of an image.',
    path: '/image-opacity-adjuster',
    Icon: ImageOpacityAdjusterIcon,
    Page: ImageOpacityAdjusterPage,
    borderColor: 'border-gray-400',
    category: 'Image Tools',
  },
  {
    name: 'Image Hue/Saturation Adjuster',
    description: 'Modifies the hue and saturation of colors.',
    path: '/image-hue-saturation-adjuster',
    Icon: ImageHueSaturationAdjusterIcon,
    Page: ImageHueSaturationAdjusterPage,
    borderColor: 'border-pink-400',
    category: 'Image Tools',
  },
  {
    name: 'Image Flipper',
    description: 'Flips the image horizontally or vertically.',
    path: '/image-flipper',
    Icon: ImageFlipperIcon,
    Page: ImageFlipperPage,
    borderColor: 'border-green-400',
    category: 'Image Tools',
  },
  {
    name: 'Image to ASCII Art',
    description: 'Converts image to text-based ASCII representation.',
    path: '/image-to-ascii-art',
    Icon: ImageToAsciiArtIcon,
    Page: ImageToAsciiArtPage,
    borderColor: 'border-lime-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Contrast Adjuster',
    description: 'Increases or decreases the contrast of an image.',
    path: '/image-contrast-adjuster',
    Icon: ImageContrastAdjusterIcon,
    Page: ImageContrastAdjusterPage,
    borderColor: 'border-neutral-800',
    category: 'Image Tools',
  },
  {
    name: 'Color Palette Extractor',
    description: 'Extracts dominant colors from an image.',
    path: '/color-palette-extractor',
    Icon: ColorPaletteExtractorIcon,
    Page: ColorPaletteExtractorPage,
    borderColor: 'border-emerald-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Color Picker',
    description: 'Allows precise color selection from pixels.',
    path: '/image-color-picker',
    Icon: ImageColorPickerIcon,
    Page: ImageColorPickerPage,
    borderColor: 'border-red-400',
    category: 'Image Tools',
  },
  {
    name: 'Add Border to Image',
    description: 'Adds a customizable border (color, thickness, style).',
    path: '/add-border-to-image',
    Icon: AddBorderToImageIcon,
    Page: AddBorderToImagePage,
    borderColor: 'border-stone-500',
    category: 'Image Tools',
  },
  {
    name: 'Add Rounded Corners',
    description: 'Clips the image corners using canvas logic.',
    path: '/add-rounded-corners-to-image',
    Icon: AddRoundedCornersToImageIcon,
    Page: AddRoundedCornersToImagePage,
    borderColor: 'border-violet-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Collage Maker',
    description: 'Arranges multiple images in a simple grid layout.',
    path: '/image-collage-maker',
    Icon: ImageCollageMakerIcon,
    Page: ImageCollageMakerPage,
    borderColor: 'border-orange-400',
    category: 'Image Tools',
  },
  {
    name: 'Image to Data URL',
    description: 'Generates the complete data:image/... string.',
    path: '/image-to-data-url-generator',
    Icon: ImageToDataUrlGeneratorIcon,
    Page: ImageToDataUrlGeneratorPage,
    borderColor: 'border-indigo-400',
    category: 'Image Tools',
  },
  {
    name: 'Image DPI Changer',
    description: 'Modifies the stored DPI value in the image metadata.',
    path: '/image-dpi-changer',
    Icon: ImageDpiChangerIcon,
    Page: ImageDpiChangerPage,
    borderColor: 'border-cyan-600',
    category: 'Image Tools',
  },
  {
    name: 'Filter Preset Library',
    description: 'Applies a selection of pre-defined color filters.',
    path: '/image-filter-preset-library',
    Icon: ImageFilterPresetLibraryIcon,
    Page: ImageFilterPresetLibraryPage,
    borderColor: 'border-teal-400',
    category: 'Image Tools',
  },
  {
    name: 'Image Text Overlay',
    description: 'Adds custom text with specific font and size.',
    path: '/image-text-overlay',
    Icon: ImageTextOverlayIcon,
    Page: ImageTextOverlayPage,
    borderColor: 'border-blue-400',
    category: 'Image Tools',
  },
  {
    name: 'PNG Transparency Checker',
    description: 'Displays uploaded PNG against a checkerboard.',
    path: '/png-transparency-checker',
    Icon: PngTransparencyCheckerIcon,
    Page: PngTransparencyCheckerPage,
    borderColor: 'border-slate-400',
    category: 'Image Tools',
  },
  {
    name: 'Image Pixelate Filter',
    description: 'Applies a mosaic or pixelation effect.',
    path: '/image-pixelate-filter',
    Icon: ImagePixelateFilterIcon,
    Page: ImagePixelateFilterPage,
    borderColor: 'border-gray-600',
    category: 'Image Tools',
  },
  {
    name: 'Image to BMP Converter',
    description: 'Converts image data to the BMP format.',
    path: '/image-to-bmp-converter',
    Icon: ImageToBmpConverterIcon,
    Page: ImageToBmpConverterPage,
    borderColor: 'border-cyan-800',
    category: 'Image Tools',
  },
  {
    name: 'Image to GIF Converter',
    description: 'Converts a single image to the GIF format.',
    path: '/image-to-gif-converter',
    Icon: ImageToGifConverterIcon,
    Page: ImageToGifConverterPage,
    borderColor: 'border-pink-600',
    category: 'Image Tools',
  },
  {
    name: 'Image Mirror Effect',
    description: 'Creates a reflection or mirror effect on an image.',
    path: '/image-mirror-effect',
    Icon: ImageMirrorEffectIcon,
    Page: ImageMirrorEffectPage,
    borderColor: 'border-blue-300',
    category: 'Image Tools',
  },
  {
    name: 'Image Warping Tool',
    description: 'Apply a simple perspective transformation.',
    path: '/image-warping-tool',
    Icon: ImageWarpingToolIcon,
    Page: ImageWarpingToolPage,
    borderColor: 'border-indigo-600',
    category: 'Image Tools',
  },
  {
    name: 'Image Tint Adjuster',
    description: 'Applies a uniform color overlay or tint.',
    path: '/image-tint-adjuster',
    Icon: ImageTintAdjusterIcon,
    Page: ImageTintAdjusterPage,
    borderColor: 'border-rose-300',
    category: 'Image Tools',
  },
  {
    name: 'Image Lightness Adjuster',
    description: 'Controls the overall brightness level of an image.',
    path: '/image-lightness-adjuster',
    Icon: ImageLightnessAdjusterIcon,
    Page: ImageLightnessAdjusterPage,
    borderColor: 'border-yellow-300',
    category: 'Image Tools',
  },
  {
    name: 'Image Threshold Filter',
    description: 'Converts image to pure black and white.',
    path: '/image-threshold-filter',
    Icon: ImageThresholdFilterIcon,
    Page: ImageThresholdFilterPage,
    borderColor: 'border-gray-800',
    category: 'Image Tools',
  },
  {
    name: 'Image Dithering Effect',
    description: 'Applies a pattern-based color reduction.',
    path: '/image-dithering-effect',
    Icon: ImageDitheringEffectIcon,
    Page: ImageDitheringEffectPage,
    borderColor: 'border-gray-500',
    category: 'Image Tools',
  },
  {
    name: 'CSS Background Generator',
    description: 'Creates CSS code for using the image as a background.',
    path: '/image-to-css-background-generator',
    Icon: ImageToCssBackgroundGeneratorIcon,
    Page: ImageToCssBackgroundGeneratorPage,
    borderColor: 'border-blue-600',
    category: 'Image Tools',
  },
  {
    name: 'Image Metadata Remover',
    description: 'Strips EXIF data, GPS, and other info from an image.',
    path: '/image-metadata-remover',
    Icon: ImageMetadataRemoverIcon,
    Page: ImageMetadataRemoverPage,
    borderColor: 'border-red-700',
    category: 'Image Tools',
  },
  {
    name: 'Image Dimension Checker',
    description: 'Quickly check the width and height of an image file.',
    path: '/image-dimension-checker',
    Icon: ImageDimensionCheckerIcon,
    Page: ImageDimensionCheckerPage,
    borderColor: 'border-green-700',
    category: 'Image Tools',
  },
  {
    name: 'Watermark Positioner',
    description: 'Place watermarks at top-left, bottom-right, center, etc.',
    path: '/image-watermark-positioner',
    Icon: ImageWatermarkPositionerIcon,
    Page: ImageWatermarkPositionerPage,
    borderColor: 'border-rose-600',
    category: 'Image Tools',
  },
  {
    name: 'Canvas Resizer',
    description: 'Change canvas size without scaling the image content.',
    path: '/image-canvas-resizer',
    Icon: ImageCanvasResizerIcon,
    Page: ImageCanvasResizerPage,
    borderColor: 'border-purple-300',
    category: 'Image Tools',
  },
  {
    name: 'Image Hue Shifter',
    description: 'Shift the color wheel for a psychedelic effect.',
    path: '/image-hue-shifter',
    Icon: ImageHueShifterIcon,
    Page: ImageHueShifterPage,
    borderColor: 'border-pink-300',
    category: 'Image Tools',
  },
  {
    name: 'Image Noise Generator',
    description: 'Adds random pixel noise to the image.',
    path: '/image-noise-generator',
    Icon: ImageNoiseGeneratorIcon,
    Page: ImageNoiseGeneratorPage,
    borderColor: 'border-gray-400',
    category: 'Image Tools',
  },
  {
    name: 'Base64 to Image',
    description: 'Decodes a Base64 string back to a downloadable image.',
    path: '/image-to-base64-decoder',
    Icon: ImageToBase64DecoderIcon,
    Page: ImageToBase64DecoderPage,
    borderColor: 'border-blue-200',
    category: 'Image Tools',
  },
  {
    name: 'Batch Image Rotator',
    description: 'Rotates multiple images simultaneously.',
    path: '/batch-image-rotator',
    Icon: BatchImageRotatorIcon,
    Page: BatchImageRotatorPage,
    borderColor: 'border-fuchsia-600',
    category: 'Image Tools',
    isPremium: true,
  },
  {
    name: 'Image Shadow Generator',
    description: 'Adds a simple drop shadow effect to image edges.',
    path: '/image-shadow-generator',
    Icon: ImageShadowGeneratorIcon,
    Page: ImageShadowGeneratorPage,
    borderColor: 'border-gray-300',
    category: 'Image Tools',
  },
  {
    name: 'Adjustable B&W Converter',
    description: 'Convert to B&W with a customizable intensity slider.',
    path: '/image-to-black-and-white',
    Icon: ImageToBlackAndWhiteIcon,
    Page: ImageToBlackAndWhitePage,
    borderColor: 'border-black',
    category: 'Image Tools',
  },
  {
    name: 'Image Tiling Previewer',
    description: 'Shows how an image looks when tiled as a background.',
    path: '/image-tiling-previewer',
    Icon: ImageTilingPreviewerIcon,
    Page: ImageTilingPreviewerPage,
    borderColor: 'border-gray-500',
    category: 'Image Tools',
  },
  {
    name: 'Image Color Replacer',
    description: 'Replaces one specific color with another in an image.',
    path: '/image-color-replacer',
    Icon: ImageColorReplacerIcon,
    Page: ImageColorReplacerPage,
    borderColor: 'border-red-300',
    category: 'Image Tools',
  },
  {
    name: 'JSON Formatter',
    description: 'Beautify and validate messy JSON data instantly.',
    path: '/json-formatter',
    Icon: JsonFormatterIcon,
    Page: JsonFormatterPage,
    borderColor: 'border-blue-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'Word / Char Counter',
    description: 'Count words, characters, and sentences for articles or social posts.',
    path: '/word-counter',
    Icon: WordCharCounterIcon,
    Page: WordCounterPage,
    borderColor: 'border-green-500',
    category: 'Text & List Tools',
  },
  {
    name: 'Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, or Title Case instantly.',
    path: '/case-converter',
    Icon: CaseConverterIcon,
    Page: CaseConverterPage,
    borderColor: 'border-red-500',
    category: 'Text & List Tools',
  },
  {
    name: 'Timestamp Converter',
    description: 'Convert Unix time to human-readable dates and back.',
    path: '/timestamp-converter',
    Icon: TimestampConverterIcon,
    Page: TimestampConverterPage,
    borderColor: 'border-blue-800',
    category: 'Calculators & Time Tools',
  },
  {
    name: 'URL Encoder/Decoder',
    description: 'Clean up or encode links for safety and transfer.',
    path: '/url-encoder-decoder',
    Icon: UrlEncoderDecoderIcon,
    Page: UrlEncoderDecoderPage,
    borderColor: 'border-pink-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'Percentage Calculator',
    description: 'Quickly find tax, tips, discounts, or percentage change.',
    path: '/percentage-calculator',
    Icon: PercentageCalculatorIcon,
    Page: PercentageCalculatorPage,
    borderColor: 'border-teal-500',
    category: 'Calculators & Time Tools',
  },
  {
    name: 'Password Generator',
    description: 'Create strong, random, and secure passwords instantly.',
    path: '/password-generator',
    Icon: PasswordGeneratorIcon,
    Page: PasswordGeneratorPage,
    borderColor: 'border-orange-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'QR Code Generator',
    description: 'Create and download QR codes for URLs, text, and more.',
    path: '/qr-code-generator',
    Icon: QrCodeGeneratorIcon,
    Page: QrCodeGeneratorPage,
    borderColor: 'border-indigo-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'Duplicate Line Remover',
    description: 'Clean up lists by instantly deleting redundant lines of text.',
    path: '/duplicate-line-remover',
    Icon: DuplicateLineRemoverIcon,
    Page: DuplicateLineRemoverPage,
    borderColor: 'border-cyan-500',
    category: 'Text & List Tools',
  },
];

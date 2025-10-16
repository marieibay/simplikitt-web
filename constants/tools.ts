import { Tool } from '../types';

// Image Tool Icons
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';
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
import { ImageReflectionGeneratorIcon } from '../components/icons/ImageReflectionGeneratorIcon';
import { ImageLayerMergerIcon } from '../components/icons/ImageLayerMergerIcon';
import { ImageOpacitySliderIcon } from '../components/icons/ImageOpacitySliderIcon';
import { ImageCropPresetIcon } from '../components/icons/ImageCropPresetIcon';
import { ImageMetadataEditorIcon } from '../components/icons/ImageMetadataEditorIcon';
import { ImageDownloadButtonGeneratorIcon } from '../components/icons/ImageDownloadButtonGeneratorIcon';
import { ImageZoomPreviewerIcon } from '../components/icons/ImageZoomPreviewerIcon';
import { ImageHeaderInfoViewerIcon } from '../components/icons/ImageHeaderInfoViewerIcon';
import { ImageHistogramViewerIcon } from '../components/icons/ImageHistogramViewerIcon';
import { ImageColorPaletteSaverIcon } from '../components/icons/ImageColorPaletteSaverIcon';

// Text & List Tool Icons
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import { FindAndReplaceIcon } from '../components/icons/FindAndReplaceIcon';
import { LineBreakRemoverIcon } from '../components/icons/LineBreakRemoverIcon';
import { TextToSlugConverterIcon } from '../components/icons/TextToSlugConverterIcon';
import { LoremIpsumGeneratorIcon } from '../components/icons/LoremIpsumGeneratorIcon';
import { ListShufflerIcon } from '../components/icons/ListShufflerIcon';
import { ReverseTextGeneratorIcon } from '../components/icons/ReverseTextGeneratorIcon';
import { SortLinesAlphabeticallyIcon } from '../components/icons/SortLinesAlphabeticallyIcon';
import { AddPrefixSuffixIcon } from '../components/icons/AddPrefixSuffixIcon';
import { RemoveEmptyLinesIcon } from '../components/icons/RemoveEmptyLinesIcon';
import { KeywordDensityCheckerIcon } from '../components/icons/KeywordDensityCheckerIcon';
import { TextToBinaryConverterIcon } from '../components/icons/TextToBinaryConverterIcon';
import { BinaryToTextConverterIcon } from '../components/icons/BinaryToTextConverterIcon';
import { TextToHexConverterIcon } from '../components/icons/TextToHexConverterIcon';
import { HexToTextConverterIcon } from '../components/icons/HexToTextConverterIcon';
import { TextToOctalConverterIcon } from '../components/icons/TextToOctalConverterIcon';
import { OctalToTextConverterIcon } from '../components/icons/OctalToTextConverterIcon';
import { RemoveExtraSpacesIcon } from '../components/icons/RemoveExtraSpacesIcon';
import { TitleCaseAdvancedIcon } from '../components/icons/TitleCaseAdvancedIcon';
import { SentenceCaseConverterIcon } from '../components/icons/SentenceCaseConverterIcon';
import { RemoveNonAlphanumericCharsIcon } from '../components/icons/RemoveNonAlphanumericCharsIcon';
import { TextScramblerIcon } from '../components/icons/TextScramblerIcon';
import { ListComparatorIcon } from '../components/icons/ListComparatorIcon';
import { ListIntersectorIcon } from '../components/icons/ListIntersectorIcon';
import { AddQuotesToLinesIcon } from '../components/icons/AddQuotesToLinesIcon';
import { RemoveQuotesFromLinesIcon } from '../components/icons/RemoveQuotesFromLinesIcon';
import { TextSplitterIcon } from '../components/icons/TextSplitterIcon';
import { TextRepeaterIcon } from '../components/icons/TextRepeaterIcon';
import { RemoveNumbersIcon } from '../components/icons/RemoveNumbersIcon';
import { RemoveLettersIcon } from '../components/icons/RemoveLettersIcon';
import { TextEncoderDecoderIcon } from '../components/icons/TextEncoderDecoderIcon';
import { LineCounterIcon } from '../components/icons/LineCounterIcon';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';
import { EmojiStripperIcon } from '../components/icons/EmojiStripperIcon';
import { InvisibleCharacterViewerIcon } from '../components/icons/InvisibleCharacterViewerIcon';
import { TextCaseFlipperIcon } from '../components/icons/TextCaseFlipperIcon';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';


// Web & Developer Tool Icons
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { Rot13Icon } from '../components/icons/Rot13Icon';
import { VigenereCipherIcon } from '../components/icons/VigenereCipherIcon';
import { CaesarCipherIcon } from '../components/icons/CaesarCipherIcon';
import { YouTubeExtractorIcon } from '../components/icons/YouTubeExtractorIcon';
import { LinkExtractorIcon } from '../components/icons/LinkExtractorIcon';
import { HtmlCommentRemoverIcon } from '../components/icons/HtmlCommentRemoverIcon';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import { CustomDelimiterConverterIcon } from '../components/icons/CustomDelimiterConverterIcon';

// Calculators & Time Tool Icons
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
import { AlphabeticalLetterGeneratorIcon } from '../components/icons/AlphabeticalLetterGeneratorIcon';
import { NumberListGeneratorIcon } from '../components/icons/NumberListGeneratorIcon';
import { DateDifferenceIcon } from '../components/icons/DateDifferenceIcon';
import { AgeCalculatorIcon } from '../components/icons/AgeCalculatorIcon';
import { TimeZoneConverterIcon } from '../components/icons/TimeZoneConverterIcon';
import { UnitConverterIcon } from '../components/icons/UnitConverterIcon';
import { BmiCalculatorIcon } from '../components/icons/BmiCalculatorIcon';
import { LoanCalculatorIcon } from '../components/icons/LoanCalculatorIcon';
import { SalesTaxCalculatorIcon } from '../components/icons/SalesTaxCalculatorIcon';
import { TipCalculatorIcon } from '../components/icons/TipCalculatorIcon';
import { RandomNumberGeneratorIcon } from '../components/icons/RandomNumberGeneratorIcon';
import { AspectRatioCalculatorIcon } from '../components/icons/AspectRatioCalculatorIcon';


// File Converters & Utilities Icons
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';

// PDF Tool Icons
import { PdfPageCounterIcon } from '../components/icons/PdfPageCounterIcon';
import { MergePdfIcon } from '../components/icons/MergePdfIcon';
import { SplitPdfIcon } from '../components/icons/SplitPdfIcon';
import { PdfPasswordRemoverIcon } from '../components/icons/PdfPasswordRemoverIcon';
import { PdfMetadataViewerIcon } from '../components/icons/PdfMetadataViewerIcon';
import { PdfToJpgIcon } from '../components/icons/PdfToJpgIcon';
import { PdfToPngIcon } from '../components/icons/PdfToPngIcon';
import { JpgToPdfIcon } from '../components/icons/JpgToPdfIcon';
import { PngToPdfIcon } from '../components/icons/PngToPdfIcon';
import { PdfToTextExtractorIcon } from '../components/icons/PdfToTextExtractorIcon';


// Pages
import CaseConverterPage from '../pages/CaseConverterPage';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
import ImageConverterPage from '../pages/ImageConverterPage';
import ImageResizerPage from '../pages/ImageResizerPage';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import PercentageCalculatorPage from '../pages/PercentageCalculatorPage';
import TimestampConverterPage from '../pages/TimestampConverterPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import WordCounterPage from '../pages/WordCounterPage';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
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
import ImageReflectionGeneratorPage from '../pages/ImageReflectionGeneratorPage';
import ImageLayerMergerPage from '../pages/ImageLayerMergerPage';
import ImageOpacitySliderPage from '../pages/ImageOpacitySliderPage';
import ImageCropPresetPage from '../pages/ImageCropPresetPage';
import ImageMetadataEditorPage from '../pages/ImageMetadataEditorPage';
import ImageDownloadButtonGeneratorPage from '../pages/ImageDownloadButtonGeneratorPage';
import ImageZoomPreviewerPage from '../pages/ImageZoomPreviewerPage';
import ImageHeaderInfoViewerPage from '../pages/ImageHeaderInfoViewerPage';
import ImageHistogramViewerPage from '../pages/ImageHistogramViewerPage';
import ImageColorPaletteSaverPage from '../pages/ImageColorPaletteSaverPage';
import FindAndReplacePage from '../pages/FindAndReplacePage';
import LineBreakRemoverPage from '../pages/LineBreakRemoverPage';
import TextToSlugConverterPage from '../pages/TextToSlugConverterPage';
import LoremIpsumGeneratorPage from '../pages/LoremIpsumGeneratorPage';
import ListShufflerPage from '../pages/ListShufflerPage';
import ReverseTextGeneratorPage from '../pages/ReverseTextGeneratorPage';
import SortLinesAlphabeticallyPage from '../pages/SortLinesAlphabeticallyPage';
import AddPrefixSuffixPage from '../pages/AddPrefixSuffixPage';
import RemoveEmptyLinesPage from '../pages/RemoveEmptyLinesPage';
import KeywordDensityCheckerPage from '../pages/KeywordDensityCheckerPage';
import TextToBinaryConverterPage from '../pages/TextToBinaryConverterPage';
import BinaryToTextConverterPage from '../pages/BinaryToTextConverterPage';
import TextToHexConverterPage from '../pages/TextToHexConverterPage';
import HexToTextConverterPage from '../pages/HexToTextConverterPage';
import TextToOctalConverterPage from '../pages/TextToOctalConverterPage';
import OctalToTextConverterPage from '../pages/OctalToTextConverterPage';
import RemoveExtraSpacesPage from '../pages/RemoveExtraSpacesPage';
import TitleCaseAdvancedPage from '../pages/TitleCaseAdvancedPage';
import SentenceCaseConverterPage from '../pages/SentenceCaseConverterPage';
import RemoveNonAlphanumericCharsPage from '../pages/RemoveNonAlphanumericCharsPage';
import TextScramblerPage from '../pages/TextScramblerPage';
import ListComparatorPage from '../pages/ListComparatorPage';
import ListIntersectorPage from '../pages/ListIntersectorPage';
import AddQuotesToLinesPage from '../pages/AddQuotesToLinesPage';
import RemoveQuotesFromLinesPage from '../pages/RemoveQuotesFromLinesPage';
import TextSplitterPage from '../pages/TextSplitterPage';
import TextRepeaterPage from '../pages/TextRepeaterPage';
import RemoveNumbersPage from '../pages/RemoveNumbersPage';
import RemoveLettersPage from '../pages/RemoveLettersPage';
import Rot13Page from '../pages/Rot13Page';
import CustomDelimiterConverterPage from '../pages/CustomDelimiterConverterPage';
import AlphabeticalLetterGeneratorPage from '../pages/AlphabeticalLetterGeneratorPage';
import NumberListGeneratorPage from '../pages/NumberListGeneratorPage';
import TextEncoderDecoderPage from '../pages/TextEncoderDecoderPage';
import YouTubeExtractorPage from '../pages/YouTubeExtractorPage';
import LinkExtractorPage from '../pages/LinkExtractorPage';
import HtmlCommentRemoverPage from '../pages/HtmlCommentRemoverPage';
import CssCommentRemoverPage from '../pages/CssCommentRemoverPage';
import JsCommentStripperPage from '../pages/JsCommentStripperPage';
import LineCounterPage from '../pages/LineCounterPage';
import VigenereCipherPage from '../pages/VigenereCipherPage';
import CaesarCipherPage from '../pages/CaesarCipherPage';
import TextToAsciiArtViewerPage from '../pages/TextToAsciiArtViewerPage';
import EmojiStripperPage from '../pages/EmojiStripperPage';
import InvisibleCharacterViewerPage from '../pages/InvisibleCharacterViewerPage';
import TextCaseFlipperPage from '../pages/TextCaseFlipperPage';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import JsBeautifierPage from '../pages/JsBeautifierPage';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';
import WordCountAndCharacterCounterPage from '../pages/WordCountAndCharacterCounterPage';
import CaseConverterAllPage from '../pages/CaseConverterAllPage';
import RemoveDuplicateLinesPage from '../pages/RemoveDuplicateLinesPage';
import DateDifferencePage from '../pages/DateDifferencePage';
import AgeCalculatorPage from '../pages/AgeCalculatorPage';
import TimeZoneConverterPage from '../pages/TimeZoneConverterPage';
import UnitConverterPage from '../pages/UnitConverterPage';
import BmiCalculatorPage from '../pages/BmiCalculatorPage';
import LoanCalculatorPage from '../pages/LoanCalculatorPage';
import SalesTaxCalculatorPage from '../pages/SalesTaxCalculatorPage';
import TipCalculatorPage from '../pages/TipCalculatorPage';
import RandomNumberGeneratorPage from '../pages/RandomNumberGeneratorPage';
import AspectRatioCalculatorPage from '../pages/AspectRatioCalculatorPage';
import PdfPageCounterPage from '../pages/PdfPageCounterPage';
import MergePdfPage from '../pages/MergePdfPage';
import SplitPdfPage from '../pages/SplitPdfPage';
import PdfPasswordRemoverPage from '../pages/PdfPasswordRemoverPage';
import PdfMetadataViewerPage from '../pages/PdfMetadataViewerPage';
import PdfToJpgPage from '../pages/PdfToJpgPage';
import PdfToPngPage from '../pages/PdfToPngPage';
import JpgToPdfPage from '../pages/JpgToPdfPage';
import PngToPdfPage from '../pages/PngToPdfPage';
import PdfToTextExtractorPage from '../pages/PdfToTextExtractorPage';


export const TOOLS: Tool[] = [
  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/tools/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/tools/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF.', path: '/tools/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Remove password protection from a PDF.', path: '/tools/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-800', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/tools/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-400', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG', description: 'Convert PDF pages to JPG images.', path: '/tools/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG', description: 'Convert PDF pages to PNG images.', path: '/tools/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF', description: 'Convert JPG images to a PDF file.', path: '/tools/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF', description: 'Convert PNG images to a PDF file.', path: '/tools/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'PDF to Text', description: 'Extract text from a PDF file.', path: '/tools/pdf-to-text', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  
  // Image Tools
  { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/tools/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Resizer', description: 'Resize images to specific dimensions or percentages.', path: '/tools/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-purple-500', category: 'Image Tools' },
  { name: 'QR Code Generator', description: 'Create QR codes from text or URLs.', path: '/tools/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-indigo-500', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/tools/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: 'border-purple-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Compressor', description: 'Reduce the file size of multiple images.', path: '/tools/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image to Base64 (Bulk)', description: 'Convert multiple images to Base64 strings.', path: '/tools/image-to-base64', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: 'border-yellow-600', category: 'Image Tools', isPremium: true },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/tools/image-to-grayscale', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: 'border-gray-500', category: 'Image Tools', isPremium: true },
  { name: 'Bulk JPG to PNG', description: 'Convert multiple JPG images to PNG.', path: '/tools/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: 'border-yellow-400', category: 'Image Tools', isPremium: true },
  { name: 'Bulk PNG to JPG', description: 'Convert multiple PNG images to JPG.', path: '/tools/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: 'border-yellow-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Cropper', description: 'Crop images to a specific area or aspect ratio.', path: '/tools/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-rose-500', category: 'Image Tools' },
  { name: 'Image Watermark', description: 'Add a watermark image to your picture.', path: '/tools/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-rose-400', category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate images by any angle.', path: '/tools/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/tools/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone effect to your photos.', path: '/tools/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-amber-500', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Sharpen your images to enhance details.', path: '/tools/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-sky-500', category: 'Image Tools' },
  { name: 'Invert Image Colors', description: 'Invert the colors of your image.', path: '/tools/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-slate-500', category: 'Image Tools' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity level of an image.', path: '/tools/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL and brightness values of an image.', path: '/tools/image-hsl-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: 'border-pink-400', category: 'Image Tools' },
  { name: 'Image Flipper', description: 'Flip images horizontally or vertically.', path: '/tools/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: 'border-green-400', category: 'Image Tools' },
  { name: 'Image to ASCII Art', description: 'Convert images into text-based ASCII art.', path: '/tools/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: 'border-lime-500', category: 'Image Tools' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of an image.', path: '/tools/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: 'border-neutral-500', category: 'Image Tools' },
  { name: 'Color Palette Extractor', description: 'Extract dominant colors from an image.', path: '/tools/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-emerald-500', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick a color from an image to get its hex code.', path: '/tools/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-red-400', category: 'Image Tools' },
  { name: 'Add Border to Image', description: 'Add a colored border around an image.', path: '/tools/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: 'border-stone-500', category: 'Image Tools' },
  { name: 'Add Rounded Corners', description: 'Apply rounded corners to your images.', path: '/tools/add-rounded-corners', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: 'border-violet-500', category: 'Image Tools' },
  { name: 'Image Collage Maker', description: 'Create a 2x2 collage from four images.', path: '/tools/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: 'border-orange-400', category: 'Image Tools' },
  { name: 'Image to Data URL', description: 'Convert an image into a Data URL string.', path: '/tools/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: 'border-indigo-400', category: 'Image Tools' },
  { name: 'Image DPI Changer', description: 'Change the DPI metadata of a JPG image.', path: '/tools/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: 'border-cyan-600', category: 'Image Tools' },
  { name: 'Image Filter Presets', description: 'Apply popular Instagram-like filters to images.', path: '/tools/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: 'border-teal-400', category: 'Image Tools' },
  { name: 'Image Text Overlay', description: 'Add text over an image.', path: '/tools/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: 'border-blue-400', category: 'Image Tools' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG image has transparency.', path: '/tools/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: 'border-slate-400', category: 'Image Tools' },
  { name: 'Image Pixelate Filter', description: 'Apply a pixelation effect to images.', path: '/tools/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: 'border-gray-600', category: 'Image Tools' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/tools/image-to-bmp', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: 'border-cyan-800', category: 'Image Tools' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a static GIF.', path: '/tools/image-to-gif', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: 'border-pink-600', category: 'Image Tools' },
  { name: 'Image Mirror Effect', description: 'Create a mirror reflection effect on an image.', path: '/tools/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: 'border-blue-300', category: 'Image Tools' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or distort an image horizontally and vertically.', path: '/tools/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: 'border-indigo-600', category: 'Image Tools' },
  { name: 'Image Tint Adjuster', description: 'Apply a color tint to an image.', path: '/tools/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: 'border-rose-300', category: 'Image Tools' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the brightness/lightness of an image.', path: '/tools/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Threshold Filter', description: 'Apply a black and white threshold effect.', path: '/tools/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: 'border-gray-800', category: 'Image Tools' },
  { name: 'Image Dithering Effect', description: 'Apply a 1-bit dithering effect to an image.', path: '/tools/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image to CSS Background', description: 'Generate CSS code for an image background.', path: '/tools/image-to-css-background', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: 'border-blue-600', category: 'Image Tools' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from images.', path: '/tools/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: 'border-red-700', category: 'Image Tools' },
  { name: 'Image Dimension Checker', description: 'Quickly find the dimensions of any image.', path: '/tools/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: 'border-green-700', category: 'Image Tools' },
  { name: 'Image Watermark Positioner', description: 'Position a watermark on an image with 9-point precision.', path: '/tools/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, borderColor: 'border-rose-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image, not the image itself.', path: '/tools/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, borderColor: 'border-purple-300', category: 'Image Tools' },
  { name: 'Image Hue Shifter', description: 'Rotate the hue of all colors in an image.', path: '/tools/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, borderColor: 'border-pink-500', category: 'Image Tools' },
  { name: 'Image Noise Generator', description: 'Add random noise to an image.', path: '/tools/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, borderColor: 'border-gray-400', category: 'Image Tools' },
  { name: 'Base64 to Image', description: 'Decode a Base64 string back into an image.', path: '/tools/base64-to-image-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: 'border-blue-200', category: 'Image Tools' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/tools/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, borderColor: 'border-fuchsia-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to an image.', path: '/tools/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, borderColor: 'border-gray-300', category: 'Image Tools' },
  { name: 'Adjustable Black & White', description: 'Convert an image to black and white with adjustable levels.', path: '/tools/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, borderColor: 'border-black', category: 'Image Tools' },
  { name: 'Image Tiling Previewer', description: 'See how an image looks when tiled as a background.', path: '/tools/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Color Replacer', description: 'Replace one color in an image with another.', path: '/tools/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, borderColor: 'border-red-300', category: 'Image Tools' },
  { name: 'Image Reflection Generator', description: 'Create a reflection effect for an image.', path: '/tools/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, borderColor: 'border-blue-300', category: 'Image Tools', isPremium: true },
  { name: 'Image Layer Merger', description: 'Merge multiple image layers into one.', path: '/tools/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image Opacity Slider', description: 'Adjust image opacity with a slider.', path: '/tools/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, borderColor: 'border-gray-400', category: 'Image Tools', isPremium: true },
  { name: 'Crop to Aspect Ratio Preset', description: 'Crop images to predefined aspect ratios.', path: '/tools/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, borderColor: 'border-rose-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Metadata Editor', description: 'Edit EXIF and other image metadata.', path: '/tools/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, borderColor: 'border-slate-600', category: 'Image Tools', isPremium: true },
  { name: 'Download Button Generator', description: 'Create an HTML download button for an image.', path: '/tools/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, borderColor: 'border-green-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Zoom Previewer', description: 'Preview an image with a zoom lens effect.', path: '/tools/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, borderColor: 'border-blue-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Header Info Viewer', description: 'View technical header information of an image file.', path: '/tools/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, borderColor: 'border-gray-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/tools/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, borderColor: 'border-indigo-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Color Palette Saver', description: 'Extract and save the color palette from an image.', path: '/tools/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, borderColor: 'border-emerald-700', category: 'Image Tools', isPremium: true },


  // Text & List Tools
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, title case, etc.', path: '/tools/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/tools/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/tools/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/tools/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove all line breaks from a block of text.', path: '/tools/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-400', category: 'Text & List Tools' },
  { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/tools/text-to-slug', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-indigo-400', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/tools/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-gray-400', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomize the order of lines in a list.', path: '/tools/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-purple-400', category: 'Text & List Tools' },
  { name: 'Reverse Text', description: 'Reverse the characters in your text.', path: '/tools/reverse-text', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-pink-400', category: 'Text & List Tools' },
  { name: 'Sort Lines', description: 'Sort lines alphabetically (A-Z or Z-A).', path: '/tools/sort-lines', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix', description: 'Add a prefix and/or suffix to each line.', path: '/tools/add-prefix-suffix', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-teal-400', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Delete all empty lines from a block of text.', path: '/tools/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Analyze the keyword density of your text.', path: '/tools/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-orange-500', category: 'Text & List Tools' },
  { name: 'Text to Binary', description: 'Convert text to binary code.', path: '/tools/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Binary to Text', description: 'Convert binary code back to text.', path: '/tools/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Text to Hex', description: 'Convert text to hexadecimal code.', path: '/tools/text-to-hex', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: 'border-slate-600', category: 'Text & List Tools' },
  { name: 'Hex to Text', description: 'Convert hexadecimal code back to text.', path: '/tools/hex-to-text', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: 'border-slate-500', category: 'Text & List Tools' },
  { name: 'Text to Octal', description: 'Convert text to octal code.', path: '/tools/text-to-octal', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: 'border-neutral-600', category: 'Text & List Tools' },
  { name: 'Octal to Text', description: 'Convert octal code back to text.', path: '/tools/octal-to-text', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: 'border-neutral-500', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces and tabs from text.', path: '/tools/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-stone-500', category: 'Text & List Tools' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/tools/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: 'border-red-600', category: 'Text & List Tools' },
  { name: 'Sentence Case Converter', description: 'Convert text to proper sentence case.', path: '/tools/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Remove Non-Alphanumeric', description: 'Strip all non-alphanumeric characters from text.', path: '/tools/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: 'border-zinc-500', category: 'Text & List Tools' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/tools/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: 'border-amber-500', category: 'Text & List Tools' },
  { name: 'List Comparator', description: 'Compare two lists and find the differences.', path: '/tools/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-cyan-700', category: 'Text & List Tools' },
  { name: 'List Intersector', description: 'Find common items between two lists.', path: '/tools/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: 'border-green-700', category: 'Text & List Tools' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/tools/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: 'border-violet-500', category: 'Text & List Tools' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of lines.', path: '/tools/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: 'border-violet-400', category: 'Text & List Tools' },
  { name: 'Text Splitter', description: 'Split text into chunks of a specified size.', path: '/tools/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: 'border-orange-400', category: 'Text & List Tools' },
  { name: 'Text Repeater', description: 'Repeat a block of text multiple times.', path: '/tools/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: 'border-emerald-600', category: 'Text & List Tools' },
  { name: 'Remove Numbers', description: 'Remove all numbers from a block of text.', path: '/tools/remove-numbers', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: 'border-lime-600', category: 'Text & List Tools' },
  { name: 'Remove Letters', description: 'Remove all letters from a block of text.', path: '/tools/remove-letters', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: 'border-lime-700', category: 'Text & List Tools' },
  { name: 'Custom Text Encoder', description: 'Encode/decode text with a custom character map.', path: '/tools/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: 'border-rose-500', category: 'Text & List Tools' },
  { name: 'Line Counter', description: 'Count the number of lines in a text block.', path: '/tools/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Text to ASCII Art Viewer', description: 'Render text in ASCII art font.', path: '/tools/text-to-ascii-art', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from text.', path: '/tools/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible characters.', path: '/tools/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character (a to A, A to a).', path: '/tools/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: 'border-blue-300', category: 'Text & List Tools' },
  { name: 'String Concatenator', description: 'Join multiple lines of text with a separator.', path: '/tools/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: 'border-sky-600', category: 'Text & List Tools' },
  { name: 'Text Diff Checker', description: 'Compare two texts and highlight the differences.', path: '/tools/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: 'border-cyan-800', category: 'Text & List Tools' },
  { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/tools/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, borderColor: 'border-blue-700', category: 'Text & List Tools', isPremium: true },
  { name: 'Word Count & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/tools/word-count-character-counter', Icon: WordCharCounterIcon, Page: WordCountAndCharacterCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Case Converter (All)', description: 'Convert text to various cases.', path: '/tools/case-converter-all', Icon: CaseConverterIcon, Page: CaseConverterAllPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Remove Duplicate Lines', description: 'Remove duplicate lines from a list of text.', path: '/tools/remove-duplicate-lines', Icon: DuplicateLineRemoverIcon, Page: RemoveDuplicateLinesPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  
  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and validate JSON data.', path: '/tools/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/tools/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-pink-500', category: 'Web & Developer Tools' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Simple letter substitution cipher.', path: '/tools/rot13', Icon: Rot13Icon, Page: Rot13Page, borderColor: 'border-fuchsia-600', category: 'Web & Developer Tools' },
  { name: 'Vigenere Cipher', description: 'Polyalphabetic substitution cipher.', path: '/tools/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: 'border-gray-700', category: 'Web & Developer Tools' },
  { name: 'Caesar Cipher', description: 'Simple substitution cipher with a shift.', path: '/tools/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: 'border-gray-600', category: 'Web & Developer Tools' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from YouTube page source.', path: '/tools/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: 'border-red-500', category: 'Web & Developer Tools' },
  { name: 'Link Extractor from Text', description: 'Extract all URLs from a block of text.', path: '/tools/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'HTML Comment Remover', description: 'Strip all comments from an HTML file.', path: '/tools/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: 'border-orange-600', category: 'Web & Developer Tools' },
  { name: 'CSS Comment Remover', description: 'Strip all comments from a CSS file.', path: '/tools/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'JS Comment Stripper', description: 'Remove all comments from a JavaScript file.', path: '/tools/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: 'border-yellow-500', category: 'Web & Developer Tools' },
  { name: 'HTML Prettifier', description: 'Format and beautify your HTML code.', path: '/tools/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: 'border-orange-700', category: 'Web & Developer Tools' },
  { name: 'CSS Prettifier', description: 'Format and beautify your CSS code.', path: '/tools/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: 'border-blue-400', category: 'Web & Developer Tools' },
  { name: 'JS Beautifier', description: 'Format and beautify your JavaScript code.', path: '/tools/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: 'border-yellow-600', category: 'Web & Developer Tools' },
  { name: 'Plain Text to HTML', description: 'Convert plain text to basic HTML.', path: '/tools/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, borderColor: 'border-emerald-500', category: 'Web & Developer Tools' },
  { name: 'HTML to Plain Text', description: 'Strip HTML tags to get plain text.', path: '/tools/html-to-plain-text', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, borderColor: 'border-emerald-600', category: 'Web & Developer Tools' },
  { name: 'JSON Data Extractor', description: 'Extract data from JSON using a path.', path: '/tools/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools', isPremium: true },
  { name: 'Custom Delimiter Converter', description: 'Convert text from one delimiter to another.', path: '/tools/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: 'border-cyan-500', category: 'Web & Developer Tools' },

  // Calculators & Time Tools
  { name: 'Password Generator', description: 'Generate secure, random passwords.', path: '/tools/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-orange-500', category: 'Calculators & Time Tools' },
  { name: 'Percentage Calculator', description: 'Quickly calculate percentages.', path: '/tools/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/tools/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-blue-800', category: 'Calculators & Time Tools' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from A to Z.', path: '/tools/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: 'border-gray-700', category: 'Calculators & Time Tools' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with custom start, end, and step.', path: '/tools/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: 'border-gray-800', category: 'Calculators & Time Tools' },
  { name: 'Date Difference Calculator', description: 'Calculate the duration between two dates.', path: '/tools/date-difference-calculator', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-sky-500', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Calculate age from a date of birth.', path: '/tools/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-rose-500', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Convert time between different time zones.', path: '/tools/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'Convert length, weight, and temperature.', path: '/tools/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-lime-500', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/tools/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-green-500', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Calculate monthly loan payments.', path: '/tools/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-emerald-500', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax and total price.', path: '/tools/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-amber-500', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate tips for bills.', path: '/tools/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-yellow-500', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate a random number in a range.', path: '/tools/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate dimensions based on aspect ratio.', path: '/tools/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-500', category: 'Calculators & Time Tools' },
  
  // File Converters & Utilities
  { name: 'Character Set Converter', description: 'Convert text between different character sets.', path: '/tools/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, borderColor: 'border-indigo-500', category: 'File Converters & Utilities', isPremium: true },
];

export const POPULAR_PATHS = [
  '/tools/word-counter',
  '/tools/json-formatter',
  '/tools/image-resizer',
  '/tools/image-converter',
  '/tools/password-generator',
  '/tools/qr-code-generator',
  '/tools/timestamp-converter',
  '/tools/duplicate-line-remover',
];
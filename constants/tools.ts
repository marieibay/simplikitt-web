import { Tool } from '../types';

// Image Tools
import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
import ImageResizerPage from '../pages/ImageResizerPage';
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import ImageConverterPage from '../pages/ImageConverterPage';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
import { BulkImageResizerIcon } from '../components/icons/BulkImageResizerIcon';
import BulkImageResizerPage from '../pages/BulkImageResizerPage';
import { ImageCompressorIcon } from '../components/icons/ImageCompressorIcon';
import ImageCompressorPage from '../pages/ImageCompressorPage';
import { ImageToBase64Icon } from '../components/icons/ImageToBase64Icon';
import ImageToBase64Page from '../pages/ImageToBase64Page';
import { ImageToGrayscaleIcon } from '../components/icons/ImageToGrayscaleIcon';
import ImageToGrayscalePage from '../pages/ImageToGrayscalePage';
import { JpgToPngBulkIcon } from '../components/icons/JpgToPngBulkIcon';
import BulkJpgToPngPage from '../pages/BulkJpgToPngPage';
import { PngToJpgBulkIcon } from '../components/icons/PngToJpgBulkIcon';
import BulkPngToJpgPage from '../pages/BulkPngToJpgPage';
import { ImageCropperIcon } from '../components/icons/ImageCropperIcon';
import ImageCropperPage from '../pages/ImageCropperPage';
import { ImageWatermarkIcon } from '../components/icons/ImageWatermarkIcon';
import ImageWatermarkPage from '../pages/ImageWatermarkPage';
import { ImageRotatorIcon } from '../components/icons/ImageRotatorIcon';
import ImageRotatorPage from '../pages/ImageRotatorPage';
import { ImageBlurFilterIcon } from '../components/icons/ImageBlurFilterIcon';
import ImageBlurFilterPage from '../pages/ImageBlurFilterPage';
import { ImageSepiaFilterIcon } from '../components/icons/ImageSepiaFilterIcon';
import ImageSepiaFilterPage from '../pages/ImageSepiaFilterPage';
import { ImageSharpenFilterIcon } from '../components/icons/ImageSharpenFilterIcon';
import ImageSharpenFilterPage from '../pages/ImageSharpenFilterPage';
import { ImageInvertColorsIcon } from '../components/icons/ImageInvertColorsIcon';
import ImageInvertColorsPage from '../pages/ImageInvertColorsPage';
import { ImageOpacityAdjusterIcon } from '../components/icons/ImageOpacityAdjusterIcon';
import ImageOpacityAdjusterPage from '../pages/ImageOpacityAdjusterPage';
import { ImageHueSaturationAdjusterIcon } from '../components/icons/ImageHueSaturationAdjusterIcon';
import ImageHueSaturationAdjusterPage from '../pages/ImageHueSaturationAdjusterPage';
import { ImageFlipperIcon } from '../components/icons/ImageFlipperIcon';
import ImageFlipperPage from '../pages/ImageFlipperPage';
import { ImageToAsciiArtIcon } from '../components/icons/ImageToAsciiArtIcon';
import ImageToAsciiArtPage from '../pages/ImageToAsciiArtPage';
import { ImageContrastAdjusterIcon } from '../components/icons/ImageContrastAdjusterIcon';
import ImageContrastAdjusterPage from '../pages/ImageContrastAdjusterPage';
import { ColorPaletteExtractorIcon } from '../components/icons/ColorPaletteExtractorIcon';
import ColorPaletteExtractorPage from '../pages/ColorPaletteExtractorPage';
import { ImageColorPickerIcon } from '../components/icons/ImageColorPickerIcon';
import ImageColorPickerPage from '../pages/ImageColorPickerPage';
import { AddBorderToImageIcon } from '../components/icons/AddBorderToImageIcon';
import AddBorderToImagePage from '../pages/AddBorderToImagePage';
import { AddRoundedCornersToImageIcon } from '../components/icons/AddRoundedCornersToImageIcon';
import AddRoundedCornersToImagePage from '../pages/AddRoundedCornersToImagePage';
import { ImageCollageMakerIcon } from '../components/icons/ImageCollageMakerIcon';
import ImageCollageMakerPage from '../pages/ImageCollageMakerPage';
import { ImageToDataUrlGeneratorIcon } from '../components/icons/ImageToDataUrlGeneratorIcon';
import ImageToDataUrlGeneratorPage from '../pages/ImageToDataUrlGeneratorPage';
import { ImageDpiChangerIcon } from '../components/icons/ImageDpiChangerIcon';
import ImageDpiChangerPage from '../pages/ImageDpiChangerPage';
import { ImageFilterPresetLibraryIcon } from '../components/icons/ImageFilterPresetLibraryIcon';
import ImageFilterPresetLibraryPage from '../pages/ImageFilterPresetLibraryPage';
import { ImageTextOverlayIcon } from '../components/icons/ImageTextOverlayIcon';
import ImageTextOverlayPage from '../pages/ImageTextOverlayPage';
import { PngTransparencyCheckerIcon } from '../components/icons/PngTransparencyCheckerIcon';
import PngTransparencyCheckerPage from '../pages/PngTransparencyCheckerPage';
import { ImagePixelateFilterIcon } from '../components/icons/ImagePixelateFilterIcon';
import ImagePixelateFilterPage from '../pages/ImagePixelateFilterPage';
import { ImageToBmpConverterIcon } from '../components/icons/ImageToBmpConverterIcon';
import ImageToBmpConverterPage from '../pages/ImageToBmpConverterPage';
import { ImageToGifConverterIcon } from '../components/icons/ImageToGifConverterIcon';
import ImageToGifConverterPage from '../pages/ImageToGifConverterPage';
import { ImageMirrorEffectIcon } from '../components/icons/ImageMirrorEffectIcon';
import ImageMirrorEffectPage from '../pages/ImageMirrorEffectPage';
import { ImageWarpingToolIcon } from '../components/icons/ImageWarpingToolIcon';
import ImageWarpingToolPage from '../pages/ImageWarpingToolPage';
import { ImageTintAdjusterIcon } from '../components/icons/ImageTintAdjusterIcon';
import ImageTintAdjusterPage from '../pages/ImageTintAdjusterPage';
import { ImageLightnessAdjusterIcon } from '../components/icons/ImageLightnessAdjusterIcon';
import ImageLightnessAdjusterPage from '../pages/ImageLightnessAdjusterPage';
import { ImageThresholdFilterIcon } from '../components/icons/ImageThresholdFilterIcon';
import ImageThresholdFilterPage from '../pages/ImageThresholdFilterPage';
import { ImageDitheringEffectIcon } from '../components/icons/ImageDitheringEffectIcon';
import ImageDitheringEffectPage from '../pages/ImageDitheringEffectPage';
import { ImageToCssBackgroundGeneratorIcon } from '../components/icons/ImageToCssBackgroundGeneratorIcon';
import ImageToCssBackgroundGeneratorPage from '../pages/ImageToCssBackgroundGeneratorPage';
import { ImageMetadataRemoverIcon } from '../components/icons/ImageMetadataRemoverIcon';
import ImageMetadataRemoverPage from '../pages/ImageMetadataRemoverPage';
import { ImageDimensionCheckerIcon } from '../components/icons/ImageDimensionCheckerIcon';
import ImageDimensionCheckerPage from '../pages/ImageDimensionCheckerPage';
import { ImageWatermarkPositionerIcon } from '../components/icons/ImageWatermarkPositionerIcon';
import ImageWatermarkPositionerPage from '../pages/ImageWatermarkPositionerPage';
import { ImageCanvasResizerIcon } from '../components/icons/ImageCanvasResizerIcon';
import ImageCanvasResizerPage from '../pages/ImageCanvasResizerPage';
import { ImageHueShifterIcon } from '../components/icons/ImageHueShifterIcon';
import ImageHueShifterPage from '../pages/ImageHueShifterPage';
import { ImageNoiseGeneratorIcon } from '../components/icons/ImageNoiseGeneratorIcon';
import ImageNoiseGeneratorPage from '../pages/ImageNoiseGeneratorPage';
import { ImageToBase64DecoderIcon } from '../components/icons/ImageToBase64DecoderIcon';
import ImageToBase64DecoderPage from '../pages/ImageToBase64DecoderPage';
import { BatchImageRotatorIcon } from '../components/icons/BatchImageRotatorIcon';
import BatchImageRotatorPage from '../pages/BatchImageRotatorPage';
import { ImageShadowGeneratorIcon } from '../components/icons/ImageShadowGeneratorIcon';
import ImageShadowGeneratorPage from '../pages/ImageShadowGeneratorPage';
import { ImageToBlackAndWhiteIcon } from '../components/icons/ImageToBlackAndWhiteIcon';
import ImageToBlackAndWhitePage from '../pages/ImageToBlackAndWhitePage';
import { ImageTilingPreviewerIcon } from '../components/icons/ImageTilingPreviewerIcon';
import ImageTilingPreviewerPage from '../pages/ImageTilingPreviewerPage';
import { ImageColorReplacerIcon } from '../components/icons/ImageColorReplacerIcon';
import ImageColorReplacerPage from '../pages/ImageColorReplacerPage';
import { ImageReflectionGeneratorIcon } from '../components/icons/ImageReflectionGeneratorIcon';
import ImageReflectionGeneratorPage from '../pages/ImageReflectionGeneratorPage';
import { ImageLayerMergerIcon } from '../components/icons/ImageLayerMergerIcon';
import ImageLayerMergerPage from '../pages/ImageLayerMergerPage';
import { ImageOpacitySliderIcon } from '../components/icons/ImageOpacitySliderIcon';
import ImageOpacitySliderPage from '../pages/ImageOpacitySliderPage';
import { ImageCropPresetIcon } from '../components/icons/ImageCropPresetIcon';
import ImageCropPresetPage from '../pages/ImageCropPresetPage';
import { ImageMetadataEditorIcon } from '../components/icons/ImageMetadataEditorIcon';
import ImageMetadataEditorPage from '../pages/ImageMetadataEditorPage';
import { ImageDownloadButtonGeneratorIcon } from '../components/icons/ImageDownloadButtonGeneratorIcon';
import ImageDownloadButtonGeneratorPage from '../pages/ImageDownloadButtonGeneratorPage';
import { ImageZoomPreviewerIcon } from '../components/icons/ImageZoomPreviewerIcon';
import ImageZoomPreviewerPage from '../pages/ImageZoomPreviewerPage';
import { ImageHeaderInfoViewerIcon } from '../components/icons/ImageHeaderInfoViewerIcon';
import ImageHeaderInfoViewerPage from '../pages/ImageHeaderInfoViewerPage';
import { ImageHistogramViewerIcon } from '../components/icons/ImageHistogramViewerIcon';
import ImageHistogramViewerPage from '../pages/ImageHistogramViewerPage';
import { ImageColorPaletteSaverIcon } from '../components/icons/ImageColorPaletteSaverIcon';
import ImageColorPaletteSaverPage from '../pages/ImageColorPaletteSaverPage';

// Text & List Tools
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import WordCounterPage from '../pages/WordCounterPage';
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import CaseConverterPage from '../pages/CaseConverterPage';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
import { FindAndReplaceIcon } from '../components/icons/FindAndReplaceIcon';
import FindAndReplacePage from '../pages/FindAndReplacePage';
import { LineBreakRemoverIcon } from '../components/icons/LineBreakRemoverIcon';
import LineBreakRemoverPage from '../pages/LineBreakRemoverPage';
import { TextToSlugConverterIcon } from '../components/icons/TextToSlugConverterIcon';
import TextToSlugConverterPage from '../pages/TextToSlugConverterPage';
import { LoremIpsumGeneratorIcon } from '../components/icons/LoremIpsumGeneratorIcon';
import LoremIpsumGeneratorPage from '../pages/LoremIpsumGeneratorPage';
import { ListShufflerIcon } from '../components/icons/ListShufflerIcon';
import ListShufflerPage from '../pages/ListShufflerPage';
import { ReverseTextGeneratorIcon } from '../components/icons/ReverseTextGeneratorIcon';
import ReverseTextGeneratorPage from '../pages/ReverseTextGeneratorPage';
import { SortLinesAlphabeticallyIcon } from '../components/icons/SortLinesAlphabeticallyIcon';
import SortLinesAlphabeticallyPage from '../pages/SortLinesAlphabeticallyPage';
import { AddPrefixSuffixIcon } from '../components/icons/AddPrefixSuffixIcon';
import AddPrefixSuffixPage from '../pages/AddPrefixSuffixPage';
import { RemoveEmptyLinesIcon } from '../components/icons/RemoveEmptyLinesIcon';
import RemoveEmptyLinesPage from '../pages/RemoveEmptyLinesPage';
import { KeywordDensityCheckerIcon } from '../components/icons/KeywordDensityCheckerIcon';
import KeywordDensityCheckerPage from '../pages/KeywordDensityCheckerPage';
import { TextToBinaryConverterIcon } from '../components/icons/TextToBinaryConverterIcon';
import TextToBinaryConverterPage from '../pages/TextToBinaryConverterPage';
import { BinaryToTextConverterIcon } from '../components/icons/BinaryToTextConverterIcon';
import BinaryToTextConverterPage from '../pages/BinaryToTextConverterPage';
import { TextToHexConverterIcon } from '../components/icons/TextToHexConverterIcon';
import TextToHexConverterPage from '../pages/TextToHexConverterPage';
import { HexToTextConverterIcon } from '../components/icons/HexToTextConverterIcon';
import HexToTextConverterPage from '../pages/HexToTextConverterPage';
import { TextToOctalConverterIcon } from '../components/icons/TextToOctalConverterIcon';
import TextToOctalConverterPage from '../pages/TextToOctalConverterPage';
import { OctalToTextConverterIcon } from '../components/icons/OctalToTextConverterIcon';
import OctalToTextConverterPage from '../pages/OctalToTextConverterPage';
import { RemoveExtraSpacesIcon } from '../components/icons/RemoveExtraSpacesIcon';
import RemoveExtraSpacesPage from '../pages/RemoveExtraSpacesPage';
import { TitleCaseAdvancedIcon } from '../components/icons/TitleCaseAdvancedIcon';
import TitleCaseAdvancedPage from '../pages/TitleCaseAdvancedPage';
import { SentenceCaseConverterIcon } from '../components/icons/SentenceCaseConverterIcon';
import SentenceCaseConverterPage from '../pages/SentenceCaseConverterPage';
import { RemoveNonAlphanumericCharsIcon } from '../components/icons/RemoveNonAlphanumericCharsIcon';
import RemoveNonAlphanumericCharsPage from '../pages/RemoveNonAlphanumericCharsPage';
import { TextScramblerIcon } from '../components/icons/TextScramblerIcon';
import TextScramblerPage from '../pages/TextScramblerPage';
import { ListComparatorIcon } from '../components/icons/ListComparatorIcon';
import ListComparatorPage from '../pages/ListComparatorPage';
import { ListIntersectorIcon } from '../components/icons/ListIntersectorIcon';
import ListIntersectorPage from '../pages/ListIntersectorPage';
import { AddQuotesToLinesIcon } from '../components/icons/AddQuotesToLinesIcon';
import AddQuotesToLinesPage from '../pages/AddQuotesToLinesPage';
import { RemoveQuotesFromLinesIcon } from '../components/icons/RemoveQuotesFromLinesIcon';
import RemoveQuotesFromLinesPage from '../pages/RemoveQuotesFromLinesPage';
import { TextSplitterIcon } from '../components/icons/TextSplitterIcon';
import TextSplitterPage from '../pages/TextSplitterPage';
import { TextRepeaterIcon } from '../components/icons/TextRepeaterIcon';
import TextRepeaterPage from '../pages/TextRepeaterPage';
import { RemoveNumbersIcon } from '../components/icons/RemoveNumbersIcon';
import RemoveNumbersPage from '../pages/RemoveNumbersPage';
import { RemoveLettersIcon } from '../components/icons/RemoveLettersIcon';
import RemoveLettersPage from '../pages/RemoveLettersPage';
import { Rot13Icon } from '../components/icons/Rot13Icon';
import Rot13Page from '../pages/Rot13Page';
import { CustomDelimiterConverterIcon } from '../components/icons/CustomDelimiterConverterIcon';
import CustomDelimiterConverterPage from '../pages/CustomDelimiterConverterPage';
import { AlphabeticalLetterGeneratorIcon } from '../components/icons/AlphabeticalLetterGeneratorIcon';
import AlphabeticalLetterGeneratorPage from '../pages/AlphabeticalLetterGeneratorPage';
import { NumberListGeneratorIcon } from '../components/icons/NumberListGeneratorIcon';
import NumberListGeneratorPage from '../pages/NumberListGeneratorPage';
import { TextEncoderDecoderIcon } from '../components/icons/TextEncoderDecoderIcon';
import TextEncoderDecoderPage from '../pages/TextEncoderDecoderPage';
import { YouTubeExtractorIcon } from '../components/icons/YouTubeExtractorIcon';
import YouTubeExtractorPage from '../pages/YouTubeExtractorPage';
import { LinkExtractorIcon } from '../components/icons/LinkExtractorIcon';
import LinkExtractorPage from '../pages/LinkExtractorPage';
import { HtmlCommentRemoverIcon } from '../components/icons/HtmlCommentRemoverIcon';
import HtmlCommentRemoverPage from '../pages/HtmlCommentRemoverPage';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';
import CssCommentRemoverPage from '../pages/CssCommentRemoverPage';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';
import JsCommentStripperPage from '../pages/JsCommentStripperPage';
import { LineCounterIcon } from '../components/icons/LineCounterIcon';
import LineCounterPage from '../pages/LineCounterPage';
import { VigenereCipherIcon } from '../components/icons/VigenereCipherIcon';
import VigenereCipherPage from '../pages/VigenereCipherPage';
import { CaesarCipherIcon } from '../components/icons/CaesarCipherIcon';
import CaesarCipherPage from '../pages/CaesarCipherPage';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';
import TextToAsciiArtViewerPage from '../pages/TextToAsciiArtViewerPage';
import { EmojiStripperIcon } from '../components/icons/EmojiStripperIcon';
import EmojiStripperPage from '../pages/EmojiStripperPage';
import { InvisibleCharacterViewerIcon } from '../components/icons/InvisibleCharacterViewerIcon';
import InvisibleCharacterViewerPage from '../pages/InvisibleCharacterViewerPage';
import { TextCaseFlipperIcon } from '../components/icons/TextCaseFlipperIcon';
import TextCaseFlipperPage from '../pages/TextCaseFlipperPage';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';

// PDF & Document Tools
import { PdfPageCounterIcon } from '../components/icons/PdfPageCounterIcon';
import PdfPageCounterPage from '../pages/PdfPageCounterPage';
import { MergePdfIcon } from '../components/icons/MergePdfIcon';
import MergePdfPage from '../pages/MergePdfPage';
import { SplitPdfIcon } from '../components/icons/SplitPdfIcon';
import SplitPdfPage from '../pages/SplitPdfPage';
import { PdfPasswordRemoverIcon } from '../components/icons/PdfPasswordRemoverIcon';
import PdfPasswordRemoverPage from '../pages/PdfPasswordRemoverPage';
import { PdfMetadataViewerIcon } from '../components/icons/PdfMetadataViewerIcon';
import PdfMetadataViewerPage from '../pages/PdfMetadataViewerPage';
import { PdfToJpgIcon } from '../components/icons/PdfToJpgIcon';
import PdfToJpgPage from '../pages/PdfToJpgPage';
import { PdfToPngIcon } from '../components/icons/PdfToPngIcon';
import PdfToPngPage from '../pages/PdfToPngPage';
import { JpgToPdfIcon } from '../components/icons/JpgToPdfIcon';
import JpgToPdfPage from '../pages/JpgToPdfPage';
import { PngToPdfIcon } from '../components/icons/PngToPdfIcon';
import PngToPdfPage from '../pages/PngToPdfPage';
import { PdfToTextExtractorIcon } from '../components/icons/PdfToTextExtractorIcon';
import PdfToTextExtractorPage from '../pages/PdfToTextExtractorPage';
import { PdfWatermarkAdderTextIcon } from '../components/icons/PdfWatermarkAdderTextIcon';
import PdfWatermarkAdderTextPage from '../pages/PdfWatermarkAdderTextPage';
import { PdfWatermarkAdderImageIcon } from '../components/icons/PdfWatermarkAdderImageIcon';
import PdfWatermarkAdderImagePage from '../pages/PdfWatermarkAdderImagePage';
import { PdfEncryptorIcon } from '../components/icons/PdfEncryptorIcon';
import PdfEncryptorPage from '../pages/PdfEncryptorPage';
import { ReorderPdfPagesIcon } from '../components/icons/ReorderPdfPagesIcon';
import ReorderPdfPagesPage from '../pages/ReorderPdfPagesPage';
import { RotateAllPdfPagesIcon } from '../components/icons/RotateAllPdfPagesIcon';
import RotateAllPdfPagesPage from '../pages/RotateAllPdfPagesPage';
import { PdfPageDeleterIcon } from '../components/icons/PdfPageDeleterIcon';
import PdfPageDeleterPage from '../pages/PdfPageDeleterPage';
import { PdfPageCropperIcon } from '../components/icons/PdfPageCropperIcon';
import PdfPageCropperPage from '../pages/PdfPageCropperPage';
import { PdfViewerIcon } from '../components/icons/PdfViewerIcon';
import PdfViewerPage from '../pages/PdfViewerPage';
import { PdfToSvgIcon } from '../components/icons/PdfToSvgIcon';
import PdfToSvgPage from '../pages/PdfToSvgPage';
import { PdfPageNumberRemoverIcon } from '../components/icons/PdfPageNumberRemoverIcon';
import PdfPageNumberRemoverPage from '../pages/PdfPageNumberRemoverPage';
import { PdfDocumentCropperIcon } from '../components/icons/PdfDocumentCropperIcon';
import PdfDocumentCropperPage from '../pages/PdfDocumentCropperPage';
import { AddTextSignatureToPdfIcon } from '../components/icons/AddTextSignatureToPdfIcon';
import AddTextSignatureToPdfPage from '../pages/AddTextSignatureToPdfPage';
import { PdfAnnotationViewerIcon } from '../components/icons/PdfAnnotationViewerIcon';
import PdfAnnotationViewerPage from '../pages/PdfAnnotationViewerPage';
import { PdfPageSizeCheckerIcon } from '../components/icons/PdfPageSizeCheckerIcon';
import PdfPageSizeCheckerPage from '../pages/PdfPageSizeCheckerPage';
import { PdfColorInverterIcon } from '../components/icons/PdfColorInverterIcon';
import PdfColorInverterPage from '../pages/PdfColorInverterPage';
import { PdfFileSizeCheckerIcon } from '../components/icons/PdfFileSizeCheckerIcon';
import PdfFileSizeCheckerPage from '../pages/PdfFileSizeCheckerPage';
import { PdfCompressionRatioCheckerIcon } from '../components/icons/PdfCompressionRatioCheckerIcon';
import PdfCompressionRatioCheckerPage from '../pages/PdfCompressionRatioCheckerPage';
import { PdfMetadataEditorIcon } from '../components/icons/PdfMetadataEditorIcon';
import PdfMetadataEditorPage from '../pages/PdfMetadataEditorPage';
import { PdfGrayscaleConverterIcon } from '../components/icons/PdfGrayscaleConverterIcon';
import PdfGrayscaleConverterPage from '../pages/PdfGrayscaleConverterPage';
import { PdfSecurityCheckerIcon } from '../components/icons/PdfSecurityCheckerIcon';
import PdfSecurityCheckerPage from '../pages/PdfSecurityCheckerPage';
import { PdfWatermarkPositionEditorIcon } from '../components/icons/PdfWatermarkPositionEditorIcon';
import PdfWatermarkPositionEditorPage from '../pages/PdfWatermarkPositionEditorPage';
import { PdfPageCounterRangeIcon } from '../components/icons/PdfPageCounterRangeIcon';
import PdfPageCounterRangePage from '../pages/PdfPageCounterRangePage';
import { PdfPageNumberFormatChangerIcon } from '../components/icons/PdfPageNumberFormatChangerIcon';
import PdfPageNumberFormatChangerPage from '../pages/PdfPageNumberFormatChangerPage';
import { PdfTextReplacerIcon } from '../components/icons/PdfTextReplacerIcon';
import PdfTextReplacerPage from '../pages/PdfTextReplacerPage';
import { PdfToHtmlConverterIcon } from '../components/icons/PdfToHtmlConverterIcon';
import PdfToHtmlConverterPage from '../pages/PdfToHtmlConverterPage';
import { PdfSecurityLevelCheckerIcon } from '../components/icons/PdfSecurityLevelCheckerIcon';
import PdfSecurityLevelCheckerPage from '../pages/PdfSecurityLevelCheckerPage';
import { PdfFileOptimizerIcon } from '../components/icons/PdfFileOptimizerIcon';
import PdfFileOptimizerPage from '../pages/PdfFileOptimizerPage';
import { PdfAnnotationCreatorIcon } from '../components/icons/PdfAnnotationCreatorIcon';
import PdfAnnotationCreatorPage from '../pages/PdfAnnotationCreatorPage';
import { PdfPageRotatorIndividualIcon } from '../components/icons/PdfPageRotatorIndividualIcon';
import PdfPageRotatorIndividualPage from '../pages/PdfPageRotatorIndividualPage';
import { PdfPageExtractorIcon } from '../components/icons/PdfPageExtractorIcon';
import PdfPageExtractorPage from '../pages/PdfPageExtractorPage';
import { PdfPageInserterIcon } from '../components/icons/PdfPageInserterIcon';
import PdfPageInserterPage from '../pages/PdfPageInserterPage';
import { PdfPageDuplicatorIcon } from '../components/icons/PdfPageDuplicatorIcon';
import PdfPageDuplicatorPage from '../pages/PdfPageDuplicatorPage';
import { PdfContentCleanerIcon } from '../components/icons/PdfContentCleanerIcon';
import PdfContentCleanerPage from '../pages/PdfContentCleanerPage';
import { PdfFormFieldViewerIcon } from '../components/icons/PdfFormFieldViewerIcon';
import PdfFormFieldViewerPage from '../pages/PdfFormFieldViewerPage';
import { PdfHeaderFooterRemoverIcon } from '../components/icons/PdfHeaderFooterRemoverIcon';
import PdfHeaderFooterRemoverPage from '../pages/PdfHeaderFooterRemoverPage';


// File Converters & Utilities
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';
import DocxToPdfPage from '../pages/DocxToPdfPage';
import { PdfToDocxIcon } from '../components/icons/PdfToDocxIcon';
import PdfToDocxPage from '../pages/PdfToDocxPage';

// Calculators & Time Tools
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';
import PercentageCalculatorPage from '../pages/PercentageCalculatorPage';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
import TimestampConverterPage from '../pages/TimestampConverterPage';
import { DateDifferenceIcon } from '../components/icons/DateDifferenceIcon';
import DateDifferencePage from '../pages/DateDifferencePage';
import { AgeCalculatorIcon } from '../components/icons/AgeCalculatorIcon';
import AgeCalculatorPage from '../pages/AgeCalculatorPage';
import { TimeZoneConverterIcon } from '../components/icons/TimeZoneConverterIcon';
import TimeZoneConverterPage from '../pages/TimeZoneConverterPage';
import { UnitConverterIcon } from '../components/icons/UnitConverterIcon';
import UnitConverterPage from '../pages/UnitConverterPage';
import { BmiCalculatorIcon } from '../components/icons/BmiCalculatorIcon';
import BmiCalculatorPage from '../pages/BmiCalculatorPage';
import { LoanCalculatorIcon } from '../components/icons/LoanCalculatorIcon';
import LoanCalculatorPage from '../pages/LoanCalculatorPage';
import { SalesTaxCalculatorIcon } from '../components/icons/SalesTaxCalculatorIcon';
import SalesTaxCalculatorPage from '../pages/SalesTaxCalculatorPage';
import { TipCalculatorIcon } from '../components/icons/TipCalculatorIcon';
import TipCalculatorPage from '../pages/TipCalculatorPage';
import { RandomNumberGeneratorIcon } from '../components/icons/RandomNumberGeneratorIcon';
import RandomNumberGeneratorPage from '../pages/RandomNumberGeneratorPage';
import { AspectRatioCalculatorIcon } from '../components/icons/AspectRatioCalculatorIcon';
import AspectRatioCalculatorPage from '../pages/AspectRatioCalculatorPage';

// Web & Developer Tools
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import JsBeautifierPage from '../pages/JsBeautifierPage';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';


export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'Image Resizer', description: 'Quickly resize any image to your desired dimensions.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-purple-500', category: 'Image Tools' },
  { name: 'JPG & PNG Converter', description: 'Convert images to and from JPG and PNG formats.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'QR Code Generator', description: 'Create a QR code from any text or URL.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-indigo-500', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once with ease.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, isPremium: true, borderColor: 'border-purple-600', category: 'Image Tools' },
  { name: 'Image Compressor', description: 'Reduce the file size of your images.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, isPremium: true, borderColor: 'border-purple-400', category: 'Image Tools' },
  { name: 'Image to Base64', description: 'Convert your images to Base64 strings.', path: '/image-to-base64', Icon: ImageToBase64Icon, Page: ImageToBase64Page, isPremium: true, borderColor: 'border-yellow-600', category: 'Image Tools' },
  { name: 'Image to Grayscale', description: 'Convert your images to black and white.', path: '/image-to-grayscale', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, isPremium: true, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Bulk JPG to PNG', description: 'Convert multiple JPG images to PNG format.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, isPremium: true, borderColor: 'border-yellow-400', category: 'Image Tools' },
  { name: 'Bulk PNG to JPG', description: 'Convert multiple PNG images to JPG format.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, isPremium: true, borderColor: 'border-yellow-700', category: 'Image Tools' },
  { name: 'Image Cropper', description: 'Crop images to your desired size.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-rose-500', category: 'Image Tools' },
  { name: 'Add Watermark to Image', description: 'Add a watermark to your images.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-rose-400', category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate your images to any angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone to your images.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-amber-500', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Sharpen your images to enhance details.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-sky-500', category: 'Image Tools' },
  { name: 'Invert Image Colors', description: 'Invert the colors of your images.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-slate-500', category: 'Image Tools' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity of your images.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust the hue, saturation, and brightness.', path: '/image-hsb-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: 'border-pink-400', category: 'Image Tools' },
  { name: 'Image Flipper', description: 'Flip your images horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: 'border-green-400', category: 'Image Tools' },
  { name: 'Image to ASCII Art', description: 'Convert your images to ASCII art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: 'border-lime-500', category: 'Image Tools' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of your images.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: 'border-neutral-500', category: 'Image Tools' },
  { name: 'Color Palette Extractor', description: 'Extract the color palette from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-emerald-500', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick a color from an image.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-red-400', category: 'Image Tools' },
  { name: 'Add Border to Image', description: 'Add a custom border to your images.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: 'border-stone-500', category: 'Image Tools' },
  { name: 'Add Rounded Corners', description: 'Add rounded corners to your images.', path: '/add-rounded-corners', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: 'border-violet-500', category: 'Image Tools' },
  { name: 'Image Collage Maker', description: 'Create a 2x2 collage from your images.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: 'border-orange-400', category: 'Image Tools' },
  { name: 'Image to Data URL', description: 'Convert an image to a Data URL string.', path: '/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: 'border-indigo-400', category: 'Image Tools' },
  { name: 'Image DPI Changer', description: 'Change the DPI of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: 'border-cyan-600', category: 'Image Tools' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your images.', path: '/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: 'border-teal-400', category: 'Image Tools' },
  { name: 'Image Text Overlay', description: 'Add text over your images.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: 'border-blue-400', category: 'Image Tools' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG image has transparency.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: 'border-slate-400', category: 'Image Tools' },
  { name: 'Image Pixelate Filter', description: 'Pixelate your images for a retro look.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: 'border-gray-600', category: 'Image Tools' },
  { name: 'Image to BMP Converter', description: 'Convert images to BMP format.', path: '/image-to-bmp-converter', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: 'border-cyan-800', category: 'Image Tools' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a GIF.', path: '/image-to-gif-converter', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: 'border-pink-600', category: 'Image Tools' },
  { name: 'Image Mirror Effect', description: 'Apply a mirror effect to your images.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: 'border-blue-300', category: 'Image Tools' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or warp your images.', path: '/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: 'border-indigo-600', category: 'Image Tools' },
  { name: 'Image Tint Adjuster', description: 'Add a color tint to your images.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: 'border-rose-300', category: 'Image Tools' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the lightness or darkness of an image.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Threshold Filter', description: 'Apply a threshold filter to create a binary image.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: 'border-gray-800', category: 'Image Tools' },
  { name: 'Image Dithering Effect', description: 'Apply a dithering effect to your images.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image to CSS Background', description: 'Generate CSS background code from an image.', path: '/image-to-css-background', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF data and other metadata from images.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: 'border-red-700', category: 'Image Tools' },
  { name: 'Image Dimension Checker', description: 'Quickly check the dimensions of an image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: 'border-green-700', category: 'Image Tools' },
  { name: 'Watermark Positioner', description: 'Position a watermark on your images.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, isPremium: true, borderColor: 'border-rose-600', category: 'Image Tools' },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image, not the image itself.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, isPremium: true, borderColor: 'border-purple-300', category: 'Image Tools' },
  { name: 'Image Hue Shifter', description: 'Shift the hue of your images.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, isPremium: true, borderColor: 'border-pink-500', category: 'Image Tools' },
  { name: 'Image Noise Generator', description: 'Add noise to your images.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, isPremium: true, borderColor: 'border-gray-400', category: 'Image Tools' },
  { name: 'Base64 to Image', description: 'Decode a Base64 string to an image.', path: '/base64-to-image-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: 'border-blue-200', category: 'Image Tools' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, isPremium: true, borderColor: 'border-fuchsia-600', category: 'Image Tools' },
  { name: 'Image Shadow Generator', description: 'Add a shadow effect to your images.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, isPremium: true, borderColor: 'border-gray-300', category: 'Image Tools' },
  { name: 'Black & White Filter', description: 'Convert your images to black and white.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, isPremium: true, borderColor: 'border-black', category: 'Image Tools' },
  { name: 'Image Tiling Previewer', description: 'Preview how an image tiles as a background.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, isPremium: true, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Color Replacer', description: 'Replace one color with another in an image.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, isPremium: true, borderColor: 'border-red-300', category: 'Image Tools' },
  { name: 'Reflection Generator', description: 'Add a reflection effect to your images.', path: '/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, isPremium: true, borderColor: 'border-blue-300', category: 'Image Tools' },
  { name: 'Image Layer Merger', description: 'Merge multiple image layers into one.', path: '/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, isPremium: true, borderColor: 'border-purple-400', category: 'Image Tools' },
  { name: 'Opacity Slider', description: 'Adjust the opacity of an image with a slider.', path: '/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, isPremium: true, borderColor: 'border-gray-400', category: 'Image Tools' },
  { name: 'Crop to Aspect Ratio', description: 'Crop an image to a specific aspect ratio.', path: '/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, isPremium: true, borderColor: 'border-rose-600', category: 'Image Tools' },
  { name: 'Image Metadata Editor', description: 'Edit the metadata of your images.', path: '/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, isPremium: true, borderColor: 'border-slate-600', category: 'Image Tools' },
  { name: 'Download Button Generator', description: 'Create a download button for an image.', path: '/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, isPremium: true, borderColor: 'border-green-600', category: 'Image Tools' },
  { name: 'Image Zoom Previewer', description: 'Preview an image with a zoom lens.', path: '/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, isPremium: true, borderColor: 'border-blue-700', category: 'Image Tools' },
  { name: 'Image Header Info Viewer', description: 'View the header information of an image.', path: '/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, isPremium: true, borderColor: 'border-gray-700', category: 'Image Tools' },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, isPremium: true, borderColor: 'border-indigo-700', category: 'Image Tools' },
  { name: 'Color Palette Saver', description: 'Save the color palette of an image.', path: '/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, isPremium: true, borderColor: 'border-emerald-700', category: 'Image Tools' },

  // Text & List Tools
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, title case, etc.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace-text', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove line breaks from text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-400', category: 'Text & List Tools' },
  { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/text-to-slug-converter', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-indigo-400', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-gray-400', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomly shuffle the lines in a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-purple-400', category: 'Text & List Tools' },
  { name: 'Reverse Text Generator', description: 'Reverse the characters in your text.', path: '/reverse-text-generator', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-pink-400', category: 'Text & List Tools' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text alphabetically.', path: '/sort-lines-alphabetically', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add a prefix or suffix to each line of text.', path: '/add-prefix-suffix-to-lines', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-teal-400', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Remove all empty lines from your text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Check the keyword density of your text.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-orange-500', category: 'Text & List Tools' },
  { name: 'Text to Binary Converter', description: 'Convert text to binary code.', path: '/text-to-binary-converter', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Binary to Text Converter', description: 'Convert binary code to text.', path: '/binary-to-text-converter', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal.', path: '/text-to-hex-converter', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: 'border-slate-600', category: 'Text & List Tools' },
  { name: 'Hex to Text Converter', description: 'Convert hexadecimal to text.', path: '/hex-to-text-converter', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: 'border-slate-500', category: 'Text & List Tools' },
  { name: 'Text to Octal Converter', description: 'Convert text to octal.', path: '/text-to-octal-converter', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: 'border-neutral-600', category: 'Text & List Tools' },
  { name: 'Octal to Text Converter', description: 'Convert octal to text.', path: '/octal-to-text-converter', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: 'border-neutral-500', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces from your text.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-stone-500', category: 'Text & List Tools' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: 'border-red-600', category: 'Text & List Tools' },
  { name: 'Sentence Case Converter', description: 'Convert text to sentence case.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Remove Non-Alphanumeric', description: 'Remove non-alphanumeric characters from text.', path: '/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: 'border-zinc-500', category: 'Text & List Tools' },
  { name: 'Text Scrambler', description: 'Scramble the letters in the middle of words.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: 'border-amber-500', category: 'Text & List Tools' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists and see the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-cyan-700', category: 'Text & List Tools' },
  { name: 'List Intersector', description: 'Find the common items between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: 'border-green-700', category: 'Text & List Tools' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: 'border-violet-500', category: 'Text & List Tools' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of lines.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: 'border-violet-400', category: 'Text & List Tools' },
  { name: 'Text Splitter', description: 'Split text into chunks of a specified length.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: 'border-orange-400', category: 'Text & List Tools' },
  { name: 'Text Repeater', description: 'Repeat a piece of text multiple times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: 'border-emerald-600', category: 'Text & List Tools' },
  { name: 'Remove Numbers from Text', description: 'Remove all numbers from your text.', path: '/remove-numbers-from-text', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: 'border-lime-600', category: 'Text & List Tools' },
  { name: 'Remove Letters from Text', description: 'Remove all letters from your text.', path: '/remove-letters-from-text', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: 'border-lime-700', category: 'Text & List Tools' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Apply the Rot13 cipher to your text.', path: '/rot13', Icon: Rot13Icon, Page: Rot13Page, borderColor: 'border-fuchsia-600', category: 'Text & List Tools' },
  { name: 'Custom Delimiter Converter', description: 'Convert text from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters in alphabetical order.', path: '/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a custom step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: 'border-gray-800', category: 'Text & List Tools' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode or decode text using custom character mappings.', path: '/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: 'border-rose-500', category: 'Text & List Tools' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from a YouTube page source.', path: '/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: 'border-red-500', category: 'Web & Developer Tools' },
  { name: 'Link Extractor from Text', description: 'Extract all links from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'Line Counter', description: 'Count the number of lines in your text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Vigenere Cipher', description: 'Encrypt or decrypt text using the Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Caesar Cipher', description: 'Encrypt or decrypt text using the Caesar cipher.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Text to ASCII Art', description: 'Convert text to ASCII art.', path: '/text-to-ascii-art', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from your text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Invisible Character Viewer', description: 'Find and highlight invisible characters in your text.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character in your text.', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: 'border-blue-300', category: 'Text & List Tools' },
  { name: 'Character Set Converter', description: 'Convert text between different character sets (e.g., UTF-8, ISO-8859-1).', path: '/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, isPremium: true, borderColor: 'border-indigo-500', category: 'Text & List Tools' },
  { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, isPremium: true, borderColor: 'border-blue-700', category: 'Text & List Tools' },

  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF file.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Remove password protection from a PDF file.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-800', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-400', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG', description: 'Convert each page of a PDF to a JPG image.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG', description: 'Convert each page of a PDF to a PNG image.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF', description: 'Convert JPG images to a PDF file.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF', description: 'Convert PNG images to a PDF file.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to Text Extractor', description: 'Extract text from a PDF file.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to a PDF.', path: '/pdf-watermark-adder-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to a PDF.', path: '/pdf-watermark-adder-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Encrypt PDF', description: 'Add a password to protect your PDF file.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Reorder PDF Pages', description: 'Visually reorder the pages of a PDF file.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Deleter', description: 'Remove specific pages from a PDF file.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Cropper', description: 'Crop the pages of a PDF file.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Viewer', description: 'A simple in-browser PDF viewer.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to scalable SVG images.', path: '/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF file.', path: '/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Document Cropper', description: 'Crop PDF documents.', path: '/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Annotation Viewer', description: 'View annotations and comments in a PDF.', path: '/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Size Checker', description: 'Check the size of pages in a PDF.', path: '/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF.', path: '/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Counter (Range)', description: 'Count pages within a specific range of a PDF.', path: '/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Number Format Changer', description: 'Change the format of page numbers in a PDF.', path: '/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Text Replacer', description: 'Find and replace text in a PDF.', path: '/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to HTML Converter', description: 'Convert PDF files to HTML.', path: '/pdf-to-html-converter', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Security Level Checker', description: 'Check the security level of a PDF.', path: '/pdf-security-level-checker', Icon: PdfSecurityLevelCheckerIcon, Page: PdfSecurityLevelCheckerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF file for size.', path: '/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Annotation Creator', description: 'Add annotations to a PDF.', path: '/pdf-annotation-creator', Icon: PdfAnnotationCreatorIcon, Page: PdfAnnotationCreatorPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages of a PDF.', path: '/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF.', path: '/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Inserter', description: 'Insert pages into a PDF.', path: '/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF.', path: '/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Content Cleaner', description: 'Clean content from a PDF.', path: '/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, isPremium: true, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  
  // File Converters & Utilities
  { name: 'DOCX to PDF', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, isPremium: true, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'PDF to DOCX', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, isPremium: true, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-blue-800', category: 'Calculators & Time Tools' },
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-sky-500', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Calculate age from a birth date.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-rose-500', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Convert times between different time zones.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'Convert between different units of measurement.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-lime-500', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-green-500', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Calculate loan payments.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-emerald-500', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-amber-500', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate a tip for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-yellow-500', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate a random number in a given range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios for images and videos.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-500', category: 'Calculators & Time Tools' },

  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and validate JSON.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URLs.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-pink-500', category: 'Web & Developer Tools' },
  { name: 'Password Generator', description: 'Generate strong, secure passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'HTML Prettifier', description: 'Format your HTML code to be more readable.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: 'border-orange-700', category: 'Web & Developer Tools' },
  { name: 'CSS Prettifier', description: 'Format your CSS code to be more readable.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: 'border-blue-400', category: 'Web & Developer Tools' },
  { name: 'JS Beautifier', description: 'Format your JavaScript code to be more readable.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: 'border-yellow-600', category: 'Web & Developer Tools' },
  { name: 'String Concatenator', description: 'Concatenate multiple lines of text into a single string.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: 'border-sky-600', category: 'Web & Developer Tools' },
  { name: 'Text Difference Checker', description: 'Compare two blocks of text and highlight the differences.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: 'border-cyan-800', category: 'Web & Developer Tools' },
  { name: 'Plain Text to HTML', description: 'Convert plain text to HTML.', path: '/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, borderColor: 'border-emerald-500', category: 'Web & Developer Tools' },
  { name: 'HTML to Plain Text', description: 'Convert HTML to plain text.', path: '/html-to-plain-text', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, borderColor: 'border-emerald-600', category: 'Web & Developer Tools' },
  { name: 'JSON Data Extractor', description: 'Extract data from JSON using a path.', path: '/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, isPremium: true, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'HTML Comment Remover', description: 'Remove all comments from an HTML file.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: 'border-orange-600', category: 'Web & Developer Tools' },
  { name: 'CSS Comment Remover', description: 'Remove all comments from a CSS file.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'JS Comment Stripper', description: 'Remove all comments from a JavaScript file.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: 'border-yellow-500', category: 'Web & Developer Tools' },

];

export const POPULAR_PATHS = [
    '/image-resizer',
    '/image-converter',
    '/json-formatter',
    '/password-generator',
    '/word-counter',
    '/duplicate-line-remover',
    '/qr-code-generator',
    '/merge-pdf',
    '/split-pdf',
    '/timestamp-converter',
    '/url-encoder-decoder',
    '/percentage-calculator'
];

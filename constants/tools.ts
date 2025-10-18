import { Tool } from '../types';

// Image Tools
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import ImageConverterPage from '../pages/ImageConverterPage';
import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
import ImageResizerPage from '../pages/ImageResizerPage';
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
import { Base64ImageSizeCalculatorIcon } from '../components/icons/Base64ImageSizeCalculatorIcon';
import Base64ImageSizeCalculatorPage from '../pages/Base64ImageSizeCalculatorPage';
import { ImageOptimizationCheckerIcon } from '../components/icons/ImageOptimizationCheckerIcon';
import ImageOptimizationCheckerPage from '../pages/ImageOptimizationCheckerPage';
import { ColorPaletteGeneratorIcon } from '../components/icons/ColorPaletteGeneratorIcon';
import ColorPaletteGeneratorPage from '../pages/ColorPaletteGeneratorPage';


// Text & List Tools
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import CaseConverterAllPage from '../pages/CaseConverterAllPage';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import RemoveDuplicateLinesPage from '../pages/RemoveDuplicateLinesPage';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import WordCountAndCharacterCounterPage from '../pages/WordCountAndCharacterCounterPage';
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
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';
import NumberPadGeneratorPage from '../pages/NumberPadGeneratorPage';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';
import NumberListSorterPage from '../pages/NumberListSorterPage';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';
import OddEvenNumberFilterPage from '../pages/OddEvenNumberFilterPage';
import { StringToArrayIcon } from '../components/icons/StringToArrayIcon';
import StringToArrayPage from '../pages/StringToArrayPage';
import { ArrayToStringIcon } from '../components/icons/ArrayToStringIcon';
import ArrayToStringPage from '../pages/ArrayToStringPage';


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
import { PdfToDocxIcon } from '../components/icons/PdfToDocxIcon';
import PdfToDocxPage from '../pages/PdfToDocxPage';
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

// File Converters & Utilities
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';
import DocxToPdfPage from '../pages/DocxToPdfPage';
import { ExcelToCsvIcon } from '../components/icons/ExcelToCsvIcon';
import ExcelToCsvPage from '../pages/ExcelToCsvPage';
import { CsvToExcelIcon } from '../components/icons/CsvToExcelIcon';
import CsvToExcelPage from '../pages/CsvToExcelPage';
import { TsvToCsvIcon } from '../components/icons/TsvToCsvIcon';
import TsvToCsvPage from '../pages/TsvToCsvPage';
import { FileMergerIcon } from '../components/icons/FileMergerIcon';
import FileMergerPage from '../pages/FileMergerPage';
import { BatchFileRenamerIcon } from '../components/icons/BatchFileRenamerIcon';
import BatchFileRenamerPage from '../pages/BatchFileRenamerPage';
import { FileChecksumCalculatorIcon } from '../components/icons/FileChecksumCalculatorIcon';
import FileChecksumCalculatorPage from '../pages/FileChecksumCalculatorPage';
import { FileExtensionChangerIcon } from '../components/icons/FileExtensionChangerIcon';
import FileExtensionChangerPage from '../pages/FileExtensionChangerPage';
import { DocxToTextExtractorIcon } from '../components/icons/DocxToTextExtractorIcon';
import DocxToTextExtractorPage from '../pages/DocxToTextExtractorPage';
import { PptxToTextExtractorIcon } from '../components/icons/PptxToTextExtractorIcon';
import PptxToTextExtractorPage from '../pages/PptxToTextExtractorPage';
import { FileSizeConverterIcon } from '../components/icons/FileSizeConverterIcon';
import FileSizeConverterPage from '../pages/FileSizeConverterPage';
import { CsvColumnSelectorIcon } from '../components/icons/CsvColumnSelectorIcon';
import CsvColumnSelectorPage from '../pages/CsvColumnSelectorPage';
import { DocxHeaderFooterExtractorIcon } from '../components/icons/DocxHeaderFooterExtractorIcon';
import DocxHeaderFooterExtractorPage from '../pages/DocxHeaderFooterExtractorPage';
import { FileTypeCheckerIcon } from '../components/icons/FileTypeCheckerIcon';
import FileTypeCheckerPage from '../pages/FileTypeCheckerPage';

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
import { ScientificCalculatorIcon } from '../components/icons/ScientificCalculatorIcon';
import ScientificCalculatorPage from '../pages/ScientificCalculatorPage';
import { CompoundInterestCalculatorIcon } from '../components/icons/CompoundInterestCalculatorIcon';
import CompoundInterestCalculatorPage from '../pages/CompoundInterestCalculatorPage';
import { CountdownTimerIcon } from '../components/icons/CountdownTimerIcon';
import CountdownTimerPage from '../pages/CountdownTimerPage';
import { StopwatchIcon } from '../components/icons/StopwatchIcon';
import StopwatchPage from '../pages/StopwatchPage';
import { DateFormatConverterIcon } from '../components/icons/DateFormatConverterIcon';
import DateFormatConverterPage from '../pages/DateFormatConverterPage';
import { DayOfTheWeekCalculatorIcon } from '../components/icons/DayOfTheWeekCalculatorIcon';
import DayOfTheWeekCalculatorPage from '../pages/DayOfTheWeekCalculatorPage';
import { LeapYearCheckerIcon } from '../components/icons/LeapYearCheckerIcon';
import LeapYearCheckerPage from '../pages/LeapYearCheckerPage';
import { TimeAdderSubtracterIcon } from '../components/icons/TimeAdderSubtracterIcon';
import TimeAdderSubtracterPage from '../pages/TimeAdderSubtracterPage';
import { BusinessDayCalculatorIcon } from '../components/icons/BusinessDayCalculatorIcon';
import BusinessDayCalculatorPage from '../pages/BusinessDayCalculatorPage';
import { MeanMedianModeIcon } from '../components/icons/MeanMedianModeIcon';
import MeanMedianModePage from '../pages/MeanMedianModePage';
import { StandardDeviationIcon } from '../components/icons/StandardDeviationIcon';
import StandardDeviationPage from '../pages/StandardDeviationPage';
import { ZScoreCalculatorIcon } from '../components/icons/ZScoreCalculatorIcon';
import ZScoreCalculatorPage from '../pages/ZScoreCalculatorPage';
import { QuadraticEquationSolverIcon } from '../components/icons/QuadraticEquationSolverIcon';
import QuadraticEquationSolverPage from '../pages/QuadraticEquationSolverPage';
import { PythagoreanTheoremSolverIcon } from '../components/icons/PythagoreanTheoremSolverIcon';
import PythagoreanTheoremSolverPage from '../pages/PythagoreanTheoremSolverPage';
import { AreaCalculatorIcon } from '../components/icons/AreaCalculatorIcon';
import AreaCalculatorPage from '../pages/AreaCalculatorPage';
import { VolumeCalculatorIcon } from '../components/icons/VolumeCalculatorIcon';
import VolumeCalculatorPage from '../pages/VolumeCalculatorPage';
import { FractionDecimalConverterIcon } from '../components/icons/FractionDecimalConverterIcon';
import FractionDecimalConverterPage from '../pages/FractionDecimalConverterPage';
import { DecimalFractionConverterIcon } from '../components/icons/DecimalFractionConverterIcon';
import DecimalFractionConverterPage from '../pages/DecimalFractionConverterPage';
import { BinaryCalculatorIcon } from '../components/icons/BinaryCalculatorIcon';
import BinaryCalculatorPage from '../pages/BinaryCalculatorPage';
import { OctalCalculatorIcon } from '../components/icons/OctalCalculatorIcon';
import OctalCalculatorPage from '../pages/OctalCalculatorPage';
import { HexadecimalCalculatorIcon } from '../components/icons/HexadecimalCalculatorIcon';
import HexadecimalCalculatorPage from '../pages/HexadecimalCalculatorPage';
import { WorldClockIcon } from '../components/icons/WorldClockIcon';
import WorldClockPage from '../pages/WorldClockPage';
import { DateToDayOfYearIcon } from '../components/icons/DateToDayOfYearIcon';
import DateToDayOfYearPage from '../pages/DateToDayOfYearPage';
import { RandomDateGeneratorIcon } from '../components/icons/RandomDateGeneratorIcon';
import RandomDateGeneratorPage from '../pages/RandomDateGeneratorPage';
import { MortgageRefinanceCalculatorIcon } from '../components/icons/MortgageRefinanceCalculatorIcon';
import MortgageRefinanceCalculatorPage from '../pages/MortgageRefinanceCalculatorPage';
import { RetirementSavingsCalculatorIcon } from '../components/icons/RetirementSavingsCalculatorIcon';
import RetirementSavingsCalculatorPage from '../pages/RetirementSavingsCalculatorPage';
import { LoanAmortizationScheduleIcon } from '../components/icons/LoanAmortizationScheduleIcon';
import LoanAmortizationSchedulePage from '../pages/LoanAmortizationSchedulePage';
import { CurrencyConverterIcon } from '../components/icons/CurrencyConverterIcon';
import CurrencyConverterPage from '../pages/CurrencyConverterPage';
import { TimeDurationFormatterIcon } from '../components/icons/TimeDurationFormatterIcon';
import TimeDurationFormatterPage from '../pages/TimeDurationFormatterPage';
import { SquareRootCalculatorIcon } from '../components/icons/SquareRootCalculatorIcon';
import SquareRootCalculatorPage from '../pages/SquareRootCalculatorPage';
import { FactorialCalculatorIcon } from '../components/icons/FactorialCalculatorIcon';
import FactorialCalculatorPage from '../pages/FactorialCalculatorPage';

// Web & Developer Tools
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
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
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import JsBeautifierPage from '../pages/JsBeautifierPage';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';
import { RandomCoinFlipIcon } from '../components/icons/RandomCoinFlipIcon';
import RandomCoinFlipPage from '../pages/RandomCoinFlipPage';
import { RandomDiceRollIcon } from '../components/icons/RandomDiceRollIcon';
import RandomDiceRollPage from '../pages/RandomDiceRollPage';
import { ListRandomizerIcon } from '../components/icons/ListRandomizerIcon';
import ListRandomizerPage from '../pages/ListRandomizerPage';
import { BaseConversionIcon } from '../components/icons/BaseConversionIcon';
import BaseConversionPage from '../pages/BaseConversionPage';
import { ScientificNotationIcon } from '../components/icons/ScientificNotationIcon';
import ScientificNotationPage from '../pages/ScientificNotationPage';
import { JsonValidatorIcon } from '../components/icons/JsonValidatorIcon';
import JsonValidatorPage from '../pages/JsonValidatorPage';
import { Base64TextEncoderDecoderIcon } from '../components/icons/Base64TextEncoderDecoderIcon';
import Base64TextEncoderDecoderPage from '../pages/Base64TextEncoderDecoderPage';
import { Md5HashGeneratorIcon } from '../components/icons/Md5HashGeneratorIcon';
import Md5HashGeneratorPage from '../pages/Md5HashGeneratorPage';
import { Sha256HashGeneratorIcon } from '../components/icons/Sha256HashGeneratorIcon';
import Sha256HashGeneratorPage from '../pages/Sha256HashGeneratorPage';
import { JsonMinifierIcon } from '../components/icons/JsonMinifierIcon';
import JsonMinifierPage from '../pages/JsonMinifierPage';
import { CssBoxShadowGeneratorIcon } from '../components/icons/CssBoxShadowGeneratorIcon';
import CssBoxShadowGeneratorPage from '../pages/CssBoxShadowGeneratorPage';
import { ColorContrastCheckerIcon } from '../components/icons/ColorContrastCheckerIcon';
import ColorContrastCheckerPage from '../pages/ColorContrastCheckerPage';
import { RegexTesterIcon } from '../components/icons/RegexTesterIcon';
import RegexTesterPage from '../pages/RegexTesterPage';
import { HtmlEntityEncoderDecoderIcon } from '../components/icons/HtmlEntityEncoderDecoderIcon';
import HtmlEntityEncoderDecoderPage from '../pages/HtmlEntityEncoderDecoderPage';
import { HtmlTagStripperIcon } from '../components/icons/HtmlTagStripperIcon';
import HtmlTagStripperPage from '../pages/HtmlTagStripperPage';
import { JsonToXmlConverterIcon } from '../components/icons/JsonToXmlConverterIcon';
import JsonToXmlConverterPage from '../pages/JsonToXmlConverterPage';
import { XmlToJsonConverterIcon } from '../components/icons/XmlToJsonConverterIcon';
import XmlToJsonConverterPage from '../pages/XmlToJsonConverterPage';
import { UrlParserIcon } from '../components/icons/UrlParserIcon';
import UrlParserPage from '../pages/UrlParserPage';
import { JsMinifierIcon } from '../components/icons/JsMinifierIcon';
import JsMinifierPage from '../pages/JsMinifierPage';
import { CssGradientGeneratorIcon } from '../components/icons/CssGradientGeneratorIcon';
import CssGradientGeneratorPage from '../pages/CssGradientGeneratorPage';
import { DecimalToBinaryConverterIcon } from '../components/icons/DecimalToBinaryConverterIcon';
import DecimalToBinaryConverterPage from '../pages/DecimalToBinaryConverterPage';
import { BinaryToDecimalConverterIcon } from '../components/icons/BinaryToDecimalConverterIcon';
import BinaryToDecimalConverterPage from '../pages/BinaryToDecimalConverterPage';
import { HtaccessRedirectGeneratorIcon } from '../components/icons/HtaccessRedirectGeneratorIcon';
import HtaccessRedirectGeneratorPage from '../pages/HtaccessRedirectGeneratorPage';
import { HtaccessAuthGeneratorIcon } from '../components/icons/HtaccessAuthGeneratorIcon';
import HtaccessAuthGeneratorPage from '../pages/HtaccessAuthGeneratorPage';
import { XmlFormatterIcon } from '../components/icons/XmlFormatterIcon';
import XmlFormatterPage from '../pages/XmlFormatterPage';
import { YamlToJsonConverterIcon } from '../components/icons/YamlToJsonConverterIcon';
import YamlToJsonConverterPage from '../pages/YamlToJsonConverterPage';
import { SvgEditorIcon } from '../components/icons/SvgEditorIcon';
import SvgEditorPage from '../pages/SvgEditorPage';
import { HtmlToMarkdownConverterIcon } from '../components/icons/HtmlToMarkdownConverterIcon';
import HtmlToMarkdownConverterPage from '../pages/HtmlToMarkdownConverterPage';
import { MarkdownToHtmlRendererIcon } from '../components/icons/MarkdownToHtmlRendererIcon';
import MarkdownToHtmlRendererPage from '../pages/MarkdownToHtmlRendererPage';
import { PasswordStrengthCheckerIcon } from '../components/icons/PasswordStrengthCheckerIcon';
import PasswordStrengthCheckerPage from '../pages/PasswordStrengthCheckerPage';
import { CssPrefixerIcon } from '../components/icons/CssPrefixerIcon';
import CssPrefixerPage from '../pages/CssPrefixerPage';
import { ApiTesterIcon } from '../components/icons/ApiTesterIcon';
import ApiTesterPage from '../pages/ApiTesterPage';
import { WebpDetectionIcon } from '../components/icons/WebpDetectionIcon';
import WebpDetectionPage from '../pages/WebpDetectionPage';
import { CssGridPlaygroundIcon } from '../components/icons/CssGridPlaygroundIcon';
import CssGridPlaygroundPage from '../pages/CssGridPlaygroundPage';
import { CssFlexboxPlaygroundIcon } from '../components/icons/CssFlexboxPlaygroundIcon';
import CssFlexboxPlaygroundPage from '../pages/CssFlexboxPlaygroundPage';
import { JsonToPhpArrayIcon } from '../components/icons/JsonToPhpArrayIcon';
import JsonToPhpArrayPage from '../pages/JsonToPhpArrayPage';
import { JsonToPythonDictIcon } from '../components/icons/JsonToPythonDictIcon';
import JsonToPythonDictPage from '../pages/JsonToPythonDictPage';
import { HexToDecimalConverterIcon } from '../components/icons/HexToDecimalConverterIcon';
import HexToDecimalConverterPage from '../pages/HexToDecimalConverterPage';
import { RandomIdGeneratorIcon } from '../components/icons/RandomIdGeneratorIcon';
import RandomIdGeneratorPage from '../pages/RandomIdGeneratorPage';
import { HttpStatusCodeLookupIcon } from '../components/icons/HttpStatusCodeLookupIcon';
import HttpStatusCodeLookupPage from '../pages/HttpStatusCodeLookupPage';
import { XmlValidatorIcon } from '../components/icons/XmlValidatorIcon';
import XmlValidatorPage from '../pages/XmlValidatorPage';
import { FontStackGeneratorIcon } from '../components/icons/FontStackGeneratorIcon';
import FontStackGeneratorPage from '../pages/FontStackGeneratorPage';
import { HtmlBoilerplateGeneratorIcon } from '../components/icons/HtmlBoilerplateGeneratorIcon';
import HtmlBoilerplateGeneratorPage from '../pages/HtmlBoilerplateGeneratorPage';
import { JsonToSqlInsertIcon } from '../components/icons/JsonToSqlInsertIcon';
import JsonToSqlInsertPage from '../pages/JsonToSqlInsertPage';
import { JsonArrayShufflerIcon } from '../components/icons/JsonArrayShufflerIcon';
import JsonArrayShufflerPage from '../pages/JsonArrayShufflerPage';
import { LocalStorageViewerIcon } from '../components/icons/LocalStorageViewerIcon';
import LocalStorageViewerPage from '../pages/LocalStorageViewerPage';
import { CodeSnippetRunnerIcon } from '../components/icons/CodeSnippetRunnerIcon';
import CodeSnippetRunnerPage from '../pages/CodeSnippetRunnerPage';
import { FaviconExtractorIcon } from '../components/icons/FaviconExtractorIcon';
import FaviconExtractorPage from '../pages/FaviconExtractorPage';
import { CssFilterGeneratorIcon } from '../components/icons/CssFilterGeneratorIcon';
import CssFilterGeneratorPage from '../pages/CssFilterGeneratorPage';
import { ColorPickerFromScreenIcon } from '../components/icons/ColorPickerFromScreenIcon';
import ColorPickerFromScreenPage from '../pages/ColorPickerFromScreenPage';
import { CsvViewerIcon } from '../components/icons/CsvViewerIcon';
import CsvViewerPage from '../pages/CsvViewerPage';

const imageTools: Tool[] = [
  { name: 'Image Converter', description: 'Convert images between JPG and PNG formats.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Resizer', description: 'Resize images to specific dimensions or percentages.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Compressor (Bulk)', description: 'Compress multiple images to reduce file size.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to Base64 (Bulk)', description: 'Convert multiple images to Base64 strings.', path: '/image-to-base64-bulk', Icon: ImageToBase64Icon, Page: ImageToBase64Page, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale-bulk', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Bulk JPG to PNG Converter', description: 'Convert multiple JPG images to PNG format.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Bulk PNG to JPG Converter', description: 'Convert multiple PNG images to JPG format.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Cropper', description: 'Crop images to a specific area or aspect ratio.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Watermark', description: 'Add a watermark image to your pictures.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Rotator', description: 'Rotate images by any angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone effect to your images.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Sharpen Filter', description: 'Sharpen your images to enhance details.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Invert Colors', description: 'Invert the colors of your images.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity level of your images.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL and brightness values of your images.', path: '/image-hsl-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Flipper', description: 'Flip images horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to ASCII Art', description: 'Convert images into ASCII text art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of your images.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Color Palette Extractor', description: 'Extract the main colors from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Color Picker', description: 'Pick colors from an image using an eyedropper tool.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Add Border to Image', description: 'Add a solid color border to your images.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Add Rounded Corners', description: 'Add rounded corners to your images.', path: '/add-rounded-corners-to-image', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Collage Maker (2x2)', description: 'Create a 2x2 photo collage from four images.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to Data URL', description: 'Convert an image into a base64 Data URL string.', path: '/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image DPI Changer (JPG only)', description: 'Change the DPI metadata of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your photos.', path: '/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Text Overlay', description: 'Add text over your images.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG image has transparent areas.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Pixelate Filter', description: 'Pixelate an image to create a retro effect.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp-converter', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a static GIF.', path: '/image-to-gif-converter', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Mirror Effect', description: 'Apply a mirror effect to your images.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or warp images horizontally and vertically.', path: '/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Tint Adjuster', description: 'Apply a color tint to your images.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the brightness/lightness of your images.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Threshold Filter', description: 'Apply a black and white threshold effect.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Dithering Effect', description: 'Apply a 1-bit dithering effect to your images.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Base64 to Image', description: 'Decode a Base64 string to an image.', path: '/base64-to-image-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to your images.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image to Black & White', description: 'Convert your images to black and white.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Tiling Previewer', description: 'Preview how an image looks when tiled.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Color Replacer', description: 'Replace one color in an image with another.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Reflection Generator', description: 'Create a reflection effect for your images.', path: '/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Layer Merger', description: 'Merge multiple image layers into one.', path: '/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Opacity Slider', description: 'Visually adjust the opacity of an image.', path: '/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Crop to Aspect Ratio Preset', description: 'Crop images to standard aspect ratios.', path: '/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Metadata Editor', description: 'Edit the EXIF and other metadata of your images.', path: '/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Download Button Generator', description: 'Generate an HTML download button for an image.', path: '/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Zoom Previewer', description: 'Preview how an image looks when zoomed.', path: '/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Header Info Viewer', description: 'View header information of image files.', path: '/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Color Palette Saver', description: 'Save the extracted color palette from an image.', path: '/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Image Watermark Positioner', description: 'Position a watermark on an image with a 9-point grid.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image, not the image itself.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Hue Shifter', description: 'Shift the hue of all colors in an image.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Noise Generator', description: 'Add random noise to an image.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Metadata Remover', description: 'Strip all metadata (EXIF, etc.) from an image.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Dimension Checker', description: 'Quickly find the dimensions (width & height) of an image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, category: 'Image Tools', borderColor: 'border-orange-500' },
  { name: 'Image Optimization Checker', description: 'Check how well an image is optimized for the web.', path: '/image-optimization-checker', Icon: ImageOptimizationCheckerIcon, Page: ImageOptimizationCheckerPage, category: 'Image Tools', borderColor: 'border-orange-500'},
  { name: 'Color Palette Generator', description: 'Generate color palettes from a base color.', path: '/color-palette-generator', Icon: ColorPaletteGeneratorIcon, Page: ColorPaletteGeneratorPage, category: 'Image Tools', borderColor: 'border-orange-500'},
];

const textListTools: Tool[] = [
  { name: 'Case Converter', description: 'Convert text between uppercase, lowercase, and more.', path: '/case-converter-all', Icon: CaseConverterIcon, Page: CaseConverterAllPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list of text.', path: '/remove-duplicate-lines', Icon: DuplicateLineRemoverIcon, Page: RemoveDuplicateLinesPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCountAndCharacterCounterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Line Break Remover', description: 'Remove all line breaks from a block of text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/text-to-slug', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text in various lengths.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'List Shuffler', description: 'Randomly shuffle the lines in a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Reverse Text Generator', description: 'Reverse the characters in a string of text.', path: '/reverse-text', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text alphabetically (A-Z or Z-A).', path: '/sort-lines-alphabetically', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add a prefix and/or suffix to each line of text.', path: '/add-prefix-suffix', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Remove Empty Lines', description: 'Remove all empty lines from a block of text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Keyword Density Checker', description: 'Analyze text to find the keyword density.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text to Binary Converter', description: 'Convert text to binary representation.', path: '/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Binary to Text Converter', description: 'Convert binary back to human-readable text.', path: '/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal representation.', path: '/text-to-hex', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Hex to Text Converter', description: 'Convert hexadecimal back to human-readable text.', path: '/hex-to-text', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text to Octal Converter', description: 'Convert text to octal representation.', path: '/text-to-octal', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Octal to Text Converter', description: 'Convert octal back to human-readable text.', path: '/octal-to-text', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces and tabs from text.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Sentence Case Converter', description: 'Convert text to proper sentence case.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Remove Non-Alphanumeric Chars', description: 'Strip all non-alphanumeric characters from text.', path: '/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words in a text.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists to find the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'List Intersector', description: 'Find the common items between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of each line.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Splitter', description: 'Split a block of text into smaller chunks of a specified size.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Repeater', description: 'Repeat a string of text a specified number of times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Remove Numbers from Text', description: 'Remove all numbers from a block of text.', path: '/remove-numbers', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Remove Letters from Text', description: 'Remove all letters from a block of text.', path: '/remove-letters', Icon: RemoveLettersIcon, Page: RemoveLettersPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Apply the Rot13 cipher to a block of text.', path: '/rot13', Icon: Rot13Icon, Page: Rot13Page, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Custom Delimiter Converter', description: 'Convert a delimited list from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from A to Z.', path: '/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a start, end, and step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode and decode text using custom character maps.', path: '/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Line Counter', description: 'Count the number of lines in a block of text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Vigenere Cipher', description: 'Encrypt and decrypt text using the Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Caesar Cipher', description: 'Encrypt and decrypt text using the Caesar cipher.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text to ASCII Art Viewer', description: 'View your text in a simple ASCII art box.', path: '/text-to-ascii-art', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from a block of text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible characters in your text.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character in a string.', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'String Concatenator', description: 'Concatenate a list of items into a single string with a delimiter.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Difference Checker', description: 'Compare two blocks of text to see the differences.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Character Set Converter', description: 'Convert text between different character sets (e.g., UTF-8 to ISO-8859-1).', path: '/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Number Pad Generator', description: 'Generate a list of numbers with zero-padding.', path: '/number-pad-generator', Icon: NumberPadGeneratorIcon, Page: NumberPadGeneratorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Sort Numbers List', description: 'Sort a list of numbers in ascending or descending order.', path: '/number-list-sorter', Icon: NumberListSorterIcon, Page: NumberListSorterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Odd/Even Number Filter', description: 'Filter a list of numbers to keep only odd or even ones.', path: '/odd-even-number-filter', Icon: OddEvenNumberFilterIcon, Page: OddEvenNumberFilterPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'String to Array Converter', description: 'Convert a string to a JSON array based on a delimiter.', path: '/string-to-array', Icon: StringToArrayIcon, Page: StringToArrayPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Array to String Converter', description: 'Convert a JSON array to a string with a delimiter.', path: '/array-to-string', Icon: ArrayToStringIcon, Page: ArrayToStringPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
];

const pdfTools: Tool[] = [
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF file.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Password Remover', description: 'Attempt to remove password restrictions from a PDF.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to JPG Converter', description: 'Convert each page of a PDF to a JPG image.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to PNG Converter', description: 'Convert each page of a PDF to a PNG image.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'JPG to PDF Converter', description: 'Convert JPG images to a single PDF file.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PNG to PDF Converter', description: 'Convert PNG images to a single PDF file.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to Text Extractor', description: 'Extract all text content from a PDF file.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to each page of a PDF.', path: '/pdf-watermark-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to each page of a PDF.', path: '/pdf-watermark-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Encrypt PDF', description: 'Add a password to protect your PDF file.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Reorder PDF Pages', description: 'Visually reorder the pages of a PDF file.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF file.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Deleter', description: 'Remove specific pages from a PDF file.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Cropper', description: 'Crop the pages of a PDF file.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Viewer', description: 'A simple in-browser PDF viewer.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to scalable SVG images.', path: '/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF file.', path: '/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Document Cropper', description: 'Crop PDF documents.', path: '/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Annotation Viewer', description: 'View annotations and comments in a PDF.', path: '/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Size Checker', description: 'Check the size of pages in a PDF.', path: '/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF.', path: '/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Annotation Creator', description: 'Add annotations to a PDF.', path: '/pdf-annotation-creator', Icon: PdfAnnotationCreatorIcon, Page: PdfAnnotationCreatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages of a PDF.', path: '/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF.', path: '/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Inserter', description: 'Insert pages into a PDF.', path: '/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF.', path: '/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Content Cleaner', description: 'Clean content from a PDF.', path: '/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Counter (Range)', description: 'Count pages within a specific range of a PDF.', path: '/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Number Format Changer', description: 'Change the format of page numbers in a PDF.', path: '/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Text Replacer', description: 'Find and replace text in a PDF.', path: '/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to HTML Converter', description: 'Convert PDF files to HTML.', path: '/pdf-to-html-converter', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Security Level Checker', description: 'Check the security level of a PDF.', path: '/pdf-security-level-checker', Icon: PdfSecurityLevelCheckerIcon, Page: PdfSecurityLevelCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF file for size.', path: '/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
];

const fileConverterTools: Tool[] = [
  { name: 'DOCX to PDF Converter', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'PDF to DOCX Converter', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV format.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel format.', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'TSV to CSV Converter', description: 'Convert Tab-Separated Values to Comma-Separated Values.', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Merger', description: 'Merge multiple files into one.', path: '/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of any file.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX to Text Extractor', description: 'Extract text content from a DOCX file.', path: '/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'PPTX to Text Extractor', description: 'Extract text from PowerPoint files.', path: '/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Type Checker', description: 'Check the file type based on its contents.', path: '/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
];

const calculatorTools: Tool[] = [
  { name: 'Percentage Calculator', description: 'Calculate percentages, what-if scenarios, and more.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Date Difference Calculator', description: 'Calculate the duration between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Age Calculator', description: 'Calculate age from a date of birth.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Zone Converter', description: 'Convert times between different time zones.', path: '/timezone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Unit Converter', description: 'Convert between various units of measurement.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index (BMI).', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Loan Calculator', description: 'Calculate monthly payments for a loan.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax for a given price and rate.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Tip Calculator', description: 'Calculate the tip for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios for images and videos.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Scientific Calculator', description: 'A calculator with scientific functions.', path: '/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Compound Interest Calculator', description: 'Calculate compound interest over time.', path: '/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Countdown Timer', description: 'A simple countdown timer.', path: '/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Stopwatch', description: 'A simple stopwatch tool.', path: '/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Date Format Converter', description: 'Convert dates between different formats.', path: '/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/day-of-the-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Adder / Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Business Day Calculator', description: 'Calculate business days between two dates.', path: '/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Mean, Median, & Mode Calculator', description: 'Calculate mean, median, and mode for a set of numbers.', path: '/mean-median-mode', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Standard Deviation Calculator', description: 'Calculate the standard deviation of a set of numbers.', path: '/standard-deviation-calculator', Icon: StandardDeviationIcon, Page: StandardDeviationPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Z-Score Calculator', description: 'Calculate the Z-score of a data point.', path: '/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations (ax² + bx + c = 0).', path: '/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Pythagorean Theorem Solver', description: 'Solve for the hypotenuse of a right triangle.', path: '/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Area Calculator', description: 'Calculate the area of various shapes.', path: '/area-calculator', Icon: AreaCalculatorIcon, Page: AreaCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Volume Calculator', description: 'Calculate the volume of various 3D shapes.', path: '/volume-calculator', Icon: VolumeCalculatorIcon, Page: VolumeCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Fraction to Decimal Converter', description: 'Convert fractions to decimal numbers.', path: '/fraction-to-decimal', Icon: FractionDecimalConverterIcon, Page: FractionDecimalConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Decimal to Fraction Converter', description: 'Convert decimal numbers to fractions.', path: '/decimal-to-fraction', Icon: DecimalFractionConverterIcon, Page: DecimalFractionConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Binary Calculator', description: 'Perform calculations with binary numbers.', path: '/binary-calculator', Icon: BinaryCalculatorIcon, Page: BinaryCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Octal Calculator', description: 'Perform calculations with octal numbers.', path: '/octal-calculator', Icon: OctalCalculatorIcon, Page: OctalCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Hexadecimal Calculator', description: 'Perform calculations with hexadecimal numbers.', path: '/hexadecimal-calculator', Icon: HexadecimalCalculatorIcon, Page: HexadecimalCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'World Clock', description: 'View the current time in major cities around the world.', path: '/world-clock', Icon: WorldClockIcon, Page: WorldClockPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Date to Day of Year', description: 'Find the day number of the year for a given date.', path: '/date-to-day-of-year', Icon: DateToDayOfYearIcon, Page: DateToDayOfYearPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Random Date Generator', description: 'Generate a random date within a specified range.', path: '/random-date-generator', Icon: RandomDateGeneratorIcon, Page: RandomDateGeneratorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Mortgage Refinance Calculator', description: 'Calculate savings from refinancing a mortgage.', path: '/mortgage-refinance-calculator', Icon: MortgageRefinanceCalculatorIcon, Page: MortgageRefinanceCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Retirement Savings Calculator', description: 'Estimate your retirement savings.', path: '/retirement-savings-calculator', Icon: RetirementSavingsCalculatorIcon, Page: RetirementSavingsCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Loan Amortization Schedule', description: 'Generate a loan amortization schedule.', path: '/loan-amortization-schedule', Icon: LoanAmortizationScheduleIcon, Page: LoanAmortizationSchedulePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/currency-converter', Icon: CurrencyConverterIcon, Page: CurrencyConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Duration Formatter', description: 'Format a duration in seconds to HH:MM:SS.', path: '/time-duration-formatter', Icon: TimeDurationFormatterIcon, Page: TimeDurationFormatterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/square-root-calculator', Icon: SquareRootCalculatorIcon, Page: SquareRootCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/factorial-calculator', Icon: FactorialCalculatorIcon, Page: FactorialCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'File Size Converter', description: 'Convert between different file size units (KB, MB, GB).', path: '/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
];

const devTools: Tool[] = [
  { name: 'JSON Formatter', description: 'Format and beautify JSON data for readability.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URLs and URL components.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Password Generator', description: 'Generate strong, random passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'QR Code Generator', description: 'Generate QR codes from text or URLs.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'YouTube Content Extractor', description: 'Extract titles and descriptions from YouTube page source.', path: '/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Link Extractor from Text', description: 'Extract all links from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Comment Remover', description: 'Remove all HTML comments from a code block.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Comment Remover', description: 'Remove all comments from a CSS code block.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JS Comment Stripper', description: 'Remove all comments from a JavaScript code block.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Prettifier / Beautifier', description: 'Format and indent HTML code for readability.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Prettifier / Beautifier', description: 'Format and indent CSS code for readability.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JS Beautifier / Prettifier', description: 'Format and indent JavaScript code for readability.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Plain Text to HTML', description: 'Convert plain text to HTML with line breaks.', path: '/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML to Plain Text', description: 'Strip all HTML tags to get plain text.', path: '/html-to-plain-text', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Data Extractor', description: 'Extract data from JSON using a path.', path: '/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Random Number Generator', description: 'Generate random numbers within a specified range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Random Coin Flip', description: 'Flip a virtual coin to get heads or tails.', path: '/random-coin-flip', Icon: RandomCoinFlipIcon, Page: RandomCoinFlipPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Random Dice Roll', description: 'Roll a virtual six-sided die.', path: '/random-dice-roll', Icon: RandomDiceRollIcon, Page: RandomDiceRollPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'List Randomizer', description: 'Pick a random item from a list.', path: '/list-randomizer', Icon: ListRandomizerIcon, Page: ListRandomizerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Base Converter', description: 'Convert numbers between binary, octal, decimal, and hexadecimal.', path: '/base-converter', Icon: BaseConversionIcon, Page: BaseConversionPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Scientific Notation Converter', description: 'Convert numbers to and from scientific notation.', path: '/scientific-notation-converter', Icon: ScientificNotationIcon, Page: ScientificNotationPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Validator', description: 'Validate JSON data to ensure it is well-formed.', path: '/json-validator', Icon: JsonValidatorIcon, Page: JsonValidatorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Base64 Text Encoder / Decoder', description: 'Encode text to Base64 or decode from Base64.', path: '/base64-text-encoder-decoder', Icon: Base64TextEncoderDecoderIcon, Page: Base64TextEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash from a string.', path: '/md5-hash-generator', Icon: Md5HashGeneratorIcon, Page: Md5HashGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash from a string.', path: '/sha256-hash-generator', Icon: Sha256HashGeneratorIcon, Page: Sha256HashGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Minifier', description: 'Minify JSON data to reduce its size.', path: '/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Box Shadow Generator', description: 'Visually generate CSS for box shadows.', path: '/css-box-shadow-generator', Icon: CssBoxShadowGeneratorIcon, Page: CssBoxShadowGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Contrast Checker', description: 'Check the contrast ratio of two colors for accessibility.', path: '/color-contrast-checker', Icon: ColorContrastCheckerIcon, Page: ColorContrastCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Regex Tester', description: 'Test regular expressions against a string.', path: '/regex-tester', Icon: RegexTesterIcon, Page: RegexTesterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Entity Encoder/Decoder', description: 'Convert characters to and from HTML entities.', path: '/html-entity-encoder-decoder', Icon: HtmlEntityEncoderDecoderIcon, Page: HtmlEntityEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Tag Stripper', description: 'Remove all HTML tags from a block of text.', path: '/html-tag-stripper', Icon: HtmlTagStripperIcon, Page: HtmlTagStripperPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to XML Converter', description: 'Convert JSON data to XML format.', path: '/json-to-xml', Icon: JsonToXmlConverterIcon, Page: JsonToXmlConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML to JSON Converter', description: 'Convert XML data to JSON format.', path: '/xml-to-json', Icon: XmlToJsonConverterIcon, Page: XmlToJsonConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'URL Parser', description: 'Parse a URL into its components (protocol, host, path, etc.).', path: '/url-parser', Icon: UrlParserIcon, Page: UrlParserPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JS Minifier', description: 'Minify JavaScript code to reduce its size.', path: '/js-minifier', Icon: JsMinifierIcon, Page: JsMinifierPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Gradient Generator', description: 'Visually generate CSS for linear gradients.', path: '/css-gradient-generator', Icon: CssGradientGeneratorIcon, Page: CssGradientGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Decimal to Binary Converter', description: 'Convert decimal numbers to binary.', path: '/decimal-to-binary', Icon: DecimalToBinaryConverterIcon, Page: DecimalToBinaryConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Binary to Decimal Converter', description: 'Convert binary numbers to decimal.', path: '/binary-to-decimal', Icon: BinaryToDecimalConverterIcon, Page: BinaryToDecimalConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: '.htaccess Redirect Generator', description: 'Generate .htaccess redirect rules.', path: '/htaccess-redirect-generator', Icon: HtaccessRedirectGeneratorIcon, Page: HtaccessRedirectGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: '.htaccess Auth Generator', description: 'Generate .htaccess authentication files.', path: '/htaccess-auth-generator', Icon: HtaccessAuthGeneratorIcon, Page: HtaccessAuthGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML Formatter', description: 'Format and beautify XML data for readability.', path: '/xml-formatter', Icon: XmlFormatterIcon, Page: XmlFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'YAML to JSON Converter', description: 'Convert YAML data to JSON format.', path: '/yaml-to-json', Icon: YamlToJsonConverterIcon, Page: YamlToJsonConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Base64 Image Size Calculator', description: 'Calculate the size of a Base64 encoded image.', path: '/base64-image-size-calculator', Icon: Base64ImageSizeCalculatorIcon, Page: Base64ImageSizeCalculatorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Simple SVG Editor', description: 'Edit and preview SVG code in real-time.', path: '/svg-editor', Icon: SvgEditorIcon, Page: SvgEditorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML to Markdown Converter', description: 'Convert HTML to Markdown.', path: '/html-to-markdown', Icon: HtmlToMarkdownConverterIcon, Page: HtmlToMarkdownConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Markdown to HTML Renderer', description: 'Render Markdown to HTML.', path: '/markdown-to-html', Icon: MarkdownToHtmlRendererIcon, Page: MarkdownToHtmlRendererPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Password Strength Checker', description: 'Check the strength of a password.', path: '/password-strength-checker', Icon: PasswordStrengthCheckerIcon, Page: PasswordStrengthCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Prefixer', description: 'Add vendor prefixes to CSS properties.', path: '/css-prefixer', Icon: CssPrefixerIcon, Page: CssPrefixerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'API Tester (Postman-like)', description: 'Test API endpoints directly in your browser.', path: '/api-tester', Icon: ApiTesterIcon, Page: ApiTesterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'WebP Support Detection', description: 'Check if your browser supports the WebP image format.', path: '/webp-detection', Icon: WebpDetectionIcon, Page: WebpDetectionPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Grid Playground', description: 'Visually experiment with CSS Grid layouts.', path: '/css-grid-playground', Icon: CssGridPlaygroundIcon, Page: CssGridPlaygroundPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Flexbox Playground', description: 'Visually experiment with CSS Flexbox layouts.', path: '/css-flexbox-playground', Icon: CssFlexboxPlaygroundIcon, Page: CssFlexboxPlaygroundPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to PHP Array Converter', description: 'Convert JSON to a PHP array.', path: '/json-to-php-array', Icon: JsonToPhpArrayIcon, Page: JsonToPhpArrayPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to Python Dict Converter', description: 'Convert JSON to a Python dictionary.', path: '/json-to-python-dict', Icon: JsonToPythonDictIcon, Page: JsonToPythonDictPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Hex to Decimal Converter', description: 'Convert hexadecimal numbers to decimal.', path: '/hex-to-decimal', Icon: HexToDecimalConverterIcon, Page: HexToDecimalConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Random ID/Key Generator', description: 'Generate random IDs or keys of a specified length.', path: '/random-id-generator', Icon: RandomIdGeneratorIcon, Page: RandomIdGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTTP Status Code Lookup', description: 'Look up the meaning of HTTP status codes.', path: '/http-status-code-lookup', Icon: HttpStatusCodeLookupIcon, Page: HttpStatusCodeLookupPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML Validator', description: 'Validate XML data to ensure it is well-formed.', path: '/xml-validator', Icon: XmlValidatorIcon, Page: XmlValidatorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Font Stack Generator', description: 'Generate common CSS font stacks.', path: '/font-stack-generator', Icon: FontStackGeneratorIcon, Page: FontStackGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML5 Boilerplate Generator', description: 'Generate a basic HTML5 boilerplate.', path: '/html-boilerplate-generator', Icon: HtmlBoilerplateGeneratorIcon, Page: HtmlBoilerplateGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to SQL Insert', description: 'Convert JSON objects to SQL INSERT statements.', path: '/json-to-sql-insert', Icon: JsonToSqlInsertIcon, Page: JsonToSqlInsertPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Array Shuffler', description: 'Randomly shuffle the elements of a JSON array.', path: '/json-array-shuffler', Icon: JsonArrayShufflerIcon, Page: JsonArrayShufflerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Local Storage Viewer', description: 'View and manage your browser\'s local storage.', path: '/local-storage-viewer', Icon: LocalStorageViewerIcon, Page: LocalStorageViewerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Code Snippet Runner', description: 'Run HTML, CSS, and JS code snippets in the browser.', path: '/code-snippet-runner', Icon: CodeSnippetRunnerIcon, Page: CodeSnippetRunnerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Favicon Extractor', description: 'Extract the favicon from a website.', path: '/favicon-extractor', Icon: FaviconExtractorIcon, Page: FaviconExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Filter Generator', description: 'Visually generate CSS filter properties.', path: '/css-filter-generator', Icon: CssFilterGeneratorIcon, Page: CssFilterGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Picker from Screen', description: 'Pick a color from anywhere on your screen.', path: '/color-picker-from-screen', Icon: ColorPickerFromScreenIcon, Page: ColorPickerFromScreenPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSV Viewer', description: 'View CSV data in a table format.', path: '/csv-viewer', Icon: CsvViewerIcon, Page: CsvViewerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
];

export const TOOLS: Tool[] = [
    ...imageTools,
    ...textListTools,
    ...pdfTools,
    ...fileConverterTools,
    ...calculatorTools,
    ...devTools,
];

export const POPULAR_PATHS = [
    '/word-counter',
    '/image-resizer',
    '/json-formatter',
    '/qr-code-generator',
    '/password-generator',
    '/image-converter',
    '/case-converter-all',
    '/remove-duplicate-lines',
    '/timestamp-converter',
    '/url-encoder-decoder',
    '/merge-pdf',
    '/split-pdf',
];
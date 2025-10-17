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

// Text & List Tools
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import CaseConverterPage from '../pages/CaseConverterPage';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import WordCounterPage from '../pages/WordCounterPage';
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
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';
import NumberPadGeneratorPage from '../pages/NumberPadGeneratorPage';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';
import NumberListSorterPage from '../pages/NumberListSorterPage';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';
import OddEvenNumberFilterPage from '../pages/OddEvenNumberFilterPage';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';
import { ListRandomizerIcon } from '../components/icons/ListRandomizerIcon';
import ListRandomizerPage from '../pages/ListRandomizerPage';

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
import { PdfAnnotationCreatorIcon } from '../components/icons/PdfAnnotationCreatorIcon';
import PdfAnnotationCreatorPage from '../pages/PdfAnnotationCreatorPage';

// File Converters & Utilities
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';
import DocxToPdfPage from '../pages/DocxToPdfPage';
import { PdfToDocxIcon } from '../components/icons/PdfToDocxIcon';
import PdfToDocxPage from '../pages/PdfToDocxPage';
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
import { RandomCoinFlipIcon } from '../components/icons/RandomCoinFlipIcon';
import RandomCoinFlipPage from '../pages/RandomCoinFlipPage';
import { RandomDiceRollIcon } from '../components/icons/RandomDiceRollIcon';
import RandomDiceRollPage from '../pages/RandomDiceRollPage';

// Web & Developer Tools
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
import TimestampConverterPage from '../pages/TimestampConverterPage';
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
import { BaseConversionIcon } from '../components/icons/BaseConversionIcon';
import BaseConversionPage from '../pages/BaseConversionPage';
import { ScientificNotationIcon } from '../components/icons/ScientificNotationIcon';
import ScientificNotationPage from '../pages/ScientificNotationPage';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';
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

export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Resizer', description: 'Resize images to specific dimensions or by percentage.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-purple-500', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: 'border-purple-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Compressor (Bulk)', description: 'Compress multiple images to reduce file size.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image to Base64 (Bulk)', description: 'Encode multiple images to Base64 strings.', path: '/image-to-base64', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: 'border-yellow-600', category: 'Image Tools', isPremium: true },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: 'border-gray-500', category: 'Image Tools', isPremium: true },
  { name: 'Bulk JPG to PNG Converter', description: 'Convert multiple JPGs to PNGs at once.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: 'border-yellow-400', category: 'Image Tools', isPremium: true },
  { name: 'Bulk PNG to JPG Converter', description: 'Convert multiple PNGs to JPGs at once.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: 'border-yellow-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Cropper', description: 'Crop images to a specific area.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-rose-500', category: 'Image Tools' },
  { name: 'Image Watermark', description: 'Add a watermark image to your picture.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-rose-400', category: 'Image Tools'},
  { name: 'Image Rotator', description: 'Rotate an image by any angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your image.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Apply a vintage sepia tone to your image.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-amber-500', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Sharpen the details in your image.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-sky-500', category: 'Image Tools' },
  { name: 'Image Invert Colors', description: 'Invert the colors of your image.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-slate-500', category: 'Image Tools' },
  { name: 'Image Opacity Adjuster', description: 'Change the transparency of your image.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL values of your image.', path: '/image-hue-saturation-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: 'border-pink-400', category: 'Image Tools' },
  { name: 'Image Flipper', description: 'Flip an image horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: 'border-green-400', category: 'Image Tools' },
  { name: 'Image to ASCII Art', description: 'Convert your image into text-based ASCII art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: 'border-lime-500', category: 'Image Tools' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of your image.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: 'border-neutral-500', category: 'Image Tools' },
  { name: 'Color Palette Extractor', description: 'Extract a color palette from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-emerald-500', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick colors from an image and get their hex codes.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-red-400', category: 'Image Tools' },
  { name: 'Add Border to Image', description: 'Add a colored border to your image.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: 'border-stone-500', category: 'Image Tools' },
  { name: 'Add Rounded Corners', description: 'Apply rounded corners to your image.', path: '/add-rounded-corners', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: 'border-violet-500', category: 'Image Tools' },
  { name: 'Image Collage Maker (2x2)', description: 'Create a simple 2x2 photo collage.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: 'border-orange-400', category: 'Image Tools' },
  { name: 'Image to Data URL', description: 'Convert an image to a Data URL string.', path: '/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: 'border-indigo-400', category: 'Image Tools' },
  { name: 'Image DPI Changer (JPG only)', description: 'Change the DPI metadata of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: 'border-cyan-600', category: 'Image Tools' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your photos.', path: '/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: 'border-teal-400', category: 'Image Tools' },
  { name: 'Image Text Overlay', description: 'Add text over your images.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: 'border-blue-400', category: 'Image Tools' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG image has transparency.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: 'border-slate-400', category: 'Image Tools' },
  { name: 'Image Pixelate Filter', description: 'Pixelate an image to create a retro effect.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: 'border-gray-600', category: 'Image Tools' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: 'border-cyan-800', category: 'Image Tools' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a static GIF.', path: '/image-to-gif', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: 'border-pink-600', category: 'Image Tools' },
  { name: 'Image Mirror Effect', description: 'Create a symmetrical mirror effect.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: 'border-blue-300', category: 'Image Tools' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew an image horizontally or vertically.', path: '/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: 'border-indigo-600', category: 'Image Tools' },
  { name: 'Image Tint Adjuster', description: 'Add a color tint to your image.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: 'border-rose-300', category: 'Image Tools' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the brightness of your image.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Threshold Filter', description: 'Create a black and white image based on a luminance threshold.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: 'border-gray-800', category: 'Image Tools' },
  { name: 'Image Dithering Effect', description: 'Apply a dithering effect for a retro look.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'CSS Background Generator', description: 'Generate CSS code for a background image.', path: '/image-to-css-background', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: 'border-blue-600', category: 'Image Tools' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from your images.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: 'border-red-700', category: 'Image Tools' },
  { name: 'Image Dimension Checker', description: 'Quickly find the dimensions of your image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: 'border-green-700', category: 'Image Tools' },
  { name: 'Image Watermark Positioner', description: 'Precisely position your watermark on an image.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, borderColor: 'border-rose-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas without scaling the image.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, borderColor: 'border-purple-300', category: 'Image Tools', isPremium: true },
  { name: 'Image Hue Shifter', description: 'Rotate the hue of your image.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, borderColor: 'border-pink-500', category: 'Image Tools' },
  { name: 'Image Noise Generator', description: 'Add noise or grain to your images.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, borderColor: 'border-gray-400', category: 'Image Tools', isPremium: true },
  { name: 'Base64 to Image', description: 'Decode a Base64 string back into an image.', path: '/base64-to-image-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: 'border-blue-200', category: 'Image Tools' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, borderColor: 'border-fuchsia-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to your image.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, borderColor: 'border-gray-300', category: 'Image Tools' },
  { name: 'Adjustable Black & White', description: 'Convert an image to black and white with adjustable intensity.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, borderColor: 'border-black', category: 'Image Tools' },
  { name: 'Image Tiling Previewer', description: 'See how your image looks as a tiled background.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Color Replacer', description: 'Replace a specific color in an image with another.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, borderColor: 'border-red-300', category: 'Image Tools' },
  { name: 'Image Reflection Generator', description: 'Create a reflection of your image.', path: '/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, borderColor: 'border-blue-300', category: 'Image Tools', isPremium: true },
  { name: 'Image Layer Merger', description: 'Merge two images into one.', path: '/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image Opacity Slider', description: 'Adjust image opacity with a slider.', path: '/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, borderColor: 'border-gray-400', category: 'Image Tools', isPremium: true },
  { name: 'Crop to Aspect Ratio Preset', description: 'Crop images to standard aspect ratios.', path: '/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, borderColor: 'border-rose-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Metadata Editor', description: 'Edit EXIF and other metadata of your images.', path: '/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, borderColor: 'border-slate-600', category: 'Image Tools', isPremium: true },
  { name: 'Download Button Generator', description: 'Create an HTML download button for an image.', path: '/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, borderColor: 'border-green-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Zoom Previewer', description: 'Zoom into your image to see details.', path: '/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, borderColor: 'border-blue-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Header Info Viewer', description: 'View header information of image files.', path: '/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, borderColor: 'border-gray-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, borderColor: 'border-indigo-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Color Palette Saver', description: 'Save the color palette from an image.', path: '/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, borderColor: 'border-emerald-700', category: 'Image Tools', isPremium: true },

  // Text & List Tools
  { name: 'Case Converter', description: 'Change text case to uppercase, lowercase, etc.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove line breaks from text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-400', category: 'Text & List Tools' },
  { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/text-to-slug-converter', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-indigo-400', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-gray-400', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomize the order of lines in a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-purple-400', category: 'Text & List Tools' },
  { name: 'Reverse Text Generator', description: 'Reverse the characters in your text.', path: '/reverse-text-generator', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-pink-400', category: 'Text & List Tools' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text alphabetically.', path: '/sort-lines-alphabetically', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add text to the beginning or end of each line.', path: '/add-prefix-suffix', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-teal-400', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Remove all empty lines from text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Analyze the keyword density of your text.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-orange-500', category: 'Text & List Tools' },
  { name: 'Text to Binary Converter', description: 'Convert text to binary code.', path: '/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Binary to Text Converter', description: 'Convert binary code back to text.', path: '/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal code.', path: '/text-to-hex', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: 'border-slate-600', category: 'Text & List Tools' },
  { name: 'Hex to Text Converter', description: 'Convert hexadecimal code back to text.', path: '/hex-to-text', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: 'border-slate-500', category: 'Text & List Tools' },
  { name: 'Text to Octal Converter', description: 'Convert text to octal code.', path: '/text-to-octal', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: 'border-neutral-600', category: 'Text & List Tools' },
  { name: 'Octal to Text Converter', description: 'Convert octal code back to text.', path: '/octal-to-text', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: 'border-neutral-500', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces and trim text.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-stone-500', category: 'Text & List Tools' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: 'border-red-600', category: 'Text & List Tools', isPremium: true },
  { name: 'Sentence Case Converter', description: 'Convert text to proper sentence case.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Remove Non-Alphanumeric Chars', description: 'Strip out symbols and special characters from text.', path: '/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: 'border-zinc-500', category: 'Text & List Tools' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: 'border-amber-500', category: 'Text & List Tools' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists and find the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-cyan-700', category: 'Text & List Tools' },
  { name: 'List Intersector', description: 'Find common items between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: 'border-green-700', category: 'Text & List Tools' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: 'border-violet-500', category: 'Text & List Tools' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of each line.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: 'border-violet-400', category: 'Text & List Tools' },
  { name: 'Text Splitter', description: 'Split text into chunks of a specified size.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: 'border-orange-400', category: 'Text & List Tools' },
  { name: 'Text Repeater', description: 'Repeat a string of text multiple times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: 'border-emerald-600', category: 'Text & List Tools' },
  { name: 'Remove Numbers from Text', description: 'Remove all numbers from your text.', path: '/remove-numbers', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: 'border-lime-600', category: 'Text & List Tools' },
  { name: 'Remove Letters from Text', description: 'Remove all letters from your text.', path: '/remove-letters', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: 'border-lime-700', category: 'Text & List Tools' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Apply the Rot13 cipher to your text.', path: '/rot13-cipher', Icon: Rot13Icon, Page: Rot13Page, borderColor: 'border-fuchsia-600', category: 'Text & List Tools' },
  { name: 'Custom Delimiter Converter', description: 'Convert a list from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from A to Z.', path: '/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a start, end, and step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: 'border-gray-800', category: 'Text & List Tools' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode or decode text with custom character mappings.', path: '/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: 'border-rose-500', category: 'Text & List Tools', isPremium: true },
  { name: 'Line Counter', description: 'Count the number of lines in your text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Vigenere Cipher', description: 'Encrypt or decrypt text using the Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Caesar Cipher', description: 'Encrypt or decrypt text using the Caesar cipher.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Text to ASCII Art', description: 'Convert text to simple ASCII art.', path: '/text-to-ascii-art', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from your text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Invisible Character Viewer', description: 'Detect and view invisible characters in your text.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character in your text.', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: 'border-blue-300', category: 'Text & List Tools' },
  { name: 'String Concatenator', description: 'Join multiple lines of text into a single line.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: 'border-sky-600', category: 'Text & List Tools' },
  { name: 'Text Difference Checker', description: 'Compare two texts and highlight the differences.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: 'border-cyan-800', category: 'Text & List Tools' },
  { name: 'Number Pad Generator', description: 'Generate a list of numbers with zero-padding.', path: '/number-pad-generator', Icon: NumberPadGeneratorIcon, Page: NumberPadGeneratorPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Sort Numbers List', description: 'Sort a list of numbers in ascending or descending order.', path: '/number-list-sorter', Icon: NumberListSorterIcon, Page: NumberListSorterPage, borderColor: 'border-yellow-600', category: 'Text & List Tools' },
  { name: 'Odd/Even Number Filter', description: 'Filter a list to keep only odd or even numbers.', path: '/odd-even-number-filter', Icon: OddEvenNumberFilterIcon, Page: OddEvenNumberFilterPage, borderColor: 'border-lime-500', category: 'Text & List Tools' },
  { name: 'Word Count & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-count-and-character-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'All Case Converter', description: 'Change text case to uppercase, lowercase, etc.', path: '/case-converter-all', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Remove Duplicate Lines', description: 'Remove duplicate lines from a list.', path: '/remove-duplicate-lines', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Character Set Converter', description: 'Convert text between different character sets (e.g., UTF-8, ISO-8859-1).', path: '/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, borderColor: 'border-indigo-500', category: 'Text & List Tools', isPremium: true },
  { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, borderColor: 'border-blue-700', category: 'Text & List Tools', isPremium: true },
  { name: 'List Randomizer', description: 'Pick a random item from a list.', path: '/list-randomizer', Icon: ListRandomizerIcon, Page: ListRandomizerPage, borderColor: 'border-fuchsia-500', category: 'Text & List Tools' },

  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Remove password and restrictions from a PDF.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-800', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-400', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG Converter', description: 'Convert each page of a PDF to a JPG image.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG Converter', description: 'Convert each page of a PDF to a PNG image.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF Converter', description: 'Convert one or more JPG images to a PDF.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF Converter', description: 'Convert one or more PNG images to a PDF.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'PDF to Text Extractor', description: 'Extract text content from a PDF file.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to each page of a PDF.', path: '/pdf-watermark-adder-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to each page of a PDF.', path: '/pdf-watermark-adder-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Encrypt PDF', description: 'Add a password to protect your PDF file.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Reorder PDF Pages', description: 'Visually reorder the pages of a PDF file.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Deleter', description: 'Remove specific pages from a PDF file.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Cropper', description: 'Crop the pages of a PDF file.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Viewer', description: 'A simple in-browser PDF viewer.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to scalable SVG images.', path: '/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF file.', path: '/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Document Cropper', description: 'Crop PDF documents.', path: '/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Annotation Viewer', description: 'View annotations and comments in a PDF.', path: '/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Size Checker', description: 'Check the size of pages in a PDF.', path: '/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF.', path: '/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages of a PDF.', path: '/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF.', path: '/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Inserter', description: 'Insert pages into a PDF.', path: '/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF.', path: '/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Content Cleaner', description: 'Clean content from a PDF.', path: '/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Counter (Range)', description: 'Count pages within a specific range of a PDF.', path: '/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Number Format Changer', description: 'Change the format of page numbers in a PDF.', path: '/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Text Replacer', description: 'Find and replace text in a PDF.', path: '/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to HTML Converter', description: 'Convert PDF files to HTML.', path: '/pdf-to-html-converter', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Security Level Checker', description: 'Check the security level of a PDF.', path: '/pdf-security-level-checker', Icon: PdfSecurityLevelCheckerIcon, Page: PdfSecurityLevelCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF file for size.', path: '/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Annotation Creator', description: 'Add annotations to a PDF.', path: '/pdf-annotation-creator', Icon: PdfAnnotationCreatorIcon, Page: PdfAnnotationCreatorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },

  // File Converters & Utilities
  { name: 'DOCX to PDF Converter', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'PDF to DOCX Converter', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel.', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'TSV to CSV Converter', description: 'Convert tab-separated values to comma-separated.', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Merger', description: 'Merge multiple files into one.', path: '/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of a file.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'DOCX to Text Extractor', description: 'Extract raw text from a DOCX file.', path: '/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'PPTX to Text Extractor', description: 'Extract text from PowerPoint files.', path: '/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Size Converter', description: 'Convert between different file size units.', path: '/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Type Checker', description: 'Check the file type based on its contents.', path: '/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages for various scenarios.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Date Difference Calculator', description: 'Calculate the duration between two dates.', path: '/date-difference-calculator', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-sky-500', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Calculate age from a date of birth.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-rose-500', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Convert time between different time zones.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'Convert between various units of measurement.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-green-500', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Calculate monthly loan payments.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-emerald-500', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax and total price.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-amber-500', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate the tip for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-yellow-500', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate a random number in a given range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios for images and videos.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-500', category: 'Calculators & Time Tools' },
  { name: 'Scientific Calculator', description: 'An advanced calculator for scientific calculations.', path: '/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Compound Interest Calculator', description: 'Calculate compound interest over time.', path: '/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Countdown Timer', description: 'A simple countdown timer.', path: '/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Stopwatch', description: 'A simple stopwatch tool.', path: '/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Date Format Converter', description: 'Convert dates between different formats.', path: '/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/day-of-the-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Time Adder / Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Business Day Calculator', description: 'Calculate business days between two dates.', path: '/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mean, Median, & Mode Calculator', description: 'Calculate the mean, median, and mode of a set of numbers.', path: '/mean-median-mode-calculator', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Standard Deviation Calculator', description: 'Calculate the standard deviation of a set of numbers.', path: '/standard-deviation-calculator', Icon: StandardDeviationIcon, Page: StandardDeviationPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Z-Score Calculator', description: 'Calculate the z-score of a data point.', path: '/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations.', path: '/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Pythagorean Theorem Solver', description: 'Solve for the hypotenuse of a right triangle.', path: '/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Area Calculator', description: 'Calculate the area of various shapes.', path: '/area-calculator', Icon: AreaCalculatorIcon, Page: AreaCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Volume Calculator', description: 'Calculate the volume of various 3D shapes.', path: '/volume-calculator', Icon: VolumeCalculatorIcon, Page: VolumeCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Fraction to Decimal', description: 'Convert fractions to decimals.', path: '/fraction-to-decimal', Icon: FractionDecimalConverterIcon, Page: FractionDecimalConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Decimal to Fraction', description: 'Convert decimals to fractions.', path: '/decimal-to-fraction', Icon: DecimalFractionConverterIcon, Page: DecimalFractionConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Binary Calculator', description: 'A calculator for binary numbers.', path: '/binary-calculator', Icon: BinaryCalculatorIcon, Page: BinaryCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Octal Calculator', description: 'A calculator for octal numbers.', path: '/octal-calculator', Icon: OctalCalculatorIcon, Page: OctalCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Hexadecimal Calculator', description: 'A calculator for hexadecimal numbers.', path: '/hexadecimal-calculator', Icon: HexadecimalCalculatorIcon, Page: HexadecimalCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'World Clock', description: 'View the time in different cities around the world.', path: '/world-clock', Icon: WorldClockIcon, Page: WorldClockPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Date to Day of Year', description: 'Find the day number of the year for a given date.', path: '/date-to-day-of-year', Icon: DateToDayOfYearIcon, Page: DateToDayOfYearPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Random Date Generator', description: 'Generate a random date within a given range.', path: '/random-date-generator', Icon: RandomDateGeneratorIcon, Page: RandomDateGeneratorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mortgage Refinance Calculator', description: 'Calculate if refinancing your mortgage is a good idea.', path: '/mortgage-refinance-calculator', Icon: MortgageRefinanceCalculatorIcon, Page: MortgageRefinanceCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Retirement Savings Calculator', description: 'Calculate your retirement savings.', path: '/retirement-savings-calculator', Icon: RetirementSavingsCalculatorIcon, Page: RetirementSavingsCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Loan Amortization Schedule', description: 'Generate a loan amortization schedule.', path: '/loan-amortization-schedule', Icon: LoanAmortizationScheduleIcon, Page: LoanAmortizationSchedulePage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/currency-converter', Icon: CurrencyConverterIcon, Page: CurrencyConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Time Duration Formatter', description: 'Format a duration in seconds to HH:MM:SS.', path: '/time-duration-formatter', Icon: TimeDurationFormatterIcon, Page: TimeDurationFormatterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/square-root-calculator', Icon: SquareRootCalculatorIcon, Page: SquareRootCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/factorial-calculator', Icon: FactorialCalculatorIcon, Page: FactorialCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Random Coin Flip', description: 'Flip a coin to get heads or tails.', path: '/random-coin-flip', Icon: RandomCoinFlipIcon, Page: RandomCoinFlipPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Random Dice Roll', description: 'Roll a six-sided die.', path: '/random-dice-roll', Icon: RandomDiceRollIcon, Page: RandomDiceRollPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },

  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Beautify and validate your JSON data.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'Password Generator', description: 'Create secure, random passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-orange-500', category: 'Calculators & Time Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-pink-500', category: 'Web & Developer Tools' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-blue-800', category: 'Calculators & Time Tools' },
  { name: 'QR Code Generator', description: 'Create QR codes from text or URLs.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from YouTube page source.', path: '/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: 'border-red-500', category: 'Web & Developer Tools' },
  { name: 'Link Extractor from Text', description: 'Extract all links from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'HTML Comment Remover', description: 'Remove all comments from an HTML file.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: 'border-orange-600', category: 'Web & Developer Tools' },
  { name: 'CSS Comment Remover', description: 'Remove all comments from a CSS file.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'JS Comment Stripper', description: 'Remove all comments from a JavaScript file.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: 'border-yellow-500', category: 'Web & Developer Tools' },
  { name: 'HTML Prettifier', description: 'Format and beautify your HTML code.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: 'border-orange-700', category: 'Web & Developer Tools' },
  { name: 'CSS Prettifier', description: 'Format and beautify your CSS code.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: 'border-blue-400', category: 'Web & Developer Tools' },
  { name: 'JS Beautifier', description: 'Format and beautify your JavaScript code.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: 'border-yellow-600', category: 'Web & Developer Tools' },
  { name: 'Base Converter', description: 'Convert numbers between binary, octal, decimal, and hex.', path: '/base-converter', Icon: BaseConversionIcon, Page: BaseConversionPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Scientific Notation Converter', description: 'Convert numbers to and from scientific notation.', path: '/scientific-notation-converter', Icon: ScientificNotationIcon, Page: ScientificNotationPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON Data Extractor', description: 'Extract data from a JSON object using a path.', path: '/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools', isPremium: true },
  { name: 'Plain Text to HTML', description: 'Convert plain text to HTML paragraphs and line breaks.', path: '/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, borderColor: 'border-emerald-500', category: 'Web & Developer Tools' },
  { name: 'HTML to Plain Text', description: 'Strip all HTML tags to get plain text.', path: '/html-to-plain-text', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, borderColor: 'border-emerald-600', category: 'Web & Developer Tools' },
  { name: 'JSON Validator', description: 'Validate the syntax of your JSON data.', path: '/json-validator', Icon: JsonValidatorIcon, Page: JsonValidatorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'Base64 Text Encoder/Decoder', description: 'Encode and decode text using Base64.', path: '/base64-text-encoder-decoder', Icon: Base64TextEncoderDecoderIcon, Page: Base64TextEncoderDecoderPage, borderColor: 'border-gray-500', category: 'Web & Developer Tools' },
  { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash from a text string.', path: '/md5-hash-generator', Icon: Md5HashGeneratorIcon, Page: Md5HashGeneratorPage, borderColor: 'border-red-500', category: 'Web & Developer Tools' },
  { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash from a text string.', path: '/sha256-hash-generator', Icon: Sha256HashGeneratorIcon, Page: Sha256HashGeneratorPage, borderColor: 'border-red-600', category: 'Web & Developer Tools' },
  { name: 'JSON Minifier', description: 'Compress JSON data by removing whitespace.', path: '/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
];

export const POPULAR_PATHS = [
  '/image-resizer',
  '/image-converter',
  '/qr-code-generator',
  '/word-counter',
  '/duplicate-line-remover',
  '/json-formatter',
  '/password-generator',
  '/timestamp-converter',
  '/percentage-calculator',
  '/url-encoder-decoder',
  '/case-converter',
  '/merge-pdf',
];
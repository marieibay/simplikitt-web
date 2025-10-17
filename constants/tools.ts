import { Tool } from '../types';

// Image Tool Icons
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
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
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
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
import { CustomDelimiterConverterIcon } from '../components/icons/CustomDelimiterConverterIcon';
import { AlphabeticalLetterGeneratorIcon } from '../components/icons/AlphabeticalLetterGeneratorIcon';
import { NumberListGeneratorIcon } from '../components/icons/NumberListGeneratorIcon';
import { LineCounterIcon } from '../components/icons/LineCounterIcon';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';
import { EmojiStripperIcon } from '../components/icons/EmojiStripperIcon';
import { InvisibleCharacterViewerIcon } from '../components/icons/InvisibleCharacterViewerIcon';
import { TextCaseFlipperIcon } from '../components/icons/TextCaseFlipperIcon';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';

// PDF & Document Tool Icons
import { MergePdfIcon } from '../components/icons/MergePdfIcon';
import { SplitPdfIcon } from '../components/icons/SplitPdfIcon';
import { PdfPageCounterIcon } from '../components/icons/PdfPageCounterIcon';
import { PdfPasswordRemoverIcon } from '../components/icons/PdfPasswordRemoverIcon';
import { PdfMetadataViewerIcon } from '../components/icons/PdfMetadataViewerIcon';
import { PdfToJpgIcon } from '../components/icons/PdfToJpgIcon';
import { PdfToPngIcon } from '../components/icons/PdfToPngIcon';
import { JpgToPdfIcon } from '../components/icons/JpgToPdfIcon';
import { PngToPdfIcon } from '../components/icons/PngToPdfIcon';
import { PdfToTextExtractorIcon } from '../components/icons/PdfToTextExtractorIcon';
import { PdfWatermarkAdderTextIcon } from '../components/icons/PdfWatermarkAdderTextIcon';
import { PdfWatermarkAdderImageIcon } from '../components/icons/PdfWatermarkAdderImageIcon';
import { PdfEncryptorIcon } from '../components/icons/PdfEncryptorIcon';
import { ReorderPdfPagesIcon } from '../components/icons/ReorderPdfPagesIcon';
import { RotateAllPdfPagesIcon } from '../components/icons/RotateAllPdfPagesIcon';
import { PdfPageDeleterIcon } from '../components/icons/PdfPageDeleterIcon';
import { PdfPageCropperIcon } from '../components/icons/PdfPageCropperIcon';
import { PdfViewerIcon } from '../components/icons/PdfViewerIcon';
import { PdfToSvgIcon } from '../components/icons/PdfToSvgIcon';
import { PdfPageNumberRemoverIcon } from '../components/icons/PdfPageNumberRemoverIcon';
import { PdfDocumentCropperIcon } from '../components/icons/PdfDocumentCropperIcon';
import { AddTextSignatureToPdfIcon } from '../components/icons/AddTextSignatureToPdfIcon';
import { PdfAnnotationViewerIcon } from '../components/icons/PdfAnnotationViewerIcon';
import { PdfPageSizeCheckerIcon } from '../components/icons/PdfPageSizeCheckerIcon';
import { PdfColorInverterIcon } from '../components/icons/PdfColorInverterIcon';
import { PdfFileSizeCheckerIcon } from '../components/icons/PdfFileSizeCheckerIcon';
import { PdfCompressionRatioCheckerIcon } from '../components/icons/PdfCompressionRatioCheckerIcon';
import { PdfMetadataEditorIcon } from '../components/icons/PdfMetadataEditorIcon';
import { PdfGrayscaleConverterIcon } from '../components/icons/PdfGrayscaleConverterIcon';
import { PdfSecurityCheckerIcon } from '../components/icons/PdfSecurityCheckerIcon';
import { PdfToDocxIcon } from '../components/icons/PdfToDocxIcon';
import { PdfAnnotationCreatorIcon } from '../components/icons/PdfAnnotationCreatorIcon';
import { PdfPageRotatorIndividualIcon } from '../components/icons/PdfPageRotatorIndividualIcon';
import { PdfPageExtractorIcon } from '../components/icons/PdfPageExtractorIcon';
import { PdfPageInserterIcon } from '../components/icons/PdfPageInserterIcon';
import { PdfPageDuplicatorIcon } from '../components/icons/PdfPageDuplicatorIcon';
import { PdfContentCleanerIcon } from '../components/icons/PdfContentCleanerIcon';
import { PdfFormFieldViewerIcon } from '../components/icons/PdfFormFieldViewerIcon';
import { PdfHeaderFooterRemoverIcon } from '../components/icons/PdfHeaderFooterRemoverIcon';
import { PdfWatermarkPositionEditorIcon } from '../components/icons/PdfWatermarkPositionEditorIcon';
import { PdfPageCounterRangeIcon } from '../components/icons/PdfPageCounterRangeIcon';
import { PdfPageNumberFormatChangerIcon } from '../components/icons/PdfPageNumberFormatChangerIcon';
import { PdfTextReplacerIcon } from '../components/icons/PdfTextReplacerIcon';
import { PdfToHtmlConverterIcon } from '../components/icons/PdfToHtmlConverterIcon';
import { PdfSecurityLevelCheckerIcon } from '../components/icons/PdfSecurityLevelCheckerIcon';
import { PdfFileOptimizerIcon } from '../components/icons/PdfFileOptimizerIcon';

// File Converters & Utilities Icons
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';
import { ExcelToCsvIcon } from '../components/icons/ExcelToCsvIcon';
import { CsvToExcelIcon } from '../components/icons/CsvToExcelIcon';
import { TsvToCsvIcon } from '../components/icons/TsvToCsvIcon';
import { FileMergerIcon } from '../components/icons/FileMergerIcon';
import { BatchFileRenamerIcon } from '../components/icons/BatchFileRenamerIcon';
import { FileChecksumCalculatorIcon } from '../components/icons/FileChecksumCalculatorIcon';
import { FileExtensionChangerIcon } from '../components/icons/FileExtensionChangerIcon';
import { DocxToTextExtractorIcon } from '../components/icons/DocxToTextExtractorIcon';
import { PptxToTextExtractorIcon } from '../components/icons/PptxToTextExtractorIcon';
import { FileSizeConverterIcon } from '../components/icons/FileSizeConverterIcon';
import { CsvColumnSelectorIcon } from '../components/icons/CsvColumnSelectorIcon';
import { DocxHeaderFooterExtractorIcon } from '../components/icons/DocxHeaderFooterExtractorIcon';
import { FileTypeCheckerIcon } from '../components/icons/FileTypeCheckerIcon';

// Calculators & Time Tool Icons
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
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
import { ScientificCalculatorIcon } from '../components/icons/ScientificCalculatorIcon';
import { CompoundInterestCalculatorIcon } from '../components/icons/CompoundInterestCalculatorIcon';
import { CountdownTimerIcon } from '../components/icons/CountdownTimerIcon';
import { StopwatchIcon } from '../components/icons/StopwatchIcon';
import { DateFormatConverterIcon } from '../components/icons/DateFormatConverterIcon';
import { DayOfTheWeekCalculatorIcon } from '../components/icons/DayOfTheWeekCalculatorIcon';
import { LeapYearCheckerIcon } from '../components/icons/LeapYearCheckerIcon';
import { TimeAdderSubtracterIcon } from '../components/icons/TimeAdderSubtracterIcon';
import { BusinessDayCalculatorIcon } from '../components/icons/BusinessDayCalculatorIcon';
import { MeanMedianModeIcon } from '../components/icons/MeanMedianModeIcon';
import { StandardDeviationIcon } from '../components/icons/StandardDeviationIcon';
import { ZScoreCalculatorIcon } from '../components/icons/ZScoreCalculatorIcon';
import { QuadraticEquationSolverIcon } from '../components/icons/QuadraticEquationSolverIcon';
import { PythagoreanTheoremSolverIcon } from '../components/icons/PythagoreanTheoremSolverIcon';

// Web & Developer Tool Icons
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';
import { TextToBinaryConverterIcon } from '../components/icons/TextToBinaryConverterIcon';
import { BinaryToTextConverterIcon } from '../components/icons/BinaryToTextConverterIcon';
import { TextToHexConverterIcon } from '../components/icons/TextToHexConverterIcon';
import { HexToTextConverterIcon } from '../components/icons/HexToTextConverterIcon';
import { TextToOctalConverterIcon } from '../components/icons/TextToOctalConverterIcon';
import { OctalToTextConverterIcon } from '../components/icons/OctalToTextConverterIcon';
import { Rot13Icon } from '../components/icons/Rot13Icon';
import { TextEncoderDecoderIcon } from '../components/icons/TextEncoderDecoderIcon';
import { YouTubeExtractorIcon } from '../components/icons/YouTubeExtractorIcon';
import { LinkExtractorIcon } from '../components/icons/LinkExtractorIcon';
import { HtmlCommentRemoverIcon } from '../components/icons/HtmlCommentRemoverIcon';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';
import { VigenereCipherIcon } from '../components/icons/VigenereCipherIcon';
import { CaesarCipherIcon } from '../components/icons/CaesarCipherIcon';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';

// Image Tool Pages
import ImageConverterPage from '../pages/ImageConverterPage';
import ImageResizerPage from '../pages/ImageResizerPage';
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

// Text & List Tool Pages
import WordCounterPage from '../pages/WordCounterPage';
import CaseConverterPage from '../pages/CaseConverterPage';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
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
import CustomDelimiterConverterPage from '../pages/CustomDelimiterConverterPage';
import AlphabeticalLetterGeneratorPage from '../pages/AlphabeticalLetterGeneratorPage';
import NumberListGeneratorPage from '../pages/NumberListGeneratorPage';
import LineCounterPage from '../pages/LineCounterPage';
import TextToAsciiArtViewerPage from '../pages/TextToAsciiArtViewerPage';
import EmojiStripperPage from '../pages/EmojiStripperPage';
import InvisibleCharacterViewerPage from '../pages/InvisibleCharacterViewerPage';
import TextCaseFlipperPage from '../pages/TextCaseFlipperPage';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';

// PDF & Document Tool Pages
import MergePdfPage from '../pages/MergePdfPage';
import SplitPdfPage from '../pages/SplitPdfPage';
import PdfPageCounterPage from '../pages/PdfPageCounterPage';
import PdfPasswordRemoverPage from '../pages/PdfPasswordRemoverPage';
import PdfMetadataViewerPage from '../pages/PdfMetadataViewerPage';
import PdfToJpgPage from '../pages/PdfToJpgPage';
import PdfToPngPage from '../pages/PdfToPngPage';
import JpgToPdfPage from '../pages/JpgToPdfPage';
import PngToPdfPage from '../pages/PngToPdfPage';
import PdfToTextExtractorPage from '../pages/PdfToTextExtractorPage';
import PdfWatermarkAdderTextPage from '../pages/PdfWatermarkAdderTextPage';
import PdfWatermarkAdderImagePage from '../pages/PdfWatermarkAdderImagePage';
import PdfEncryptorPage from '../pages/PdfEncryptorPage';
import ReorderPdfPagesPage from '../pages/ReorderPdfPagesPage';
import RotateAllPdfPagesPage from '../pages/RotateAllPdfPagesPage';
import PdfPageDeleterPage from '../pages/PdfPageDeleterPage';
import PdfPageCropperPage from '../pages/PdfPageCropperPage';
import PdfViewerPage from '../pages/PdfViewerPage';
import PdfToSvgPage from '../pages/PdfToSvgPage';
import PdfPageNumberRemoverPage from '../pages/PdfPageNumberRemoverPage';
import PdfDocumentCropperPage from '../pages/PdfDocumentCropperPage';
import AddTextSignatureToPdfPage from '../pages/AddTextSignatureToPdfPage';
import PdfAnnotationViewerPage from '../pages/PdfAnnotationViewerPage';
import PdfPageSizeCheckerPage from '../pages/PdfPageSizeCheckerPage';
import PdfColorInverterPage from '../pages/PdfColorInverterPage';
import PdfFileSizeCheckerPage from '../pages/PdfFileSizeCheckerPage';
import PdfCompressionRatioCheckerPage from '../pages/PdfCompressionRatioCheckerPage';
import PdfMetadataEditorPage from '../pages/PdfMetadataEditorPage';
import PdfGrayscaleConverterPage from '../pages/PdfGrayscaleConverterPage';
import PdfSecurityCheckerPage from '../pages/PdfSecurityCheckerPage';
import PdfToDocxPage from '../pages/PdfToDocxPage';
import PdfAnnotationCreatorPage from '../pages/PdfAnnotationCreatorPage';
import PdfPageRotatorIndividualPage from '../pages/PdfPageRotatorIndividualPage';
import PdfPageExtractorPage from '../pages/PdfPageExtractorPage';
import PdfPageInserterPage from '../pages/PdfPageInserterPage';
import PdfPageDuplicatorPage from '../pages/PdfPageDuplicatorPage';
import PdfContentCleanerPage from '../pages/PdfContentCleanerPage';
import PdfFormFieldViewerPage from '../pages/PdfFormFieldViewerPage';
import PdfHeaderFooterRemoverPage from '../pages/PdfHeaderFooterRemoverPage';
import PdfWatermarkPositionEditorPage from '../pages/PdfWatermarkPositionEditorPage';
import PdfPageCounterRangePage from '../pages/PdfPageCounterRangePage';
import PdfPageNumberFormatChangerPage from '../pages/PdfPageNumberFormatChangerPage';
import PdfTextReplacerPage from '../pages/PdfTextReplacerPage';
import PdfToHtmlConverterPage from '../pages/PdfToHtmlConverterPage';
import PdfSecurityLevelCheckerPage from '../pages/PdfSecurityLevelCheckerPage';
import PdfFileOptimizerPage from '../pages/PdfFileOptimizerPage';

// File Converters & Utilities Pages
import DocxToPdfPage from '../pages/DocxToPdfPage';
import ExcelToCsvPage from '../pages/ExcelToCsvPage';
import CsvToExcelPage from '../pages/CsvToExcelPage';
import TsvToCsvPage from '../pages/TsvToCsvPage';
import FileMergerPage from '../pages/FileMergerPage';
import BatchFileRenamerPage from '../pages/BatchFileRenamerPage';
import FileChecksumCalculatorPage from '../pages/FileChecksumCalculatorPage';
import FileExtensionChangerPage from '../pages/FileExtensionChangerPage';
import DocxToTextExtractorPage from '../pages/DocxToTextExtractorPage';
import PptxToTextExtractorPage from '../pages/PptxToTextExtractorPage';
import FileSizeConverterPage from '../pages/FileSizeConverterPage';
import CsvColumnSelectorPage from '../pages/CsvColumnSelectorPage';
import DocxHeaderFooterExtractorPage from '../pages/DocxHeaderFooterExtractorPage';
import FileTypeCheckerPage from '../pages/FileTypeCheckerPage';

// Calculators & Time Tool Pages
import PercentageCalculatorPage from '../pages/PercentageCalculatorPage';
import TimestampConverterPage from '../pages/TimestampConverterPage';
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
import ScientificCalculatorPage from '../pages/ScientificCalculatorPage';
import CompoundInterestCalculatorPage from '../pages/CompoundInterestCalculatorPage';
import CountdownTimerPage from '../pages/CountdownTimerPage';
import StopwatchPage from '../pages/StopwatchPage';
import DateFormatConverterPage from '../pages/DateFormatConverterPage';
import DayOfTheWeekCalculatorPage from '../pages/DayOfTheWeekCalculatorPage';
import LeapYearCheckerPage from '../pages/LeapYearCheckerPage';
import TimeAdderSubtracterPage from '../pages/TimeAdderSubtracterPage';
import BusinessDayCalculatorPage from '../pages/BusinessDayCalculatorPage';
import MeanMedianModePage from '../pages/MeanMedianModePage';
import StandardDeviationPage from '../pages/StandardDeviationPage';
import ZScoreCalculatorPage from '../pages/ZScoreCalculatorPage';
import QuadraticEquationSolverPage from '../pages/QuadraticEquationSolverPage';
import PythagoreanTheoremSolverPage from '../pages/PythagoreanTheoremSolverPage';

// Web & Developer Tool Pages
import JsonFormatterPage from '../pages/JsonFormatterPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
import TextToBinaryConverterPage from '../pages/TextToBinaryConverterPage';
import BinaryToTextConverterPage from '../pages/BinaryToTextConverterPage';
import TextToHexConverterPage from '../pages/TextToHexConverterPage';
import HexToTextConverterPage from '../pages/HexToTextConverterPage';
import TextToOctalConverterPage from '../pages/TextToOctalConverterPage';
import OctalToTextConverterPage from '../pages/OctalToTextConverterPage';
import Rot13Page from '../pages/Rot13Page';
import TextEncoderDecoderPage from '../pages/TextEncoderDecoderPage';
import YouTubeExtractorPage from '../pages/YouTubeExtractorPage';
import LinkExtractorPage from '../pages/LinkExtractorPage';
import HtmlCommentRemoverPage from '../pages/HtmlCommentRemoverPage';
import CssCommentRemoverPage from '../pages/CssCommentRemoverPage';
import JsCommentStripperPage from '../pages/JsCommentStripperPage';
import VigenereCipherPage from '../pages/VigenereCipherPage';
import CaesarCipherPage from '../pages/CaesarCipherPage';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import JsBeautifierPage from '../pages/JsBeautifierPage';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';

export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Resizer', description: 'Resize images by pixels or percentage.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Compressor (Bulk)', description: 'Compress multiple images to reduce file size.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image to Base64 (Bulk)', description: 'Encode multiple images to Base64 strings.', path: '/image-to-base64', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Bulk JPG to PNG Converter', description: 'Convert multiple JPG images to PNG.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Bulk PNG to JPG Converter', description: 'Convert multiple PNG images to JPG.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Cropper', description: 'Crop images with a visual editor.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Watermark', description: 'Add a watermark image to your picture.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate an image by any angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to an image.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone effect to an image.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Apply a sharpen filter to an image.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Invert Colors', description: 'Invert the colors of an image.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity of an image.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL values of an image.', path: '/image-hue-saturation-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Flipper', description: 'Flip an image horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image to ASCII Art', description: 'Convert an image to ASCII art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of an image.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Color Palette Extractor', description: 'Extract a color palette from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick colors from an image.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Add Border to Image', description: 'Add a colored border to an image.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: '', category: 'Image Tools' },
  { name: 'Add Rounded Corners', description: 'Add rounded corners to an image.', path: '/add-rounded-corners-to-image', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Collage Maker (2x2)', description: 'Create a 2x2 collage from four images.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image to Data URL', description: 'Convert an image to a Data URL.', path: '/image-to-data-url-generator', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image DPI Changer (JPG only)', description: 'Change the DPI of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to images.', path: '/image-filter-preset-library', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Text Overlay', description: 'Add text over an image.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: '', category: 'Image Tools' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG has a transparent background.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Pixelate Filter', description: 'Pixelate an image.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp-converter', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a GIF.', path: '/image-to-gif-converter', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Mirror Effect', description: 'Apply a mirror effect to an image.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or warp an image.', path: '/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Tint Adjuster', description: 'Add a color tint to an image.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the brightness of an image.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Threshold Filter', description: 'Apply a black and white threshold filter.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Dithering Effect', description: 'Apply a dithering effect to an image.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: '', category: 'Image Tools' },
  { name: 'CSS Background Generator', description: 'Generate CSS background code from an image.', path: '/image-to-css-background-generator', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Metadata Remover', description: 'Remove EXIF data from images.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Dimension Checker', description: 'Check the dimensions of an image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Watermark Positioner', description: 'Position a watermark on an image.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Hue Shifter', description: 'Shift the hue of an image.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Noise Generator', description: 'Add noise to an image.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, borderColor: '', category: 'Image Tools' },
  { name: 'Base64 to Image', description: 'Decode a Base64 string to an image.', path: '/image-to-base64-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: '', category: 'Image Tools' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow to an image.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, borderColor: '', category: 'Image Tools' },
  { name: 'Adjustable Black & White', description: 'Convert an image to black and white.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Tiling Previewer', description: 'Preview how an image tiles as a background.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Color Replacer', description: 'Replace one color with another in an image.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, borderColor: '', category: 'Image Tools' },
  { name: 'Image Reflection Generator', description: 'Create a reflection effect for an image.', path: '/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Layer Merger', description: 'Merge multiple image layers.', path: '/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Opacity Slider', description: 'Adjust image opacity with a slider.', path: '/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Crop to Aspect Ratio Preset', description: 'Crop images to preset aspect ratios.', path: '/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Metadata Editor', description: 'Edit the metadata of an image.', path: '/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Download Button Generator', description: 'Generate a download button for an image.', path: '/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Zoom Previewer', description: 'Preview image zoom levels.', path: '/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Header Info Viewer', description: 'View image header information.', path: '/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, borderColor: '', category: 'Image Tools', isPremium: true },
  { name: 'Image Color Palette Saver', description: 'Save a color palette from an image.', path: '/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, borderColor: '', category: 'Image Tools', isPremium: true },

  // Text & List Tools
  { name: 'Word / Char Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, title case, etc.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove line breaks from text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text to Slug Converter', description: 'Convert text to a URL-friendly slug.', path: '/text-to-slug-converter', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomly shuffle the lines of a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Reverse Text Generator', description: 'Reverse the characters in a string.', path: '/reverse-text-generator', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text alphabetically.', path: '/sort-lines-alphabetically', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add a prefix or suffix to each line.', path: '/add-prefix-suffix-to-lines', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Remove all empty lines from text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Analyze the keyword density of text.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces and tabs from text.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Sentence Case Converter', description: 'Convert text to sentence case.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Remove Non-Alphanumeric Chars', description: 'Remove all non-alphanumeric characters.', path: '/remove-non-alphanumeric-chars', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists and find the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'List Intersector', description: 'Find the common items between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of each line.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text Splitter', description: 'Split text into chunks of a specified size.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text Repeater', description: 'Repeat a string of text a specified number of times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Remove Numbers from Text', description: 'Remove all numbers from text.', path: '/remove-numbers-from-text', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Remove Letters from Text', description: 'Remove all letters from text.', path: '/remove-letters-from-text', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Custom Delimiter Converter', description: 'Convert text from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters in alphabetical order.', path: '/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a start, end, and step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Line Counter', description: 'Count the number of lines in a text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text to ASCII Art', description: 'Convert text to ASCII art.', path: '/text-to-ascii-art-viewer', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Emoji Stripper', description: 'Remove emojis from text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Invisible Character Viewer', description: 'Detect and view invisible characters in text.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character in a text.', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'String Concatenator', description: 'Concatenate lines of text with a custom separator.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Text Difference Checker', description: 'Check the difference between two texts.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: '', category: 'Text & List Tools' },
  { name: 'Bulk Text Replacement', description: 'Replace multiple text strings at once.', path: '/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, borderColor: '', category: 'Text & List Tools', isPremium: true },

  // PDF & Document Tools
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Remove password and restrictions from a PDF.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG Converter', description: 'Convert PDF pages to JPG images.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG Converter', description: 'Convert PDF pages to PNG images.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF Converter', description: 'Convert JPG images to a PDF file.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF Converter', description: 'Convert PNG images to a PDF file.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'PDF to Text Extractor', description: 'Extract text content from a PDF.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: '', category: 'PDF & Document Tools' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to a PDF.', path: '/pdf-watermark-adder-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to a PDF.', path: '/pdf-watermark-adder-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Encrypt PDF', description: 'Encrypt a PDF with a password.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Reorder PDF Pages', description: 'Reorder the pages of a PDF.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Deleter', description: 'Delete pages from a PDF.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Cropper', description: 'Crop pages in a PDF.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Viewer', description: 'View a PDF in your browser.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to SVG.', path: '/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF.', path: '/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Document Cropper', description: 'Crop an entire PDF document.', path: '/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Annotation Viewer', description: 'View annotations in a PDF.', path: '/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Size Checker', description: 'Check the page sizes in a PDF.', path: '/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF.', path: '/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to DOCX Converter', description: 'Convert PDF to DOCX.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Annotation Creator', description: 'Create annotations in a PDF.', path: '/pdf-annotation-creator', Icon: PdfAnnotationCreatorIcon, Page: PdfAnnotationCreatorPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages in a PDF.', path: '/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF.', path: '/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Inserter', description: 'Insert pages into a PDF.', path: '/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF.', path: '/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Content Cleaner', description: 'Clean content from a PDF.', path: '/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Counter (Range)', description: 'Count pages in a specific range.', path: '/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Number Format Changer', description: 'Change the page number format in a PDF.', path: '/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Text Replacer', description: 'Replace text in a PDF.', path: '/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to HTML Converter', description: 'Convert PDF to HTML.', path: '/pdf-to-html-converter', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Security Level Checker', description: 'Check the security level of a PDF.', path: '/pdf-security-level-checker', Icon: PdfSecurityLevelCheckerIcon, Page: PdfSecurityLevelCheckerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF file for size.', path: '/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, borderColor: '', category: 'PDF & Document Tools', isPremium: true },
  
  // File Converters & Utilities
  { name: 'DOCX to PDF Converter', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel.', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'TSV to CSV Converter', description: 'Convert TSV files to CSV.', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'File Merger', description: 'Merge multiple files into one.', path: '/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Checksum Calculator', description: 'Calculate the checksum of a file.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'DOCX to Text Extractor', description: 'Extract text from a DOCX file.', path: '/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'PPTX to Text Extractor', description: 'Extract text from a PPTX file.', path: '/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Size Converter', description: 'Convert between different file size units.', path: '/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, borderColor: '', category: 'File Converters & Utilities' },
  { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Type Checker', description: 'Check the type of a file.', path: '/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, borderColor: '', category: 'File Converters & Utilities', isPremium: true },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Calculate age from a birth date.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Convert time between different time zones.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'Convert between different units of measurement.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate Body Mass Index.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Calculate loan payments.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate tips.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate random numbers.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Scientific Calculator', description: 'A scientific calculator.', path: '/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, borderColor: '', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Compound Interest Calculator', description: 'Calculate compound interest.', path: '/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, borderColor: '', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Countdown Timer', description: 'A countdown timer.', path: '/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Stopwatch', description: 'A stopwatch with laps.', path: '/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Date Format Converter', description: 'Convert date formats.', path: '/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/day-of-the-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Time Adder/Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Business Day Calculator', description: 'Calculate business days between dates.', path: '/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, borderColor: '', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mean, Median, Mode Calculator', description: 'Calculate mean, median, and mode.', path: '/mean-median-mode', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Standard Deviation Calculator', description: 'Calculate standard deviation.', path: '/standard-deviation', Icon: StandardDeviationIcon, Page: StandardDeviationPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Z-Score Calculator', description: 'Calculate the Z-score.', path: '/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations.', path: '/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, borderColor: '', category: 'Calculators & Time Tools' },
  { name: 'Pythagorean Theorem Solver', description: 'Solve for sides of a right triangle.', path: '/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, borderColor: '', category: 'Calculators & Time Tools' },
  
  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and validate JSON.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Password Generator', description: 'Generate secure passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'QR Code Generator', description: 'Generate QR codes from text or URLs.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Text to Binary Converter', description: 'Convert text to binary.', path: '/text-to-binary-converter', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Binary to Text Converter', description: 'Convert binary to text.', path: '/binary-to-text-converter', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal.', path: '/text-to-hex-converter', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Hex to Text Converter', description: 'Convert hexadecimal to text.', path: '/hex-to-text-converter', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Text to Octal Converter', description: 'Convert text to octal.', path: '/text-to-octal-converter', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Octal to Text Converter', description: 'Convert octal to text.', path: '/octal-to-text-converter', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Apply Rot13 substitution cipher.', path: '/rot13', Icon: Rot13Icon, Page: Rot13Page, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode/decode text with custom keys.', path: '/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from YouTube page source.', path: '/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Link Extractor from Text', description: 'Extract all links from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'HTML Comment Remover', description: 'Remove comments from HTML.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'CSS Comment Remover', description: 'Remove comments from CSS.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'JS Comment Stripper', description: 'Remove comments from JavaScript code.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Vigenere Cipher', description: 'Encrypt/decrypt using Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Caesar Cipher', description: 'Encrypt/decrypt using Caesar cipher.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'HTML Prettifier', description: 'Format HTML for readability.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'CSS Prettifier', description: 'Format CSS for readability.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'JS Beautifier', description: 'Format JavaScript for readability.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Plain Text to HTML', description: 'Convert plain text to HTML.', path: '/plain-text-to-html-converter', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'HTML to Plain Text', description: 'Convert HTML to plain text.', path: '/html-to-plain-text-converter', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, borderColor: '', category: 'Web & Developer Tools' },
  { name: 'Character Set Converter', description: 'Convert text between character sets.', path: '/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, borderColor: '', category: 'Web & Developer Tools', isPremium: true },
  { name: 'JSON Data Extractor', description: 'Extract data from JSON using a path.', path: '/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, borderColor: '', category: 'Web & Developer Tools', isPremium: true },
];

export const POPULAR_PATHS: string[] = [
  '/word-counter',
  '/json-formatter',
  '/image-resizer',
  '/password-generator',
  '/qr-code-generator',
  '/merge-pdf',
  '/duplicate-line-remover',
  '/image-converter'
];

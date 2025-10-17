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
import { ImageOptimizationCheckerIcon } from '../components/icons/ImageOptimizationCheckerIcon';

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
import { Rot13Icon } from '../components/icons/Rot13Icon';
import { CustomDelimiterConverterIcon } from '../components/icons/CustomDelimiterConverterIcon';
import { AlphabeticalLetterGeneratorIcon } from '../components/icons/AlphabeticalLetterGeneratorIcon';
import { NumberListGeneratorIcon } from '../components/icons/NumberListGeneratorIcon';
import { TextEncoderDecoderIcon } from '../components/icons/TextEncoderDecoderIcon';
import { YouTubeExtractorIcon } from '../components/icons/YouTubeExtractorIcon';
import { LinkExtractorIcon } from '../components/icons/LinkExtractorIcon';
import { LineCounterIcon } from '../components/icons/LineCounterIcon';
import { VigenereCipherIcon } from '../components/icons/VigenereCipherIcon';
import { CaesarCipherIcon } from '../components/icons/CaesarCipherIcon';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';
import { EmojiStripperIcon } from '../components/icons/EmojiStripperIcon';
import { InvisibleCharacterViewerIcon } from '../components/icons/InvisibleCharacterViewerIcon';
import { TextCaseFlipperIcon } from '../components/icons/TextCaseFlipperIcon';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import { StringToArrayIcon } from '../components/icons/StringToArrayIcon';
import { ArrayToStringIcon } from '../components/icons/ArrayToStringIcon';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';

// PDF & Document Tool Icons
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
import { PdfFileOptimizerIcon } from '../components/icons/PdfFileOptimizerIcon';
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

// File Converters & Utilities Icons
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';
import { PdfToDocxIcon } from '../components/icons/PdfToDocxIcon';
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

// Calculators & Time Tools Icons
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
import { AreaCalculatorIcon } from '../components/icons/AreaCalculatorIcon';
import { VolumeCalculatorIcon } from '../components/icons/VolumeCalculatorIcon';
import { FractionDecimalConverterIcon } from '../components/icons/FractionDecimalConverterIcon';
import { DecimalFractionConverterIcon } from '../components/icons/DecimalFractionConverterIcon';
import { BinaryCalculatorIcon } from '../components/icons/BinaryCalculatorIcon';
import { OctalCalculatorIcon } from '../components/icons/OctalCalculatorIcon';
import { HexadecimalCalculatorIcon } from '../components/icons/HexadecimalCalculatorIcon';
import { WorldClockIcon } from '../components/icons/WorldClockIcon';
import { DateToDayOfYearIcon } from '../components/icons/DateToDayOfYearIcon';
import { RandomDateGeneratorIcon } from '../components/icons/RandomDateGeneratorIcon';
import { MortgageRefinanceCalculatorIcon } from '../components/icons/MortgageRefinanceCalculatorIcon';
import { RetirementSavingsCalculatorIcon } from '../components/icons/RetirementSavingsCalculatorIcon';
import { LoanAmortizationScheduleIcon } from '../components/icons/LoanAmortizationScheduleIcon';
import { CurrencyConverterIcon } from '../components/icons/CurrencyConverterIcon';
import { TimeDurationFormatterIcon } from '../components/icons/TimeDurationFormatterIcon';
import { SquareRootCalculatorIcon } from '../components/icons/SquareRootCalculatorIcon';
import { FactorialCalculatorIcon } from '../components/icons/FactorialCalculatorIcon';
import { RandomCoinFlipIcon } from '../components/icons/RandomCoinFlipIcon';
import { RandomDiceRollIcon } from '../components/icons/RandomDiceRollIcon';

// Web & Developer Tool Icons
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { BaseConversionIcon } from '../components/icons/BaseConversionIcon';
import { ScientificNotationIcon } from '../components/icons/ScientificNotationIcon';
import { ListRandomizerIcon } from '../components/icons/ListRandomizerIcon';
import { JsonValidatorIcon } from '../components/icons/JsonValidatorIcon';
import { Base64TextEncoderDecoderIcon } from '../components/icons/Base64TextEncoderDecoderIcon';
import { Md5HashGeneratorIcon } from '../components/icons/Md5HashGeneratorIcon';
import { Sha256HashGeneratorIcon } from '../components/icons/Sha256HashGeneratorIcon';
import { JsonMinifierIcon } from '../components/icons/JsonMinifierIcon';
import { CssBoxShadowGeneratorIcon } from '../components/icons/CssBoxShadowGeneratorIcon';
import { ColorContrastCheckerIcon } from '../components/icons/ColorContrastCheckerIcon';
import { RegexTesterIcon } from '../components/icons/RegexTesterIcon';
import { HtmlEntityEncoderDecoderIcon } from '../components/icons/HtmlEntityEncoderDecoderIcon';
import { HtmlTagStripperIcon } from '../components/icons/HtmlTagStripperIcon';
import { JsonToXmlConverterIcon } from '../components/icons/JsonToXmlConverterIcon';
import { XmlToJsonConverterIcon } from '../components/icons/XmlToJsonConverterIcon';
import { UrlParserIcon } from '../components/icons/UrlParserIcon';
import { JsMinifierIcon } from '../components/icons/JsMinifierIcon';
import { CssGradientGeneratorIcon } from '../components/icons/CssGradientGeneratorIcon';
import { DecimalToBinaryConverterIcon } from '../components/icons/DecimalToBinaryConverterIcon';
import { BinaryToDecimalConverterIcon } from '../components/icons/BinaryToDecimalConverterIcon';
import { HtaccessRedirectGeneratorIcon } from '../components/icons/HtaccessRedirectGeneratorIcon';
import { HtaccessAuthGeneratorIcon } from '../components/icons/HtaccessAuthGeneratorIcon';
import { XmlFormatterIcon } from '../components/icons/XmlFormatterIcon';
import { YamlToJsonConverterIcon } from '../components/icons/YamlToJsonConverterIcon';
import { Base64ImageSizeCalculatorIcon } from '../components/icons/Base64ImageSizeCalculatorIcon';
import { SvgEditorIcon } from '../components/icons/SvgEditorIcon';
import { HtmlToMarkdownConverterIcon } from '../components/icons/HtmlToMarkdownConverterIcon';
import { MarkdownToHtmlRendererIcon } from '../components/icons/MarkdownToHtmlRendererIcon';
import { PasswordStrengthCheckerIcon } from '../components/icons/PasswordStrengthCheckerIcon';
import { CssPrefixerIcon } from '../components/icons/CssPrefixerIcon';
import { ApiTesterIcon } from '../components/icons/ApiTesterIcon';
import { WebpDetectionIcon } from '../components/icons/WebpDetectionIcon';
import { CssGridPlaygroundIcon } from '../components/icons/CssGridPlaygroundIcon';
import { CssFlexboxPlaygroundIcon } from '../components/icons/CssFlexboxPlaygroundIcon';
import { JsonToPhpArrayIcon } from '../components/icons/JsonToPhpArrayIcon';
import { JsonToPythonDictIcon } from '../components/icons/JsonToPythonDictIcon';
import { ColorPaletteGeneratorIcon } from '../components/icons/ColorPaletteGeneratorIcon';
import { HttpStatusCodeLookupIcon } from '../components/icons/HttpStatusCodeLookupIcon';
import { HtmlBoilerplateGeneratorIcon } from '../components/icons/HtmlBoilerplateGeneratorIcon';
import { HtmlCommentRemoverIcon } from '../components/icons/HtmlCommentRemoverIcon';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import { PdfToHtmlConverterIcon } from '../components/icons/PdfToHtmlConverterIcon';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';


// Image Tool Pages
import ImageConverterPage from '../pages/ImageConverterPage';
import ImageResizerPage from '../pages/ImageResizerPage';
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
import ImageOptimizationCheckerPage from '../pages/ImageOptimizationCheckerPage';

// Text & List Tool Pages
import CaseConverterPage from '../pages/CaseConverterPage';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
import WordCounterPage from '../pages/WordCounterPage';
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
import LineCounterPage from '../pages/LineCounterPage';
import VigenereCipherPage from '../pages/VigenereCipherPage';
import CaesarCipherPage from '../pages/CaesarCipherPage';
import TextToAsciiArtViewerPage from '../pages/TextToAsciiArtViewerPage';
import EmojiStripperPage from '../pages/EmojiStripperPage';
import InvisibleCharacterViewerPage from '../pages/InvisibleCharacterViewerPage';
import TextCaseFlipperPage from '../pages/TextCaseFlipperPage';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import StringToArrayPage from '../pages/StringToArrayPage';
import ArrayToStringPage from '../pages/ArrayToStringPage';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';
import NumberListSorterPage from '../pages/NumberListSorterPage';
import NumberPadGeneratorPage from '../pages/NumberPadGeneratorPage';
import OddEvenNumberFilterPage from '../pages/OddEvenNumberFilterPage';
import WordCountAndCharacterCounterPage from '../pages/WordCountAndCharacterCounterPage';
import CaseConverterAllPage from '../pages/CaseConverterAllPage';
import RemoveDuplicateLinesPage from '../pages/RemoveDuplicateLinesPage';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';

// PDF & Document Tool Pages
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
import PdfFileOptimizerPage from '../pages/PdfFileOptimizerPage';
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

// File Converters & Utilities Pages
import DocxToPdfPage from '../pages/DocxToPdfPage';
import PdfToDocxPage from '../pages/PdfToDocxPage';
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

// Calculators & Time Tools Pages
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
import AreaCalculatorPage from '../pages/AreaCalculatorPage';
import VolumeCalculatorPage from '../pages/VolumeCalculatorPage';
import FractionDecimalConverterPage from '../pages/FractionDecimalConverterPage';
import DecimalFractionConverterPage from '../pages/DecimalFractionConverterPage';
import BinaryCalculatorPage from '../pages/BinaryCalculatorPage';
import OctalCalculatorPage from '../pages/OctalCalculatorPage';
import HexadecimalCalculatorPage from '../pages/HexadecimalCalculatorPage';
import WorldClockPage from '../pages/WorldClockPage';
import DateToDayOfYearPage from '../pages/DateToDayOfYearPage';
import RandomDateGeneratorPage from '../pages/RandomDateGeneratorPage';
import MortgageRefinanceCalculatorPage from '../pages/MortgageRefinanceCalculatorPage';
import RetirementSavingsCalculatorPage from '../pages/RetirementSavingsCalculatorPage';
import LoanAmortizationSchedulePage from '../pages/LoanAmortizationSchedulePage';
import CurrencyConverterPage from '../pages/CurrencyConverterPage';
import TimeDurationFormatterPage from '../pages/TimeDurationFormatterPage';
import SquareRootCalculatorPage from '../pages/SquareRootCalculatorPage';
import FactorialCalculatorPage from '../pages/FactorialCalculatorPage';
import RandomCoinFlipPage from '../pages/RandomCoinFlipPage';
import RandomDiceRollPage from '../pages/RandomDiceRollPage';

// Web & Developer Tool Pages
import JsonFormatterPage from '../pages/JsonFormatterPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import BaseConversionPage from '../pages/BaseConversionPage';
import ScientificNotationPage from '../pages/ScientificNotationPage';
import ListRandomizerPage from '../pages/ListRandomizerPage';
import JsonValidatorPage from '../pages/JsonValidatorPage';
import Base64TextEncoderDecoderPage from '../pages/Base64TextEncoderDecoderPage';
import Md5HashGeneratorPage from '../pages/Md5HashGeneratorPage';
import Sha256HashGeneratorPage from '../pages/Sha256HashGeneratorPage';
import JsonMinifierPage from '../pages/JsonMinifierPage';
import CssBoxShadowGeneratorPage from '../pages/CssBoxShadowGeneratorPage';
import ColorContrastCheckerPage from '../pages/ColorContrastCheckerPage';
import RegexTesterPage from '../pages/RegexTesterPage';
import HtmlEntityEncoderDecoderPage from '../pages/HtmlEntityEncoderDecoderPage';
import HtmlTagStripperPage from '../pages/HtmlTagStripperPage';
import JsonToXmlConverterPage from '../pages/JsonToXmlConverterPage';
import XmlToJsonConverterPage from '../pages/XmlToJsonConverterPage';
import UrlParserPage from '../pages/UrlParserPage';
import JsMinifierPage from '../pages/JsMinifierPage';
import CssGradientGeneratorPage from '../pages/CssGradientGeneratorPage';
import DecimalToBinaryConverterPage from '../pages/DecimalToBinaryConverterPage';
import BinaryToDecimalConverterPage from '../pages/BinaryToDecimalConverterPage';
import HtaccessRedirectGeneratorPage from '../pages/HtaccessRedirectGeneratorPage';
import HtaccessAuthGeneratorPage from '../pages/HtaccessAuthGeneratorPage';
import XmlFormatterPage from '../pages/XmlFormatterPage';
import YamlToJsonConverterPage from '../pages/YamlToJsonConverterPage';
import Base64ImageSizeCalculatorPage from '../pages/Base64ImageSizeCalculatorPage';
import SvgEditorPage from '../pages/SvgEditorPage';
import HtmlToMarkdownConverterPage from '../pages/HtmlToMarkdownConverterPage';
import MarkdownToHtmlRendererPage from '../pages/MarkdownToHtmlRendererPage';
import PasswordStrengthCheckerPage from '../pages/PasswordStrengthCheckerPage';
import CssPrefixerPage from '../pages/CssPrefixerPage';
import ApiTesterPage from '../pages/ApiTesterPage';
import WebpDetectionPage from '../pages/WebpDetectionPage';
import CssGridPlaygroundPage from '../pages/CssGridPlaygroundPage';
import CssFlexboxPlaygroundPage from '../pages/CssFlexboxPlaygroundPage';
import JsonToPhpArrayPage from '../pages/JsonToPhpArrayPage';
import JsonToPythonDictPage from '../pages/JsonToPythonDictPage';
import ColorPaletteGeneratorPage from '../pages/ColorPaletteGeneratorPage';
import HttpStatusCodeLookupPage from '../pages/HttpStatusCodeLookupPage';
import HtmlBoilerplateGeneratorPage from '../pages/HtmlBoilerplateGeneratorPage';
import HtmlCommentRemoverPage from '../pages/HtmlCommentRemoverPage';
import CssCommentRemoverPage from '../pages/CssCommentRemoverPage';
import JsCommentStripperPage from '../pages/JsCommentStripperPage';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';
import PdfToHtmlConverterPage from '../pages/PdfToHtmlConverterPage';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import JsBeautifierPage from '../pages/JsBeautifierPage';

export const TOOLS: Tool[] = [
    // Image Tools
    { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/tools/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Resizer', description: 'Resize images to specific dimensions or by percentage.', path: '/tools/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'QR Code Generator', description: 'Create QR codes from text or URLs.', path: '/tools/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/tools/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Compressor (Bulk)', description: 'Compress multiple images to reduce file size.', path: '/tools/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image to Base64 (Bulk)', description: 'Convert multiple images to Base64 strings.', path: '/tools/image-to-base64', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/tools/image-to-grayscale', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Bulk JPG to PNG Converter', description: 'Convert multiple JPG images to PNG format.', path: '/tools/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Bulk PNG to JPG Converter', description: 'Convert multiple PNG images to JPG format.', path: '/tools/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Cropper', description: 'Crop images with a visual editor.', path: '/tools/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Watermark', description: 'Add a watermark image to your pictures.', path: '/tools/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Rotator', description: 'Rotate images by any angle.', path: '/tools/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/tools/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Sepia Filter', description: 'Apply a sepia tone effect to your images.', path: '/tools/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Sharpen Filter', description: 'Apply a sharpening effect to your images.', path: '/tools/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Invert Colors', description: 'Invert the colors of an image.', path: '/tools/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Opacity Adjuster', description: 'Change the opacity of an image.', path: '/tools/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL values of an image.', path: '/tools/image-hsl-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Flipper', description: 'Flip images horizontally or vertically.', path: '/tools/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image to ASCII Art', description: 'Convert images into ASCII text art.', path: '/tools/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of an image.', path: '/tools/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Color Palette Extractor', description: 'Extract a color palette from an image.', path: '/tools/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Color Picker', description: 'Pick colors from an image with a magnifier.', path: '/tools/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Add Border to Image', description: 'Add a solid color border to an image.', path: '/tools/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Add Rounded Corners', description: 'Add rounded corners to an image.', path: '/tools/add-rounded-corners-to-image', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Collage Maker (2x2)', description: 'Create a 2x2 collage from four images.', path: '/tools/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image to Data URL', description: 'Convert an image to a Data URL.', path: '/tools/image-to-data-url-generator', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image DPI Changer (JPG only)', description: 'Change the DPI value of a JPG image.', path: '/tools/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your photos.', path: '/tools/image-filter-preset-library', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Text Overlay', description: 'Add text over an image.', path: '/tools/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'PNG Transparency Checker', description: 'Check if a PNG image has transparency.', path: '/tools/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Pixelate Filter', description: 'Pixelate an image with adjustable pixel size.', path: '/tools/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/tools/image-to-bmp-converter', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image to GIF Converter', description: 'Convert a single image to a GIF.', path: '/tools/image-to-gif-converter', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Mirror Effect', description: 'Apply a mirror effect to your images.', path: '/tools/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Skew (Warp) Tool', description: 'Skew or warp an image horizontally and vertically.', path: '/tools/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Tint Adjuster', description: 'Apply a color tint to an image.', path: '/tools/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Lightness Adjuster', description: 'Adjust the brightness/lightness of an image.', path: '/tools/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Threshold Filter', description: 'Apply a black and white threshold effect.', path: '/tools/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Dithering Effect', description: 'Apply a dithering effect to an image.', path: '/tools/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from images.', path: '/tools/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Dimension Checker', description: 'Quickly find the dimensions of an image.', path: '/tools/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Watermark Positioner', description: 'Precisely position a watermark on an image.', path: '/tools/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image without scaling.', path: '/tools/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Hue Shifter', description: 'Shift the hue of an image.', path: '/tools/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Noise Generator', description: 'Add noise to an image.', path: '/tools/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Base64 to Image', description: 'Decode a Base64 string into an image.', path: '/tools/image-to-base64-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/tools/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Shadow Generator', description: 'Add a drop shadow to an image.', path: '/tools/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image to Black & White', description: 'Convert an image to black and white.', path: '/tools/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Tiling Previewer', description: 'Preview how an image looks when tiled.', path: '/tools/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Color Replacer', description: 'Replace one color with another in an image.', path: '/tools/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
    { name: 'Image Reflection Generator', description: 'Add a reflection effect to an image.', path: '/tools/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Layer Merger', description: 'Merge two images with various blend modes.', path: '/tools/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Opacity Slider', description: 'Interactively adjust the opacity of an image.', path: '/tools/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Crop to Aspect Ratio Preset', description: 'Crop an image to a specific aspect ratio.', path: '/tools/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Metadata Editor', description: 'Edit EXIF and other metadata of an image.', path: '/tools/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Download Button Generator', description: 'Generate an HTML download button for an image.', path: '/tools/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Zoom Previewer', description: 'Zoom into an image to see details.', path: '/tools/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Header Info Viewer', description: 'View header information of an image file.', path: '/tools/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/tools/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Color Palette Saver', description: 'Save a color palette from an image.', path: '/tools/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, borderColor: 'border-orange-500', category: 'Image Tools', isPremium: true },
    { name: 'Image Optimization Checker', description: 'Check if an image is optimized for the web.', path: '/tools/image-optimization-checker', Icon: ImageOptimizationCheckerIcon, Page: ImageOptimizationCheckerPage, borderColor: 'border-orange-500', category: 'Image Tools' },

    // Text & List Tools
    { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, title case, etc.', path: '/tools/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/tools/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/tools/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/tools/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Line Break Remover', description: 'Remove all line breaks from a block of text.', path: '/tools/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/tools/text-to-slug-converter', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/tools/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'List Shuffler', description: 'Randomly shuffle the lines in a list.', path: '/tools/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Reverse Text Generator', description: 'Reverse the characters in a string.', path: '/tools/reverse-text-generator', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Sort Lines Alphabetically', description: 'Sort lines of text alphabetically (A-Z or Z-A).', path: '/tools/sort-lines-alphabetically', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Add Prefix/Suffix to Lines', description: 'Add a prefix and/or suffix to each line of text.', path: '/tools/add-prefix-suffix-to-lines', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Empty Lines', description: 'Remove all empty lines from a block of text.', path: '/tools/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Keyword Density Checker', description: 'Analyze the keyword density of a block of text.', path: '/tools/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text to Binary Converter', description: 'Convert text to binary representation.', path: '/tools/text-to-binary-converter', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Binary to Text Converter', description: 'Convert binary code back to human-readable text.', path: '/tools/binary-to-text-converter', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal representation.', path: '/tools/text-to-hex-converter', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Hex to Text Converter', description: 'Convert hexadecimal code back to text.', path: '/tools/hex-to-text-converter', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text to Octal Converter', description: 'Convert text to octal representation.', path: '/tools/text-to-octal-converter', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Octal to Text Converter', description: 'Convert octal code back to text.', path: '/tools/octal-to-text-converter', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Extra Spaces', description: 'Remove extra spaces from text.', path: '/tools/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/tools/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Sentence Case Converter', description: 'Convert text to sentence case.', path: '/tools/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Non-Alphanumeric Chars', description: 'Remove all non-alphanumeric characters from text.', path: '/tools/remove-non-alphanumeric-chars', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text Scrambler', description: 'Scramble the middle letters of words in a text.', path: '/tools/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'List Comparator (Diff)', description: 'Compare two lists and find the differences.', path: '/tools/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'List Intersector', description: 'Find the common items between two lists.', path: '/tools/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/tools/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of each line.', path: '/tools/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text Splitter', description: 'Split a block of text into smaller chunks.', path: '/tools/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text Repeater', description: 'Repeat a string of text multiple times.', path: '/tools/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Numbers from Text', description: 'Remove all numbers from a block of text.', path: '/tools/remove-numbers-from-text', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Letters from Text', description: 'Remove all letters from a block of text.', path: '/tools/remove-letters-from-text', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Rot13 Encrypt/Decrypt', description: 'Apply the Rot13 cipher to a block of text.', path: '/tools/rot13', Icon: Rot13Icon, Page: Rot13Page, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Custom Delimiter Converter', description: 'Convert a list from one delimiter to another.', path: '/tools/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from a to z.', path: '/tools/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Number List Generator', description: 'Generate a list of numbers with a given range and step.', path: '/tools/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Custom Text Encoder/Decoder', description: 'Encode/decode text using custom character mappings.', path: '/tools/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'YouTube Content Extractor', description: 'Extract title and description from YouTube page source.', path: '/tools/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Link Extractor from Text', description: 'Extract all links from a block of text.', path: '/tools/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Line Counter', description: 'Count the number of lines in a block of text.', path: '/tools/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Vigenere Cipher', description: 'Encrypt/decrypt text using the Vigenere cipher.', path: '/tools/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Caesar Cipher', description: 'Encrypt/decrypt text using the Caesar cipher.', path: '/tools/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text to ASCII Art Viewer', description: 'View text in a simple ASCII art box.', path: '/tools/text-to-ascii-art-viewer', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Emoji Stripper', description: 'Remove all emojis from a block of text.', path: '/tools/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible characters in text.', path: '/tools/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text Case Flipper', description: 'Flip the case of each character in a string.', path: '/tools/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'String Concatenator', description: 'Concatenate a list of strings with a delimiter.', path: '/tools/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'String to Array Converter', description: 'Convert a string to a JavaScript array.', path: '/tools/string-to-array-converter', Icon: StringToArrayIcon, Page: StringToArrayPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Array to String Converter', description: 'Convert a JavaScript array to a string.', path: '/tools/array-to-string-converter', Icon: ArrayToStringIcon, Page: ArrayToStringPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Character Set Converter', description: 'Convert text between character sets (e.g., UTF-8, ISO-8859-1).', path: '/tools/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, borderColor: 'border-blue-500', category: 'Text & List Tools', isPremium: true },
    { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/tools/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, borderColor: 'border-blue-500', category: 'Text & List Tools', isPremium: true },
    { name: 'Sort Numbers List', description: 'Sort a list of numbers in ascending or descending order.', path: '/tools/number-list-sorter', Icon: NumberListSorterIcon, Page: NumberListSorterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Number Pad Generator', description: 'Generate a list of numbers with zero-padding.', path: '/tools/number-pad-generator', Icon: NumberPadGeneratorIcon, Page: NumberPadGeneratorPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Odd/Even Number Filter', description: 'Filter a list of numbers to keep only odd or even values.', path: '/tools/odd-even-number-filter', Icon: OddEvenNumberFilterIcon, Page: OddEvenNumberFilterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Word Count and Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/tools/word-count-and-character-counter', Icon: WordCharCounterIcon, Page: WordCountAndCharacterCounterPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'All Case Converters', description: 'Convert text to uppercase, lowercase, title case, etc.', path: '/tools/case-converter-all', Icon: CaseConverterIcon, Page: CaseConverterAllPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Remove Duplicate Lines', description: 'Remove duplicate lines from a list.', path: '/tools/remove-duplicate-lines', Icon: DuplicateLineRemoverIcon, Page: RemoveDuplicateLinesPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
    { name: 'Text Difference Checker', description: 'Compare two texts and highlight the differences.', path: '/tools/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },

    // PDF & Document Tools
    { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/tools/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/tools/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'Split PDF', description: 'Split a PDF into multiple files or a range of pages.', path: '/tools/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Password Remover', description: 'Remove password and restrictions from a PDF file.', path: '/tools/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/tools/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF to JPG Converter', description: 'Convert each page of a PDF to a JPG image.', path: '/tools/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF to PNG Converter', description: 'Convert each page of a PDF to a PNG image.', path: '/tools/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'JPG to PDF Converter', description: 'Convert one or more JPG images to a PDF file.', path: '/tools/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PNG to PDF Converter', description: 'Convert one or more PNG images to a PDF file.', path: '/tools/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF to Text Extractor', description: 'Extract all text from a PDF file.', path: '/tools/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to a PDF file.', path: '/tools/pdf-watermark-adder-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to a PDF file.', path: '/tools/pdf-watermark-adder-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'Encrypt PDF', description: 'Add a password to a PDF file.', path: '/tools/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'Reorder PDF Pages', description: 'Reorder the pages of a PDF file.', path: '/tools/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF file.', path: '/tools/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Deleter', description: 'Delete pages from a PDF file.', path: '/tools/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Cropper', description: 'Crop pages in a PDF file.', path: '/tools/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Viewer', description: 'View a PDF file in your browser.', path: '/tools/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF to SVG Converter', description: 'Convert PDF pages to SVG images.', path: '/tools/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF file.', path: '/tools/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Document Cropper', description: 'Crop an entire PDF document.', path: '/tools/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF file.', path: '/tools/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Annotation Viewer', description: 'View annotations in a PDF file.', path: '/tools/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Page Size Checker', description: 'Check the size of pages in a PDF file.', path: '/tools/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF file.', path: '/tools/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/tools/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/tools/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF file.', path: '/tools/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Grayscale Converter', description: 'Convert a PDF file to grayscale.', path: '/tools/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Security Checker', description: 'Check the security settings of a PDF file.', path: '/tools/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF File Optimizer', description: 'Optimize a PDF file for smaller size.', path: '/tools/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages of a PDF file.', path: '/tools/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF file.', path: '/tools/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Inserter', description: 'Insert pages into a PDF file.', path: '/tools/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF file.', path: '/tools/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Content Cleaner', description: 'Clean content from a PDF file.', path: '/tools/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF file.', path: '/tools/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/tools/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/tools/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Page Counter (Range)', description: 'Count pages within a specific range of a PDF.', path: '/tools/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
    { name: 'PDF Page Number Format Changer', description: 'Change the format of page numbers in a PDF.', path: '/tools/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    { name: 'PDF Text Replacer', description: 'Find and replace text in a PDF file.', path: '/tools/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
    
    // File Converters & Utilities
    { name: 'DOCX to PDF Converter', description: 'Convert DOCX files to PDF.', path: '/tools/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities', isPremium: true },
    { name: 'PDF to DOCX Converter', description: 'Convert PDF files to DOCX.', path: '/tools/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities', isPremium: true },
    { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV.', path: '/tools/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel.', path: '/tools/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'TSV to CSV Converter', description: 'Convert Tab-Separated Values to Comma-Separated Values.', path: '/tools/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'File Merger', description: 'Merge multiple text files into one.', path: '/tools/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities', isPremium: true },
    { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/tools/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities', isPremium: true },
    { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of a file.', path: '/tools/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/tools/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'DOCX to Text Extractor', description: 'Extract text from a DOCX file.', path: '/tools/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'PPTX to Text Extractor', description: 'Extract text from a PPTX file.', path: '/tools/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities', isPremium: true },
    { name: 'File Size Converter', description: 'Convert file sizes between Bytes, KB, MB, GB.', path: '/tools/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/tools/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },
    { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/tools/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities', isPremium: true },
    { name: 'File Type Checker', description: 'Check the type of a file based on its contents.', path: '/tools/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, borderColor: 'border-violet-500', category: 'File Converters & Utilities' },

    // Calculators & Time Tools
    { name: 'Percentage Calculator', description: 'Calculate percentages.', path: '/tools/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Timestamp Converter', description: 'Convert Unix timestamps to human-readable dates.', path: '/tools/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates.', path: '/tools/date-difference-calculator', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Age Calculator', description: 'Calculate age from a date of birth.', path: '/tools/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Time Zone Converter', description: 'Convert time between different time zones.', path: '/tools/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Unit Converter', description: 'Convert between different units of measurement.', path: '/tools/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/tools/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Loan Calculator', description: 'Calculate loan payments.', path: '/tools/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Sales Tax Calculator', description: 'Calculate sales tax.', path: '/tools/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Tip Calculator', description: 'Calculate a tip for a bill.', path: '/tools/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Random Number Generator', description: 'Generate a random number in a given range.', path: '/tools/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios for images and videos.', path: '/tools/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Scientific Calculator', description: 'A calculator with scientific functions.', path: '/tools/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Compound Interest Calculator', description: 'Calculate compound interest.', path: '/tools/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Countdown Timer', description: 'A timer that counts down from a specified time.', path: '/tools/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Stopwatch', description: 'A stopwatch to measure elapsed time.', path: '/tools/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Date Format Converter', description: 'Convert dates between different formats.', path: '/tools/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/tools/day-of-the-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/tools/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Time Adder / Subtracter', description: 'Add or subtract time from a date.', path: '/tools/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Business Day Calculator', description: 'Calculate business days between two dates.', path: '/tools/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Mean, Median, & Mode Calculator', description: 'Calculate the mean, median, and mode of a set of numbers.', path: '/tools/mean-median-mode', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Standard Deviation Calculator', description: 'Calculate the standard deviation of a set of numbers.', path: '/tools/standard-deviation', Icon: StandardDeviationIcon, Page: StandardDeviationPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Z-Score Calculator', description: 'Calculate the Z-score of a data point.', path: '/tools/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations.', path: '/tools/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Pythagorean Theorem Solver', description: 'Solve for the hypotenuse of a right triangle.', path: '/tools/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Area Calculator', description: 'Calculate the area of various shapes.', path: '/tools/area-calculator', Icon: AreaCalculatorIcon, Page: AreaCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Volume Calculator', description: 'Calculate the volume of various 3D shapes.', path: '/tools/volume-calculator', Icon: VolumeCalculatorIcon, Page: VolumeCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Fraction to Decimal Converter', description: 'Convert fractions to decimals.', path: '/tools/fraction-decimal-converter', Icon: FractionDecimalConverterIcon, Page: FractionDecimalConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Decimal to Fraction Converter', description: 'Convert decimals to fractions.', path: '/tools/decimal-fraction-converter', Icon: DecimalFractionConverterIcon, Page: DecimalFractionConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Binary Calculator', description: 'A calculator for binary numbers.', path: '/tools/binary-calculator', Icon: BinaryCalculatorIcon, Page: BinaryCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Octal Calculator', description: 'A calculator for octal numbers.', path: '/tools/octal-calculator', Icon: OctalCalculatorIcon, Page: OctalCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Hexadecimal Calculator', description: 'A calculator for hexadecimal numbers.', path: '/tools/hexadecimal-calculator', Icon: HexadecimalCalculatorIcon, Page: HexadecimalCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'World Clock', description: 'View the time in major cities around the world.', path: '/tools/world-clock', Icon: WorldClockIcon, Page: WorldClockPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Date to Day of Year', description: 'Convert a date to the day of the year (1-366).', path: '/tools/date-to-day-of-year', Icon: DateToDayOfYearIcon, Page: DateToDayOfYearPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Random Date Generator', description: 'Generate a random date within a specified range.', path: '/tools/random-date-generator', Icon: RandomDateGeneratorIcon, Page: RandomDateGeneratorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Mortgage Refinance Calculator', description: 'Calculate savings from refinancing a mortgage.', path: '/tools/mortgage-refinance-calculator', Icon: MortgageRefinanceCalculatorIcon, Page: MortgageRefinanceCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Retirement Savings Calculator', description: 'Calculate retirement savings.', path: '/tools/retirement-savings-calculator', Icon: RetirementSavingsCalculatorIcon, Page: RetirementSavingsCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Loan Amortization Schedule', description: 'Generate a loan amortization schedule.', path: '/tools/loan-amortization-schedule', Icon: LoanAmortizationScheduleIcon, Page: LoanAmortizationSchedulePage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/tools/currency-converter', Icon: CurrencyConverterIcon, Page: CurrencyConverterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools', isPremium: true },
    { name: 'Time Duration Formatter', description: 'Format a duration in seconds to HH:MM:SS.', path: '/tools/time-duration-formatter', Icon: TimeDurationFormatterIcon, Page: TimeDurationFormatterPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/tools/square-root-calculator', Icon: SquareRootCalculatorIcon, Page: SquareRootCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/tools/factorial-calculator', Icon: FactorialCalculatorIcon, Page: FactorialCalculatorPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Random Coin Flip', description: 'Flip a virtual coin.', path: '/tools/random-coin-flip', Icon: RandomCoinFlipIcon, Page: RandomCoinFlipPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    { name: 'Random Dice Roll', description: 'Roll a virtual die.', path: '/tools/random-dice-roll', Icon: RandomDiceRollIcon, Page: RandomDiceRollPage, borderColor: 'border-cyan-400', category: 'Calculators & Time Tools' },
    
    // Web & Developer Tools
    { name: 'JSON Formatter', description: 'Format and validate JSON.', path: '/tools/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Password Generator', description: 'Generate secure, random passwords.', path: '/tools/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/tools/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Base Converter', description: 'Convert numbers between binary, octal, decimal, and hexadecimal.', path: '/tools/base-converter', Icon: BaseConversionIcon, Page: BaseConversionPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Scientific Notation Converter', description: 'Convert numbers to and from scientific notation.', path: '/tools/scientific-notation-converter', Icon: ScientificNotationIcon, Page: ScientificNotationPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'List Randomizer', description: 'Pick a random item from a list.', path: '/tools/list-randomizer', Icon: ListRandomizerIcon, Page: ListRandomizerPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JSON Validator', description: 'Validate a JSON string.', path: '/tools/json-validator', Icon: JsonValidatorIcon, Page: JsonValidatorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Base64 Text Encoder/Decoder', description: 'Encode or decode text using Base64.', path: '/tools/base64-text-encoder-decoder', Icon: Base64TextEncoderDecoderIcon, Page: Base64TextEncoderDecoderPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash of a string.', path: '/tools/md5-hash-generator', Icon: Md5HashGeneratorIcon, Page: Md5HashGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash of a string.', path: '/tools/sha256-hash-generator', Icon: Sha256HashGeneratorIcon, Page: Sha256HashGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JSON Minifier', description: 'Minify a JSON string.', path: '/tools/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    // { name: 'HEX to RGB Converter', description: 'Convert HEX color codes to RGB and vice-versa.', path: '/tools/hex-rgb-converter', Icon: HexRgbConverterIcon, Page: HexRgbConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    // { name: 'UUID Generator', description: 'Generate a new UUID.', path: '/tools/uuid-generator', Icon: UuidGeneratorIcon, Page: UuidGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    // { name: 'CSS Border Radius Generator', description: 'Visually generate CSS for border-radius.', path: '/tools/css-border-radius-generator', Icon: CssBorderRadiusGeneratorIcon, Page: CssBorderRadiusGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    // { name: 'JSON to CSV Converter', description: 'Convert JSON data to CSV format.', path: '/tools/json-to-csv', Icon: JsonToCsvIcon, Page: JsonToCsvPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    // { name: 'CSV to JSON Converter', description: 'Convert CSV data to JSON format.', path: '/tools/csv-to-json', Icon: CsvToJsonIcon, Page: CsvToJsonPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS Box Shadow Generator', description: 'Generate CSS for box shadows.', path: '/tools/css-box-shadow-generator', Icon: CssBoxShadowGeneratorIcon, Page: CssBoxShadowGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Color Contrast Checker', description: 'Check the contrast ratio of two colors.', path: '/tools/color-contrast-checker', Icon: ColorContrastCheckerIcon, Page: ColorContrastCheckerPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Regex Tester', description: 'Test regular expressions against a string.', path: '/tools/regex-tester', Icon: RegexTesterIcon, Page: RegexTesterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'HTML Entity Encoder/Decoder', description: 'Encode or decode HTML entities.', path: '/tools/html-entity-encoder-decoder', Icon: HtmlEntityEncoderDecoderIcon, Page: HtmlEntityEncoderDecoderPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'HTML Tag Stripper', description: 'Remove HTML tags from a string.', path: '/tools/html-tag-stripper', Icon: HtmlTagStripperIcon, Page: HtmlTagStripperPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JSON to XML Converter', description: 'Convert JSON to XML.', path: '/tools/json-to-xml-converter', Icon: JsonToXmlConverterIcon, Page: JsonToXmlConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'XML to JSON Converter', description: 'Convert XML to JSON.', path: '/tools/xml-to-json-converter', Icon: XmlToJsonConverterIcon, Page: XmlToJsonConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'URL Parser', description: 'Parse a URL into its components.', path: '/tools/url-parser', Icon: UrlParserIcon, Page: UrlParserPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JS Minifier', description: 'Minify JavaScript code.', path: '/tools/js-minifier', Icon: JsMinifierIcon, Page: JsMinifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS Gradient Generator', description: 'Generate CSS for linear gradients.', path: '/tools/css-gradient-generator', Icon: CssGradientGeneratorIcon, Page: CssGradientGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Decimal to Binary Converter', description: 'Convert decimal numbers to binary.', path: '/tools/decimal-to-binary-converter', Icon: DecimalToBinaryConverterIcon, Page: DecimalToBinaryConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Binary to Decimal Converter', description: 'Convert binary numbers to decimal.', path: '/tools/binary-to-decimal-converter', Icon: BinaryToDecimalConverterIcon, Page: BinaryToDecimalConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: '.htaccess Redirect Generator', description: 'Generate .htaccess redirect rules.', path: '/tools/htaccess-redirect-generator', Icon: HtaccessRedirectGeneratorIcon, Page: HtaccessRedirectGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: '.htaccess Auth Generator', description: 'Generate .htaccess authentication files.', path: '/tools/htaccess-auth-generator', Icon: HtaccessAuthGeneratorIcon, Page: HtaccessAuthGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'XML Formatter', description: 'Format XML for readability.', path: '/tools/xml-formatter', Icon: XmlFormatterIcon, Page: XmlFormatterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'YAML to JSON Converter', description: 'Convert YAML to JSON.', path: '/tools/yaml-to-json-converter', Icon: YamlToJsonConverterIcon, Page: YamlToJsonConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Base64 Image Size Calculator', description: 'Calculate the size of a Base64 encoded image.', path: '/tools/base64-image-size-calculator', Icon: Base64ImageSizeCalculatorIcon, Page: Base64ImageSizeCalculatorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Simple SVG Editor', description: 'Edit SVG code and see a live preview.', path: '/tools/svg-editor', Icon: SvgEditorIcon, Page: SvgEditorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'HTML to Markdown Converter', description: 'Convert HTML to Markdown.', path: '/tools/html-to-markdown-converter', Icon: HtmlToMarkdownConverterIcon, Page: HtmlToMarkdownConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Markdown to HTML Renderer', description: 'Render Markdown as HTML.', path: '/tools/markdown-to-html-renderer', Icon: MarkdownToHtmlRendererIcon, Page: MarkdownToHtmlRendererPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Password Strength Checker', description: 'Check the strength of a password.', path: '/tools/password-strength-checker', Icon: PasswordStrengthCheckerIcon, Page: PasswordStrengthCheckerPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS Prefixer', description: 'Add vendor prefixes to CSS properties.', path: '/tools/css-prefixer', Icon: CssPrefixerIcon, Page: CssPrefixerPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'API Tester (Postman-like)', description: 'Test API endpoints.', path: '/tools/api-tester', Icon: ApiTesterIcon, Page: ApiTesterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'WebP Support Detection', description: 'Detect if your browser supports WebP images.', path: '/tools/webp-detection', Icon: WebpDetectionIcon, Page: WebpDetectionPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS Grid Playground', description: 'Interactively learn and build CSS Grids.', path: '/tools/css-grid-playground', Icon: CssGridPlaygroundIcon, Page: CssGridPlaygroundPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'CSS Flexbox Playground', description: 'Interactively learn and build CSS Flexbox layouts.', path: '/tools/css-flexbox-playground', Icon: CssFlexboxPlaygroundIcon, Page: CssFlexboxPlaygroundPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'JSON to PHP Array Converter', description: 'Convert JSON to a PHP array.', path: '/tools/json-to-php-array', Icon: JsonToPhpArrayIcon, Page: JsonToPhpArrayPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JSON to Python Dict Converter', description: 'Convert JSON to a Python dictionary.', path: '/tools/json-to-python-dict', Icon: JsonToPythonDictIcon, Page: JsonToPythonDictPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'Color Palette Generator', description: 'Generate a color palette from a base color.', path: '/tools/color-palette-generator', Icon: ColorPaletteGeneratorIcon, Page: ColorPaletteGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'HTTP Status Code Lookup', description: 'Look up the meaning of an HTTP status code.', path: '/tools/http-status-code-lookup', Icon: HttpStatusCodeLookupIcon, Page: HttpStatusCodeLookupPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'HTML5 Boilerplate Generator', description: 'Generate a basic HTML5 boilerplate.', path: '/tools/html-boilerplate-generator', Icon: HtmlBoilerplateGeneratorIcon, Page: HtmlBoilerplateGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'HTML Comment Remover', description: 'Remove comments from HTML code.', path: '/tools/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS Comment Remover', description: 'Remove comments from CSS code.', path: '/tools/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JS Comment Stripper', description: 'Remove comments from JavaScript code.', path: '/tools/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JSON Data Extractor', description: 'Extract data from a JSON object using a path.', path: '/tools/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'PDF to HTML Converter', description: 'Convert PDF files to HTML.', path: '/tools/pdf-to-html', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools', isPremium: true },
    { name: 'HTML Prettifier', description: 'Format HTML for readability.', path: '/tools/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS Prettifier', description: 'Format CSS for readability.', path: '/tools/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'JS Beautifier', description: 'Format JavaScript for readability.', path: '/tools/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
    { name: 'CSS to Inline Style Converter', description: 'Convert a CSS stylesheet to inline styles.', path: '/tools/image-to-css-background-generator', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },

];

export const POPULAR_PATHS: string[] = [
    '/tools/word-counter',
    '/tools/image-converter',
    '/tools/json-formatter',
    '/tools/password-generator',
    '/tools/timestamp-converter',
    '/tools/url-encoder-decoder',
    '/tools/duplicate-line-remover',
    '/tools/case-converter',
    '/tools/image-resizer',
    '/tools/qr-code-generator',
    '/tools/percentage-calculator',
    '/tools/find-and-replace',
    '/tools/list-randomizer',
];

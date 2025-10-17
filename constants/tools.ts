
import type { Tool } from '../types';

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
import { ImageOptimizationCheckerIcon } from '../components/icons/ImageOptimizationCheckerIcon';
import { Base64ImageSizeCalculatorIcon } from '../components/icons/Base64ImageSizeCalculatorIcon';
import { ColorPickerFromScreenIcon } from '../components/icons/ColorPickerFromScreenIcon';
import { FaviconExtractorIcon } from '../components/icons/FaviconExtractorIcon';


// Text & List Tool Icons
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
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
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';


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


// File Converter & Utility Icons
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
import { CsvViewerIcon } from '../components/icons/CsvViewerIcon';


// Calculator & Time Tool Icons
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
import { ListRandomizerIcon } from '../components/icons/ListRandomizerIcon';


// Web & Developer Tool Icons
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';
import { BaseConversionIcon } from '../components/icons/BaseConversionIcon';
import { ScientificNotationIcon } from '../components/icons/ScientificNotationIcon';
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
import { StringToArrayIcon } from '../components/icons/StringToArrayIcon';
import { ArrayToStringIcon } from '../components/icons/ArrayToStringIcon';
import { XmlValidatorIcon } from '../components/icons/XmlValidatorIcon';
import { FontStackGeneratorIcon } from '../components/icons/FontStackGeneratorIcon';
import { HtmlBoilerplateGeneratorIcon } from '../components/icons/HtmlBoilerplateGeneratorIcon';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import { LocalStorageViewerIcon } from '../components/icons/LocalStorageViewerIcon';
import { CodeSnippetRunnerIcon } from '../components/icons/CodeSnippetRunnerIcon';
import { JsonToSqlInsertIcon } from '../components/icons/JsonToSqlInsertIcon';
import { JsonArrayShufflerIcon } from '../components/icons/JsonArrayShufflerIcon';
import { HexToDecimalConverterIcon } from '../components/icons/HexToDecimalConverterIcon';
import { CssFilterGeneratorIcon } from '../components/icons/CssFilterGeneratorIcon';
import { HtmlCommentRemoverIcon } from '../components/icons/HtmlCommentRemoverIcon';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';
// FIX: Add missing imports
import { RandomIdGeneratorIcon } from '../components/icons/RandomIdGeneratorIcon';


// Import Pages
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
import ImageOptimizationCheckerPage from '../pages/ImageOptimizationCheckerPage';
import Base64ImageSizeCalculatorPage from '../pages/Base64ImageSizeCalculatorPage';
import ColorPickerFromScreenPage from '../pages/ColorPickerFromScreenPage';
import FaviconExtractorPage from '../pages/FaviconExtractorPage';


import CaseConverterPage from '../pages/CaseConverterPage';
import WordCounterPage from '../pages/WordCounterPage';
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
import NumberPadGeneratorPage from '../pages/NumberPadGeneratorPage';
import NumberListSorterPage from '../pages/NumberListSorterPage';
import OddEvenNumberFilterPage from '../pages/OddEvenNumberFilterPage';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';
import WordCountAndCharacterCounterPage from '../pages/WordCountAndCharacterCounterPage';
import CaseConverterAllPage from '../pages/CaseConverterAllPage';
import RemoveDuplicateLinesPage from '../pages/RemoveDuplicateLinesPage';


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
import CsvViewerPage from '../pages/CsvViewerPage';


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
import ListRandomizerPage from '../pages/ListRandomizerPage';


import JsonFormatterPage from '../pages/JsonFormatterPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
import BaseConversionPage from '../pages/BaseConversionPage';
import ScientificNotationPage from '../pages/ScientificNotationPage';
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
import StringToArrayPage from '../pages/StringToArrayPage';
import ArrayToStringPage from '../pages/ArrayToStringPage';
import XmlValidatorPage from '../pages/XmlValidatorPage';
import FontStackGeneratorPage from '../pages/FontStackGeneratorPage';
import HtmlBoilerplateGeneratorPage from '../pages/HtmlBoilerplateGeneratorPage';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import JsBeautifierPage from '../pages/JsBeautifierPage';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';
import LocalStorageViewerPage from '../pages/LocalStorageViewerPage';
import CodeSnippetRunnerPage from '../pages/CodeSnippetRunnerPage';
import JsonToSqlInsertPage from '../pages/JsonToSqlInsertPage';
import JsonArrayShufflerPage from '../pages/JsonArrayShufflerPage';
import HexToDecimalConverterPage from '../pages/HexToDecimalConverterPage';
import CssFilterGeneratorPage from '../pages/CssFilterGeneratorPage';
import HtmlCommentRemoverPage from '../pages/HtmlCommentRemoverPage';
import CssCommentRemoverPage from '../pages/CssCommentRemoverPage';
import JsCommentStripperPage from '../pages/JsCommentStripperPage';
// FIX: Add missing import
import RandomIdGeneratorPage from '../pages/RandomIdGeneratorPage';

export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'Image Converter', description: 'Convert images between JPG and PNG.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Resizer', description: 'Resize images to specific dimensions or by percentage.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-purple-500', category: 'Image Tools' },
  { name: 'Image Cropper', description: 'Crop images to a specific aspect ratio or freeform.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-rose-500', category: 'Image Tools' },
  { name: 'Image Watermark', description: 'Add a watermark image to your pictures.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-rose-400', category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate images by a specific angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Apply a vintage sepia effect to images.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-amber-500', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Apply a sharpen filter to your images.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-sky-500', category: 'Image Tools' },
  { name: 'Invert Image Colors', description: 'Invert the colors of an image.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-slate-500', category: 'Image Tools' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity of your images.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Hue & Saturation', description: 'Adjust hue, saturation, and brightness.', path: '/image-hue-saturation', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: 'border-pink-400', category: 'Image Tools' },
  { name: 'Image Flipper', description: 'Flip images horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: 'border-green-400', category: 'Image Tools' },
  { name: 'Image to ASCII Art', description: 'Convert images to ASCII text art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: 'border-lime-500', category: 'Image Tools' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of your images.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: 'border-neutral-500', category: 'Image Tools' },
  { name: 'Color Palette Extractor', description: 'Extract the main colors from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-emerald-500', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick colors from an image using a magnifier.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-red-400', category: 'Image Tools' },
  { name: 'Add Border to Image', description: 'Add a solid color border to your image.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: 'border-stone-500', category: 'Image Tools' },
  { name: 'Add Rounded Corners', description: 'Apply rounded corners to your images.', path: '/add-rounded-corners', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: 'border-violet-500', category: 'Image Tools' },
  { name: 'Image Collage Maker', description: 'Create a simple 2x2 image collage.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: 'border-orange-400', category: 'Image Tools' },
  { name: 'Image to Data URL', description: 'Convert an image to a base64 Data URL string.', path: '/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: 'border-indigo-400', category: 'Image Tools' },
  { name: 'Image DPI Changer', description: 'Change the DPI metadata of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: 'border-cyan-600', category: 'Image Tools' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your photos.', path: '/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: 'border-teal-400', category: 'Image Tools' },
  { name: 'Image Text Overlay', description: 'Add simple text overlays to your images.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: 'border-blue-400', category: 'Image Tools' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG image has transparent areas.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: 'border-slate-400', category: 'Image Tools' },
  { name: 'Image Pixelate Filter', description: 'Apply a pixelation effect to your images.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: 'border-gray-600', category: 'Image Tools' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp-converter', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: 'border-cyan-800', category: 'Image Tools' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a static GIF.', path: '/image-to-gif-converter', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: 'border-pink-600', category: 'Image Tools' },
  { name: 'Image Mirror Effect', description: 'Apply a mirror effect to your images.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: 'border-blue-300', category: 'Image Tools' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or warp your images horizontally and vertically.', path: '/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: 'border-indigo-600', category: 'Image Tools' },
  { name: 'Image Tint Adjuster', description: 'Apply a color tint to your images.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: 'border-rose-300', category: 'Image Tools' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the lightness or brightness of an image.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Threshold Filter', description: 'Create a black and white image based on a luminance threshold.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: 'border-gray-800', category: 'Image Tools' },
  { name: 'Image Dithering Effect', description: 'Apply a dithering effect for a retro look.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image to CSS Background', description: 'Generate CSS background code from an image.', path: '/image-to-css-background', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: 'border-blue-600', category: 'Image Tools' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from your images.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: 'border-red-700', category: 'Image Tools' },
  { name: 'Image Dimension Checker', description: 'Quickly find out the dimensions of an image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: 'border-green-700', category: 'Image Tools' },
  { name: 'Watermark Positioner', description: 'Precisely position a watermark on an image.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, borderColor: 'border-rose-600', category: 'Image Tools' },
  { name: 'Image Canvas Resizer', description: 'Change the canvas size without scaling the image.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, borderColor: 'border-purple-300', category: 'Image Tools' },
  { name: 'Image Hue Shifter', description: 'Rotate the hue of all colors in your image.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, borderColor: 'border-pink-500', category: 'Image Tools' },
  { name: 'Image Noise Generator', description: 'Add a random noise effect to your images.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, borderColor: 'border-gray-400', category: 'Image Tools' },
  { name: 'Base64 to Image Decoder', description: 'Decode a base64 string back into an image.', path: '/image-to-base64-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: 'border-blue-200', category: 'Image Tools' },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to transparent images.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, borderColor: 'border-gray-300', category: 'Image Tools' },
  { name: 'Black & White Converter', description: 'Convert a color image to black and white.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Tiling Previewer', description: 'See how an image looks when tiled as a background.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Color Replacer', description: 'Replace one color in an image with another.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, borderColor: 'border-red-300', category: 'Image Tools' },
  { name: 'Base64 Image Size', description: 'Calculate the file size of a base64 encoded image.', path: '/base64-image-size-calculator', Icon: Base64ImageSizeCalculatorIcon, Page: Base64ImageSizeCalculatorPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: 'border-purple-600', category: 'Image Tools', isPremium: true },
  { name: 'Bulk Image Compressor', description: 'Compress multiple images to reduce file size.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Bulk Image to Base64', description: 'Convert multiple images to base64 strings.', path: '/image-to-base64-bulk', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: 'border-yellow-600', category: 'Image Tools', isPremium: true },
  { name: 'Bulk Image to Grayscale', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale-bulk', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: 'border-gray-500', category: 'Image Tools', isPremium: true },
  { name: 'Bulk JPG to PNG', description: 'Convert multiple JPG images to PNG.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: 'border-yellow-400', category: 'Image Tools', isPremium: true },
  { name: 'Bulk PNG to JPG', description: 'Convert multiple PNG images to JPG.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: 'border-yellow-700', category: 'Image Tools', isPremium: true },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, borderColor: 'border-fuchsia-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Reflection Generator', description: 'Add a reflection effect to your images.', path: '/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, borderColor: 'border-blue-300', category: 'Image Tools', isPremium: true },
  { name: 'Image Layer Merger', description: 'Merge two images together as layers.', path: '/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image Opacity Slider', description: 'Visually adjust image opacity with a slider.', path: '/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, borderColor: 'border-gray-400', category: 'Image Tools', isPremium: true },
  { name: 'Crop to Aspect Ratio', description: 'Crop an image to a specific preset aspect ratio.', path: '/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, borderColor: 'border-rose-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Metadata Editor', description: 'Edit the EXIF and other metadata of an image.', path: '/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, borderColor: 'border-slate-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Download Button', description: 'Generate an HTML download button for an image.', path: '/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, borderColor: 'border-green-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Zoom Previewer', description: 'Preview an image with a zoom lens effect.', path: '/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, borderColor: 'border-blue-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Header Info Viewer', description: 'View the header information of an image file.', path: '/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, borderColor: 'border-gray-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, borderColor: 'border-indigo-700', category: 'Image Tools', isPremium: true },
  { name: 'Color Palette Saver', description: 'Save a color palette from an image.', path: '/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, borderColor: 'border-emerald-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Optimization Checker', description: 'Check how well an image is optimized for the web.', path: '/image-optimization-checker', Icon: ImageOptimizationCheckerIcon, Page: ImageOptimizationCheckerPage, borderColor: 'border-orange-500', category: 'Image Tools' },
  
  // Text & List Tools
  { name: 'Case Converter', description: 'Change text to uppercase, lowercase, title case, etc.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Find and Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove all line breaks from a block of text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-400', category: 'Text & List Tools' },
  { name: 'Text to Slug', description: 'Convert a string into a URL-friendly slug.', path: '/text-to-slug-converter', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-indigo-400', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text in various lengths.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-gray-400', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomly shuffle the lines in a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-purple-400', category: 'Text & List Tools' },
  { name: 'Reverse Text', description: 'Reverse the characters in a string.', path: '/reverse-text-generator', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-pink-400', category: 'Text & List Tools' },
  { name: 'Sort Lines', description: 'Sort lines alphabetically (A-Z or Z-A).', path: '/sort-lines-alphabetically', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add text to the beginning or end of each line.', path: '/add-prefix-suffix-to-lines', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-teal-400', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Delete all empty lines from a block of text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Analyze the keyword density of a text.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-orange-500', category: 'Text & List Tools' },
  { name: 'Text to Binary', description: 'Convert text to binary code.', path: '/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Binary to Text', description: 'Convert binary code to text.', path: '/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Text to Hex', description: 'Convert text to hexadecimal code.', path: '/text-to-hex', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: 'border-slate-600', category: 'Text & List Tools' },
  { name: 'Hex to Text', description: 'Convert hexadecimal code to text.', path: '/hex-to-text', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: 'border-slate-500', category: 'Text & List Tools' },
  { name: 'Text to Octal', description: 'Convert text to octal code.', path: '/text-to-octal', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: 'border-neutral-600', category: 'Text & List Tools' },
  { name: 'Octal to Text', description: 'Convert octal code to text.', path: '/octal-to-text', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: 'border-neutral-500', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Remove leading, trailing, and duplicate spaces.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-stone-500', category: 'Text & List Tools' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with smart rules.', path: '/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: 'border-red-600', category: 'Text & List Tools' },
  { name: 'Sentence Case Converter', description: 'Convert text to proper sentence case.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Remove Non-Alphanumeric', description: 'Strip all non-alphanumeric characters from text.', path: '/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: 'border-zinc-500', category: 'Text & List Tools' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: 'border-amber-500', category: 'Text & List Tools' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists to find the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-cyan-700', category: 'Text & List Tools' },
  { name: 'List Intersector', description: 'Find the common items between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: 'border-green-700', category: 'Text & List Tools' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: 'border-violet-500', category: 'Text & List Tools' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of each line.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: 'border-violet-400', category: 'Text & List Tools' },
  { name: 'Text Splitter', description: 'Split a large block of text into smaller chunks.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: 'border-orange-400', category: 'Text & List Tools' },
  { name: 'Text Repeater', description: 'Repeat a string of text multiple times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: 'border-emerald-600', category: 'Text & List Tools' },
  { name: 'Remove Numbers', description: 'Remove all numbers from a block of text.', path: '/remove-numbers', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: 'border-lime-600', category: 'Text & List Tools' },
  { name: 'Remove Letters', description: 'Remove all letters from a block of text.', path: '/remove-letters', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: 'border-lime-700', category: 'Text & List Tools' },
  { name: 'Rot13 Cipher', description: 'Encrypt or decrypt text using the Rot13 cipher.', path: '/rot13-cipher', Icon: Rot13Icon, Page: Rot13Page, borderColor: 'border-fuchsia-600', category: 'Text & List Tools' },
  { name: 'Custom Delimiter Converter', description: 'Convert a list from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Alphabetical List Generator', description: 'Generate a list of letters from A to Z.', path: '/alphabetical-list-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a start, end, and step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: 'border-gray-800', category: 'Text & List Tools' },
  { name: 'Custom Text Encoder', description: 'Encode/decode text with custom character mapping.', path: '/custom-text-encoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: 'border-rose-500', category: 'Text & List Tools' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from YouTube page source.', path: '/youtube-content-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Link Extractor', description: 'Extract all URLs from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: 'border-blue-600', category: 'Text & List Tools' },
  { name: 'Line Counter', description: 'Count the number of lines in a block of text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Vigenere Cipher', description: 'Encrypt/decrypt text using the Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Caesar Cipher', description: 'Encrypt/decrypt text using the Caesar cipher.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Text to ASCII Art Box', description: 'Create a simple ASCII art box around your text.', path: '/text-to-ascii-art-box', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: 'border-lime-600', category: 'Text & List Tools' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from a block of text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible characters in text.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character in a string.', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: 'border-blue-300', category: 'Text & List Tools' },
  { name: 'Number Pad Generator', description: 'Generate a list of zero-padded numbers.', path: '/number-pad-generator', Icon: NumberPadGeneratorIcon, Page: NumberPadGeneratorPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Sort Numbers List', description: 'Sort a list of numbers in ascending or descending order.', path: '/sort-numbers-list', Icon: NumberListSorterIcon, Page: NumberListSorterPage, borderColor: 'border-yellow-600', category: 'Text & List Tools' },
  { name: 'Odd/Even Number Filter', description: 'Filter a list to keep only odd or even numbers.', path: '/odd-even-number-filter', Icon: OddEvenNumberFilterIcon, Page: OddEvenNumberFilterPage, borderColor: 'border-lime-500', category: 'Text & List Tools' },
  { name: 'Character Set Converter', description: 'Convert text between character sets like UTF-8, ISO-8859-1, etc.', path: '/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, borderColor: 'border-indigo-500', category: 'Text & List Tools', isPremium: true },
  { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, borderColor: 'border-blue-700', category: 'Text & List Tools', isPremium: true },
  
  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into a single document.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF file.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Attempt to remove password restrictions from a PDF.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-800', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata (author, title, etc.) of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-400', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG', description: 'Convert each page of a PDF to a JPG image.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG', description: 'Convert each page of a PDF to a PNG image.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF', description: 'Convert one or more JPG images into a single PDF file.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF', description: 'Convert one or more PNG images into a single PDF file.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to Text', description: 'Extract all text content from a PDF file.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to every page of a PDF.', path: '/pdf-watermark-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to every page of a PDF.', path: '/pdf-watermark-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Encrypt PDF', description: 'Add a password to protect your PDF file.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Reorder PDF Pages', description: 'Visually reorder the pages of a PDF file.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF file at once.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Deleter', description: 'Remove specific pages from a PDF file.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Cropper', description: 'Crop the pages of a PDF file.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Viewer', description: 'A simple in-browser PDF viewer.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to scalable SVG images.', path: '/pdf-to-svg-converter', Icon: PdfToSvgIcon, Page: PdfToSvgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF file.', path: '/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Document Cropper', description: 'Crop PDF documents.', path: '/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Annotation Viewer', description: 'View annotations and comments in a PDF.', path: '/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Size Checker', description: 'Check the size of pages in a PDF.', path: '/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Compression Ratio', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF.', path: '/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to DOCX', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, borderColor: 'border-purple-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Annotation Creator', description: 'Add annotations to a PDF.', path: '/pdf-annotation-creator', Icon: PdfAnnotationCreatorIcon, Page: PdfAnnotationCreatorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages of a PDF.', path: '/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF.', path: '/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Inserter', description: 'Insert pages into a PDF.', path: '/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF.', path: '/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Content Cleaner', description: 'Clean content from a PDF.', path: '/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Counter (Range)', description: 'Count pages within a specific range of a PDF.', path: '/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF Page Number Format Changer', description: 'Change the format of page numbers in a PDF.', path: '/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Text Replacer', description: 'Find and replace text in a PDF.', path: '/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to HTML Converter', description: 'Convert PDF files to HTML.', path: '/pdf-to-html-converter', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Security Level Checker', description: 'Check the security level of a PDF.', path: '/pdf-security-level-checker', Icon: PdfSecurityLevelCheckerIcon, Page: PdfSecurityLevelCheckerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF file for size.', path: '/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },

  // File Converters & Utilities
  { name: 'DOCX to PDF', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Excel to CSV', description: 'Convert Excel (XLSX) files to CSV.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV to Excel', description: 'Convert CSV files to Excel (XLSX).', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'TSV to CSV', description: 'Convert Tab-Separated Values to Comma-Separated Values.', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Merger', description: 'Merge multiple text-based files into one.', path: '/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of any file.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Extension Changer', description: 'Change the extension of a file without converting it.', path: '/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'DOCX to Text', description: 'Extract text content from a DOCX file.', path: '/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'PPTX to Text', description: 'Extract text content from a PPTX file.', path: '/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Size Converter', description: 'Convert between bytes, KB, MB, and GB.', path: '/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Type Checker', description: 'Check the file type based on its contents.', path: '/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV Viewer', description: 'View CSV data in a table format.', path: '/csv-viewer', Icon: CsvViewerIcon, Page: CsvViewerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages, % of a number, and % change.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-blue-800', category: 'Calculators & Time Tools' },
  { name: 'Date Difference', description: 'Calculate the duration between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-sky-500', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Calculate age from a date of birth.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-rose-500', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Convert times between different time zones.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'Convert between various units like length, mass, temperature, speed, and more.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-green-500', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Calculate monthly loan payments.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-emerald-500', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax for a given price and rate.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-amber-500', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate the tip and total for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-yellow-500', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate a random number within a specified range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios and dimensions.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-500', category: 'Calculators & Time Tools' },
  { name: 'Scientific Calculator', description: 'A calculator with scientific functions.', path: '/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Compound Interest Calc', description: 'Calculate compound interest over time.', path: '/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Countdown Timer', description: 'A simple countdown timer.', path: '/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Stopwatch', description: 'A simple stopwatch with lap functionality.', path: '/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Date Format Converter', description: 'Convert dates between different formats.', path: '/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Day of the Week', description: 'Find the day of the week for any date.', path: '/day-of-the-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Leap Year Checker', description: 'Check if a given year is a leap year.', path: '/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Time Adder/Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Business Day Calculator', description: 'Calculate a date by adding or subtracting business days.', path: '/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mean, Median, & Mode', description: 'Calculate the mean, median, and mode of a set of numbers.', path: '/mean-median-mode', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Standard Deviation Calc', description: 'Calculate the standard deviation of a set of numbers.', path: '/standard-deviation-calculator', Icon: StandardDeviationIcon, Page: StandardDeviationPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Z-Score Calculator', description: 'Calculate the Z-score of a data point.', path: '/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations (ax² + bx + c = 0).', path: '/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Pythagorean Theorem', description: 'Solve for the hypotenuse of a right triangle.', path: '/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Area Calculator', description: 'Calculate the area of common shapes.', path: '/area-calculator', Icon: AreaCalculatorIcon, Page: AreaCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Volume Calculator', description: 'Calculate the volume of common 3D shapes.', path: '/volume-calculator', Icon: VolumeCalculatorIcon, Page: VolumeCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Fraction to Decimal', description: 'Convert fractions to decimal numbers.', path: '/fraction-to-decimal', Icon: FractionDecimalConverterIcon, Page: FractionDecimalConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Decimal to Fraction', description: 'Convert decimal numbers to fractions.', path: '/decimal-to-fraction', Icon: DecimalFractionConverterIcon, Page: DecimalFractionConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Binary Calculator', description: 'Perform calculations with binary numbers.', path: '/binary-calculator', Icon: BinaryCalculatorIcon, Page: BinaryCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Octal Calculator', description: 'Perform calculations with octal numbers.', path: '/octal-calculator', Icon: OctalCalculatorIcon, Page: OctalCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Hexadecimal Calculator', description: 'Perform calculations with hexadecimal numbers.', path: '/hexadecimal-calculator', Icon: HexadecimalCalculatorIcon, Page: HexadecimalCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'World Clock', description: 'View the current time in major cities around the world.', path: '/world-clock', Icon: WorldClockIcon, Page: WorldClockPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Date to Day of Year', description: 'Find the day number of the year for a given date.', path: '/date-to-day-of-year', Icon: DateToDayOfYearIcon, Page: DateToDayOfYearPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Random Date Generator', description: 'Generate a random date within a specified range.', path: '/random-date-generator', Icon: RandomDateGeneratorIcon, Page: RandomDateGeneratorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mortgage Refinance Calc', description: 'Calculate if refinancing your mortgage is a good option.', path: '/mortgage-refinance-calculator', Icon: MortgageRefinanceCalculatorIcon, Page: MortgageRefinanceCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Retirement Savings Calc', description: 'Estimate your retirement savings.', path: '/retirement-savings-calculator', Icon: RetirementSavingsCalculatorIcon, Page: RetirementSavingsCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Loan Amortization', description: 'Generate a loan amortization schedule.', path: '/loan-amortization-schedule', Icon: LoanAmortizationScheduleIcon, Page: LoanAmortizationSchedulePage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/currency-converter', Icon: CurrencyConverterIcon, Page: CurrencyConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Time Duration Formatter', description: 'Format a duration in seconds to HH:MM:SS.', path: '/time-duration-formatter', Icon: TimeDurationFormatterIcon, Page: TimeDurationFormatterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/square-root-calculator', Icon: SquareRootCalculatorIcon, Page: SquareRootCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/factorial-calculator', Icon: FactorialCalculatorIcon, Page: FactorialCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Random Coin Flip', description: 'Flip a virtual coin.', path: '/random-coin-flip', Icon: RandomCoinFlipIcon, Page: RandomCoinFlipPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Random Dice Roll', description: 'Roll a virtual die.', path: '/random-dice-roll', Icon: RandomDiceRollIcon, Page: RandomDiceRollPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'List Randomizer', description: 'Pick a random item from a list.', path: '/list-randomizer', Icon: ListRandomizerIcon, Page: ListRandomizerPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Base Converter', description: 'Convert numbers between binary, octal, decimal, and hex.', path: '/base-converter', Icon: BaseConversionIcon, Page: BaseConversionPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Scientific Notation Converter', description: 'Convert numbers to and from scientific notation.', path: '/scientific-notation-converter', Icon: ScientificNotationIcon, Page: ScientificNotationPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },

  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and beautify your JSON data.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-pink-500', category: 'Web & Developer Tools' },
  { name: 'Password Generator', description: 'Generate secure, random passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'Random ID Generator', description: 'Generate random IDs of a specified length.', path: '/random-id-generator', Icon: RandomIdGeneratorIcon, Page: RandomIdGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'QR Code Generator', description: 'Generate QR codes from text or URLs.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON Validator', description: 'Validate and check for errors in your JSON data.', path: '/json-validator', Icon: JsonValidatorIcon, Page: JsonValidatorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'Base64 Text Encoder/Decoder', description: 'Encode and decode text using Base64.', path: '/base64-text-encoder-decoder', Icon: Base64TextEncoderDecoderIcon, Page: Base64TextEncoderDecoderPage, borderColor: 'border-gray-500', category: 'Web & Developer Tools' },
  { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash from a string.', path: '/md5-hash-generator', Icon: Md5HashGeneratorIcon, Page: Md5HashGeneratorPage, borderColor: 'border-red-500', category: 'Web & Developer Tools' },
  { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash from a string.', path: '/sha256-hash-generator', Icon: Sha256HashGeneratorIcon, Page: Sha256HashGeneratorPage, borderColor: 'border-red-600', category: 'Web & Developer Tools' },
  { name: 'JSON Minifier', description: 'Minify JSON data to reduce its size.', path: '/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
  // FIXME: Commenting out tools with missing components. These will be added later.
  // { name: 'HEX/RGB Color Converter', description: 'Convert between HEX and RGB color codes.', path: '/hex-rgb-converter', Icon: HexRgbConverterIcon, Page: HexRgbConverterPage, borderColor: 'border-rose-500', category: 'Web & Developer Tools' },
  // { name: 'UUID/GUID Generator', description: 'Generate universally unique identifiers (UUIDs).', path: '/uuid-generator', Icon: UuidGeneratorIcon, Page: UuidGeneratorPage, borderColor: 'border-purple-500', category: 'Web & Developer Tools' },
  // { name: 'CSS Border Radius Generator', description: 'Visually create CSS border-radius code.', path: '/css-border-radius-generator', Icon: CssBorderRadiusGeneratorIcon, Page: CssBorderRadiusGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  // { name: 'JSON to CSV', description: 'Convert JSON objects to CSV format.', path: '/json-to-csv', Icon: JsonToCsvIcon, Page: JsonToCsvPage, borderColor: 'border-emerald-500', category: 'Web & Developer Tools' },
  // { name: 'CSV to JSON', description: 'Convert CSV data to JSON format.', path: '/csv-to-json', Icon: CsvToJsonIcon, Page: CsvToJsonPage, borderColor: 'border-emerald-500', category: 'Web & Developer Tools' },
  { name: 'CSS Box Shadow Generator', description: 'Visually create CSS box-shadow code.', path: '/css-box-shadow-generator', Icon: CssBoxShadowGeneratorIcon, Page: CssBoxShadowGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Color Contrast Checker', description: 'Check the contrast ratio of two colors for accessibility.', path: '/color-contrast-checker', Icon: ColorContrastCheckerIcon, Page: ColorContrastCheckerPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Regex Tester', description: 'Test your regular expressions against a string.', path: '/regex-tester', Icon: RegexTesterIcon, Page: RegexTesterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML Entity Encoder/Decoder', description: 'Encode/decode HTML special characters.', path: '/html-entity-encoder-decoder', Icon: HtmlEntityEncoderDecoderIcon, Page: HtmlEntityEncoderDecoderPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML Tag Stripper', description: 'Remove all HTML tags from a block of text.', path: '/html-tag-stripper', Icon: HtmlTagStripperIcon, Page: HtmlTagStripperPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON to XML Converter', description: 'Convert JSON data to XML format.', path: '/json-to-xml-converter', Icon: JsonToXmlConverterIcon, Page: JsonToXmlConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'XML to JSON Converter', description: 'Convert XML data to JSON format.', path: '/xml-to-json-converter', Icon: XmlToJsonConverterIcon, Page: XmlToJsonConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'URL Parser', description: 'Break down a URL into its components.', path: '/url-parser', Icon: UrlParserIcon, Page: UrlParserPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JS Minifier', description: 'Minify JavaScript code to reduce its size.', path: '/js-minifier', Icon: JsMinifierIcon, Page: JsMinifierPage, borderColor: 'border-yellow-600', category: 'Web & Developer Tools' },
  { name: 'CSS Gradient Generator', description: 'Visually create CSS linear gradients.', path: '/css-gradient-generator', Icon: CssGradientGeneratorIcon, Page: CssGradientGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Decimal to Binary', description: 'Convert decimal numbers to binary.', path: '/decimal-to-binary', Icon: DecimalToBinaryConverterIcon, Page: DecimalToBinaryConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Binary to Decimal', description: 'Convert binary numbers to decimal.', path: '/binary-to-decimal', Icon: BinaryToDecimalConverterIcon, Page: BinaryToDecimalConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: '.htaccess Redirect Generator', description: 'Generate .htaccess redirect rules.', path: '/htaccess-redirect-generator', Icon: HtaccessRedirectGeneratorIcon, Page: HtaccessRedirectGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'XML Formatter', description: 'Format and beautify your XML data.', path: '/xml-formatter', Icon: XmlFormatterIcon, Page: XmlFormatterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'YAML to JSON Converter', description: 'Convert YAML data to JSON format.', path: '/yaml-to-json-converter', Icon: YamlToJsonConverterIcon, Page: YamlToJsonConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Simple SVG Editor', description: 'Edit SVG code and see a live preview.', path: '/svg-editor', Icon: SvgEditorIcon, Page: SvgEditorPage, borderColor: 'border-purple-500', category: 'Web & Developer Tools' },
  { name: 'HTML to Markdown', description: 'Convert HTML to Markdown format.', path: '/html-to-markdown-converter', Icon: HtmlToMarkdownConverterIcon, Page: HtmlToMarkdownConverterPage, borderColor: 'border-gray-600', category: 'Web & Developer Tools' },
  { name: 'Markdown to HTML', description: 'Render Markdown as HTML.', path: '/markdown-to-html-renderer', Icon: MarkdownToHtmlRendererIcon, Page: MarkdownToHtmlRendererPage, borderColor: 'border-gray-600', category: 'Web & Developer Tools' },
  { name: 'Password Strength Checker', description: 'Check the strength of your password.', path: '/password-strength-checker', Icon: PasswordStrengthCheckerIcon, Page: PasswordStrengthCheckerPage, borderColor: 'border-orange-600', category: 'Web & Developer Tools' },
  { name: 'CSS Prefixer', description: 'Add vendor prefixes to CSS properties.', path: '/css-prefixer', Icon: CssPrefixerIcon, Page: CssPrefixerPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'WebP Support Detection', description: 'Check if your browser supports the WebP image format.', path: '/webp-detection', Icon: WebpDetectionIcon, Page: WebpDetectionPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'CSS Grid Playground', description: 'Visually experiment with CSS Grid layouts.', path: '/css-grid-playground', Icon: CssGridPlaygroundIcon, Page: CssGridPlaygroundPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
  { name: 'CSS Flexbox Playground', description: 'Visually experiment with CSS Flexbox layouts.', path: '/css-flexbox-playground', Icon: CssFlexboxPlaygroundIcon, Page: CssFlexboxPlaygroundPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
  { name: 'JSON to PHP Array', description: 'Convert JSON objects to PHP arrays.', path: '/json-to-php-array', Icon: JsonToPhpArrayIcon, Page: JsonToPhpArrayPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON to Python Dict', description: 'Convert JSON objects to Python dictionaries.', path: '/json-to-python-dict', Icon: JsonToPythonDictIcon, Page: JsonToPythonDictPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Color Palette Generator', description: 'Generate color palettes from a base color.', path: '/color-palette-generator', Icon: ColorPaletteGeneratorIcon, Page: ColorPaletteGeneratorPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'HTTP Status Code Lookup', description: 'Look up the meaning of HTTP status codes.', path: '/http-status-code-lookup', Icon: HttpStatusCodeLookupIcon, Page: HttpStatusCodeLookupPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'String to Array', description: 'Convert a string with delimiters to an array.', path: '/string-to-array', Icon: StringToArrayIcon, Page: StringToArrayPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'Array to String', description: 'Convert an array to a string with a delimiter.', path: '/array-to-string', Icon: ArrayToStringIcon, Page: ArrayToStringPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'XML Validator', description: 'Validate and check for errors in your XML data.', path: '/xml-validator', Icon: XmlValidatorIcon, Page: XmlValidatorPage, borderColor: 'border-indigo-600', category: 'Web & Developer Tools' },
  { name: 'CSS Font Stack Generator', description: 'Generate common CSS font stacks.', path: '/font-stack-generator', Icon: FontStackGeneratorIcon, Page: FontStackGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML5 Boilerplate', description: 'Generate a basic HTML5 boilerplate.', path: '/html-boilerplate-generator', Icon: HtmlBoilerplateGeneratorIcon, Page: HtmlBoilerplateGeneratorPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'HTML Prettifier', description: 'Format and beautify your HTML code.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'CSS Prettifier', description: 'Format and beautify your CSS code.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'JS Beautifier', description: 'Format and beautify your JavaScript code.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: 'border-yellow-500', category: 'Web & Developer Tools' },
  { name: 'String Concatenator', description: 'Combine lines of text into a single string with a delimiter.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'Text Diff Checker', description: 'Compare two blocks of text to see the differences.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: 'border-cyan-800', category: 'Web & Developer Tools' },
  { name: 'Plain Text to HTML', description: 'Convert plain text to HTML with line breaks.', path: '/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, borderColor: 'border-emerald-500', category: 'Web & Developer Tools' },
  { name: 'HTML to Plain Text', description: 'Strip HTML tags to get plain text.', path: '/html-to-plain-text', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, borderColor: 'border-emerald-600', category: 'Web & Developer Tools' },
  { name: 'Local Storage Viewer', description: 'View the contents of your browser\'s local storage.', path: '/local-storage-viewer', Icon: LocalStorageViewerIcon, Page: LocalStorageViewerPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'CSS Filter Generator', description: 'Visually create CSS filter code.', path: '/css-filter-generator', Icon: CssFilterGeneratorIcon, Page: CssFilterGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Screen Color Picker', description: 'Pick any color from your screen.', path: '/color-picker-from-screen', Icon: ColorPickerFromScreenIcon, Page: ColorPickerFromScreenPage, borderColor: 'border-rose-500', category: 'Web & Developer Tools' },
  { name: 'Favicon Extractor', description: 'Extract the favicon from a website.', path: '/favicon-extractor', Icon: FaviconExtractorIcon, Page: FaviconExtractorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Hex to Decimal', description: 'Convert hexadecimal numbers to decimal.', path: '/hex-to-decimal', Icon: HexToDecimalConverterIcon, Page: HexToDecimalConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML Comment Remover', description: 'Remove all HTML comments from a block of code.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: 'border-orange-600', category: 'Web & Developer Tools' },
  { name: 'CSS Comment Remover', description: 'Remove all comments from a block of CSS code.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'JS Comment Stripper', description: 'Remove all comments from a block of JavaScript code.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: 'border-yellow-500', category: 'Web & Developer Tools' },
  { name: 'API Tester', description: 'A Postman-like tool for testing APIs.', path: '/api-tester', Icon: ApiTesterIcon, Page: ApiTesterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
  { name: '.htaccess Auth Generator', description: 'Generate .htaccess files for password protection.', path: '/htaccess-auth-generator', Icon: HtaccessAuthGeneratorIcon, Page: HtaccessAuthGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
  { name: 'JSON Data Extractor', description: 'Extract data from JSON using a path.', path: '/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools', isPremium: true },
  { name: 'Code Snippet Runner', description: 'Run HTML, CSS, and JS snippets in the browser.', path: '/code-snippet-runner', Icon: CodeSnippetRunnerIcon, Page: CodeSnippetRunnerPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
  { name: 'JSON to SQL Insert', description: 'Convert JSON data to SQL INSERT statements.', path: '/json-to-sql-insert', Icon: JsonToSqlInsertIcon, Page: JsonToSqlInsertPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
  { name: 'JSON Array Shuffler', description: 'Randomly shuffle the elements of a JSON array.', path: '/json-array-shuffler', Icon: JsonArrayShufflerIcon, Page: JsonArrayShufflerPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools', isPremium: true },
];

export const POPULAR_PATHS: string[] = [
  '/image-converter',
  '/image-resizer',
  '/json-formatter',
  '/password-generator',
  '/word-counter',
  '/duplicate-line-remover',
  '/qr-code-generator',
  '/timestamp-converter',
  '/percentage-calculator',
  '/url-encoder-decoder',
  '/case-converter',
  '/merge-pdf'
];

import { Tool } from '../types';

// Icon Imports
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
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
import { HtmlCommentRemoverIcon } from '../components/icons/HtmlCommentRemoverIcon';
import { CssCommentRemoverIcon } from '../components/icons/CssCommentRemoverIcon';
import { JsCommentStripperIcon } from '../components/icons/JsCommentStripperIcon';
import { LineCounterIcon } from '../components/icons/LineCounterIcon';
import { VigenereCipherIcon } from '../components/icons/VigenereCipherIcon';
import { CaesarCipherIcon } from '../components/icons/CaesarCipherIcon';
import { TextToAsciiArtViewerIcon } from '../components/icons/TextToAsciiArtViewerIcon';
import { EmojiStripperIcon } from '../components/icons/EmojiStripperIcon';
import { InvisibleCharacterViewerIcon } from '../components/icons/InvisibleCharacterViewerIcon';
import { TextCaseFlipperIcon } from '../components/icons/TextCaseFlipperIcon';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
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
import { DocxToPdfIcon } from '../components/icons/DocxToPdfIcon';
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
import { BaseConversionIcon } from '../components/icons/BaseConversionIcon';
import { ScientificNotationIcon } from '../components/icons/ScientificNotationIcon';
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';
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
import { ImageOptimizationCheckerIcon } from '../components/icons/ImageOptimizationCheckerIcon';
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
import { CssFilterGeneratorIcon } from '../components/icons/CssFilterGeneratorIcon';
import { ColorPickerFromScreenIcon } from '../components/icons/ColorPickerFromScreenIcon';
import { CsvViewerIcon } from '../components/icons/CsvViewerIcon';
import { LocalStorageViewerIcon } from '../components/icons/LocalStorageViewerIcon';
import { CodeSnippetRunnerIcon } from '../components/icons/CodeSnippetRunnerIcon';
import { FaviconExtractorIcon } from '../components/icons/FaviconExtractorIcon';
import { JsonToSqlInsertIcon } from '../components/icons/JsonToSqlInsertIcon';
import { JsonArrayShufflerIcon } from '../components/icons/JsonArrayShufflerIcon';
import { HexToDecimalConverterIcon } from '../components/icons/HexToDecimalConverterIcon';
import { RandomIdGeneratorIcon } from '../components/icons/RandomIdGeneratorIcon';

// Page Imports
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
import DocxToPdfPage from '../pages/DocxToPdfPage';
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
import BaseConversionPage from '../pages/BaseConversionPage';
import ScientificNotationPage from '../pages/ScientificNotationPage';
import NumberPadGeneratorPage from '../pages/NumberPadGeneratorPage';
import NumberListSorterPage from '../pages/NumberListSorterPage';
import OddEvenNumberFilterPage from '../pages/OddEvenNumberFilterPage';
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
import ImageOptimizationCheckerPage from '../pages/ImageOptimizationCheckerPage';
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
import CssFilterGeneratorPage from '../pages/CssFilterGeneratorPage';
import ColorPickerFromScreenPage from '../pages/ColorPickerFromScreenPage';
import CsvViewerPage from '../pages/CsvViewerPage';
import LocalStorageViewerPage from '../pages/LocalStorageViewerPage';
import CodeSnippetRunnerPage from '../pages/CodeSnippetRunnerPage';
import FaviconExtractorPage from '../pages/FaviconExtractorPage';
import JsonToSqlInsertPage from '../pages/JsonToSqlInsertPage';
import JsonArrayShufflerPage from '../pages/JsonArrayShufflerPage';
import HexToDecimalConverterPage from '../pages/HexToDecimalConverterPage';
import RandomIdGeneratorPage from '../pages/RandomIdGeneratorPage';


export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'Image Resizer', description: 'Resize images to specific dimensions or percentages.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, category: 'Image Tools', borderColor: 'border-purple-500' },
  { name: 'Image Cropper', description: 'Crop images with a visual editor and aspect ratios.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, category: 'Image Tools', borderColor: 'border-rose-500' },
  { name: 'Image Watermark', description: 'Add a custom image watermark to your pictures.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, category: 'Image Tools', borderColor: 'border-rose-400' },
  { name: 'Image Rotator', description: 'Rotate images by any angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, category: 'Image Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, category: 'Image Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone effect to your images.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, category: 'Image Tools', borderColor: 'border-amber-500' },
  { name: 'Image Sharpen Filter', description: 'Apply a sharpen effect to your images.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, category: 'Image Tools', borderColor: 'border-sky-500' },
  { name: 'Image Invert Colors', description: 'Invert the colors of your image.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, category: 'Image Tools', borderColor: 'border-slate-500' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity of your images.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL values of your image.', path: '/image-hsl-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, category: 'Image Tools', borderColor: 'border-pink-400' },
  { name: 'Image Flipper', description: 'Flip images horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, category: 'Image Tools', borderColor: 'border-green-400' },
  { name: 'Image to ASCII Art', description: 'Convert images to text-based ASCII art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, category: 'Image Tools', borderColor: 'border-lime-500' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of your images.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, category: 'Image Tools', borderColor: 'border-neutral-500' },
  { name: 'Color Palette Extractor', description: 'Extract a color palette from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, category: 'Image Tools', borderColor: 'border-emerald-500' },
  { name: 'Image Color Picker', description: 'Pick a color from an image using a magnifier.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, category: 'Image Tools', borderColor: 'border-red-400' },
  { name: 'Add Border to Image', description: 'Add a solid color border to an image.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, category: 'Image Tools', borderColor: 'border-stone-500' },
  { name: 'Add Rounded Corners', description: 'Apply rounded corners to an image.', path: '/add-rounded-corners-to-image', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, category: 'Image Tools', borderColor: 'border-violet-500' },
  { name: 'Image Collage Maker (2x2)', description: 'Create a 2x2 collage from four images.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, category: 'Image Tools', borderColor: 'border-orange-400' },
  { name: 'Image to Data URL', description: 'Convert an image file to a Base64 Data URL.', path: '/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, category: 'Image Tools', borderColor: 'border-indigo-400' },
  { name: 'Image DPI Changer (JPG only)', description: 'Change the DPI metadata of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, category: 'Image Tools', borderColor: 'border-cyan-600' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your photos.', path: '/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, category: 'Image Tools', borderColor: 'border-teal-400' },
  { name: 'Image Text Overlay', description: 'Add text over an image with position and color controls.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, category: 'Image Tools', borderColor: 'border-blue-400' },
  { name: 'PNG Transparency Checker', description: 'View a PNG image on a checkerboard background.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, category: 'Image Tools', borderColor: 'border-slate-400' },
  { name: 'Image Pixelate Filter', description: 'Apply a pixelation effect to your images.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, category: 'Image Tools', borderColor: 'border-gray-600' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, category: 'Image Tools', borderColor: 'border-cyan-800' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a GIF.', path: '/image-to-gif', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, category: 'Image Tools', borderColor: 'border-pink-600' },
  { name: 'Image Mirror Effect', description: 'Apply a horizontal or vertical mirror effect.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, category: 'Image Tools', borderColor: 'border-blue-300' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or warp an image horizontally and vertically.', path: '/image-skew-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, category: 'Image Tools', borderColor: 'border-indigo-600' },
  { name: 'Image Tint Adjuster', description: 'Apply a color tint to an image.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, category: 'Image Tools', borderColor: 'border-rose-300' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the lightness or brightness of an image.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'Image Threshold Filter', description: 'Apply a black and white threshold effect.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, category: 'Image Tools', borderColor: 'border-gray-800' },
  { name: 'Image Dithering Effect', description: 'Apply a 1-bit dithering effect to an image.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from images.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, category: 'Image Tools', borderColor: 'border-red-700' },
  { name: 'Image Dimension Checker', description: 'Quickly check the dimensions of an image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, category: 'Image Tools', borderColor: 'border-green-700' },
  { name: 'Image Watermark Positioner', description: 'Place a watermark in 9 different positions.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, category: 'Image Tools', borderColor: 'border-rose-600' },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image without resizing the image.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, category: 'Image Tools', borderColor: 'border-purple-300' },
  { name: 'Image Hue Shifter', description: 'Shift the hue of an image.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, category: 'Image Tools', borderColor: 'border-pink-500' },
  { name: 'Image Noise Generator', description: 'Add a noise effect to an image.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, category: 'Image Tools', borderColor: 'border-gray-400' },
  { name: 'Base64 to Image', description: 'Decode a Base64 string to an image.', path: '/base64-to-image', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, category: 'Image Tools', borderColor: 'border-blue-200' },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to an image.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, category: 'Image Tools', borderColor: 'border-gray-300' },
  { name: 'Image to Black & White', description: 'Convert a color image to black and white.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Image Tiling Previewer', description: 'Preview how an image looks when tiled.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Image Color Replacer', description: 'Replace one color in an image with another.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, category: 'Image Tools', borderColor: 'border-red-300' },
  { name: 'Base64 Image Size Calculator', description: 'Calculate the approximate file size of a Base64 image.', path: '/base64-image-size-calculator', Icon: Base64ImageSizeCalculatorIcon, Page: Base64ImageSizeCalculatorPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, category: 'Image Tools', borderColor: 'border-purple-600', isPremium: true },
  { name: 'Image Compressor (Bulk)', description: 'Compress multiple images to reduce file size.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, category: 'Image Tools', borderColor: 'border-purple-400', isPremium: true },
  { name: 'Image to Base64 (Bulk)', description: 'Encode multiple images to Base64 strings.', path: '/image-to-base64', Icon: ImageToBase64Icon, Page: ImageToBase64Page, category: 'Image Tools', borderColor: 'border-yellow-600', isPremium: true },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, category: 'Image Tools', borderColor: 'border-gray-500', isPremium: true },
  { name: 'Bulk JPG to PNG Converter', description: 'Convert multiple JPGs to PNGs.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, category: 'Image Tools', borderColor: 'border-yellow-400', isPremium: true },
  { name: 'Bulk PNG to JPG Converter', description: 'Convert multiple PNGs to JPGs.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, category: 'Image Tools', borderColor: 'border-yellow-700', isPremium: true },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, category: 'Image Tools', borderColor: 'border-fuchsia-600', isPremium: true },
  { name: 'Image Reflection Generator', description: 'Create a reflection effect for an image.', path: '/image-reflection-generator', Icon: ImageReflectionGeneratorIcon, Page: ImageReflectionGeneratorPage, category: 'Image Tools', borderColor: 'border-blue-300', isPremium: true },
  { name: 'Image Layer Merger', description: 'Merge multiple image layers into one.', path: '/image-layer-merger', Icon: ImageLayerMergerIcon, Page: ImageLayerMergerPage, category: 'Image Tools', borderColor: 'border-purple-400', isPremium: true },
  { name: 'Image Opacity Slider', description: 'Visually adjust image opacity.', path: '/image-opacity-slider', Icon: ImageOpacitySliderIcon, Page: ImageOpacitySliderPage, category: 'Image Tools', borderColor: 'border-gray-400', isPremium: true },
  { name: 'Crop to Aspect Ratio Preset', description: 'Crop images to standard aspect ratios.', path: '/image-crop-preset', Icon: ImageCropPresetIcon, Page: ImageCropPresetPage, category: 'Image Tools', borderColor: 'border-rose-600', isPremium: true },
  { name: 'Image Metadata Editor', description: 'Edit EXIF and other metadata of an image.', path: '/image-metadata-editor', Icon: ImageMetadataEditorIcon, Page: ImageMetadataEditorPage, category: 'Image Tools', borderColor: 'border-slate-600', isPremium: true },
  { name: 'Download Button Generator', description: 'Create a download button for an image.', path: '/image-download-button-generator', Icon: ImageDownloadButtonGeneratorIcon, Page: ImageDownloadButtonGeneratorPage, category: 'Image Tools', borderColor: 'border-green-600', isPremium: true },
  { name: 'Image Zoom Previewer', description: 'Zoom into an image to see details.', path: '/image-zoom-previewer', Icon: ImageZoomPreviewerIcon, Page: ImageZoomPreviewerPage, category: 'Image Tools', borderColor: 'border-blue-700', isPremium: true },
  { name: 'Image Header Info Viewer', description: 'View technical header information of an image.', path: '/image-header-info-viewer', Icon: ImageHeaderInfoViewerIcon, Page: ImageHeaderInfoViewerPage, category: 'Image Tools', borderColor: 'border-gray-700', isPremium: true },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: ImageHistogramViewerIcon, Page: ImageHistogramViewerPage, category: 'Image Tools', borderColor: 'border-indigo-700', isPremium: true },
  { name: 'Image Color Palette Saver', description: 'Extract and save a color palette from an image.', path: '/image-color-palette-saver', Icon: ImageColorPaletteSaverIcon, Page: ImageColorPaletteSaverPage, category: 'Image Tools', borderColor: 'border-emerald-700', isPremium: true },
  { name: 'Image Optimization Checker', description: 'Analyze an image for optimization opportunities.', path: '/image-optimization-checker', Icon: ImageOptimizationCheckerIcon, Page: ImageOptimizationCheckerPage, category: 'Image Tools', borderColor: 'border-orange-500', isPremium: true },

  // Text & List Tools
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, title case, or sentence case.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list of text.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, category: 'Text & List Tools', borderColor: 'border-green-500' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Line Break Remover', description: 'Remove all line breaks from a block of text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, category: 'Text & List Tools', borderColor: 'border-blue-400' },
  { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/text-to-slug', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, category: 'Text & List Tools', borderColor: 'border-indigo-400' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-400' },
  { name: 'List Shuffler', description: 'Randomly shuffle the lines of a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, category: 'Text & List Tools', borderColor: 'border-purple-400' },
  { name: 'Reverse Text Generator', description: 'Reverse any string of text.', path: '/reverse-text', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, category: 'Text & List Tools', borderColor: 'border-pink-400' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text in alphabetical order.', path: '/sort-lines', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, category: 'Text & List Tools', borderColor: 'border-yellow-500' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add text to the beginning or end of each line.', path: '/add-prefix-suffix', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, category: 'Text & List Tools', borderColor: 'border-teal-400' },
  { name: 'Remove Empty Lines', description: 'Remove all empty lines from a block of text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, category: 'Text & List Tools', borderColor: 'border-red-400' },
  { name: 'Keyword Density Checker', description: 'Analyze text to find keyword density.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, category: 'Text & List Tools', borderColor: 'border-orange-500' },
  { name: 'Text to Binary Converter', description: 'Convert text to binary code.', path: '/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, category: 'Text & List Tools', borderColor: 'border-gray-600' },
  { name: 'Binary to Text Converter', description: 'Convert binary code to text.', path: '/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-gray-500' },
  { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal.', path: '/text-to-hex', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, category: 'Text & List Tools', borderColor: 'border-slate-600' },
  { name: 'Hex to Text Converter', description: 'Convert hexadecimal to text.', path: '/hex-to-text', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-slate-500' },
  { name: 'Text to Octal Converter', description: 'Convert text to octal.', path: '/text-to-octal', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, category: 'Text & List Tools', borderColor: 'border-neutral-600' },
  { name: 'Octal to Text Converter', description: 'Convert octal to text.', path: '/octal-to-text', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-neutral-500' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces and trim text.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, category: 'Text & List Tools', borderColor: 'border-stone-500' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/advanced-title-case', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, category: 'Text & List Tools', borderColor: 'border-red-600' },
  { name: 'Sentence Case Converter', description: 'Convert text to proper sentence case.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, category: 'Text & List Tools', borderColor: 'border-red-400' },
  { name: 'Remove Non-Alphanumeric Chars', description: 'Remove all characters that are not letters or numbers.', path: '/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, category: 'Text & List Tools', borderColor: 'border-zinc-500' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, category: 'Text & List Tools', borderColor: 'border-amber-500' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists and find the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, category: 'Text & List Tools', borderColor: 'border-cyan-700' },
  { name: 'List Intersector', description: 'Find the common items between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, category: 'Text & List Tools', borderColor: 'border-green-700' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, category: 'Text & List Tools', borderColor: 'border-violet-500' },
  { name: 'Remove Quotes from Lines', description: 'Remove leading/trailing quotes from each line.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, category: 'Text & List Tools', borderColor: 'border-violet-400' },
  { name: 'Text Splitter', description: 'Split a block of text into smaller chunks.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, category: 'Text & List Tools', borderColor: 'border-orange-400' },
  { name: 'Text Repeater', description: 'Repeat a string of text multiple times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, category: 'Text & List Tools', borderColor: 'border-emerald-600' },
  { name: 'Remove Numbers from Text', description: 'Remove all numbers from a block of text.', path: '/remove-numbers', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, category: 'Text & List Tools', borderColor: 'border-lime-600' },
  { name: 'Remove Letters from Text', description: 'Remove all letters from a block of text.', path: '/remove-letters', Icon: RemoveLettersIcon, Page: RemoveLettersPage, category: 'Text & List Tools', borderColor: 'border-lime-700' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Apply the Rot13 cipher to text.', path: '/rot13', Icon: Rot13Icon, Page: Rot13Page, category: 'Text & List Tools', borderColor: 'border-fuchsia-600' },
  { name: 'Custom Delimiter Converter', description: 'Convert a list from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from A to Z.', path: '/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-700' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a start, end, and step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-800' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode/decode text with a custom key.', path: '/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, category: 'Text & List Tools', borderColor: 'border-rose-500' },
  { name: 'Line Counter', description: 'Count the number of lines in a block of text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, category: 'Text & List Tools', borderColor: 'border-gray-500' },
  { name: 'Vigenere Cipher', description: 'Encrypt/decrypt text using the Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, category: 'Text & List Tools', borderColor: 'border-gray-700' },
  { name: 'Caesar Cipher', description: 'Encrypt/decrypt text using the Caesar cipher.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, category: 'Text & List Tools', borderColor: 'border-gray-600' },
  { name: 'Text to ASCII Art Viewer', description: 'Render text as simple ASCII art.', path: '/text-to-ascii-art', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, category: 'Text & List Tools', borderColor: 'border-lime-600' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from a block of text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, category: 'Text & List Tools', borderColor: 'border-yellow-500' },
  { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible characters.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Text Case Flipper', description: 'Flip the case of each character in the text.', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, category: 'Text & List Tools', borderColor: 'border-blue-300' },
  { name: 'String Concatenator', description: 'Join multiple lines of text into a single string.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Difference Checker', description: 'Compare two texts and highlight the differences.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, category: 'Text & List Tools', borderColor: 'border-cyan-800' },
  { name: 'Plain Text to HTML', description: 'Convert plain text to HTML with line breaks.', path: '/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, category: 'Text & List Tools', borderColor: 'border-emerald-500' },
  { name: 'Number Pad Generator', description: 'Generate a list of numbers with leading zeros.', path: '/number-pad-generator', Icon: NumberPadGeneratorIcon, Page: NumberPadGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-500' },
  { name: 'Sort Numbers List', description: 'Sort a list of numbers in ascending or descending order.', path: '/sort-numbers-list', Icon: NumberListSorterIcon, Page: NumberListSorterPage, category: 'Text & List Tools', borderColor: 'border-yellow-600' },
  { name: 'Odd/Even Number Filter', description: 'Filter a list to keep only odd or even numbers.', path: '/odd-even-filter', Icon: OddEvenNumberFilterIcon, Page: OddEvenNumberFilterPage, category: 'Text & List Tools', borderColor: 'border-lime-500' },
  { name: 'String to Array Converter', description: 'Convert a delimited string into an array.', path: '/string-to-array', Icon: StringToArrayIcon, Page: StringToArrayPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Array to String Converter', description: 'Convert an array (as string) to a delimited string.', path: '/array-to-string', Icon: ArrayToStringIcon, Page: ArrayToStringPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Word Count & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-count-and-character-counter', Icon: WordCharCounterIcon, Page: WordCountAndCharacterCounterPage, category: 'Text & List Tools', borderColor: 'border-green-500' },
  { name: 'Case Converter (All)', description: 'Convert text to uppercase, lowercase, title case, or sentence case.', path: '/case-converter-all', Icon: CaseConverterIcon, Page: CaseConverterAllPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Remove Duplicate Lines', description: 'Remove duplicate lines from a list of text.', path: '/remove-duplicate-lines', Icon: DuplicateLineRemoverIcon, Page: RemoveDuplicateLinesPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Bulk Text Replacement', description: 'Replace multiple text strings at once.', path: '/bulk-text-replacement', Icon: BulkTextReplacementIcon, Page: BulkTextReplacementPage, category: 'Text & List Tools', borderColor: 'border-blue-700', isPremium: true },
  
  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-600' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-700' },
  { name: 'PDF Password Remover', description: 'Attempt to remove password restrictions from a PDF.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-800' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-400' },
  { name: 'PDF to JPG Converter', description: 'Convert each page of a PDF to a JPG image.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to PNG Converter', description: 'Convert each page of a PDF to a PNG image.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'JPG to PDF Converter', description: 'Convert one or more JPG images to a PDF.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PNG to PDF Converter', description: 'Convert one or more PNG images to a PDF.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to Text Extractor', description: 'Extract all text from a PDF file.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-700' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to a PDF.', path: '/pdf-add-text-watermark', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to a PDF.', path: '/pdf-add-image-watermark', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Encrypt PDF', description: 'Add a password to a PDF.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Reorder PDF Pages', description: 'Visually reorder pages in a PDF.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages in a PDF.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Deleter', description: 'Delete specific pages from a PDF.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Cropper', description: 'Crop pages in a PDF.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Viewer', description: 'View a PDF in your browser.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to SVG images.', path: '/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF.', path: '/pdf-page-number-remover', Icon: PdfPageNumberRemoverIcon, Page: PdfPageNumberRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Document Cropper', description: 'Crop an entire PDF document.', path: '/pdf-document-cropper', Icon: PdfDocumentCropperIcon, Page: PdfDocumentCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: AddTextSignatureToPdfIcon, Page: AddTextSignatureToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Annotation Viewer', description: 'View annotations in a PDF.', path: '/pdf-annotation-viewer', Icon: PdfAnnotationViewerIcon, Page: PdfAnnotationViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Size Checker', description: 'Check the page sizes of a PDF.', path: '/pdf-page-size-checker', Icon: PdfPageSizeCheckerIcon, Page: PdfPageSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: PdfColorInverterIcon, Page: PdfColorInverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: PdfFileSizeCheckerIcon, Page: PdfFileSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: PdfCompressionRatioCheckerIcon, Page: PdfCompressionRatioCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF.', path: '/pdf-metadata-editor', Icon: PdfMetadataEditorIcon, Page: PdfMetadataEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: PdfGrayscaleConverterIcon, Page: PdfGrayscaleConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: PdfSecurityCheckerIcon, Page: PdfSecurityCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Annotation Creator', description: 'Create annotations in a PDF.', path: '/pdf-annotation-creator', Icon: PdfAnnotationCreatorIcon, Page: PdfAnnotationCreatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Individual PDF Page Rotator', description: 'Rotate individual pages in a PDF.', path: '/pdf-page-rotator-individual', Icon: PdfPageRotatorIndividualIcon, Page: PdfPageRotatorIndividualPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Extractor', description: 'Extract specific pages from a PDF.', path: '/pdf-page-extractor', Icon: PdfPageExtractorIcon, Page: PdfPageExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Inserter', description: 'Insert pages into a PDF.', path: '/pdf-page-inserter', Icon: PdfPageInserterIcon, Page: PdfPageInserterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Duplicator', description: 'Duplicate pages in a PDF.', path: '/pdf-page-duplicator', Icon: PdfPageDuplicatorIcon, Page: PdfPageDuplicatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Content Cleaner', description: 'Clean content from a PDF.', path: '/pdf-content-cleaner', Icon: PdfContentCleanerIcon, Page: PdfContentCleanerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Form Field Viewer', description: 'View form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: PdfFormFieldViewerIcon, Page: PdfFormFieldViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: PdfHeaderFooterRemoverIcon, Page: PdfHeaderFooterRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Watermark Position Editor', description: 'Edit watermark positions in a PDF.', path: '/pdf-watermark-position-editor', Icon: PdfWatermarkPositionEditorIcon, Page: PdfWatermarkPositionEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Counter (Range)', description: 'Count pages in a specific range of a PDF.', path: '/pdf-page-counter-range', Icon: PdfPageCounterRangeIcon, Page: PdfPageCounterRangePage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Page Number Format Changer', description: 'Change page number format in a PDF.', path: '/pdf-page-number-format-changer', Icon: PdfPageNumberFormatChangerIcon, Page: PdfPageNumberFormatChangerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Text Replacer', description: 'Find and replace text in a PDF.', path: '/pdf-text-replacer', Icon: PdfTextReplacerIcon, Page: PdfTextReplacerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF to HTML Converter', description: 'Convert a PDF to HTML.', path: '/pdf-to-html-converter', Icon: PdfToHtmlConverterIcon, Page: PdfToHtmlConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Security Level Checker', description: 'Check the security level of a PDF.', path: '/pdf-security-level-checker', Icon: PdfSecurityLevelCheckerIcon, Page: PdfSecurityLevelCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF file for size.', path: '/pdf-file-optimizer', Icon: PdfFileOptimizerIcon, Page: PdfFileOptimizerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },

  // File Converters & Utilities
  { name: 'DOCX to PDF Converter', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'PDF to DOCX Converter', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'Excel (XLSX) to CSV', description: 'Convert XLSX files to CSV.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to XLSX.', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'TSV to CSV Converter', description: 'Convert tab-separated values to comma-separated.', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Checksum Calculator', description: 'Calculate SHA-256 checksum of a file.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX to Text Extractor', description: 'Extract text from a DOCX file.', path: '/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Merger', description: 'Merge multiple files into one.', path: '/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'PPTX to Text Extractor', description: 'Extract text from a PowerPoint file.', path: '/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'File Type Checker', description: 'Check the file type based on its content.', path: '/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages, X is what % of Y, etc.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Timestamp Converter', description: 'Convert Unix timestamps to human-readable dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-blue-800' },
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, category: 'Calculators & Time Tools', borderColor: 'border-sky-500' },
  { name: 'Age Calculator', description: 'Calculate age from date of birth.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-rose-500' },
  { name: 'Time Zone Converter', description: 'Convert time between different time zones.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-indigo-500' },
  { name: 'Unit Converter', description: 'Convert between various units of measurement.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-green-500' },
  { name: 'Loan Calculator', description: 'Calculate monthly loan payments.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-emerald-500' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax for a given price.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-amber-500' },
  { name: 'Tip Calculator', description: 'Calculate the tip for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-yellow-500' },
  { name: 'Random Number Generator', description: 'Generate a random number within a range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios for images and videos.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-cyan-500' },
  { name: 'File Size Converter', description: 'Convert between bytes, KB, MB, GB.', path: '/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-purple-500' },
  { name: 'Date Format Converter', description: 'Convert dates to different formats.', path: '/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/day-of-the-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Adder / Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Mean, Median, & Mode Calculator', description: 'Calculate mean, median, and mode of a list.', path: '/mean-median-mode', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Standard Deviation Calculator', description: 'Calculate the standard deviation of a list.', path: '/standard-deviation-calculator', Icon: StandardDeviationIcon, Page: StandardDeviationPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Z-Score Calculator', description: 'Calculate the Z-Score of a data point.', path: '/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations.', path: '/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Pythagorean Theorem Solver', description: 'Solve for the hypotenuse of a right triangle.', path: '/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Area Calculator', description: 'Calculate the area of various shapes.', path: '/area-calculator', Icon: AreaCalculatorIcon, Page: AreaCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Volume Calculator', description: 'Calculate the volume of various shapes.', path: '/volume-calculator', Icon: VolumeCalculatorIcon, Page: VolumeCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Fraction to Decimal Converter', description: 'Convert fractions to decimals.', path: '/fraction-to-decimal', Icon: FractionDecimalConverterIcon, Page: FractionDecimalConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Decimal to Fraction Converter', description: 'Convert decimals to fractions.', path: '/decimal-to-fraction', Icon: DecimalFractionConverterIcon, Page: DecimalFractionConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Binary Calculator', description: 'Perform calculations with binary numbers.', path: '/binary-calculator', Icon: BinaryCalculatorIcon, Page: BinaryCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'World Clock', description: 'View the time in major cities around the world.', path: '/world-clock', Icon: WorldClockIcon, Page: WorldClockPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Date to Day of Year', description: 'Convert a date to its day number of the year.', path: '/date-to-day-of-year', Icon: DateToDayOfYearIcon, Page: DateToDayOfYearPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Duration Formatter', description: 'Format seconds into HH:MM:SS.', path: '/time-duration-formatter', Icon: TimeDurationFormatterIcon, Page: TimeDurationFormatterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/square-root-calculator', Icon: SquareRootCalculatorIcon, Page: SquareRootCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/factorial-calculator', Icon: FactorialCalculatorIcon, Page: FactorialCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Random Coin Flip', description: 'Flip a virtual coin.', path: '/random-coin-flip', Icon: RandomCoinFlipIcon, Page: RandomCoinFlipPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Random Dice Roll', description: 'Roll a virtual die.', path: '/random-dice-roll', Icon: RandomDiceRollIcon, Page: RandomDiceRollPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'List Randomizer', description: 'Pick a random item from a list.', path: '/list-randomizer', Icon: ListRandomizerIcon, Page: ListRandomizerPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Scientific Calculator', description: 'An advanced calculator for scientific functions.', path: '/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Compound Interest Calculator', description: 'Calculate compound interest over time.', path: '/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Countdown Timer', description: 'A timer that counts down from a specified time.', path: '/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Stopwatch', description: 'A digital stopwatch to time events.', path: '/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Business Day Calculator', description: 'Calculate business days between dates.', path: '/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Octal Calculator', description: 'Perform calculations with octal numbers.', path: '/octal-calculator', Icon: OctalCalculatorIcon, Page: OctalCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Hexadecimal Calculator', description: 'Perform calculations with hexadecimal numbers.', path: '/hexadecimal-calculator', Icon: HexadecimalCalculatorIcon, Page: HexadecimalCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Random Date Generator', description: 'Generate a random date within a range.', path: '/random-date-generator', Icon: RandomDateGeneratorIcon, Page: RandomDateGeneratorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Mortgage Refinance Calculator', description: 'Calculate savings from refinancing a mortgage.', path: '/mortgage-refinance-calculator', Icon: MortgageRefinanceCalculatorIcon, Page: MortgageRefinanceCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Retirement Savings Calculator', description: 'Estimate your retirement savings.', path: '/retirement-savings-calculator', Icon: RetirementSavingsCalculatorIcon, Page: RetirementSavingsCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Loan Amortization Schedule', description: 'Generate a loan amortization schedule.', path: '/loan-amortization-schedule', Icon: LoanAmortizationScheduleIcon, Page: LoanAmortizationSchedulePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },
  { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/currency-converter', Icon: CurrencyConverterIcon, Page: CurrencyConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500', isPremium: true },

  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and beautify JSON data.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'Password Generator', description: 'Generate secure, random passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-pink-500' },
  { name: 'QR Code Generator', description: 'Generate QR codes from text or URLs.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Base Conversion', description: 'Convert numbers between binary, octal, decimal, and hex.', path: '/base-converter', Icon: BaseConversionIcon, Page: BaseConversionPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Scientific Notation Converter', description: 'Convert numbers to and from scientific notation.', path: '/scientific-notation-converter', Icon: ScientificNotationIcon, Page: ScientificNotationPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Validator', description: 'Validate and check for errors in JSON data.', path: '/json-validator', Icon: JsonValidatorIcon, Page: JsonValidatorPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'Base64 Text Encoder/Decoder', description: 'Encode and decode text using Base64.', path: '/base64-text-encoder-decoder', Icon: Base64TextEncoderDecoderIcon, Page: Base64TextEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-pink-500' },
  { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash from text.', path: '/sha256-hash-generator', Icon: Sha256HashGeneratorIcon, Page: Sha256HashGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Minifier', description: 'Minify JSON data to reduce its size.', path: '/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'CSS Box Shadow Generator', description: 'Visually create CSS box-shadow styles.', path: '/css-box-shadow-generator', Icon: CssBoxShadowGeneratorIcon, Page: CssBoxShadowGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Contrast Checker', description: 'Check WCAG contrast ratio between two colors.', path: '/color-contrast-checker', Icon: ColorContrastCheckerIcon, Page: ColorContrastCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Regex Tester', description: 'Test regular expressions against a string.', path: '/regex-tester', Icon: RegexTesterIcon, Page: RegexTesterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Entity Encoder/Decoder', description: 'Encode or decode HTML special characters.', path: '/html-entity-encoder-decoder', Icon: HtmlEntityEncoderDecoderIcon, Page: HtmlEntityEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'HTML Tag Stripper', description: 'Remove all HTML tags from a block of text.', path: '/html-tag-stripper', Icon: HtmlTagStripperIcon, Page: HtmlTagStripperPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'JSON to XML Converter', description: 'Convert JSON data to XML format.', path: '/json-to-xml', Icon: JsonToXmlConverterIcon, Page: JsonToXmlConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML to JSON Converter', description: 'Convert XML data to JSON format.', path: '/xml-to-json', Icon: XmlToJsonConverterIcon, Page: XmlToJsonConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'URL Parser', description: 'Break down a URL into its components.', path: '/url-parser', Icon: UrlParserIcon, Page: UrlParserPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JS Minifier', description: 'Minify JavaScript code to reduce its size.', path: '/js-minifier', Icon: JsMinifierIcon, Page: JsMinifierPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-600' },
  { name: 'CSS Gradient Generator', description: 'Visually create CSS linear gradients.', path: '/css-gradient-generator', Icon: CssGradientGeneratorIcon, Page: CssGradientGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Decimal to Binary Converter', description: 'Convert decimal numbers to binary.', path: '/decimal-to-binary', Icon: DecimalToBinaryConverterIcon, Page: DecimalToBinaryConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Binary to Decimal Converter', description: 'Convert binary numbers to decimal.', path: '/binary-to-decimal', Icon: BinaryToDecimalConverterIcon, Page: BinaryToDecimalConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: '.htaccess Redirect Generator', description: 'Generate .htaccess redirect rules.', path: '/htaccess-redirect-generator', Icon: HtaccessRedirectGeneratorIcon, Page: HtaccessRedirectGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML Formatter', description: 'Format and beautify XML data.', path: '/xml-formatter', Icon: XmlFormatterIcon, Page: XmlFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'YAML to JSON Converter', description: 'Convert YAML to JSON format.', path: '/yaml-to-json', Icon: YamlToJsonConverterIcon, Page: YamlToJsonConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Simple SVG Editor', description: 'Edit and preview SVG code live.', path: '/svg-editor', Icon: SvgEditorIcon, Page: SvgEditorPage, category: 'Web & Developer Tools', borderColor: 'border-purple-500' },
  { name: 'HTML to Markdown Converter', description: 'Convert HTML to Markdown.', path: '/html-to-markdown', Icon: HtmlToMarkdownConverterIcon, Page: HtmlToMarkdownConverterPage, category: 'Web & Developer Tools', borderColor: 'border-gray-600' },
  { name: 'Markdown to HTML Renderer', description: 'Render Markdown as HTML.', path: '/markdown-to-html', Icon: MarkdownToHtmlRendererIcon, Page: MarkdownToHtmlRendererPage, category: 'Web & Developer Tools', borderColor: 'border-gray-600' },
  { name: 'Password Strength Checker', description: 'Check the strength of a password.', path: '/password-strength-checker', Icon: PasswordStrengthCheckerIcon, Page: PasswordStrengthCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-orange-600' },
  { name: 'CSS Prefixer', description: 'Add vendor prefixes to CSS properties.', path: '/css-prefixer', Icon: CssPrefixerIcon, Page: CssPrefixerPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'WebP Support Detection', description: 'Check if your browser supports WebP images.', path: '/webp-detection', Icon: WebpDetectionIcon, Page: WebpDetectionPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Grid Playground', description: 'Visually experiment with CSS Grid.', path: '/css-grid-playground', Icon: CssGridPlaygroundIcon, Page: CssGridPlaygroundPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Flexbox Playground', description: 'Visually experiment with CSS Flexbox.', path: '/css-flexbox-playground', Icon: CssFlexboxPlaygroundIcon, Page: CssFlexboxPlaygroundPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to PHP Array Converter', description: 'Convert JSON to a PHP array.', path: '/json-to-php-array', Icon: JsonToPhpArrayIcon, Page: JsonToPhpArrayPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to Python Dict Converter', description: 'Convert JSON to a Python dictionary.', path: '/json-to-python-dict', Icon: JsonToPythonDictIcon, Page: JsonToPythonDictPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Palette Generator', description: 'Generate color palettes from a base color.', path: '/color-palette-generator', Icon: ColorPaletteGeneratorIcon, Page: ColorPaletteGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'HTTP Status Code Lookup', description: 'Look up the meaning of HTTP status codes.', path: '/http-status-code-lookup', Icon: HttpStatusCodeLookupIcon, Page: HttpStatusCodeLookupPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML Validator', description: 'Validate and check for errors in XML data.', path: '/xml-validator', Icon: XmlValidatorIcon, Page: XmlValidatorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-600' },
  { name: 'CSS Font Stack Generator', description: 'Generate common CSS font stacks.', path: '/css-font-stack-generator', Icon: FontStackGeneratorIcon, Page: FontStackGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML5 Boilerplate Generator', description: 'Generate a basic HTML5 boilerplate.', path: '/html-boilerplate-generator', Icon: HtmlBoilerplateGeneratorIcon, Page: HtmlBoilerplateGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'CSS Filter Generator', description: 'Visually create CSS filter styles.', path: '/css-filter-generator', Icon: CssFilterGeneratorIcon, Page: CssFilterGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Picker from Screen', description: 'Pick a color from anywhere on your screen.', path: '/color-picker-from-screen', Icon: ColorPickerFromScreenIcon, Page: ColorPickerFromScreenPage, category: 'Web & Developer Tools', borderColor: 'border-rose-500' },
  { name: 'CSV Viewer', description: 'View CSV data in a table format.', path: '/csv-viewer', Icon: CsvViewerIcon, Page: CsvViewerPage, category: 'Web & Developer Tools', borderColor: 'border-purple-500' },
  { name: 'Local Storage Viewer', description: 'View your browser\'s local storage data.', path: '/local-storage-viewer', Icon: LocalStorageViewerIcon, Page: LocalStorageViewerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Favicon Extractor', description: 'Extract the favicon from a website.', path: '/favicon-extractor', Icon: FaviconExtractorIcon, Page: FaviconExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Hex to Decimal Converter', description: 'Convert hexadecimal numbers to decimal.', path: '/hex-to-decimal', Icon: HexToDecimalConverterIcon, Page: HexToDecimalConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Random ID/Key Generator', description: 'Generate random IDs or keys of a specified length.', path: '/random-id-generator', Icon: RandomIdGeneratorIcon, Page: RandomIdGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from a YouTube video page source.', path: '/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-red-500' },
  { name: 'Link Extractor from Text', description: 'Extract all links from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-blue-600' },
  { name: 'HTML Comment Remover', description: 'Remove all HTML comments from code.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, category: 'Web & Developer Tools', borderColor: 'border-orange-600' },
  { name: 'CSS Comment Remover', description: 'Remove all comments from CSS code.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'JS Comment Stripper', description: 'Remove all comments from JavaScript code.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-500' },
  { name: 'HTML Prettifier / Beautifier', description: 'Format and beautify HTML code.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'CSS Prettifier / Beautifier', description: 'Format and beautify CSS code.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'JS Beautifier / Prettifier', description: 'Format and beautify JavaScript code.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-500' },
  { name: 'CharacterSetConverter', description: 'Convert text between character sets like UTF-8, ISO-8859-1, etc.', path: '/character-set-converter', Icon: CharacterSetConverterIcon, Page: CharacterSetConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
  { name: 'JsonDataExtractor', description: 'Extract specific data from a JSON object using a path.', path: '/json-data-extractor', Icon: JsonDataExtractorIcon, Page: JsonDataExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-blue-600', isPremium: true },
  { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash from text.', path: '/md5-hash-generator', Icon: Md5HashGeneratorIcon, Page: Md5HashGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
  { name: '.htaccess Auth Generator', description: 'Generate .htaccess files for basic authentication.', path: '/htaccess-auth-generator', Icon: HtaccessAuthGeneratorIcon, Page: HtaccessAuthGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
  { name: 'API Tester (Postman-like)', description: 'Test APIs with a simple interface.', path: '/api-tester', Icon: ApiTesterIcon, Page: ApiTesterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
  { name: 'Code Snippet Runner', description: 'Run HTML, CSS, and JS snippets in the browser.', path: '/code-snippet-runner', Icon: CodeSnippetRunnerIcon, Page: CodeSnippetRunnerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
  { name: 'JSON to SQL Insert', description: 'Convert JSON objects to SQL INSERT statements.', path: '/json-to-sql-insert', Icon: JsonToSqlInsertIcon, Page: JsonToSqlInsertPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
  { name: 'JSON Array Shuffler', description: 'Randomly shuffle the elements of a JSON array.', path: '/json-array-shuffler', Icon: JsonArrayShufflerIcon, Page: JsonArrayShufflerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500', isPremium: true },
];

export const POPULAR_PATHS: string[] = [
    '/image-resizer',
    '/word-counter',
    '/json-formatter',
    '/password-generator',
    '/qr-code-generator',
    '/merge-pdf',
    '/percentage-calculator',
    '/url-encoder-decoder',
    '/timestamp-converter',
    '/image-converter',
    '/duplicate-line-remover',
    '/case-converter'
];

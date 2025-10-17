// @/constants/tools.ts
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
import { StringConcatenatorIcon } from '../components/icons/StringConcatenatorIcon';
import { TextDiffCheckerIcon } from '../components/icons/TextDiffCheckerIcon';
import { CharacterSetConverterIcon } from '../components/icons/CharacterSetConverterIcon';
import { BulkTextReplacementIcon } from '../components/icons/BulkTextReplacementIcon';
import { NumberPadGeneratorIcon } from '../components/icons/NumberPadGeneratorIcon';
import { NumberListSorterIcon } from '../components/icons/NumberListSorterIcon';
import { OddEvenNumberFilterIcon } from '../components/icons/OddEvenNumberFilterIcon';
import { StringToArrayIcon } from '../components/icons/StringToArrayIcon';
import { ArrayToStringIcon } from '../components/icons/ArrayToStringIcon';

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
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
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
import { JsonDataExtractorIcon } from '../components/icons/JsonDataExtractorIcon';
import { HtmlPrettifierIcon } from '../components/icons/HtmlPrettifierIcon';
import { CssPrettifierIcon } from '../components/icons/CssPrettifierIcon';
import { JsBeautifierIcon } from '../components/icons/JsBeautifierIcon';
import { PlainTextToHtmlConverterIcon } from '../components/icons/PlainTextToHtmlConverterIcon';
import { HtmlToPlainTextConverterIcon } from '../components/icons/HtmlToPlainTextConverterIcon';


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
import LineCounterPage from '../pages/LineCounterPage';
import VigenereCipherPage from '../pages/VigenereCipherPage';
import CaesarCipherPage from '../pages/CaesarCipherPage';
import TextToAsciiArtViewerPage from '../pages/TextToAsciiArtViewerPage';
import EmojiStripperPage from '../pages/EmojiStripperPage';
import InvisibleCharacterViewerPage from '../pages/InvisibleCharacterViewerPage';
import TextCaseFlipperPage from '../pages/TextCaseFlipperPage';
import StringConcatenatorPage from '../pages/StringConcatenatorPage';
import TextDiffCheckerPage from '../pages/TextDiffCheckerPage';
import CharacterSetConverterPage from '../pages/CharacterSetConverterPage';
import BulkTextReplacementPage from '../pages/BulkTextReplacementPage';
import NumberPadGeneratorPage from '../pages/NumberPadGeneratorPage';
import NumberListSorterPage from '../pages/NumberListSorterPage';
import OddEvenNumberFilterPage from '../pages/OddEvenNumberFilterPage';
import StringToArrayPage from '../pages/StringToArrayPage';
import ArrayToStringPage from '../pages/ArrayToStringPage';
import Base64TextEncoderDecoderPage from '../pages/Base64TextEncoderDecoderPage';

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

// Web & Developer Tool Pages
import JsonFormatterPage from '../pages/JsonFormatterPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
import BaseConversionPage from '../pages/BaseConversionPage';
import ScientificNotationPage from '../pages/ScientificNotationPage';
import JsonValidatorPage from '../pages/JsonValidatorPage';
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
import ImageToCssBackgroundGeneratorPage from '../pages/ImageToCssBackgroundGeneratorPage';
import CssGridPlaygroundPage from '../pages/CssGridPlaygroundPage';
import CssFlexboxPlaygroundPage from '../pages/CssFlexboxPlaygroundPage';
import JsonToPhpArrayPage from '../pages/JsonToPhpArrayPage';
import JsonToPythonDictPage from '../pages/JsonToPythonDictPage';
import ColorPaletteGeneratorPage from '../pages/ColorPaletteGeneratorPage';
import HttpStatusCodeLookupPage from '../pages/HttpStatusCodeLookupPage';
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
import JsonDataExtractorPage from '../pages/JsonDataExtractorPage';
import HtmlPrettifierPage from '../pages/HtmlPrettifierPage';
import CssPrettifierPage from '../pages/CssPrettifierPage';
import JsBeautifierPage from '../pages/JsBeautifierPage';
import PlainTextToHtmlConverterPage from '../pages/PlainTextToHtmlConverterPage';
import HtmlToPlainTextConverterPage from '../pages/HtmlToPlainTextConverterPage';

export const TOOLS: Tool[] = [
  // Text & List Tools
  { name: 'Word & Character Counter', description: 'Count words, characters, sentences, and paragraphs in your text.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Case Converter', description: 'Easily convert text between uppercase, lowercase, title case, and sentence case.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list of text, leaving only unique entries.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Find and Replace Text', description: 'Quickly find and replace words or phrases within a block of text.', path: '/find-replace-text', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove unwanted line breaks from your text, merging it into a single line or paragraphs.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-400', category: 'Text & List Tools' },
  { name: 'Text to Slug Converter', description: 'Convert any text into a clean, URL-friendly slug.', path: '/text-to-slug', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-indigo-400', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text in paragraphs, sentences, or words.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-gray-400', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomize the order of lines in a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-purple-400', category: 'Text & List Tools' },
  { name: 'Reverse Text Generator', description: 'Flip your text backward, character by character.', path: '/reverse-text', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-pink-400', category: 'Text & List Tools' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text in alphabetical or reverse alphabetical order.', path: '/sort-lines', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add custom text to the beginning or end of each line in a list.', path: '/add-prefix-suffix', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-teal-400', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Clean up your text by removing all blank lines.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Analyze text to find the frequency and density of keywords.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-orange-500', category: 'Text & List Tools' },
  { name: 'Text to Binary Converter', description: 'Convert plain text into binary (0s and 1s) code.', path: '/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Binary to Text Converter', description: 'Decode binary code back into human-readable plain text.', path: '/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Clean up text by removing leading, trailing, and duplicate spaces.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-stone-500', category: 'Text & List Tools' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists to find items that are unique to each or common to both.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-cyan-700', category: 'Text & List Tools' },

  // Image Tools
  { name: 'Image Converter (JPG/PNG)', description: 'Convert images between JPG and PNG formats with quality adjustments.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Resizer', description: 'Resize images by pixel dimensions or percentage while maintaining aspect ratio.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-purple-500', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once to save time.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: 'border-purple-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Compressor', description: 'Reduce the file size of multiple images.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image to Base64 (Bulk)', description: 'Convert multiple images to Base64 strings for web embedding.', path: '/image-to-base64-bulk', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: 'border-yellow-600', category: 'Image Tools', isPremium: true },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to black and white.', path: '/image-to-grayscale-bulk', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: 'border-gray-500', category: 'Image Tools', isPremium: true },
  { name: 'Bulk JPG to PNG', description: 'Convert multiple JPG images to PNG format.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: 'border-yellow-400', category: 'Image Tools', isPremium: true },
  { name: 'Bulk PNG to JPG', description: 'Convert multiple PNG images to JPG format.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: 'border-yellow-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Cropper', description: 'Crop images with predefined aspect ratios or freeform selection.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-rose-500', category: 'Image Tools' },
  { name: 'Add Watermark to Image', description: 'Apply a text or image watermark to your images with adjustable opacity and position.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-rose-400', category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate images to any angle from -180 to 180 degrees.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a customizable blur effect to your images.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Give your images a warm, vintage sepia tone.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-amber-700', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Enhance the details and sharpness of your images.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-sky-500', category: 'Image Tools' },
  { name: 'Invert Image Colors', description: 'Create a negative of your image by inverting its colors.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-slate-500', category: 'Image Tools' },
  { name: 'Image Color Palette Extractor', description: 'Extract the dominant colors from an image to create a palette.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-emerald-500', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick colors from an image and get their HEX codes, with a magnifying glass for precision.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-red-400', category: 'Image Tools' },
  
  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Quickly find out the total number of pages in a PDF file.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into a single document.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF file into a new document.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Attempt to unlock password-protected PDF files.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-800', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the hidden metadata of a PDF file, such as author, creator, and dates.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-400', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG', description: 'Convert each page of a PDF file into a JPG image.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG', description: 'Convert each page of a PDF file into a high-quality PNG image.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF', description: 'Convert one or more JPG images into a single PDF document.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF', description: 'Convert one or more PNG images into a single PDF document.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to Text', description: 'Extract all the text content from a PDF file.', path: '/pdf-to-text', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'Add Text Watermark to PDF', description: 'Apply a custom text watermark to every page of a PDF.', path: '/pdf-add-text-watermark', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Image Watermark to PDF', description: 'Overlay an image watermark onto every page of a PDF.', path: '/pdf-add-image-watermark', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Encrypt PDF', description: 'Add a password to your PDF to protect it from unauthorized access.', path: '/encrypt-pdf', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  
  // File Converters & Utilities
  { name: 'DOCX to PDF', description: 'Convert Microsoft Word documents to PDF format.', path: '/docx-to-pdf', Icon: DocxToPdfIcon, Page: DocxToPdfPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'PDF to DOCX', description: 'Convert PDF files into editable Microsoft Word documents.', path: '/pdf-to-docx', Icon: PdfToDocxIcon, Page: PdfToDocxPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Excel to CSV', description: 'Convert XLSX or XLS files into comma-separated values (CSV) format.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV to Excel', description: 'Convert CSV files into Microsoft Excel (XLSX) format.', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'TSV to CSV', description: 'Convert tab-separated values (TSV) into comma-separated values (CSV).', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of any file to verify its integrity.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'DOCX Text Extractor', description: 'Extract plain text from Microsoft Word (.docx) files.', path: '/docx-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'A versatile tool to solve various percentage-based math problems.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Timestamp Converter', description: 'Convert Unix timestamps to human-readable dates and vice versa.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-blue-800', category: 'Calculators & Time Tools' },
  { name: 'Date Difference', description: 'Calculate the duration in days, weeks, and months between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-sky-500', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Find out your exact age in years, months, and days from your birthdate.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-rose-500', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Compare times across different time zones around the world.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'A comprehensive converter for length, mass, temperature, and more.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index using metric or imperial units.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-green-500', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Estimate your monthly payments for a loan.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-emerald-500', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Quickly calculate sales tax and total price.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-amber-500', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate the tip and total for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-yellow-500', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate a random number within a specified range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate dimensions for a new aspect ratio.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-500', category: 'Calculators & Time Tools' },
  
  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and validate your JSON data to make it readable.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'Password Generator', description: 'Create strong, secure, and random passwords with customizable options.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode text and URLs to be safely transmitted over the internet.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-pink-500', category: 'Web & Developer Tools' },
  { name: 'QR Code Generator', description: 'Create QR codes from URLs or text, ready to download and use.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Base Converter', description: 'Convert numbers between binary, octal, decimal, and hexadecimal.', path: '/base-converter', Icon: BaseConversionIcon, Page: BaseConversionPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON Minifier', description: 'Compress JSON data by removing whitespace.', path: '/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
  { name: 'CSS Box Shadow Generator', description: 'Visually create complex CSS box-shadow effects.', path: '/css-box-shadow-generator', Icon: CssBoxShadowGeneratorIcon, Page: CssBoxShadowGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Color Contrast Checker', description: 'Check the contrast ratio of two colors to ensure accessibility.', path: '/color-contrast-checker', Icon: ColorContrastCheckerIcon, Page: ColorContrastCheckerPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Regex Tester', description: 'Test and debug regular expressions with live highlighting.', path: '/regex-tester', Icon: RegexTesterIcon, Page: RegexTesterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML Entity Encoder/Decoder', description: 'Convert characters to and from HTML entities.', path: '/html-entity-encoder-decoder', Icon: HtmlEntityEncoderDecoderIcon, Page: HtmlEntityEncoderDecoderPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'HTML Tag Stripper', description: 'Remove all HTML tags from a block of text.', path: '/html-tag-stripper', Icon: HtmlTagStripperIcon, Page: HtmlTagStripperPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
];

export const POPULAR_PATHS = [
  '/word-counter',
  '/case-converter',
  '/image-resizer',
  '/json-formatter',
  '/password-generator',
  '/duplicate-line-remover',
  '/image-converter',
  '/qr-code-generator',
  '/merge-pdf',
  '/percentage-calculator',
  '/timestamp-converter',
  '/url-encoder-decoder',
];

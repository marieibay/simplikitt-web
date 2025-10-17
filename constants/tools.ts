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

// Web & Developer Tools
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';
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
import { RandomCoinFlipIcon } from '../components/icons/RandomCoinFlipIcon';
import RandomCoinFlipPage from '../pages/RandomCoinFlipPage';
import { RandomDiceRollIcon } from '../components/icons/RandomDiceRollIcon';
import RandomDiceRollPage from '../pages/RandomDiceRollPage';

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

// File Converters & Utilities
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

export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/image-converter', Icon: ImageConverterIcon, Page: ImageConverterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Resizer', description: 'Resize images by pixel dimensions or percentage.', path: '/image-resizer', Icon: ImageResizerIcon, Page: ImageResizerPage, borderColor: 'border-purple-500', category: 'Image Tools' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BulkImageResizerIcon, Page: BulkImageResizerPage, borderColor: 'border-purple-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Compressor (Bulk)', description: 'Reduce the file size of multiple images.', path: '/image-compressor', Icon: ImageCompressorIcon, Page: ImageCompressorPage, borderColor: 'border-purple-400', category: 'Image Tools', isPremium: true },
  { name: 'Image to Base64 (Bulk)', description: 'Encode multiple images to Base64 strings.', path: '/image-to-base64-bulk', Icon: ImageToBase64Icon, Page: ImageToBase64Page, borderColor: 'border-yellow-600', category: 'Image Tools', isPremium: true },
  { name: 'Image to Grayscale (Bulk)', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale-bulk', Icon: ImageToGrayscaleIcon, Page: ImageToGrayscalePage, borderColor: 'border-gray-500', category: 'Image Tools', isPremium: true },
  { name: 'Bulk JPG to PNG Converter', description: 'Convert multiple JPG images to PNG format.', path: '/bulk-jpg-to-png', Icon: JpgToPngBulkIcon, Page: BulkJpgToPngPage, borderColor: 'border-yellow-400', category: 'Image Tools', isPremium: true },
  { name: 'Bulk PNG to JPG Converter', description: 'Convert multiple PNG images to JPG format.', path: '/bulk-png-to-jpg', Icon: PngToJpgBulkIcon, Page: BulkPngToJpgPage, borderColor: 'border-yellow-700', category: 'Image Tools', isPremium: true },
  { name: 'Image Cropper', description: 'Crop images with a visual editor.', path: '/image-cropper', Icon: ImageCropperIcon, Page: ImageCropperPage, borderColor: 'border-rose-500', category: 'Image Tools' },
  { name: 'Image Watermark', description: 'Add a watermark to your images.', path: '/image-watermark', Icon: ImageWatermarkIcon, Page: ImageWatermarkPage, borderColor: 'border-rose-400', category: 'Image Tools' },
  { name: 'Image Rotator', description: 'Rotate images by any angle.', path: '/image-rotator', Icon: ImageRotatorIcon, Page: ImageRotatorPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your images.', path: '/image-blur-filter', Icon: ImageBlurFilterIcon, Page: ImageBlurFilterPage, borderColor: 'border-fuchsia-500', category: 'Image Tools' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone effect to images.', path: '/image-sepia-filter', Icon: ImageSepiaFilterIcon, Page: ImageSepiaFilterPage, borderColor: 'border-amber-700', category: 'Image Tools' },
  { name: 'Image Sharpen Filter', description: 'Sharpen your images to enhance details.', path: '/image-sharpen-filter', Icon: ImageSharpenFilterIcon, Page: ImageSharpenFilterPage, borderColor: 'border-sky-500', category: 'Image Tools' },
  { name: 'Image Invert Colors', description: 'Invert the colors of your image.', path: '/image-invert-colors', Icon: ImageInvertColorsIcon, Page: ImageInvertColorsPage, borderColor: 'border-slate-500', category: 'Image Tools' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity level of images.', path: '/image-opacity-adjuster', Icon: ImageOpacityAdjusterIcon, Page: ImageOpacityAdjusterPage, borderColor: 'border-gray-400', category: 'Image Tools' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL and brightness values of an image.', path: '/image-hsl-adjuster', Icon: ImageHueSaturationAdjusterIcon, Page: ImageHueSaturationAdjusterPage, borderColor: 'border-pink-400', category: 'Image Tools' },
  { name: 'Image Flipper', description: 'Flip images horizontally or vertically.', path: '/image-flipper', Icon: ImageFlipperIcon, Page: ImageFlipperPage, borderColor: 'border-green-400', category: 'Image Tools' },
  { name: 'Image to ASCII Art', description: 'Convert images into text-based ASCII art.', path: '/image-to-ascii-art', Icon: ImageToAsciiArtIcon, Page: ImageToAsciiArtPage, borderColor: 'border-lime-500', category: 'Image Tools' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of your images.', path: '/image-contrast-adjuster', Icon: ImageContrastAdjusterIcon, Page: ImageContrastAdjusterPage, borderColor: 'border-neutral-500', category: 'Image Tools' },
  { name: 'Color Palette Extractor', description: 'Extract dominant colors from an image.', path: '/color-palette-extractor', Icon: ColorPaletteExtractorIcon, Page: ColorPaletteExtractorPage, borderColor: 'border-emerald-500', category: 'Image Tools' },
  { name: 'Image Color Picker', description: 'Pick colors from an image with a magnifier.', path: '/image-color-picker', Icon: ImageColorPickerIcon, Page: ImageColorPickerPage, borderColor: 'border-red-400', category: 'Image Tools' },
  { name: 'Add Border to Image', description: 'Easily add a colored border to any image.', path: '/add-border-to-image', Icon: AddBorderToImageIcon, Page: AddBorderToImagePage, borderColor: 'border-stone-500', category: 'Image Tools' },
  { name: 'Add Rounded Corners', description: 'Apply rounded corners to your images.', path: '/add-rounded-corners', Icon: AddRoundedCornersToImageIcon, Page: AddRoundedCornersToImagePage, borderColor: 'border-violet-500', category: 'Image Tools' },
  { name: 'Image Collage Maker (2x2)', description: 'Create a 2x2 photo collage from four images.', path: '/image-collage-maker', Icon: ImageCollageMakerIcon, Page: ImageCollageMakerPage, borderColor: 'border-orange-400', category: 'Image Tools' },
  { name: 'Image to Data URL', description: 'Convert an image file to a base64 Data URL.', path: '/image-to-data-url', Icon: ImageToDataUrlGeneratorIcon, Page: ImageToDataUrlGeneratorPage, borderColor: 'border-indigo-400', category: 'Image Tools' },
  { name: 'Image DPI Changer', description: 'Change the DPI metadata of a JPG image.', path: '/image-dpi-changer', Icon: ImageDpiChangerIcon, Page: ImageDpiChangerPage, borderColor: 'border-cyan-600', category: 'Image Tools' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to your photos.', path: '/image-filter-presets', Icon: ImageFilterPresetLibraryIcon, Page: ImageFilterPresetLibraryPage, borderColor: 'border-teal-400', category: 'Image Tools' },
  { name: 'Image Text Overlay', description: 'Add text over your images.', path: '/image-text-overlay', Icon: ImageTextOverlayIcon, Page: ImageTextOverlayPage, borderColor: 'border-blue-400', category: 'Image Tools' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG has transparent areas.', path: '/png-transparency-checker', Icon: PngTransparencyCheckerIcon, Page: PngTransparencyCheckerPage, borderColor: 'border-slate-400', category: 'Image Tools' },
  { name: 'Image Pixelate Filter', description: 'Apply a pixelation effect to images.', path: '/image-pixelate-filter', Icon: ImagePixelateFilterIcon, Page: ImagePixelateFilterPage, borderColor: 'border-gray-600', category: 'Image Tools' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp', Icon: ImageToBmpConverterIcon, Page: ImageToBmpConverterPage, borderColor: 'border-cyan-800', category: 'Image Tools' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a GIF.', path: '/image-to-gif', Icon: ImageToGifConverterIcon, Page: ImageToGifConverterPage, borderColor: 'border-pink-600', category: 'Image Tools' },
  { name: 'Image Mirror Effect', description: 'Apply a horizontal or vertical mirror effect.', path: '/image-mirror-effect', Icon: ImageMirrorEffectIcon, Page: ImageMirrorEffectPage, borderColor: 'border-blue-300', category: 'Image Tools' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or distort an image horizontally or vertically.', path: '/image-warping-tool', Icon: ImageWarpingToolIcon, Page: ImageWarpingToolPage, borderColor: 'border-indigo-600', category: 'Image Tools' },
  { name: 'Image Tint Adjuster', description: 'Apply a color tint to your images.', path: '/image-tint-adjuster', Icon: ImageTintAdjusterIcon, Page: ImageTintAdjusterPage, borderColor: 'border-rose-300', category: 'Image Tools' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the lightness or brightness of an image.', path: '/image-lightness-adjuster', Icon: ImageLightnessAdjusterIcon, Page: ImageLightnessAdjusterPage, borderColor: 'border-yellow-500', category: 'Image Tools' },
  { name: 'Image Threshold Filter', description: 'Create a black and white image based on a luminance threshold.', path: '/image-threshold-filter', Icon: ImageThresholdFilterIcon, Page: ImageThresholdFilterPage, borderColor: 'border-gray-800', category: 'Image Tools' },
  { name: 'Image Dithering Effect', description: 'Apply a dithering effect to create a retro look.', path: '/image-dithering-effect', Icon: ImageDitheringEffectIcon, Page: ImageDitheringEffectPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'CSS Background Generator', description: 'Generate CSS background code from an image.', path: '/image-to-css-background', Icon: ImageToCssBackgroundGeneratorIcon, Page: ImageToCssBackgroundGeneratorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from images.', path: '/image-metadata-remover', Icon: ImageMetadataRemoverIcon, Page: ImageMetadataRemoverPage, borderColor: 'border-red-700', category: 'Image Tools' },
  { name: 'Image Dimension Checker', description: 'Quickly find the dimensions of any image.', path: '/image-dimension-checker', Icon: ImageDimensionCheckerIcon, Page: ImageDimensionCheckerPage, borderColor: 'border-green-700', category: 'Image Tools' },
  { name: 'Image Watermark Positioner', description: 'Precisely position a watermark on an image.', path: '/image-watermark-positioner', Icon: ImageWatermarkPositionerIcon, Page: ImageWatermarkPositionerPage, borderColor: 'border-rose-600', category: 'Image Tools' },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas of an image without scaling the content.', path: '/image-canvas-resizer', Icon: ImageCanvasResizerIcon, Page: ImageCanvasResizerPage, borderColor: 'border-purple-300', category: 'Image Tools' },
  { name: 'Image Hue Shifter', description: 'Rotate the hue of all colors in an image.', path: '/image-hue-shifter', Icon: ImageHueShifterIcon, Page: ImageHueShifterPage, borderColor: 'border-pink-500', category: 'Image Tools' },
  { name: 'Image Noise Generator', description: 'Add random noise to an image.', path: '/image-noise-generator', Icon: ImageNoiseGeneratorIcon, Page: ImageNoiseGeneratorPage, borderColor: 'border-gray-400', category: 'Image Tools' },
  { name: 'Base64 to Image', description: 'Decode a Base64 string into an image.', path: '/base64-to-image-decoder', Icon: ImageToBase64DecoderIcon, Page: ImageToBase64DecoderPage, borderColor: 'border-blue-200', category: 'Image Tools' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: BatchImageRotatorIcon, Page: BatchImageRotatorPage, borderColor: 'border-fuchsia-600', category: 'Image Tools', isPremium: true },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to your images.', path: '/image-shadow-generator', Icon: ImageShadowGeneratorIcon, Page: ImageShadowGeneratorPage, borderColor: 'border-gray-300', category: 'Image Tools' },
  { name: 'Adjustable Black & White', description: 'Convert an image to black and white with adjustable levels.', path: '/image-to-black-and-white', Icon: ImageToBlackAndWhiteIcon, Page: ImageToBlackAndWhitePage, borderColor: 'border-black', category: 'Image Tools' },
  { name: 'Image Tiling Previewer', description: 'See how an image looks when tiled as a background.', path: '/image-tiling-previewer', Icon: ImageTilingPreviewerIcon, Page: ImageTilingPreviewerPage, borderColor: 'border-gray-500', category: 'Image Tools' },
  { name: 'Image Color Replacer', description: 'Replace one color in an image with another.', path: '/image-color-replacer', Icon: ImageColorReplacerIcon, Page: ImageColorReplacerPage, borderColor: 'border-red-300', category: 'Image Tools' },

  // Text & List Tools
  { name: 'Case Converter', description: 'Convert text between different letter cases.', path: '/case-converter', Icon: CaseConverterIcon, Page: CaseConverterPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: DuplicateLineRemoverIcon, Page: DuplicateLineRemoverPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Word / Char Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-counter', Icon: WordCharCounterIcon, Page: WordCounterPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Find & Replace Text', description: 'Easily find and replace text in a block of content.', path: '/find-and-replace', Icon: FindAndReplaceIcon, Page: FindAndReplacePage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'Line Break Remover', description: 'Remove all line breaks from a block of text.', path: '/line-break-remover', Icon: LineBreakRemoverIcon, Page: LineBreakRemoverPage, borderColor: 'border-blue-400', category: 'Text & List Tools' },
  { name: 'Text to Slug Converter', description: 'Convert text into a URL-friendly slug.', path: '/text-to-slug', Icon: TextToSlugConverterIcon, Page: TextToSlugConverterPage, borderColor: 'border-indigo-400', category: 'Text & List Tools' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text in paragraphs, sentences, or words.', path: '/lorem-ipsum-generator', Icon: LoremIpsumGeneratorIcon, Page: LoremIpsumGeneratorPage, borderColor: 'border-gray-400', category: 'Text & List Tools' },
  { name: 'List Shuffler', description: 'Randomly shuffle the lines in a list.', path: '/list-shuffler', Icon: ListShufflerIcon, Page: ListShufflerPage, borderColor: 'border-purple-400', category: 'Text & List Tools' },
  { name: 'Reverse Text Generator', description: 'Reverse the characters in your text.', path: '/reverse-text', Icon: ReverseTextGeneratorIcon, Page: ReverseTextGeneratorPage, borderColor: 'border-pink-400', category: 'Text & List Tools' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text in alphabetical order (A-Z or Z-A).', path: '/sort-lines', Icon: SortLinesAlphabeticallyIcon, Page: SortLinesAlphabeticallyPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add text to the beginning or end of each line.', path: '/add-prefix-suffix', Icon: AddPrefixSuffixIcon, Page: AddPrefixSuffixPage, borderColor: 'border-teal-400', category: 'Text & List Tools' },
  { name: 'Remove Empty Lines', description: 'Delete all empty lines from a block of text.', path: '/remove-empty-lines', Icon: RemoveEmptyLinesIcon, Page: RemoveEmptyLinesPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Keyword Density Checker', description: 'Analyze the keyword density of your text.', path: '/keyword-density-checker', Icon: KeywordDensityCheckerIcon, Page: KeywordDensityCheckerPage, borderColor: 'border-orange-500', category: 'Text & List Tools' },
  { name: 'Text to Binary Converter', description: 'Convert plain text into binary code.', path: '/text-to-binary', Icon: TextToBinaryConverterIcon, Page: TextToBinaryConverterPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Binary to Text Converter', description: 'Decode binary code back into plain text.', path: '/binary-to-text', Icon: BinaryToTextConverterIcon, Page: BinaryToTextConverterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Text to Hex Converter', description: 'Convert plain text into hexadecimal code.', path: '/text-to-hex', Icon: TextToHexConverterIcon, Page: TextToHexConverterPage, borderColor: 'border-slate-600', category: 'Text & List Tools' },
  { name: 'Hex to Text Converter', description: 'Decode hexadecimal code back into plain text.', path: '/hex-to-text', Icon: HexToTextConverterIcon, Page: HexToTextConverterPage, borderColor: 'border-slate-500', category: 'Text & List Tools' },
  { name: 'Text to Octal Converter', description: 'Convert plain text into octal code.', path: '/text-to-octal', Icon: TextToOctalConverterIcon, Page: TextToOctalConverterPage, borderColor: 'border-neutral-600', category: 'Text & List Tools' },
  { name: 'Octal to Text Converter', description: 'Decode octal code back into plain text.', path: '/octal-to-text', Icon: OctalToTextConverterIcon, Page: OctalToTextConverterPage, borderColor: 'border-neutral-500', category: 'Text & List Tools' },
  { name: 'Remove Extra Spaces', description: 'Remove duplicate spaces and trim text.', path: '/remove-extra-spaces', Icon: RemoveExtraSpacesIcon, Page: RemoveExtraSpacesPage, borderColor: 'border-stone-500', category: 'Text & List Tools' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with advanced rules.', path: '/title-case-advanced', Icon: TitleCaseAdvancedIcon, Page: TitleCaseAdvancedPage, borderColor: 'border-red-600', category: 'Text & List Tools' },
  { name: 'Sentence Case Converter', description: 'Properly capitalize sentences in a block of text.', path: '/sentence-case-converter', Icon: SentenceCaseConverterIcon, Page: SentenceCaseConverterPage, borderColor: 'border-red-400', category: 'Text & List Tools' },
  { name: 'Remove Non-Alphanumeric Chars', description: 'Strip all non-alphanumeric characters from text.', path: '/remove-non-alphanumeric', Icon: RemoveNonAlphanumericCharsIcon, Page: RemoveNonAlphanumericCharsPage, borderColor: 'border-zinc-500', category: 'Text & List Tools' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/text-scrambler', Icon: TextScramblerIcon, Page: TextScramblerPage, borderColor: 'border-amber-500', category: 'Text & List Tools' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists and find the differences.', path: '/list-comparator', Icon: ListComparatorIcon, Page: ListComparatorPage, borderColor: 'border-cyan-700', category: 'Text & List Tools' },
  { name: 'List Intersector', description: 'Find the common lines between two lists.', path: '/list-intersector', Icon: ListIntersectorIcon, Page: ListIntersectorPage, borderColor: 'border-green-700', category: 'Text & List Tools' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line of text.', path: '/add-quotes-to-lines', Icon: AddQuotesToLinesIcon, Page: AddQuotesToLinesPage, borderColor: 'border-violet-500', category: 'Text & List Tools' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of each line.', path: '/remove-quotes-from-lines', Icon: RemoveQuotesFromLinesIcon, Page: RemoveQuotesFromLinesPage, borderColor: 'border-violet-400', category: 'Text & List Tools' },
  { name: 'Text Splitter', description: 'Split a block of text into smaller chunks of a specified size.', path: '/text-splitter', Icon: TextSplitterIcon, Page: TextSplitterPage, borderColor: 'border-orange-400', category: 'Text & List Tools' },
  { name: 'Text Repeater', description: 'Repeat a string of text a specified number of times.', path: '/text-repeater', Icon: TextRepeaterIcon, Page: TextRepeaterPage, borderColor: 'border-emerald-600', category: 'Text & List Tools' },
  { name: 'Remove Numbers from Text', description: 'Strip all numeric digits from your text.', path: '/remove-numbers', Icon: RemoveNumbersIcon, Page: RemoveNumbersPage, borderColor: 'border-lime-600', category: 'Text & List Tools' },
  { name: 'Remove Letters from Text', description: 'Strip all alphabetical characters from your text.', path: '/remove-letters', Icon: RemoveLettersIcon, Page: RemoveLettersPage, borderColor: 'border-lime-700', category: 'Text & List Tools' },
  { name: 'Rot13 Encrypt/Decrypt', description: 'Apply the ROT13 cipher to your text.', path: '/rot13-cipher', Icon: Rot13Icon, Page: Rot13Page, borderColor: 'border-fuchsia-600', category: 'Text & List Tools' },
  { name: 'Custom Delimiter Converter', description: 'Convert a list from one delimiter to another.', path: '/custom-delimiter-converter', Icon: CustomDelimiterConverterIcon, Page: CustomDelimiterConverterPage, borderColor: 'border-cyan-500', category: 'Text & List Tools' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from a starting to an ending point.', path: '/alphabetical-letter-generator', Icon: AlphabeticalLetterGeneratorIcon, Page: AlphabeticalLetterGeneratorPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a specified start, end, and step.', path: '/number-list-generator', Icon: NumberListGeneratorIcon, Page: NumberListGeneratorPage, borderColor: 'border-gray-800', category: 'Text & List Tools' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode or decode text using custom character mappings.', path: '/text-encoder-decoder', Icon: TextEncoderDecoderIcon, Page: TextEncoderDecoderPage, borderColor: 'border-rose-500', category: 'Text & List Tools' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from a YouTube video page source.', path: '/youtube-extractor', Icon: YouTubeExtractorIcon, Page: YouTubeExtractorPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Link Extractor from Text', description: 'Extract all URLs from a block of text.', path: '/link-extractor', Icon: LinkExtractorIcon, Page: LinkExtractorPage, borderColor: 'border-blue-600', category: 'Text & List Tools' },
  { name: 'HTML Comment Remover', description: 'Strip all HTML comments from a block of code.', path: '/html-comment-remover', Icon: HtmlCommentRemoverIcon, Page: HtmlCommentRemoverPage, borderColor: 'border-orange-600', category: 'Text & List Tools' },
  { name: 'CSS Comment Remover', description: 'Strip all comments from a block of CSS code.', path: '/css-comment-remover', Icon: CssCommentRemoverIcon, Page: CssCommentRemoverPage, borderColor: 'border-blue-500', category: 'Text & List Tools' },
  { name: 'JS Comment Stripper', description: 'Strip all comments from a block of JavaScript code.', path: '/js-comment-stripper', Icon: JsCommentStripperIcon, Page: JsCommentStripperPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Line Counter', description: 'Count the number of lines in a block of text.', path: '/line-counter', Icon: LineCounterIcon, Page: LineCounterPage, borderColor: 'border-gray-500', category: 'Text & List Tools' },
  { name: 'Vigenere Cipher', description: 'Encrypt or decrypt text using the Vigenere cipher.', path: '/vigenere-cipher', Icon: VigenereCipherIcon, Page: VigenereCipherPage, borderColor: 'border-gray-700', category: 'Text & List Tools' },
  { name: 'Caesar Cipher', description: 'Encrypt or decrypt text using the Caesar cipher with a custom shift.', path: '/caesar-cipher', Icon: CaesarCipherIcon, Page: CaesarCipherPage, borderColor: 'border-gray-600', category: 'Text & List Tools' },
  { name: 'Text to ASCII Art', description: 'Generate large ASCII art text from your input.', path: '/text-to-ascii-art', Icon: TextToAsciiArtViewerIcon, Page: TextToAsciiArtViewerPage, borderColor: 'border-green-500', category: 'Text & List Tools' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from a block of text.', path: '/emoji-stripper', Icon: EmojiStripperIcon, Page: EmojiStripperPage, borderColor: 'border-yellow-500', category: 'Text & List Tools' },
  { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible characters like zero-width spaces.', path: '/invisible-character-viewer', Icon: InvisibleCharacterViewerIcon, Page: InvisibleCharacterViewerPage, borderColor: 'border-red-500', category: 'Text & List Tools' },
  { name: 'Text Case Flipper', description: 'Flip the case of every letter in your text (e.g., aBc -> AbC).', path: '/text-case-flipper', Icon: TextCaseFlipperIcon, Page: TextCaseFlipperPage, borderColor: 'border-blue-300', category: 'Text & List Tools' },
  { name: 'HTML Prettifier', description: 'Format and indent messy HTML code for readability.', path: '/html-prettifier', Icon: HtmlPrettifierIcon, Page: HtmlPrettifierPage, borderColor: 'border-orange-700', category: 'Web & Developer Tools' },
  { name: 'CSS Prettifier', description: 'Format and indent messy CSS code for readability.', path: '/css-prettifier', Icon: CssPrettifierIcon, Page: CssPrettifierPage, borderColor: 'border-blue-400', category: 'Web & Developer Tools' },
  { name: 'JS Beautifier', description: 'Format and indent messy JavaScript code.', path: '/js-beautifier', Icon: JsBeautifierIcon, Page: JsBeautifierPage, borderColor: 'border-yellow-600', category: 'Web & Developer Tools' },
  { name: 'String Concatenator', description: 'Join multiple lines of text into a single line with a custom separator.', path: '/string-concatenator', Icon: StringConcatenatorIcon, Page: StringConcatenatorPage, borderColor: 'border-sky-600', category: 'Text & List Tools' },
  { name: 'Text Difference Checker', description: 'Compare two blocks of text and highlight the differences.', path: '/text-diff-checker', Icon: TextDiffCheckerIcon, Page: TextDiffCheckerPage, borderColor: 'border-cyan-800', category: 'Text & List Tools' },
  { name: 'Plain Text to HTML', description: 'Convert plain text into HTML paragraphs and line breaks.', path: '/plain-text-to-html', Icon: PlainTextToHtmlConverterIcon, Page: PlainTextToHtmlConverterPage, borderColor: 'border-emerald-500', category: 'Text & List Tools' },
  { name: 'HTML to Plain Text', description: 'Strip HTML tags to get the plain text content.', path: '/html-to-plain-text', Icon: HtmlToPlainTextConverterIcon, Page: HtmlToPlainTextConverterPage, borderColor: 'border-emerald-600', category: 'Text & List Tools' },


  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and beautify your JSON data.', path: '/json-formatter', Icon: JsonFormatterIcon, Page: JsonFormatterPage, borderColor: 'border-blue-500', category: 'Web & Developer Tools' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: UrlEncoderDecoderIcon, Page: UrlEncoderDecoderPage, borderColor: 'border-pink-500', category: 'Web & Developer Tools' },
  { name: 'Password Generator', description: 'Generate strong, random passwords.', path: '/password-generator', Icon: PasswordGeneratorIcon, Page: PasswordGeneratorPage, borderColor: 'border-orange-500', category: 'Web & Developer Tools' },
  { name: 'QR Code Generator', description: 'Create QR codes from text or URLs.', path: '/qr-code-generator', Icon: QrCodeGeneratorIcon, Page: QrCodeGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON Validator', description: 'Validate your JSON data structure.', path: '/json-validator', Icon: JsonValidatorIcon, Page: JsonValidatorPage, borderColor: 'border-blue-600', category: 'Web & Developer Tools' },
  { name: 'Base64 Text Encoder/Decoder', description: 'Encode text to Base64 or decode from it.', path: '/base64-text-encoder-decoder', Icon: Base64TextEncoderDecoderIcon, Page: Base64TextEncoderDecoderPage, borderColor: 'border-gray-500', category: 'Web & Developer Tools' },
  { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash from a text string.', path: '/md5-hash-generator', Icon: Md5HashGeneratorIcon, Page: Md5HashGeneratorPage, borderColor: 'border-red-500', category: 'Web & Developer Tools' },
  { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash from text.', path: '/sha256-hash-generator', Icon: Sha256HashGeneratorIcon, Page: Sha256HashGeneratorPage, borderColor: 'border-red-600', category: 'Web & Developer Tools' },
  { name: 'JSON Minifier', description: 'Minify JSON data to reduce its size.', path: '/json-minifier', Icon: JsonMinifierIcon, Page: JsonMinifierPage, borderColor: 'border-blue-700', category: 'Web & Developer Tools' },
  { name: 'CSS Box Shadow Generator', description: 'Visually create CSS box-shadow styles.', path: '/css-box-shadow-generator', Icon: CssBoxShadowGeneratorIcon, Page: CssBoxShadowGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Color Contrast Checker', description: 'Check the contrast ratio of two colors for accessibility.', path: '/color-contrast-checker', Icon: ColorContrastCheckerIcon, Page: ColorContrastCheckerPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'Regex Tester', description: 'Test your regular expressions against sample text.', path: '/regex-tester', Icon: RegexTesterIcon, Page: RegexTesterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML Entity Encoder/Decoder', description: 'Convert characters to and from HTML entities.', path: '/html-entity-encoder-decoder', Icon: HtmlEntityEncoderDecoderIcon, Page: HtmlEntityEncoderDecoderPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'HTML Tag Stripper', description: 'Remove all HTML tags from a block of text.', path: '/html-tag-stripper', Icon: HtmlTagStripperIcon, Page: HtmlTagStripperPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JSON to XML Converter', description: 'Convert JSON data to XML format.', path: '/json-to-xml', Icon: JsonToXmlConverterIcon, Page: JsonToXmlConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'XML to JSON Converter', description: 'Convert XML data to JSON format.', path: '/xml-to-json', Icon: XmlToJsonConverterIcon, Page: XmlToJsonConverterPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'URL Parser', description: 'Break down a URL into its components (protocol, host, path, etc.).', path: '/url-parser', Icon: UrlParserIcon, Page: UrlParserPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'JS Minifier', description: 'Minify JavaScript code to reduce file size.', path: '/js-minifier', Icon: JsMinifierIcon, Page: JsMinifierPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },
  { name: 'CSS Gradient Generator', description: 'Visually create CSS linear and radial gradients.', path: '/css-gradient-generator', Icon: CssGradientGeneratorIcon, Page: CssGradientGeneratorPage, borderColor: 'border-indigo-500', category: 'Web & Developer Tools' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages, percentage change, and more.', path: '/percentage-calculator', Icon: PercentageCalculatorIcon, Page: PercentageCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: TimestampConverterIcon, Page: TimestampConverterPage, borderColor: 'border-blue-800', category: 'Calculators & Time Tools' },
  { name: 'Date Difference', description: 'Calculate the duration between two dates.', path: '/date-difference', Icon: DateDifferenceIcon, Page: DateDifferencePage, borderColor: 'border-sky-500', category: 'Calculators & Time Tools' },
  { name: 'Age Calculator', description: 'Calculate your age in years, months, and days.', path: '/age-calculator', Icon: AgeCalculatorIcon, Page: AgeCalculatorPage, borderColor: 'border-rose-500', category: 'Calculators & Time Tools' },
  { name: 'Time Zone Converter', description: 'Convert times between different time zones.', path: '/time-zone-converter', Icon: TimeZoneConverterIcon, Page: TimeZoneConverterPage, borderColor: 'border-indigo-500', category: 'Calculators & Time Tools' },
  { name: 'Unit Converter', description: 'Convert between various units of measurement.', path: '/unit-converter', Icon: UnitConverterIcon, Page: UnitConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/bmi-calculator', Icon: BmiCalculatorIcon, Page: BmiCalculatorPage, borderColor: 'border-green-500', category: 'Calculators & Time Tools' },
  { name: 'Loan Calculator', description: 'Calculate monthly payments for a loan.', path: '/loan-calculator', Icon: LoanCalculatorIcon, Page: LoanCalculatorPage, borderColor: 'border-emerald-500', category: 'Calculators & Time Tools' },
  { name: 'Sales Tax Calculator', description: 'Quickly calculate sales tax and total price.', path: '/sales-tax-calculator', Icon: SalesTaxCalculatorIcon, Page: SalesTaxCalculatorPage, borderColor: 'border-amber-500', category: 'Calculators & Time Tools' },
  { name: 'Tip Calculator', description: 'Calculate the tip and total for a bill.', path: '/tip-calculator', Icon: TipCalculatorIcon, Page: TipCalculatorPage, borderColor: 'border-yellow-500', category: 'Calculators & Time Tools' },
  { name: 'Random Number Generator', description: 'Generate a random number within a specified range.', path: '/random-number-generator', Icon: RandomNumberGeneratorIcon, Page: RandomNumberGeneratorPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios and dimensions for images and videos.', path: '/aspect-ratio-calculator', Icon: AspectRatioCalculatorIcon, Page: AspectRatioCalculatorPage, borderColor: 'border-cyan-500', category: 'Calculators & Time Tools' },
  { name: 'Scientific Calculator', description: 'A calculator with scientific functions.', path: '/scientific-calculator', Icon: ScientificCalculatorIcon, Page: ScientificCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Compound Interest Calculator', description: 'Calculate compound interest over time.', path: '/compound-interest-calculator', Icon: CompoundInterestCalculatorIcon, Page: CompoundInterestCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Countdown Timer', description: 'Set a timer that counts down to zero.', path: '/countdown-timer', Icon: CountdownTimerIcon, Page: CountdownTimerPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Stopwatch', description: 'A simple stopwatch to time events.', path: '/stopwatch', Icon: StopwatchIcon, Page: StopwatchPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Date Format Converter', description: 'Convert dates between different formats.', path: '/date-format-converter', Icon: DateFormatConverterIcon, Page: DateFormatConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/day-of-week-calculator', Icon: DayOfTheWeekCalculatorIcon, Page: DayOfTheWeekCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/leap-year-checker', Icon: LeapYearCheckerIcon, Page: LeapYearCheckerPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Time Adder / Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: TimeAdderSubtracterIcon, Page: TimeAdderSubtracterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Business Day Calculator', description: 'Calculate future dates by adding or subtracting business days.', path: '/business-day-calculator', Icon: BusinessDayCalculatorIcon, Page: BusinessDayCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mean, Median, & Mode Calculator', description: 'Calculate the mean, median, and mode of a set of numbers.', path: '/mean-median-mode', Icon: MeanMedianModeIcon, Page: MeanMedianModePage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Standard Deviation Calculator', description: 'Calculate the standard deviation of a set of numbers.', path: '/standard-deviation-calculator', Icon: StandardDeviationIcon, Page: StandardDeviationPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Z-Score Calculator', description: 'Calculate the Z-score of a data point.', path: '/z-score-calculator', Icon: ZScoreCalculatorIcon, Page: ZScoreCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations (ax² + bx + c = 0).', path: '/quadratic-equation-solver', Icon: QuadraticEquationSolverIcon, Page: QuadraticEquationSolverPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Pythagorean Theorem Solver', description: 'Solve for the hypotenuse of a right triangle.', path: '/pythagorean-theorem-solver', Icon: PythagoreanTheoremSolverIcon, Page: PythagoreanTheoremSolverPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Area Calculator', description: 'Calculate the area of common shapes.', path: '/area-calculator', Icon: AreaCalculatorIcon, Page: AreaCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Volume Calculator', description: 'Calculate the volume of common 3D shapes.', path: '/volume-calculator', Icon: VolumeCalculatorIcon, Page: VolumeCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Fraction to Decimal', description: 'Convert fractions to decimal numbers.', path: '/fraction-to-decimal', Icon: FractionDecimalConverterIcon, Page: FractionDecimalConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Decimal to Fraction', description: 'Convert decimal numbers to fractions.', path: '/decimal-to-fraction', Icon: DecimalFractionConverterIcon, Page: DecimalFractionConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Binary Calculator', description: 'Perform calculations with binary numbers.', path: '/binary-calculator', Icon: BinaryCalculatorIcon, Page: BinaryCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Octal Calculator', description: 'Perform calculations with octal numbers.', path: '/octal-calculator', Icon: OctalCalculatorIcon, Page: OctalCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Hexadecimal Calculator', description: 'Perform calculations with hexadecimal numbers.', path: '/hexadecimal-calculator', Icon: HexadecimalCalculatorIcon, Page: HexadecimalCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'World Clock', description: 'View the current time in cities around the world.', path: '/world-clock', Icon: WorldClockIcon, Page: WorldClockPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Date to Day of Year', description: 'Find the day number of the year for a given date.', path: '/date-to-day-of-year', Icon: DateToDayOfYearIcon, Page: DateToDayOfYearPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Random Date Generator', description: 'Generate a random date within a specified range.', path: '/random-date-generator', Icon: RandomDateGeneratorIcon, Page: RandomDateGeneratorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Mortgage Refinance Calculator', description: 'Calculate savings from refinancing your mortgage.', path: '/mortgage-refinance-calculator', Icon: MortgageRefinanceCalculatorIcon, Page: MortgageRefinanceCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Retirement Savings Calculator', description: 'Estimate your retirement savings growth.', path: '/retirement-savings-calculator', Icon: RetirementSavingsCalculatorIcon, Page: RetirementSavingsCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Loan Amortization Schedule', description: 'Generate a loan amortization schedule.', path: '/loan-amortization-schedule', Icon: LoanAmortizationScheduleIcon, Page: LoanAmortizationSchedulePage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/currency-converter', Icon: CurrencyConverterIcon, Page: CurrencyConverterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools', isPremium: true },
  { name: 'Time Duration Formatter', description: 'Convert seconds into a HH:MM:SS format.', path: '/time-duration-formatter', Icon: TimeDurationFormatterIcon, Page: TimeDurationFormatterPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/square-root-calculator', Icon: SquareRootCalculatorIcon, Page: SquareRootCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/factorial-calculator', Icon: FactorialCalculatorIcon, Page: FactorialCalculatorPage, borderColor: 'border-teal-500', category: 'Calculators & Time Tools' },
  { name: 'Random Coin Flip', description: 'Flip a virtual coin for a random result.', path: '/random-coin-flip', Icon: RandomCoinFlipIcon, Page: RandomCoinFlipPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },
  { name: 'Random Dice Roll', description: 'Roll a virtual six-sided die.', path: '/random-dice-roll', Icon: RandomDiceRollIcon, Page: RandomDiceRollPage, borderColor: 'border-fuchsia-500', category: 'Calculators & Time Tools' },

  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/pdf-page-counter', Icon: PdfPageCounterIcon, Page: PdfPageCounterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: MergePdfIcon, Page: MergePdfPage, borderColor: 'border-green-600', category: 'PDF & Document Tools' },
  { name: 'Split PDF', description: 'Extract a range of pages from a PDF file.', path: '/split-pdf', Icon: SplitPdfIcon, Page: SplitPdfPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'PDF Password Remover', description: 'Remove password protection from a PDF file.', path: '/pdf-password-remover', Icon: PdfPasswordRemoverIcon, Page: PdfPasswordRemoverPage, borderColor: 'border-green-800', category: 'PDF & Document Tools' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: PdfMetadataViewerIcon, Page: PdfMetadataViewerPage, borderColor: 'border-green-400', category: 'PDF & Document Tools' },
  { name: 'PDF to JPG Converter', description: 'Convert PDF pages to JPG images.', path: '/pdf-to-jpg', Icon: PdfToJpgIcon, Page: PdfToJpgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to PNG Converter', description: 'Convert PDF pages to PNG images.', path: '/pdf-to-png', Icon: PdfToPngIcon, Page: PdfToPngPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'JPG to PDF Converter', description: 'Convert JPG images to a PDF file.', path: '/jpg-to-pdf', Icon: JpgToPdfIcon, Page: JpgToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PNG to PDF Converter', description: 'Convert PNG images to a PDF file.', path: '/png-to-pdf', Icon: PngToPdfIcon, Page: PngToPdfPage, borderColor: 'border-green-500', category: 'PDF & Document Tools' },
  { name: 'PDF to Text Extractor', description: 'Extract text content from a PDF file.', path: '/pdf-to-text-extractor', Icon: PdfToTextExtractorIcon, Page: PdfToTextExtractorPage, borderColor: 'border-green-700', category: 'PDF & Document Tools' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to your PDF files.', path: '/pdf-watermark-text', Icon: PdfWatermarkAdderTextIcon, Page: PdfWatermarkAdderTextPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to your PDF files.', path: '/pdf-watermark-image', Icon: PdfWatermarkAdderImageIcon, Page: PdfWatermarkAdderImagePage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Encrypt PDF', description: 'Add a password to protect your PDF file.', path: '/pdf-encryptor', Icon: PdfEncryptorIcon, Page: PdfEncryptorPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Reorder PDF Pages', description: 'Visually reorder the pages of a PDF file.', path: '/reorder-pdf-pages', Icon: ReorderPdfPagesIcon, Page: ReorderPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages of a PDF.', path: '/rotate-all-pdf-pages', Icon: RotateAllPdfPagesIcon, Page: RotateAllPdfPagesPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Deleter', description: 'Remove specific pages from a PDF file.', path: '/pdf-page-deleter', Icon: PdfPageDeleterIcon, Page: PdfPageDeleterPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Page Cropper', description: 'Crop the pages of a PDF file.', path: '/pdf-page-cropper', Icon: PdfPageCropperIcon, Page: PdfPageCropperPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF Viewer', description: 'A simple in-browser PDF viewer.', path: '/pdf-viewer', Icon: PdfViewerIcon, Page: PdfViewerPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to scalable SVG images.', path: '/pdf-to-svg', Icon: PdfToSvgIcon, Page: PdfToSvgPage, borderColor: 'border-green-500', category: 'PDF & Document Tools', isPremium: true },

  // File Converters & Utilities
  { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV format.', path: '/excel-to-csv', Icon: ExcelToCsvIcon, Page: ExcelToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel format.', path: '/csv-to-excel', Icon: CsvToExcelIcon, Page: CsvToExcelPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'TSV to CSV Converter', description: 'Convert tab-separated values to comma-separated.', path: '/tsv-to-csv', Icon: TsvToCsvIcon, Page: TsvToCsvPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Merger', description: 'Merge multiple text-based files into one.', path: '/file-merger', Icon: FileMergerIcon, Page: FileMergerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: BatchFileRenamerIcon, Page: BatchFileRenamerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of a file.', path: '/file-checksum-calculator', Icon: FileChecksumCalculatorIcon, Page: FileChecksumCalculatorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/file-extension-changer', Icon: FileExtensionChangerIcon, Page: FileExtensionChangerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'DOCX to Text Extractor', description: 'Extract plain text from a DOCX file.', path: '/docx-to-text-extractor', Icon: DocxToTextExtractorIcon, Page: DocxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'PPTX to Text Extractor', description: 'Extract text from a PowerPoint file.', path: '/pptx-to-text-extractor', Icon: PptxToTextExtractorIcon, Page: PptxToTextExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Size Converter', description: 'Convert between different file size units (KB, MB, GB).', path: '/file-size-converter', Icon: FileSizeConverterIcon, Page: FileSizeConverterPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities' },
  { name: 'CSV Column Selector', description: 'Select specific columns from a CSV file.', path: '/csv-column-selector', Icon: CsvColumnSelectorIcon, Page: CsvColumnSelectorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from a DOCX file.', path: '/docx-header-footer-extractor', Icon: DocxHeaderFooterExtractorIcon, Page: DocxHeaderFooterExtractorPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
  { name: 'File Type Checker', description: 'Check the file type based on its contents.', path: '/file-type-checker', Icon: FileTypeCheckerIcon, Page: FileTypeCheckerPage, borderColor: 'border-purple-500', category: 'File Converters & Utilities', isPremium: true },
];

export const POPULAR_PATHS = [
  '/image-converter',
  '/image-resizer',
  '/case-converter',
  '/word-counter',
  '/json-formatter',
  '/password-generator',
  '/qr-code-generator',
  '/timestamp-converter',
  '/url-encoder-decoder',
  '/percentage-calculator',
  '/duplicate-line-remover',
  '/pdf-page-counter',
  '/merge-pdf',
  '/split-pdf',
  '/excel-to-csv',
  '/base64-text-encoder-decoder',
];

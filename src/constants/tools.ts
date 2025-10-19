import { Tool } from '@/types';
import {
  CaseSensitive,
  ListMinus,
  Replace,
  Maximize,
  AlignLeft,
  Key,
  Percent,
  Clock,
  QrCode,
  BoxSelect,
  FileArchive,
  FileOutput,
  ImageOff,
  FlipHorizontal,
  Eraser,
  RotateCw,
  MoreHorizontal,
  Droplets,
  Scissors,
  PenTool,
  PaintBucket,
  Palette,
  Eye,
  Scan,
  RectangleHorizontal,
  AppWindow,
  Database,
  Type,
  CheckSquare,
  Sparkles,
  ArrowLeftRight,
  Scaling,
  Blend,
  Droplet,
  Crop,
  FileCog,
  FileDown,
  ZoomIn,
  FileText,
  BarChart,
  Save,
  Search,
  Book,
  Link,
  Code,
  List,
  ListX,
  Shuffle,
  RotateCcw,
  Pilcrow,
  ListChecks,
  Binary,
  Hash,
  RemoveFormatting,
  WrapText,
  Languages,
  GanttChart,
  Youtube,
  Quote,
  Split,
  Repeat,
  Sigma,
  SortAsc,
  Code2,
  ListOrdered,
  ListTree,
  FileDiff,
  Combine,
  CalendarDays,
  PersonStanding,
  Globe,
  Waypoints,
  Calculator,
  Building2,
  HandCoins,
  Receipt,
  Shuffle as ShuffleIcon,
  Ratio,
  FilePlus,
  Lock,
  View,
  FileScan,
  FileImage,
  FileLock,
  FileUp,
  FileDown as FileDownIcon,
  File,
  FileCheck,
  FileEdit,
  Timer,
  Calendar,
  SigmaSquare,
  Superscript,
  Radical,
  FlipVertical,
  Box,
  Calculator as CalculatorIcon,
  Columns,
  Rows,
  CalendarCheck,
  CalendarClock,
  CalendarHeart,
  CalendarRange,
  Briefcase,
  Shield,
  Fingerprint,
  Server,
  Grid,
  Square,
  Layout,
  BookOpen,
  History as HistoryIcon,
  Info,
  FileInput,
  Circle,
  FileMinus,
  FileCode,
  Copy
} from 'lucide-react';


import CaseConverterPage from '@/pages/CaseConverterPage';
import DuplicateLineRemoverPage from '@/pages/DuplicateLineRemoverPage';
import ImageConverterPage from '@/pages/ImageConverterPage';
import ImageResizerPage from '@/pages/ImageResizerPage';
import JsonFormatterPage from '@/pages/JsonFormatterPage';
import PasswordGeneratorPage from '@/pages/PasswordGeneratorPage';
import PercentageCalculatorPage from '@/pages/PercentageCalculatorPage';
import TimestampConverterPage from '@/pages/TimestampConverterPage';
import UrlEncoderDecoderPage from '@/pages/UrlEncoderDecoderPage';
import WordCounterPage from '@/pages/WordCounterPage';
import QrCodeGeneratorPage from '@/pages/QrCodeGeneratorPage';
import BulkImageResizerPage from '@/pages/BulkImageResizerPage';
import ImageCompressorPage from '@/pages/ImageCompressorPage';
import ImageToBase64Page from '@/pages/ImageToBase64Page';
import ImageToGrayscalePage from '@/pages/ImageToGrayscalePage';
import BulkJpgToPngPage from '@/pages/BulkJpgToPngPage';
import BulkPngToJpgPage from '@/pages/BulkPngToJpgPage';
import ImageCropperPage from '@/pages/ImageCropperPage';
import ImageWatermarkPage from '@/pages/ImageWatermarkPage';
import ImageRotatorPage from '@/pages/ImageRotatorPage';
import ImageBlurFilterPage from '@/pages/ImageBlurFilterPage';
import ImageSepiaFilterPage from '@/pages/ImageSepiaFilterPage';
import ImageSharpenFilterPage from '@/pages/ImageSharpenFilterPage';
import ImageInvertColorsPage from '@/pages/ImageInvertColorsPage';
import ImageOpacityAdjusterPage from '@/pages/ImageOpacityAdjusterPage';
import ImageHueSaturationAdjusterPage from '@/pages/ImageHueSaturationAdjusterPage';
import ImageFlipperPage from '@/pages/ImageFlipperPage';
import ImageToAsciiArtPage from '@/pages/ImageToAsciiArtPage';
import ImageContrastAdjusterPage from '@/pages/ImageContrastAdjusterPage';
import ColorPaletteExtractorPage from '@/pages/ColorPaletteExtractorPage';
import ImageColorPickerPage from '@/pages/ImageColorPickerPage';
import AddBorderToImagePage from '@/pages/AddBorderToImagePage';
import AddRoundedCornersToImagePage from '@/pages/AddRoundedCornersToImagePage';
import ImageCollageMakerPage from '@/pages/ImageCollageMakerPage';
import ImageToDataUrlGeneratorPage from '@/pages/ImageToDataUrlGeneratorPage';
import ImageDpiChangerPage from '@/pages/ImageDpiChangerPage';
import ImageFilterPresetLibraryPage from '@/pages/ImageFilterPresetLibraryPage';
import ImageTextOverlayPage from '@/pages/ImageTextOverlayPage';
import PngTransparencyCheckerPage from '@/pages/PngTransparencyCheckerPage';
import ImagePixelateFilterPage from '@/pages/ImagePixelateFilterPage';
import ImageToBmpConverterPage from '@/pages/ImageToBmpConverterPage';
import ImageToGifConverterPage from '@/pages/ImageToGifConverterPage';
import ImageMirrorEffectPage from '@/pages/ImageMirrorEffectPage';
import ImageWarpingToolPage from '@/pages/ImageWarpingToolPage';
import ImageTintAdjusterPage from '@/pages/ImageTintAdjusterPage';
import ImageLightnessAdjusterPage from '@/pages/ImageLightnessAdjusterPage';
import ImageThresholdFilterPage from '@/pages/ImageThresholdFilterPage';
import ImageDitheringEffectPage from '@/pages/ImageDitheringEffectPage';
import ImageToCssBackgroundGeneratorPage from '@/pages/ImageToCssBackgroundGeneratorPage';
import ImageMetadataRemoverPage from '@/pages/ImageMetadataRemoverPage';
import ImageDimensionCheckerPage from '@/pages/ImageDimensionCheckerPage';
import ImageWatermarkPositionerPage from '@/pages/ImageWatermarkPositionerPage';
import ImageCanvasResizerPage from '@/pages/ImageCanvasResizerPage';
import ImageHueShifterPage from '@/pages/ImageHueShifterPage';
import ImageNoiseGeneratorPage from '@/pages/ImageNoiseGeneratorPage';
import ImageToBase64DecoderPage from '@/pages/ImageToBase64DecoderPage';
import BatchImageRotatorPage from '@/pages/BatchImageRotatorPage';
import ImageShadowGeneratorPage from '@/pages/ImageShadowGeneratorPage';
import ImageToBlackAndWhitePage from '@/pages/ImageToBlackAndWhitePage';
import ImageTilingPreviewerPage from '@/pages/ImageTilingPreviewerPage';
import ImageColorReplacerPage from '@/pages/ImageColorReplacerPage';
import ImageReflectionGeneratorPage from '@/pages/ImageReflectionGeneratorPage';
import ImageLayerMergerPage from '@/pages/ImageLayerMergerPage';
import ImageOpacitySliderPage from '@/pages/ImageOpacitySliderPage';
import ImageCropPresetPage from '@/pages/ImageCropPresetPage';
import ImageMetadataEditorPage from '@/pages/ImageMetadataEditorPage';
import ImageDownloadButtonGeneratorPage from '@/pages/ImageDownloadButtonGeneratorPage';
import ImageZoomPreviewerPage from '@/pages/ImageZoomPreviewerPage';
import ImageHeaderInfoViewerPage from '@/pages/ImageHeaderInfoViewerPage';
import ImageHistogramViewerPage from '@/pages/ImageHistogramViewerPage';
import ImageColorPaletteSaverPage from '@/pages/ImageColorPaletteSaverPage';
import PngToSvgPage from '@/pages/PngToSvgPage';
import FindAndReplacePage from '@/pages/FindAndReplacePage';
import LineBreakRemoverPage from '@/pages/LineBreakRemoverPage';
import TextToSlugConverterPage from '@/pages/TextToSlugConverterPage';
import LoremIpsumGeneratorPage from '@/pages/LoremIpsumGeneratorPage';
import ListShufflerPage from '@/pages/ListShufflerPage';
import ReverseTextGeneratorPage from '@/pages/ReverseTextGeneratorPage';
import SortLinesAlphabeticallyPage from '@/pages/SortLinesAlphabeticallyPage';
import AddPrefixSuffixPage from '@/pages/AddPrefixSuffixPage';
import RemoveEmptyLinesPage from '@/pages/RemoveEmptyLinesPage';
import KeywordDensityCheckerPage from '@/pages/KeywordDensityCheckerPage';
import TextToBinaryConverterPage from '@/pages/TextToBinaryConverterPage';
import BinaryToTextConverterPage from '@/pages/BinaryToTextConverterPage';
import TextToHexConverterPage from '@/pages/TextToHexConverterPage';
import HexToTextConverterPage from '@/pages/HexToTextConverterPage';
import TextToOctalConverterPage from '@/pages/TextToOctalConverterPage';
import OctalToTextConverterPage from '@/pages/OctalToTextConverterPage';
import RemoveExtraSpacesPage from '@/pages/RemoveExtraSpacesPage';
import TitleCaseAdvancedPage from '@/pages/TitleCaseAdvancedPage';
import SentenceCaseConverterPage from '@/pages/SentenceCaseConverterPage';
import RemoveNonAlphanumericCharsPage from '@/pages/RemoveNonAlphanumericCharsPage';
import TextScramblerPage from '@/pages/TextScramblerPage';
import ListComparatorPage from '@/pages/ListComparatorPage';
import ListIntersectorPage from '@/pages/ListIntersectorPage';
import AddQuotesToLinesPage from '@/pages/AddQuotesToLinesPage';
import RemoveQuotesFromLinesPage from '@/pages/RemoveQuotesFromLinesPage';
import TextSplitterPage from '@/pages/TextSplitterPage';
import TextRepeaterPage from '@/pages/TextRepeaterPage';
import RemoveNumbersPage from '@/pages/RemoveNumbersPage';
import RemoveLettersPage from '@/pages/RemoveLettersPage';
import Rot13Page from '@/pages/Rot13Page';
import CustomDelimiterConverterPage from '@/pages/CustomDelimiterConverterPage';
import AlphabeticalLetterGeneratorPage from '@/pages/AlphabeticalLetterGeneratorPage';
import NumberListGeneratorPage from '@/pages/NumberListGeneratorPage';
import TextEncoderDecoderPage from '@/pages/TextEncoderDecoderPage';
import YouTubeExtractorPage from '@/pages/YouTubeExtractorPage';
import LinkExtractorPage from '@/pages/LinkExtractorPage';
import HtmlCommentRemoverPage from '@/pages/HtmlCommentRemoverPage';
import CssCommentRemoverPage from '@/pages/CssCommentRemoverPage';
import JsCommentStripperPage from '@/pages/JsCommentStripperPage';
import LineCounterPage from '@/pages/LineCounterPage';
import VigenereCipherPage from '@/pages/VigenereCipherPage';
import CaesarCipherPage from '@/pages/CaesarCipherPage';
import TextToAsciiArtViewerPage from '@/pages/TextToAsciiArtViewerPage';
import EmojiStripperPage from '@/pages/EmojiStripperPage';
import InvisibleCharacterViewerPage from '@/pages/InvisibleCharacterViewerPage';
import TextCaseFlipperPage from '@/pages/TextCaseFlipperPage';
import HtmlPrettifierPage from '@/pages/HtmlPrettifierPage';
import CssPrettifierPage from '@/pages/CssPrettifierPage';
import JsBeautifierPage from '@/pages/JsBeautifierPage';
import StringConcatenatorPage from '@/pages/StringConcatenatorPage';
import TextDiffCheckerPage from '@/pages/TextDiffCheckerPage';
import PlainTextToHtmlConverterPage from '@/pages/PlainTextToHtmlConverterPage';
import HtmlToPlainTextConverterPage from '@/pages/HtmlToPlainTextConverterPage';
import CharacterSetConverterPage from '@/pages/CharacterSetConverterPage';
import BulkTextReplacementPage from '@/pages/BulkTextReplacementPage';
import JsonDataExtractorPage from '@/pages/JsonDataExtractorPage';
import WordCountAndCharacterCounterPage from '@/pages/WordCountAndCharacterCounterPage';
import CaseConverterAllPage from '@/pages/CaseConverterAllPage';
import RemoveDuplicateLinesPage from '@/pages/RemoveDuplicateLinesPage';
import DateDifferencePage from '@/pages/DateDifferencePage';
import AgeCalculatorPage from '@/pages/AgeCalculatorPage';
import TimeZoneConverterPage from '@/pages/TimeZoneConverterPage';
import UnitConverterPage from '@/pages/UnitConverterPage';
import BmiCalculatorPage from '@/pages/BmiCalculatorPage';
import LoanCalculatorPage from '@/pages/LoanCalculatorPage';
import SalesTaxCalculatorPage from '@/pages/SalesTaxCalculatorPage';
import TipCalculatorPage from '@/pages/TipCalculatorPage';
import RandomNumberGeneratorPage from '@/pages/RandomNumberGeneratorPage';
import AspectRatioCalculatorPage from '@/pages/AspectRatioCalculatorPage';
import PdfPageCounterPage from '@/pages/PdfPageCounterPage';
import MergePdfPage from '@/pages/MergePdfPage';
import SplitPdfPage from '@/pages/SplitPdfPage';
import PdfPasswordRemoverPage from '@/pages/PdfPasswordRemoverPage';
import PdfMetadataViewerPage from '@/pages/PdfMetadataViewerPage';
import PdfToJpgPage from '@/pages/PdfToJpgPage';
import PdfToPngPage from '@/pages/PdfToPngPage';
import JpgToPdfPage from '@/pages/JpgToPdfPage';
import PngToPdfPage from '@/pages/PngToPdfPage';
import PdfToTextExtractorPage from '@/pages/PdfToTextExtractorPage';
import ExcelToCsvPage from '@/pages/ExcelToCsvPage';
import CsvToExcelPage from '@/pages/CsvToExcelPage';
import TsvToCsvPage from '@/pages/TsvToCsvPage';
import FileMergerPage from '@/pages/FileMergerPage';
import BatchFileRenamerPage from '@/pages/BatchFileRenamerPage';
import FileChecksumCalculatorPage from '@/pages/FileChecksumCalculatorPage';
import FileExtensionChangerPage from '@/pages/FileExtensionChangerPage';
import DocxToTextExtractorPage from '@/pages/DocxToTextExtractorPage';
import PptxToTextExtractorPage from '@/pages/PptxToTextExtractorPage';
import FileSizeConverterPage from '@/pages/FileSizeConverterPage';
import CsvColumnSelectorPage from '@/pages/CsvColumnSelectorPage';
import DocxHeaderFooterExtractorPage from '@/pages/DocxHeaderFooterExtractorPage';
import FileTypeCheckerPage from '@/pages/FileTypeCheckerPage';
import ScientificCalculatorPage from '@/pages/ScientificCalculatorPage';
import CompoundInterestCalculatorPage from '@/pages/CompoundInterestCalculatorPage';
import CountdownTimerPage from '@/pages/CountdownTimerPage';
import StopwatchPage from '@/pages/StopwatchPage';
import DateFormatConverterPage from '@/pages/DateFormatConverterPage';
import DayOfTheWeekCalculatorPage from '@/pages/DayOfTheWeekCalculatorPage';
import LeapYearCheckerPage from '@/pages/LeapYearCheckerPage';
import TimeAdderSubtracterPage from '@/pages/TimeAdderSubtracterPage';
import BusinessDayCalculatorPage from '@/pages/BusinessDayCalculatorPage';
import MeanMedianModePage from '@/pages/MeanMedianModePage';
import StandardDeviationPage from '@/pages/StandardDeviationPage';
import ZScoreCalculatorPage from '@/pages/ZScoreCalculatorPage';
import QuadraticEquationSolverPage from '@/pages/QuadraticEquationSolverPage';
import PythagoreanTheoremSolverPage from '@/pages/PythagoreanTheoremSolverPage';
import AreaCalculatorPage from '@/pages/AreaCalculatorPage';
import VolumeCalculatorPage from '@/pages/VolumeCalculatorPage';
import FractionDecimalConverterPage from '@/pages/FractionDecimalConverterPage';
import DecimalFractionConverterPage from '@/pages/DecimalFractionConverterPage';
import BinaryCalculatorPage from '@/pages/BinaryCalculatorPage';
import OctalCalculatorPage from '@/pages/OctalCalculatorPage';
import HexadecimalCalculatorPage from '@/pages/HexadecimalCalculatorPage';
import WorldClockPage from '@/pages/WorldClockPage';
import DateToDayOfYearPage from '@/pages/DateToDayOfYearPage';
import RandomDateGeneratorPage from '@/pages/RandomDateGeneratorPage';
import MortgageRefinanceCalculatorPage from '@/pages/MortgageRefinanceCalculatorPage';
import RetirementSavingsCalculatorPage from '@/pages/RetirementSavingsCalculatorPage';
import LoanAmortizationSchedulePage from '@/pages/LoanAmortizationSchedulePage';
import CurrencyConverterPage from '@/pages/CurrencyConverterPage';
import TimeDurationFormatterPage from '@/pages/TimeDurationFormatterPage';
import SquareRootCalculatorPage from '@/pages/SquareRootCalculatorPage';
import FactorialCalculatorPage from '@/pages/FactorialCalculatorPage';
import RandomCoinFlipPage from '@/pages/RandomCoinFlipPage';
import RandomDiceRollPage from '@/pages/RandomDiceRollPage';
import ListRandomizerPage from '@/pages/ListRandomizerPage';
import BaseConversionPage from '@/pages/BaseConversionPage';
import ScientificNotationPage from '@/pages/ScientificNotationPage';
import NumberPadGeneratorPage from '@/pages/NumberPadGeneratorPage';
import NumberListSorterPage from '@/pages/NumberListSorterPage';
import OddEvenNumberFilterPage from '@/pages/OddEvenNumberFilterPage';
import JsonValidatorPage from '@/pages/JsonValidatorPage';
import Base64TextEncoderDecoderPage from '@/pages/Base64TextEncoderDecoderPage';
import Md5HashGeneratorPage from '@/pages/Md5HashGeneratorPage';
import Sha256HashGeneratorPage from '@/pages/Sha256HashGeneratorPage';
import JsonMinifierPage from '@/pages/JsonMinifierPage';
import HexRgbConverterPage from '@/pages/HexRgbConverterPage';
import UuidGeneratorPage from '@/pages/UuidGeneratorPage';
import CssBorderRadiusGeneratorPage from '@/pages/CssBorderRadiusGeneratorPage';
import JsonToCsvPage from '@/pages/JsonToCsvPage';
import CsvToJsonPage from '@/pages/CsvToJsonPage';
import CssBoxShadowGeneratorPage from '@/pages/CssBoxShadowGeneratorPage';
import ColorContrastCheckerPage from '@/pages/ColorContrastCheckerPage';
import RegexTesterPage from '@/pages/RegexTesterPage';
import HtmlEntityEncoderDecoderPage from '@/pages/HtmlEntityEncoderDecoderPage';
import HtmlTagStripperPage from '@/pages/HtmlTagStripperPage';
import JsonToXmlConverterPage from '@/pages/JsonToXmlConverterPage';
import XmlToJsonConverterPage from '@/pages/XmlToJsonConverterPage';
import UrlParserPage from '@/pages/UrlParserPage';
import JsMinifierPage from '@/pages/JsMinifierPage';
import CssGradientGeneratorPage from '@/pages/CssGradientGeneratorPage';
import DecimalToBinaryConverterPage from '@/pages/DecimalToBinaryConverterPage';
import BinaryToDecimalConverterPage from '@/pages/BinaryToDecimalConverterPage';
import HtaccessRedirectGeneratorPage from '@/pages/HtaccessRedirectGeneratorPage';
import HtaccessAuthGeneratorPage from '@/pages/HtaccessAuthGeneratorPage';
import XmlFormatterPage from '@/pages/XmlFormatterPage';
import YamlToJsonConverterPage from '@/pages/YamlToJsonConverterPage';
import SvgEditorPage from '@/pages/SvgEditorPage';
import HtmlToMarkdownConverterPage from '@/pages/HtmlToMarkdownConverterPage';
import MarkdownToHtmlRendererPage from '@/pages/MarkdownToHtmlRendererPage';
import PasswordStrengthCheckerPage from '@/pages/PasswordStrengthCheckerPage';
import CssPrefixerPage from '@/pages/CssPrefixerPage';
import ApiTesterPage from '@/pages/ApiTesterPage';
import WebpDetectionPage from '@/pages/WebpDetectionPage';
import ImageOptimizationCheckerPage from '@/pages/ImageOptimizationCheckerPage';
import CssGridPlaygroundPage from '@/pages/CssGridPlaygroundPage';
import CssFlexboxPlaygroundPage from '@/pages/CssFlexboxPlaygroundPage';
import JsonToPhpArrayPage from '@/pages/JsonToPhpArrayPage';
import JsonToPythonDictPage from '@/pages/JsonToPythonDictPage';
import HttpStatusCodeLookupPage from '@/pages/HttpStatusCodeLookupPage';
import StringToArrayPage from '@/pages/StringToArrayPage';
import ArrayToStringPage from '@/pages/ArrayToStringPage';
import XmlValidatorPage from '@/pages/XmlValidatorPage';
import FontStackGeneratorPage from '@/pages/FontStackGeneratorPage';
import HtmlBoilerplateGeneratorPage from '@/pages/HtmlBoilerplateGeneratorPage';
import CssFilterGeneratorPage from '@/pages/CssFilterGeneratorPage';
import ColorPickerFromScreenPage from '@/pages/ColorPickerFromScreenPage';
import CsvViewerPage from '@/pages/CsvViewerPage';
import LocalStorageViewerPage from '@/pages/LocalStorageViewerPage';
import CodeSnippetRunnerPage from '@/pages/CodeSnippetRunnerPage';
import FaviconExtractorPage from '@/pages/FaviconExtractorPage';
import JsonToSqlInsertPage from '@/pages/JsonToSqlInsertPage';
import JsonArrayShufflerPage from '@/pages/JsonArrayShufflerPage';
import HexToDecimalConverterPage from '@/pages/HexToDecimalConverterPage';
import RandomIdGeneratorPage from '@/pages/RandomIdGeneratorPage';
import PdfViewerPage from '@/pages/PdfViewerPage';

// Premium / Placeholder Pages
import PdfWatermarkAdderTextPage from '@/pages/PdfWatermarkAdderTextPage';
import PdfWatermarkAdderImagePage from '@/pages/PdfWatermarkAdderImagePage';
import PdfEncryptorPage from '@/pages/PdfEncryptorPage';
import ReorderPdfPagesPage from '@/pages/ReorderPdfPagesPage';
import RotateAllPdfPagesPage from '@/pages/RotateAllPdfPagesPage';
import PdfPageDeleterPage from '@/pages/PdfPageDeleterPage';
import PdfPageCropperPage from '@/pages/PdfPageCropperPage';
import PdfToSvgPage from '@/pages/PdfToSvgPage';
import PdfPageNumberRemoverPage from '@/pages/PdfPageNumberRemoverPage';
import PdfDocumentCropperPage from '@/pages/PdfDocumentCropperPage';
import AddTextSignatureToPdfPage from '@/pages/AddTextSignatureToPdfPage';
import PdfAnnotationViewerPage from '@/pages/PdfAnnotationViewerPage';
import PdfPageSizeCheckerPage from '@/pages/PdfPageSizeCheckerPage';
import PdfColorInverterPage from '@/pages/PdfColorInverterPage';
import PdfFileSizeCheckerPage from '@/pages/PdfFileSizeCheckerPage';
import PdfCompressionRatioCheckerPage from '@/pages/PdfCompressionRatioCheckerPage';
import PdfMetadataEditorPage from '@/pages/PdfMetadataEditorPage';
import PdfGrayscaleConverterPage from '@/pages/PdfGrayscaleConverterPage';
import PdfSecurityCheckerPage from '@/pages/PdfSecurityCheckerPage';
import DocxToPdfPage from '@/pages/DocxToPdfPage';
import PdfToDocxPage from '@/pages/PdfToDocxPage';
import PdfAnnotationCreatorPage from '@/pages/PdfAnnotationCreatorPage';
import PdfPageRotatorIndividualPage from '@/pages/PdfPageRotatorIndividualPage';
import PdfPageExtractorPage from '@/pages/PdfPageExtractorPage';
import PdfPageInserterPage from '@/pages/PdfPageInserterPage';
import PdfPageDuplicatorPage from '@/pages/PdfPageDuplicatorPage';
import PdfContentCleanerPage from '@/pages/PdfContentCleanerPage';
import PdfFormFieldViewerPage from '@/pages/PdfFormFieldViewerPage';
import PdfHeaderFooterRemoverPage from '@/pages/PdfHeaderFooterRemoverPage';
import PdfWatermarkPositionEditorPage from '@/pages/PdfWatermarkPositionEditorPage';
import PdfPageCounterRangePage from '@/pages/PdfPageCounterRangePage';
import PdfPageNumberFormatChangerPage from '@/pages/PdfPageNumberFormatChangerPage';
import PdfTextReplacerPage from '@/pages/PdfTextReplacerPage';
import PdfToHtmlConverterPage from '@/pages/PdfToHtmlConverterPage';
import PdfSecurityLevelCheckerPage from '@/pages/PdfSecurityLevelCheckerPage';
import PdfFileOptimizerPage from '@/pages/PdfFileOptimizerPage';
import Base64ImageSizeCalculatorPage from '@/pages/Base64ImageSizeCalculatorPage';
import ColorPaletteGeneratorPage from '@/pages/ColorPaletteGeneratorPage';

export const TOOLS: Tool[] = [
  // Image Tools
  { name: 'JPG & PNG Converter', description: 'Convert images between JPG and PNG formats.', path: '/image-converter', Icon: Replace, Page: ImageConverterPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'Image Resizer', description: 'Resize images by pixels or percentage.', path: '/image-resizer', Icon: Maximize, Page: ImageResizerPage, category: 'Image Tools', borderColor: 'border-purple-500' },
  { name: 'QR Code Generator', description: 'Create a QR code from text or a URL.', path: '/qr-code-generator', Icon: QrCode, Page: QrCodeGeneratorPage, category: 'Image Tools', borderColor: 'border-indigo-500' },
  { name: 'Bulk Image Resizer', description: 'Resize multiple images at once.', path: '/bulk-image-resizer', Icon: BoxSelect, Page: BulkImageResizerPage, category: 'Image Tools', borderColor: 'border-purple-600' },
  { name: 'Image Compressor', description: 'Compress multiple JPG images.', path: '/image-compressor', Icon: FileArchive, Page: ImageCompressorPage, category: 'Image Tools', borderColor: 'border-purple-400' },
  { name: 'Image to Base64', description: 'Convert images to Base64 strings.', path: '/image-to-base64', Icon: FileOutput, Page: ImageToBase64Page, category: 'Image Tools', borderColor: 'border-yellow-600' },
  { name: 'Image to Grayscale', description: 'Convert multiple images to grayscale.', path: '/image-to-grayscale', Icon: ImageOff, Page: ImageToGrayscalePage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Bulk JPG to PNG', description: 'Convert multiple JPGs to PNGs.', path: '/bulk-jpg-to-png', Icon: FlipHorizontal, Page: BulkJpgToPngPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'Bulk PNG to JPG', description: 'Convert multiple PNGs to JPGs.', path: '/bulk-png-to-jpg', Icon: FlipHorizontal, Page: BulkPngToJpgPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'PNG to SVG Converter', description: 'Embed a PNG image inside an SVG file.', path: '/png-to-svg', Icon: Replace, Page: PngToSvgPage, category: 'Image Tools', borderColor: 'border-orange-400' },
  { name: 'Image Cropper', description: 'Crop images with various aspect ratios.', path: '/image-cropper', Icon: Crop, Page: ImageCropperPage, category: 'Image Tools', borderColor: 'border-rose-500' },
  { name: 'Image DPI Changer', description: 'Change the DPI of a JPG image.', path: '/image-dpi-changer', Icon: Scaling, Page: ImageDpiChangerPage, category: 'Image Tools', borderColor: 'border-cyan-600' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from images.', path: '/image-metadata-remover', Icon: Eraser, Page: ImageMetadataRemoverPage, category: 'Image Tools', borderColor: 'border-red-700' },
  { name: 'Image Metadata Editor', description: 'Edit EXIF and other metadata in images.', path: '/image-metadata-editor', Icon: FileCog, Page: ImageMetadataEditorPage, category: 'Image Tools', borderColor: 'border-slate-600' },

  // Text & List Tools
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, etc.', path: '/case-converter', Icon: CaseSensitive, Page: CaseConverterPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: ListMinus, Page: DuplicateLineRemoverPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Word / Char Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-char-counter', Icon: Type, Page: WordCounterPage, category: 'Text & List Tools', borderColor: 'border-green-500' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages, fractions, and changes.', path: '/percentage-calculator', Icon: Percent, Page: PercentageCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: Clock, Page: TimestampConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-blue-800' },
  
  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and beautify your JSON data.', path: '/json-formatter', Icon: AlignLeft, Page: JsonFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: Link, Page: UrlEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-pink-500' },
  { name: 'Password Generator', description: 'Generate strong, random passwords.', path: '/password-generator', Icon: Key, Page: PasswordGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  
  // PDF & Document Tools
  { name: 'PDF Page Counter', description: 'Count the number of pages in a PDF file.', path: '/pdf-page-counter', Icon: ListOrdered, Page: PdfPageCounterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Merge PDF', description: 'Combine multiple PDF files into one.', path: '/merge-pdf', Icon: Combine, Page: MergePdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-600' },
  { name: 'Split PDF', description: 'Extract pages from a PDF file.', path: '/split-pdf', Icon: Split, Page: SplitPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-700' },
  { name: 'PDF Password Remover', description: 'Remove password and restrictions from a PDF.', path: '/pdf-password-remover', Icon: Lock, Page: PdfPasswordRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-800' },
  { name: 'PDF Metadata Viewer', description: 'View the metadata of a PDF file.', path: '/pdf-metadata-viewer', Icon: Info, Page: PdfMetadataViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-400' },
  { name: 'PDF to JPG', description: 'Convert each page of a PDF to a JPG image.', path: '/pdf-to-jpg', Icon: FileImage, Page: PdfToJpgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to PNG', description: 'Convert each page of a PDF to a PNG image.', path: '/pdf-to-png', Icon: FileImage, Page: PdfToPngPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'JPG to PDF', description: 'Convert JPG images to a single PDF file.', path: '/jpg-to-pdf', Icon: File, Page: JpgToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PNG to PDF', description: 'Convert PNG images to a single PDF file.', path: '/png-to-pdf', Icon: File, Page: PngToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to Text Extractor', description: 'Extract all text content from a PDF.', path: '/pdf-to-text-extractor', Icon: FileText, Page: PdfToTextExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-700' },
  { name: 'Add Text Watermark to PDF', description: 'Add a text watermark to every page of a PDF.', path: '/pdf-watermark-adder-text', Icon: Type, Page: PdfWatermarkAdderTextPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Image Watermark to PDF', description: 'Add an image watermark to every page of a PDF.', path: '/pdf-watermark-adder-image', Icon: Droplets, Page: PdfWatermarkAdderImagePage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Encrypt PDF', description: 'Add a password to protect a PDF file.', path: '/pdf-encryptor', Icon: Lock, Page: PdfEncryptorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Reorder PDF Pages', description: 'Change the order of pages in a PDF.', path: '/reorder-pdf-pages', Icon: List, Page: ReorderPdfPagesPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Rotate All PDF Pages', description: 'Rotate all pages in a PDF document.', path: '/rotate-all-pdf-pages', Icon: RotateCw, Page: RotateAllPdfPagesPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Delete PDF Pages', description: 'Remove specific pages from a PDF.', path: '/pdf-page-deleter', Icon: FileMinus, Page: PdfPageDeleterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Viewer', description: 'View a PDF file directly in your browser.', path: '/pdf-viewer', Icon: View, Page: PdfViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to SVG images.', path: '/pdf-to-svg', Icon: FileImage, Page: PdfToSvgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Crop PDF Document', description: 'Crop all pages of a PDF at once.', path: '/pdf-document-cropper', Icon: Crop, Page: PdfDocumentCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Size Checker', description: 'Check the size of each page in a PDF.', path: '/pdf-page-size-checker', Icon: Maximize, Page: PdfPageSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF file.', path: '/pdf-metadata-editor', Icon: FileCog, Page: PdfMetadataEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: FileLock, Page: PdfSecurityCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Extract Pages from PDF', description: 'Extract a range of pages into a new PDF.', path: '/pdf-page-extractor', Icon: Scissors, Page: PdfPageExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Page Numbers to PDF', description: 'Add page numbers to a PDF file.', path: '/pdf-page-number-format-changer', Icon: ListOrdered, Page: PdfPageNumberFormatChangerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Text Replacer', description: 'Find and replace text within a PDF.', path: '/pdf-text-replacer', Icon: Replace, Page: PdfTextReplacerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },

  // File Converters & Utilities
  { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV.', path: '/excel-to-csv', Icon: Replace, Page: ExcelToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel.', path: '/csv-to-excel', Icon: Replace, Page: CsvToExcelPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX to Text Extractor', description: 'Extract text from a DOCX file.', path: '/docx-to-text-extractor', Icon: FileText, Page: DocxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'PPTX to Text Extractor', description: 'Extract text from a PPTX file.', path: '/pptx-to-text-extractor', Icon: FileText, Page: PptxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX to PDF', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: FileUp, Page: DocxToPdfPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },

  // Premium / Placeholder Tools
  { name: 'PDF Page Number Remover', description: 'Remove page numbers from a PDF.', path: '/pdf-page-number-remover', Icon: Eraser, Page: PdfPageNumberRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: PenTool, Page: AddTextSignatureToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Annotation Viewer', description: 'View all annotations in a PDF.', path: '/pdf-annotation-viewer', Icon: BookOpen, Page: PdfAnnotationViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: Droplets, Page: PdfColorInverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: FileArchive, Page: PdfCompressionRatioCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF to Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: ImageOff, Page: PdfGrayscaleConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF to DOCX', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: FileDownIcon, Page: PdfToDocxPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500', isPremium: true },
  { name: 'PDF Annotation Creator', description: 'Add annotations to a PDF.', path: '/pdf-annotation-creator', Icon: PenTool, Page: PdfAnnotationCreatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Rotate Individual PDF Pages', description: 'Rotate specific pages in a PDF.', path: '/pdf-page-rotator-individual', Icon: RotateCw, Page: PdfPageRotatorIndividualPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Insert Pages into PDF', description: 'Insert pages from one PDF into another.', path: '/pdf-page-inserter', Icon: FilePlus, Page: PdfPageInserterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'Duplicate PDF Pages', description: 'Duplicate pages within a PDF.', path: '/pdf-page-duplicator', Icon: Copy, Page: PdfPageDuplicatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Content Cleaner', description: 'Remove certain elements like images or text.', path: '/pdf-content-cleaner', Icon: Eraser, Page: PdfContentCleanerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Form Field Viewer', description: 'View all form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: FileScan, Page: PdfFormFieldViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: Eraser, Page: PdfHeaderFooterRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF to HTML Converter', description: 'Convert a PDF to an HTML file.', path: '/pdf-to-html-converter', Icon: FileCode, Page: PdfToHtmlConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF Security Level Checker', description: 'Check the encryption level of a PDF.', path: '/pdf-security-level-checker', Icon: FileLock, Page: PdfSecurityLevelCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF to reduce its file size.', path: '/pdf-file-optimizer', Icon: FileArchive, Page: PdfFileOptimizerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500', isPremium: true },
];

export const POPULAR_PATHS = [
  '/word-char-counter',
  '/image-converter',
  '/json-formatter',
  '/password-generator',
  '/case-converter',
  '/duplicate-line-remover',
  '/image-resizer',
  '/qr-code-generator',
  '/timestamp-converter',
  '/merge-pdf',
  '/split-pdf',
  '/url-encoder-decoder',
];

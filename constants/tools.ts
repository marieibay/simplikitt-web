import { Tool } from '../types';
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
  GalleryThumbnails,
  PictureInPicture,
  Database,
  Type,
  CheckSquare,
  Sparkles,
  ArrowLeftRight,
  Monitor,
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
  TextToSpeech,
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
  AtSign,
  Bold,
  Italic,
  Strikethrough,
  Code2,
  ListOrdered,
  ListTree,
  FileDiff,
  Combine,
  Braces,
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
  FileSymlink,
  Lock,
  View,
  FileScan,
  FileImage,
  FileSliders,
  FileLock,
  FileUp,
  FileDown as FileDownIcon,
  File,
  FileArchive as FileArchiveIcon,
  FileCheck,
  FileEdit,
  FileBox,
  FileQuestion,
  Timer,
  Calendar,
  Footprints,
  SigmaSquare,
  Superscript,
  Radical,
  FlipVertical,
  Anchor,
  Box,
  Calculator as CalculatorIcon,
  Columns,
  Rows,
  TimerOff,
  CalendarCheck,
  CalendarClock,
  CalendarHeart,
  CalendarRange,
  AlarmClock,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Briefcase,
  GitCommit,
  GitBranch,
  Puzzle,
  Shield,
  Fingerprint,
  HardDrive,
  Terminal,
  Server,
  Network,
  Cloud,
  Cpu,
  Unplug,
  Settings,
  Grid,
  Square,
  Layout,
  PanelLeft,
  BookOpen,
  GitFork,
  Webhook,
  Cookie,
  Clipboard,
  ClipboardList,
  History,
  Info,
  FileInput,
  Circle,
  FileMinus,
  FileCode,
  Copy
} from 'lucide-react';


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
import HexRgbConverterPage from '../pages/HexRgbConverterPage';
import UuidGeneratorPage from '../pages/UuidGeneratorPage';
import CssBorderRadiusGeneratorPage from '../pages/CssBorderRadiusGeneratorPage';
import JsonToCsvPage from '../pages/JsonToCsvPage';
import CsvToJsonPage from '../pages/CsvToJsonPage';
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
import ImageOptimizationCheckerPage from '../pages/ImageOptimizationCheckerPage';
import CssGridPlaygroundPage from '../pages/CssGridPlaygroundPage';
import CssFlexboxPlaygroundPage from '../pages/CssFlexboxPlaygroundPage';
import JsonToPhpArrayPage from '../pages/JsonToPhpArrayPage';
import JsonToPythonDictPage from '../pages/JsonToPythonDictPage';
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
import PdfViewerPage from '../pages/PdfViewerPage';

// Premium / Placeholder Pages
import PdfWatermarkAdderTextPage from '../pages/PdfWatermarkAdderTextPage';
import PdfWatermarkAdderImagePage from '../pages/PdfWatermarkAdderImagePage';
import PdfEncryptorPage from '../pages/PdfEncryptorPage';
import ReorderPdfPagesPage from '../pages/ReorderPdfPagesPage';
import RotateAllPdfPagesPage from '../pages/RotateAllPdfPagesPage';
import PdfPageDeleterPage from '../pages/PdfPageDeleterPage';
import PdfPageCropperPage from '../pages/PdfPageCropperPage';
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
import Base64ImageSizeCalculatorPage from '../pages/Base64ImageSizeCalculatorPage';
import ColorPaletteGeneratorPage from '../pages/ColorPaletteGeneratorPage';

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
  { name: 'Image Cropper', description: 'Crop images with various aspect ratios.', path: '/image-cropper', Icon: Crop, Page: ImageCropperPage, category: 'Image Tools', borderColor: 'border-rose-500' },
  { name: 'Image Watermark', description: 'Add a watermark to your images.', path: '/image-watermark', Icon: Droplets, Page: ImageWatermarkPage, category: 'Image Tools', borderColor: 'border-rose-400' },
  { name: 'Image Rotator', description: 'Rotate an image to any angle.', path: '/image-rotator', Icon: RotateCw, Page: ImageRotatorPage, category: 'Image Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Image Blur Filter', description: 'Apply a blur effect to your image.', path: '/image-blur-filter', Icon: MoreHorizontal, Page: ImageBlurFilterPage, category: 'Image Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Image Sepia Filter', description: 'Apply a sepia tone to your image.', path: '/image-sepia-filter', Icon: Droplets, Page: ImageSepiaFilterPage, category: 'Image Tools', borderColor: 'border-amber-500' },
  { name: 'Image Sharpen Filter', description: 'Apply a sharpen effect to your image.', path: '/image-sharpen-filter', Icon: CheckSquare, Page: ImageSharpenFilterPage, category: 'Image Tools', borderColor: 'border-sky-500' },
  { name: 'Image Invert Colors', description: 'Invert the colors of your image.', path: '/image-invert-colors', Icon: Droplets, Page: ImageInvertColorsPage, category: 'Image Tools', borderColor: 'border-slate-500' },
  { name: 'Image Opacity Adjuster', description: 'Change the opacity of your image.', path: '/image-opacity-adjuster', Icon: Droplet, Page: ImageOpacityAdjusterPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Hue, Saturation & Brightness', description: 'Adjust HSL values of an image.', path: '/image-hue-saturation-adjuster', Icon: Droplets, Page: ImageHueSaturationAdjusterPage, category: 'Image Tools', borderColor: 'border-pink-400' },
  { name: 'Image Flipper', description: 'Flip an image horizontally or vertically.', path: '/image-flipper', Icon: FlipVertical, Page: ImageFlipperPage, category: 'Image Tools', borderColor: 'border-green-400' },
  { name: 'Image to ASCII Art', description: 'Convert an image into ASCII art.', path: '/image-to-ascii-art', Icon: Code, Page: ImageToAsciiArtPage, category: 'Image Tools', borderColor: 'border-lime-500' },
  { name: 'Image Contrast Adjuster', description: 'Adjust the contrast of an image.', path: '/image-contrast-adjuster', Icon: Droplets, Page: ImageContrastAdjusterPage, category: 'Image Tools', borderColor: 'border-neutral-500' },
  { name: 'Color Palette Extractor', description: 'Extract a color palette from an image.', path: '/color-palette-extractor', Icon: Palette, Page: ColorPaletteExtractorPage, category: 'Image Tools', borderColor: 'border-emerald-500' },
  { name: 'Image Color Picker', description: 'Pick colors from an uploaded image.', path: '/image-color-picker', Icon: Eye, Page: ImageColorPickerPage, category: 'Image Tools', borderColor: 'border-red-400' },
  { name: 'Add Border to Image', description: 'Add a solid border around an image.', path: '/add-border-to-image', Icon: Scan, Page: AddBorderToImagePage, category: 'Image Tools', borderColor: 'border-stone-500' },
  { name: 'Add Rounded Corners', description: 'Add rounded corners to an image.', path: '/add-rounded-corners-to-image', Icon: RectangleHorizontal, Page: AddRoundedCornersToImagePage, category: 'Image Tools', borderColor: 'border-violet-500' },
  { name: 'Image Collage Maker', description: 'Create a 2x2 image collage.', path: '/image-collage-maker', Icon: AppWindow, Page: ImageCollageMakerPage, category: 'Image Tools', borderColor: 'border-orange-400' },
  { name: 'Image to Data URL', description: 'Generate a Data URL from an image.', path: '/image-to-data-url-generator', Icon: Link, Page: ImageToDataUrlGeneratorPage, category: 'Image Tools', borderColor: 'border-indigo-400' },
  { name: 'Image DPI Changer', description: 'Change the DPI of a JPG image.', path: '/image-dpi-changer', Icon: Scaling, Page: ImageDpiChangerPage, category: 'Image Tools', borderColor: 'border-cyan-600' },
  { name: 'Image Filter Presets', description: 'Apply Instagram-like filters to images.', path: '/image-filter-preset-library', Icon: Sparkles, Page: ImageFilterPresetLibraryPage, category: 'Image Tools', borderColor: 'border-teal-400' },
  { name: 'Image Text Overlay', description: 'Add text on top of an image.', path: '/image-text-overlay', Icon: Type, Page: ImageTextOverlayPage, category: 'Image Tools', borderColor: 'border-blue-400' },
  { name: 'PNG Transparency Checker', description: 'Check if a PNG has transparent areas.', path: '/png-transparency-checker', Icon: CheckSquare, Page: PngTransparencyCheckerPage, category: 'Image Tools', borderColor: 'border-slate-400' },
  { name: 'Image Pixelate Filter', description: 'Pixelate an image for a retro effect.', path: '/image-pixelate-filter', Icon: MoreHorizontal, Page: ImagePixelateFilterPage, category: 'Image Tools', borderColor: 'border-gray-600' },
  { name: 'Image to BMP Converter', description: 'Convert any image to BMP format.', path: '/image-to-bmp-converter', Icon: Replace, Page: ImageToBmpConverterPage, category: 'Image Tools', borderColor: 'border-cyan-800' },
  { name: 'Image to GIF Converter', description: 'Convert a single image to a GIF.', path: '/image-to-gif-converter', Icon: Replace, Page: ImageToGifConverterPage, category: 'Image Tools', borderColor: 'border-pink-600' },
  { name: 'Image Mirror Effect', description: 'Create a mirror effect on an image.', path: '/image-mirror-effect', Icon: FlipHorizontal, Page: ImageMirrorEffectPage, category: 'Image Tools', borderColor: 'border-blue-300' },
  { name: 'Image Skew (Warp) Tool', description: 'Skew or distort an image.', path: '/image-warping-tool', Icon: ArrowLeftRight, Page: ImageWarpingToolPage, category: 'Image Tools', borderColor: 'border-indigo-600' },
  { name: 'Image Tint Adjuster', description: 'Apply a color tint to an image.', path: '/image-tint-adjuster', Icon: PaintBucket, Page: ImageTintAdjusterPage, category: 'Image Tools', borderColor: 'border-rose-300' },
  { name: 'Image Lightness Adjuster', description: 'Adjust the brightness/lightness of an image.', path: '/image-lightness-adjuster', Icon: Droplet, Page: ImageLightnessAdjusterPage, category: 'Image Tools', borderColor: 'border-yellow-500' },
  { name: 'Image Threshold Filter', description: 'Apply a black and white threshold.', path: '/image-threshold-filter', Icon: CheckSquare, Page: ImageThresholdFilterPage, category: 'Image Tools', borderColor: 'border-gray-800' },
  { name: 'Image Dithering Effect', description: 'Apply a 1-bit dithering effect.', path: '/image-dithering-effect', Icon: MoreHorizontal, Page: ImageDitheringEffectPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'CSS Background Generator', description: 'Create CSS background code from an image.', path: '/image-to-css-background-generator', Icon: Code, Page: ImageToCssBackgroundGeneratorPage, category: 'Image Tools', borderColor: 'border-blue-600' },
  { name: 'Image Metadata Remover', description: 'Strip EXIF and other metadata from images.', path: '/image-metadata-remover', Icon: Eraser, Page: ImageMetadataRemoverPage, category: 'Image Tools', borderColor: 'border-red-700' },
  { name: 'Image Dimension Checker', description: 'Quickly find the dimensions of an image.', path: '/image-dimension-checker', Icon: Maximize, Page: ImageDimensionCheckerPage, category: 'Image Tools', borderColor: 'border-green-700' },
  { name: 'Image Watermark Positioner', description: 'Add and position a watermark on an image.', path: '/image-watermark-positioner', Icon: Droplets, Page: ImageWatermarkPositionerPage, category: 'Image Tools', borderColor: 'border-rose-600' },
  { name: 'Image Canvas Resizer', description: 'Resize the canvas without scaling the image.', path: '/image-canvas-resizer', Icon: Maximize, Page: ImageCanvasResizerPage, category: 'Image Tools', borderColor: 'border-purple-300' },
  { name: 'Image Hue Shifter', description: 'Shift the hue of an entire image.', path: '/image-hue-shifter', Icon: Droplet, Page: ImageHueShifterPage, category: 'Image Tools', borderColor: 'border-pink-500' },
  { name: 'Image Noise Generator', description: 'Add noise or grain to an image.', path: '/image-noise-generator', Icon: MoreHorizontal, Page: ImageNoiseGeneratorPage, category: 'Image Tools', borderColor: 'border-gray-400' },
  { name: 'Base64 to Image Decoder', description: 'Decode a Base64 string back into an image.', path: '/image-to-base64-decoder', Icon: FileInput, Page: ImageToBase64DecoderPage, category: 'Image Tools', borderColor: 'border-blue-200' },
  { name: 'Batch Image Rotator', description: 'Rotate multiple images at once.', path: '/batch-image-rotator', Icon: RotateCw, Page: BatchImageRotatorPage, category: 'Image Tools', borderColor: 'border-fuchsia-600' },
  { name: 'Image Shadow Generator', description: 'Add a drop shadow effect to an image.', path: '/image-shadow-generator', Icon: Square, Page: ImageShadowGeneratorPage, category: 'Image Tools', borderColor: 'border-gray-300' },
  { name: 'Image to Black & White', description: 'Convert an image to black and white.', path: '/image-to-black-and-white', Icon: ImageOff, Page: ImageToBlackAndWhitePage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Image Tiling Previewer', description: 'See how an image tiles as a background.', path: '/image-tiling-previewer', Icon: Grid, Page: ImageTilingPreviewerPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Image Color Replacer', description: 'Replace one color with another in an image.', path: '/image-color-replacer', Icon: PaintBucket, Page: ImageColorReplacerPage, category: 'Image Tools', borderColor: 'border-red-300' },
  { name: 'Image Reflection Generator', description: 'Create a reflection effect for an image.', path: '/image-reflection-generator', Icon: FlipVertical, Page: ImageReflectionGeneratorPage, category: 'Image Tools', borderColor: 'border-blue-300' },
  { name: 'Image Layer Merger', description: 'Merge two images with various blend modes.', path: '/image-layer-merger', Icon: Blend, Page: ImageLayerMergerPage, category: 'Image Tools', borderColor: 'border-purple-400' },
  { name: 'Image Opacity Slider', description: 'Adjust image opacity with a slider.', path: '/image-opacity-slider', Icon: Droplet, Page: ImageOpacitySliderPage, category: 'Image Tools', borderColor: 'border-gray-500' },
  { name: 'Image Crop Preset', description: 'Crop images to preset social media sizes.', path: '/image-crop-preset', Icon: Crop, Page: ImageCropPresetPage, category: 'Image Tools', borderColor: 'border-rose-500' },
  { name: 'Image Metadata Editor', description: 'Edit EXIF and other metadata in images.', path: '/image-metadata-editor', Icon: FileCog, Page: ImageMetadataEditorPage, category: 'Image Tools', borderColor: 'border-slate-600' },
  { name: 'Image Download Button Generator', description: 'Create an HTML download button for an image.', path: '/image-download-button-generator', Icon: FileDown, Page: ImageDownloadButtonGeneratorPage, category: 'Image Tools', borderColor: 'border-green-600' },
  { name: 'Image Zoom Previewer', description: 'Zoom in and out of an image.', path: '/image-zoom-previewer', Icon: ZoomIn, Page: ImageZoomPreviewerPage, category: 'Image Tools', borderColor: 'border-blue-700' },
  { name: 'Image Header Info Viewer', description: 'View the binary header of an image file.', path: '/image-header-info-viewer', Icon: FileText, Page: ImageHeaderInfoViewerPage, category: 'Image Tools', borderColor: 'border-gray-700' },
  { name: 'Image Histogram Viewer', description: 'View the color histogram of an image.', path: '/image-histogram-viewer', Icon: BarChart, Page: ImageHistogramViewerPage, category: 'Image Tools', borderColor: 'border-indigo-700' },
  { name: 'Image Color Palette Saver', description: 'Extract and save a color palette from an image.', path: '/image-color-palette-saver', Icon: Save, Page: ImageColorPaletteSaverPage, category: 'Image Tools', borderColor: 'border-emerald-500' },
  
  // Text & List Tools
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, etc.', path: '/case-converter', Icon: CaseSensitive, Page: CaseConverterPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: ListMinus, Page: DuplicateLineRemoverPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Word / Char Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-char-counter', Icon: Type, Page: WordCounterPage, category: 'Text & List Tools', borderColor: 'border-green-500' },
  { name: 'Find & Replace Text', description: 'Find and replace text in a block of content.', path: '/find-and-replace', Icon: Search, Page: FindAndReplacePage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Line Break Remover', description: 'Remove all line breaks from text.', path: '/line-break-remover', Icon: Eraser, Page: LineBreakRemoverPage, category: 'Text & List Tools', borderColor: 'border-blue-400' },
  { name: 'Text to Slug Converter', description: 'Convert text to a URL-friendly slug.', path: '/text-to-slug-converter', Icon: Link, Page: TextToSlugConverterPage, category: 'Text & List Tools', borderColor: 'border-indigo-400' },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', path: '/lorem-ipsum-generator', Icon: Book, Page: LoremIpsumGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-400' },
  { name: 'List Shuffler', description: 'Randomize the order of lines in a list.', path: '/list-shuffler', Icon: Shuffle, Page: ListShufflerPage, category: 'Text & List Tools', borderColor: 'border-purple-400' },
  { name: 'Reverse Text Generator', description: 'Reverse the characters in your text.', path: '/reverse-text-generator', Icon: RotateCcw, Page: ReverseTextGeneratorPage, category: 'Text & List Tools', borderColor: 'border-pink-400' },
  { name: 'Sort Lines Alphabetically', description: 'Sort lines of text alphabetically.', path: '/sort-lines-alphabetically', Icon: SortAsc, Page: SortLinesAlphabeticallyPage, category: 'Text & List Tools', borderColor: 'border-yellow-500' },
  { name: 'Add Prefix/Suffix to Lines', description: 'Add text to the beginning or end of each line.', path: '/add-prefix-suffix', Icon: Pilcrow, Page: AddPrefixSuffixPage, category: 'Text & List Tools', borderColor: 'border-teal-400' },
  { name: 'Remove Empty Lines', description: 'Remove all empty lines from a block of text.', path: '/remove-empty-lines', Icon: ListX, Page: RemoveEmptyLinesPage, category: 'Text & List Tools', borderColor: 'border-red-400' },
  { name: 'Keyword Density Checker', description: 'Analyze the keyword density of your text.', path: '/keyword-density-checker', Icon: ListChecks, Page: KeywordDensityCheckerPage, category: 'Text & List Tools', borderColor: 'border-orange-500' },
  { name: 'Text to Binary Converter', description: 'Convert text to binary code.', path: '/text-to-binary-converter', Icon: Binary, Page: TextToBinaryConverterPage, category: 'Text & List Tools', borderColor: 'border-gray-600' },
  { name: 'Binary to Text Converter', description: 'Convert binary code to text.', path: '/binary-to-text-converter', Icon: Type, Page: BinaryToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-gray-500' },
  { name: 'Text to Hex Converter', description: 'Convert text to hexadecimal.', path: '/text-to-hex-converter', Icon: Hash, Page: TextToHexConverterPage, category: 'Text & List Tools', borderColor: 'border-slate-600' },
  { name: 'Hex to Text Converter', description: 'Convert hexadecimal to text.', path: '/hex-to-text-converter', Icon: Type, Page: HexToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-slate-500' },
  { name: 'Text to Octal Converter', description: 'Convert text to octal.', path: '/text-to-octal-converter', Icon: Hash, Page: TextToOctalConverterPage, category: 'Text & List Tools', borderColor: 'border-neutral-600' },
  { name: 'Octal to Text Converter', description: 'Convert octal to text.', path: '/octal-to-text-converter', Icon: Type, Page: OctalToTextConverterPage, category: 'Text & List Tools', borderColor: 'border-neutral-500' },
  { name: 'Remove Extra Spaces', description: 'Remove extra spaces and tabs from text.', path: '/remove-extra-spaces', Icon: RemoveFormatting, Page: RemoveExtraSpacesPage, category: 'Text & List Tools', borderColor: 'border-stone-500' },
  { name: 'Advanced Title Case', description: 'Convert text to title case with exceptions.', path: '/title-case-advanced', Icon: CaseSensitive, Page: TitleCaseAdvancedPage, category: 'Text & List Tools', borderColor: 'border-red-600' },
  { name: 'Sentence Case Converter', description: 'Convert text to proper sentence case.', path: '/sentence-case-converter', Icon: CaseSensitive, Page: SentenceCaseConverterPage, category: 'Text & List Tools', borderColor: 'border-red-400' },
  { name: 'Remove Non-Alphanumeric Chars', description: 'Remove symbols and punctuation from text.', path: '/remove-non-alphanumeric-chars', Icon: Eraser, Page: RemoveNonAlphanumericCharsPage, category: 'Text & List Tools', borderColor: 'border-zinc-500' },
  { name: 'Text Scrambler', description: 'Scramble the middle letters of words.', path: '/text-scrambler', Icon: Shuffle, Page: TextScramblerPage, category: 'Text & List Tools', borderColor: 'border-amber-500' },
  { name: 'List Comparator (Diff)', description: 'Compare two lists and find differences.', path: '/list-comparator', Icon: GanttChart, Page: ListComparatorPage, category: 'Text & List Tools', borderColor: 'border-cyan-700' },
  { name: 'List Intersector', description: 'Find common items between two lists.', path: '/list-intersector', Icon: Combine, Page: ListIntersectorPage, category: 'Text & List Tools', borderColor: 'border-green-700' },
  { name: 'Add Quotes to Lines', description: 'Add single or double quotes to each line.', path: '/add-quotes-to-lines', Icon: Quote, Page: AddQuotesToLinesPage, category: 'Text & List Tools', borderColor: 'border-violet-500' },
  { name: 'Remove Quotes from Lines', description: 'Remove quotes from the beginning and end of lines.', path: '/remove-quotes-from-lines', Icon: Quote, Page: RemoveQuotesFromLinesPage, category: 'Text & List Tools', borderColor: 'border-violet-400' },
  { name: 'Text Splitter', description: 'Split text into chunks of a specified size.', path: '/text-splitter', Icon: Split, Page: TextSplitterPage, category: 'Text & List Tools', borderColor: 'border-orange-400' },
  { name: 'Text Repeater', description: 'Repeat a string of text multiple times.', path: '/text-repeater', Icon: Repeat, Page: TextRepeaterPage, category: 'Text & List Tools', borderColor: 'border-emerald-600' },
  { name: 'Remove Numbers from Text', description: 'Strip all numbers from your text.', path: '/remove-numbers', Icon: Eraser, Page: RemoveNumbersPage, category: 'Text & List Tools', borderColor: 'border-lime-600' },
  { name: 'Remove Letters from Text', description: 'Strip all letters from your text.', path: '/remove-letters', Icon: Eraser, Page: RemoveLettersPage, category: 'Text & List Tools', borderColor: 'border-lime-700' },
  { name: 'ROT13 Cipher', description: 'Encrypt or decrypt text with the ROT13 cipher.', path: '/rot13-cipher', Icon: Key, Page: Rot13Page, category: 'Text & List Tools', borderColor: 'border-fuchsia-600' },
  { name: 'Custom Delimiter Converter', description: 'Convert a list from one delimiter to another.', path: '/custom-delimiter-converter', Icon: ArrowLeftRight, Page: CustomDelimiterConverterPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Alphabetical Letter Generator', description: 'Generate a list of letters from A to Z.', path: '/alphabetical-letter-generator', Icon: ListOrdered, Page: AlphabeticalLetterGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-700' },
  { name: 'Number List Generator', description: 'Generate a list of numbers with a start, end, and step.', path: '/number-list-generator', Icon: ListOrdered, Page: NumberListGeneratorPage, category: 'Text & List Tools', borderColor: 'border-gray-800' },
  { name: 'Custom Text Encoder/Decoder', description: 'Encode or decode text with custom character maps.', path: '/text-encoder-decoder', Icon: Languages, Page: TextEncoderDecoderPage, category: 'Text & List Tools', borderColor: 'border-rose-500' },
  { name: 'YouTube Content Extractor', description: 'Extract title and description from a YouTube page source.', path: '/youtube-content-extractor', Icon: Youtube, Page: YouTubeExtractorPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Link Extractor from Text', description: 'Extract all URLs from a block of text.', path: '/link-extractor', Icon: Link, Page: LinkExtractorPage, category: 'Text & List Tools', borderColor: 'border-blue-600' },
  { name: 'Line Counter', description: 'Count the number of lines in a text block.', path: '/line-counter', Icon: List, Page: LineCounterPage, category: 'Text & List Tools', borderColor: 'border-gray-500' },
  { name: 'Vigenere Cipher', description: 'Encrypt/decrypt using the Vigenere Cipher.', path: '/vigenere-cipher', Icon: Key, Page: VigenereCipherPage, category: 'Text & List Tools', borderColor: 'border-gray-700' },
  { name: 'Caesar Cipher', description: 'Encrypt/decrypt using the Caesar Cipher.', path: '/caesar-cipher', Icon: Key, Page: CaesarCipherPage, category: 'Text & List Tools', borderColor: 'border-gray-600' },
  { name: 'Text to ASCII Art Viewer', description: 'Render text in a basic ASCII art box.', path: '/text-to-ascii-art-viewer', Icon: Code, Page: TextToAsciiArtViewerPage, category: 'Text & List Tools', borderColor: 'border-lime-600' },
  { name: 'Emoji Stripper', description: 'Remove all emojis from a block of text.', path: '/emoji-stripper', Icon: Eraser, Page: EmojiStripperPage, category: 'Text & List Tools', borderColor: 'border-yellow-500' },
  { name: 'Invisible Character Viewer', description: 'Detect and highlight invisible Unicode characters.', path: '/invisible-character-viewer', Icon: Eye, Page: InvisibleCharacterViewerPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Text Case Flipper', description: 'Flip the case of every letter in your text.', path: '/text-case-flipper', Icon: CaseSensitive, Page: TextCaseFlipperPage, category: 'Text & List Tools', borderColor: 'border-blue-300' },
  { name: 'String Concatenator', description: 'Join lines of text with a custom delimiter.', path: '/string-concatenator', Icon: Combine, Page: StringConcatenatorPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Text Difference Checker', description: 'Compare two texts and highlight the differences.', path: '/text-diff-checker', Icon: FileDiff, Page: TextDiffCheckerPage, category: 'Text & List Tools', borderColor: 'border-cyan-800' },
  { name: 'Bulk Text Replacement', description: 'Perform multiple find and replace operations at once.', path: '/bulk-text-replacement', Icon: Replace, Page: BulkTextReplacementPage, category: 'Text & List Tools', borderColor: 'border-blue-500' },
  { name: 'Word Count & Character Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-count-and-character-counter', Icon: Type, Page: WordCountAndCharacterCounterPage, category: 'Text & List Tools', borderColor: 'border-green-500' },
  { name: 'All Case Converters', description: 'All case conversion tools in one page.', path: '/case-converter-all', Icon: CaseSensitive, Page: CaseConverterAllPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Remove Duplicate Lines', description: 'Remove duplicate lines from a list.', path: '/remove-duplicate-lines', Icon: ListMinus, Page: RemoveDuplicateLinesPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages, fractions, and changes.', path: '/percentage-calculator', Icon: Percent, Page: PercentageCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: Clock, Page: TimestampConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-blue-800' },
  { name: 'Date Difference Calculator', description: 'Calculate the duration between two dates.', path: '/date-difference-calculator', Icon: CalendarDays, Page: DateDifferencePage, category: 'Calculators & Time Tools', borderColor: 'border-sky-500' },
  { name: 'Age Calculator', description: 'Calculate age from a date of birth.', path: '/age-calculator', Icon: PersonStanding, Page: AgeCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-rose-500' },
  { name: 'Time Zone Converter', description: 'Convert times between different time zones.', path: '/time-zone-converter', Icon: Globe, Page: TimeZoneConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-indigo-500' },
  { name: 'Unit Converter', description: 'Convert between various units of measurement.', path: '/unit-converter', Icon: Waypoints, Page: UnitConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index.', path: '/bmi-calculator', Icon: PersonStanding, Page: BmiCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-green-500' },
  { name: 'Loan Calculator', description: 'Calculate monthly loan payments.', path: '/loan-calculator', Icon: Building2, Page: LoanCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-emerald-500' },
  { name: 'Sales Tax Calculator', description: 'Calculate sales tax and total price.', path: '/sales-tax-calculator', Icon: HandCoins, Page: SalesTaxCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-amber-500' },
  { name: 'Tip Calculator', description: 'Calculate the tip for a bill.', path: '/tip-calculator', Icon: Receipt, Page: TipCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-yellow-500' },
  { name: 'Random Number Generator', description: 'Generate a random number in a given range.', path: '/random-number-generator', Icon: ShuffleIcon, Page: RandomNumberGeneratorPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Aspect Ratio Calculator', description: 'Calculate aspect ratios for images and videos.', path: '/aspect-ratio-calculator', Icon: Ratio, Page: AspectRatioCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-cyan-500' },
  { name: 'Scientific Calculator', description: 'Advanced calculator for scientific functions.', path: '/scientific-calculator', Icon: Calculator, Page: ScientificCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Compound Interest Calculator', description: 'Calculate compound interest over time.', path: '/compound-interest-calculator', Icon: Calculator, Page: CompoundInterestCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Countdown Timer', description: 'A simple countdown timer.', path: '/countdown-timer', Icon: Timer, Page: CountdownTimerPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Stopwatch', description: 'A simple stopwatch tool.', path: '/stopwatch', Icon: Timer, Page: StopwatchPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Date Format Converter', description: 'Convert dates between different formats.', path: '/date-format-converter', Icon: Calendar, Page: DateFormatConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Day of the Week Calculator', description: 'Find the day of the week for any date.', path: '/day-of-the-week-calculator', Icon: Calendar, Page: DayOfTheWeekCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Leap Year Checker', description: 'Check if a year is a leap year.', path: '/leap-year-checker', Icon: CalendarCheck, Page: LeapYearCheckerPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Adder / Subtracter', description: 'Add or subtract time from a date.', path: '/time-adder-subtracter', Icon: CalendarClock, Page: TimeAdderSubtracterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Business Day Calculator', description: 'Calculate business days between dates.', path: '/business-day-calculator', Icon: Briefcase, Page: BusinessDayCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Mean, Median, & Mode', description: 'Calculate statistical averages.', path: '/mean-median-mode-calculator', Icon: SigmaSquare, Page: MeanMedianModePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Standard Deviation', description: 'Calculate the standard deviation of a set of numbers.', path: '/standard-deviation-calculator', Icon: Sigma, Page: StandardDeviationPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Z-Score Calculator', description: 'Calculate the Z-score of a data point.', path: '/z-score-calculator', Icon: SigmaSquare, Page: ZScoreCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Quadratic Equation Solver', description: 'Solve quadratic equations.', path: '/quadratic-equation-solver', Icon: Superscript, Page: QuadraticEquationSolverPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Pythagorean Theorem Solver', description: 'Solve for the hypotenuse of a right triangle.', path: '/pythagorean-theorem-solver', Icon: Square, Page: PythagoreanTheoremSolverPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Area Calculator', description: 'Calculate the area of common shapes.', path: '/area-calculator', Icon: Box, Page: AreaCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Volume Calculator', description: 'Calculate the volume of common 3D shapes.', path: '/volume-calculator', Icon: Box, Page: VolumeCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Fraction to Decimal', description: 'Convert fractions to decimal numbers.', path: '/fraction-to-decimal-converter', Icon: Columns, Page: FractionDecimalConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Decimal to Fraction', description: 'Convert decimal numbers to fractions.', path: '/decimal-to-fraction-converter', Icon: Rows, Page: DecimalFractionConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Binary Calculator', description: 'Perform calculations with binary numbers.', path: '/binary-calculator', Icon: CalculatorIcon, Page: BinaryCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Octal Calculator', description: 'Perform calculations with octal numbers.', path: '/octal-calculator', Icon: CalculatorIcon, Page: OctalCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Hexadecimal Calculator', description: 'Perform calculations with hexadecimal numbers.', path: '/hexadecimal-calculator', Icon: CalculatorIcon, Page: HexadecimalCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'World Clock', description: 'View the current time in cities around the world.', path: '/world-clock', Icon: Globe, Page: WorldClockPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Date to Day of Year', description: 'Find the day number of the year for a given date.', path: '/date-to-day-of-year', Icon: CalendarRange, Page: DateToDayOfYearPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Random Date Generator', description: 'Generate a random date within a specified range.', path: '/random-date-generator', Icon: CalendarHeart, Page: RandomDateGeneratorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Mortgage Refinance', description: 'Calculator for mortgage refinancing.', path: '/mortgage-refinance-calculator', Icon: Building2, Page: MortgageRefinanceCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Retirement Savings', description: 'Calculator for retirement savings.', path: '/retirement-savings-calculator', Icon: PersonStanding, Page: RetirementSavingsCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Loan Amortization', description: 'Generate a loan amortization schedule.', path: '/loan-amortization-schedule', Icon: List, Page: LoanAmortizationSchedulePage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Currency Converter', description: 'Convert between different currencies.', path: '/currency-converter', Icon: HandCoins, Page: CurrencyConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Time Duration Formatter', description: 'Format seconds into HH:MM:SS.', path: '/time-duration-formatter', Icon: Timer, Page: TimeDurationFormatterPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Square Root Calculator', description: 'Calculate the square root of a number.', path: '/square-root-calculator', Icon: Radical, Page: SquareRootCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Factorial Calculator', description: 'Calculate the factorial of a number.', path: '/factorial-calculator', Icon: SigmaSquare, Page: FactorialCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Random Coin Flip', description: 'Flip a virtual coin.', path: '/random-coin-flip', Icon: Circle, Page: RandomCoinFlipPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Random Dice Roll', description: 'Roll a virtual die.', path: '/random-dice-roll', Icon: Square, Page: RandomDiceRollPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'List Randomizer', description: 'Pick a random item from a list.', path: '/list-randomizer', Icon: Shuffle, Page: ListRandomizerPage, category: 'Calculators & Time Tools', borderColor: 'border-fuchsia-500' },
  { name: 'Number Pad Generator', description: 'Generate a list of zero-padded numbers.', path: '/number-pad-generator', Icon: ListOrdered, Page: NumberPadGeneratorPage, category: 'Calculators & Time Tools', borderColor: 'border-gray-500' },
  { name: 'Sort Numbers List', description: 'Sort a list of numbers numerically.', path: '/number-list-sorter', Icon: SortAsc, Page: NumberListSorterPage, category: 'Calculators & Time Tools', borderColor: 'border-yellow-600' },
  { name: 'Odd/Even Number Filter', description: 'Filter a list to keep only odd or even numbers.', path: '/odd-even-number-filter', Icon: ListChecks, Page: OddEvenNumberFilterPage, category: 'Calculators & Time Tools', borderColor: 'border-lime-500' },
  
  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and beautify your JSON data.', path: '/json-formatter', Icon: AlignLeft, Page: JsonFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: Link, Page: UrlEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-pink-500' },
  { name: 'Password Generator', description: 'Generate strong, random passwords.', path: '/password-generator', Icon: Key, Page: PasswordGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'Base Converter', description: 'Convert numbers between binary, octal, decimal, and hex.', path: '/base-converter', Icon: Languages, Page: BaseConversionPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Scientific Notation Converter', description: 'Convert numbers to and from scientific notation.', path: '/scientific-notation-converter', Icon: Sigma, Page: ScientificNotationPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Validator', description: 'Validate and check for errors in JSON data.', path: '/json-validator', Icon: ListChecks, Page: JsonValidatorPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'Base64 Text Encoder/Decoder', description: 'Encode and decode text using Base64.', path: '/base64-text-encoder-decoder', Icon: ArrowLeftRight, Page: Base64TextEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-pink-500' },
  { name: 'MD5 Hash Generator', description: 'Generate an MD5 hash of a string or file.', path: '/md5-hash-generator', Icon: Shield, Page: Md5HashGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'SHA-256 Hash Generator', description: 'Generate a SHA-256 hash of a string.', path: '/sha256-hash-generator', Icon: Shield, Page: Sha256HashGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Minifier', description: 'Minify JSON data to reduce its size.', path: '/json-minifier', Icon: WrapText, Page: JsonMinifierPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'Hex/RGB Color Converter', description: 'Convert between Hex and RGB color codes.', path: '/hex-rgb-converter', Icon: Droplets, Page: HexRgbConverterPage, category: 'Web & Developer Tools', borderColor: 'border-rose-500' },
  { name: 'UUID/GUID Generator', description: 'Generate a universally unique identifier.', path: '/uuid-generator', Icon: Fingerprint, Page: UuidGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-purple-500' },
  { name: 'CSS Border Radius Generator', description: 'Generate CSS for rounded corners.', path: '/css-border-radius-generator', Icon: RectangleHorizontal, Page: CssBorderRadiusGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to CSV Converter', description: 'Convert JSON data to CSV format.', path: '/json-to-csv', Icon: Replace, Page: JsonToCsvPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSV to JSON Converter', description: 'Convert CSV data to JSON format.', path: '/csv-to-json', Icon: Replace, Page: CsvToJsonPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Box Shadow Generator', description: 'Generate CSS code for box shadows.', path: '/css-box-shadow-generator', Icon: Square, Page: CssBoxShadowGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Contrast Checker', description: 'Check color contrast for WCAG accessibility.', path: '/color-contrast-checker', Icon: Droplets, Page: ColorContrastCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Regex Tester', description: 'Test regular expressions against strings.', path: '/regex-tester', Icon: Search, Page: RegexTesterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Entity Encoder/Decoder', description: 'Encode or decode HTML entities.', path: '/html-entity-encoder-decoder', Icon: Code, Page: HtmlEntityEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'HTML Tag Stripper', description: 'Remove all HTML tags from a string.', path: '/html-tag-stripper', Icon: Eraser, Page: HtmlTagStripperPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'JSON to XML Converter', description: 'Convert JSON data to XML format.', path: '/json-to-xml-converter', Icon: Replace, Page: JsonToXmlConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML to JSON Converter', description: 'Convert XML data to JSON format.', path: '/xml-to-json-converter', Icon: Replace, Page: XmlToJsonConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'URL Parser', description: 'Parse a URL into its components.', path: '/url-parser', Icon: Link, Page: UrlParserPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JS Minifier', description: 'Minify JavaScript code to reduce its size.', path: '/js-minifier', Icon: WrapText, Page: JsMinifierPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-600' },
  { name: 'CSS Gradient Generator', description: 'Create CSS linear gradients.', path: '/css-gradient-generator', Icon: Palette, Page: CssGradientGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Decimal to Binary Converter', description: 'Convert decimal numbers to binary.', path: '/decimal-to-binary-converter', Icon: Binary, Page: DecimalToBinaryConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Binary to Decimal Converter', description: 'Convert binary numbers to decimal.', path: '/binary-to-decimal-converter', Icon: Type, Page: BinaryToDecimalConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: '.htaccess Redirect Generator', description: 'Generate .htaccess redirect rules.', path: '/htaccess-redirect-generator', Icon: FileCog, Page: HtaccessRedirectGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: '.htaccess Auth Generator', description: 'Generate .htaccess basic authentication files.', path: '/htaccess-auth-generator', Icon: FileLock, Page: HtaccessAuthGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'XML Formatter', description: 'Format and beautify XML data.', path: '/xml-formatter', Icon: AlignLeft, Page: XmlFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'YAML to JSON Converter', description: 'Convert YAML to JSON format.', path: '/yaml-to-json-converter', Icon: Replace, Page: YamlToJsonConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Base64 Image Size Calculator', description: 'Calculate the size of a Base64 encoded image.', path: '/base64-image-size-calculator', Icon: FileArchive, Page: Base64ImageSizeCalculatorPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-500' },
  { name: 'Simple SVG Editor', description: 'Live edit and preview SVG code.', path: '/svg-editor', Icon: PenTool, Page: SvgEditorPage, category: 'Web & Developer Tools', borderColor: 'border-purple-500' },
  { name: 'HTML to Markdown Converter', description: 'Convert HTML to Markdown format.', path: '/html-to-markdown-converter', Icon: Replace, Page: HtmlToMarkdownConverterPage, category: 'Web & Developer Tools', borderColor: 'border-gray-600' },
  { name: 'Markdown to HTML Renderer', description: 'Render Markdown to live HTML.', path: '/markdown-to-html-renderer', Icon: Replace, Page: MarkdownToHtmlRendererPage, category: 'Web & Developer Tools', borderColor: 'border-gray-600' },
  { name: 'Password Strength Checker', description: 'Check the strength of a password.', path: '/password-strength-checker', Icon: Key, Page: PasswordStrengthCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-orange-600' },
  { name: 'CSS Prefixer', description: 'Add vendor prefixes to CSS properties.', path: '/css-prefixer', Icon: Code, Page: CssPrefixerPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'API Tester (Postman-like)', description: 'Test API endpoints directly in your browser.', path: '/api-tester', Icon: Server, Page: ApiTesterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'WebP Support Detection', description: 'Check if your browser supports the WebP image format.', path: '/webp-detection', Icon: FileImage, Page: WebpDetectionPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Image Optimization Checker', description: 'Get suggestions for optimizing web images.', path: '/image-optimization-checker', Icon: FileScan, Page: ImageOptimizationCheckerPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'CSS Grid Playground', description: 'Visually create and learn CSS Grid layouts.', path: '/css-grid-playground', Icon: Grid, Page: CssGridPlaygroundPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Flexbox Playground', description: 'Visually create and learn CSS Flexbox layouts.', path: '/css-flexbox-playground', Icon: Layout, Page: CssFlexboxPlaygroundPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to PHP Array Converter', description: 'Convert JSON objects to PHP arrays.', path: '/json-to-php-array', Icon: Replace, Page: JsonToPhpArrayPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to Python Dict Converter', description: 'Convert JSON objects to Python dictionaries.', path: '/json-to-python-dict', Icon: Replace, Page: JsonToPythonDictPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Palette Generator', description: 'Generate random color palettes.', path: '/color-palette-generator', Icon: Palette, Page: ColorPaletteGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'HTTP Status Code Lookup', description: 'Look up the meaning of HTTP status codes.', path: '/http-status-code-lookup', Icon: Info, Page: HttpStatusCodeLookupPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'String to Array Converter', description: 'Convert a delimited string to a JSON array.', path: '/string-to-array', Icon: ListTree, Page: StringToArrayPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'Array to String Converter', description: 'Convert a JSON array to a delimited string.', path: '/array-to-string', Icon: ListTree, Page: ArrayToStringPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'XML Validator', description: 'Validate and check for errors in XML data.', path: '/xml-validator', Icon: ListChecks, Page: XmlValidatorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'CSS Font Stack Generator', description: 'Generate common CSS font stacks.', path: '/font-stack-generator', Icon: Type, Page: FontStackGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML5 Boilerplate Generator', description: 'Generate a basic HTML5 boilerplate.', path: '/html-boilerplate-generator', Icon: Code, Page: HtmlBoilerplateGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'CSS Filter Generator', description: 'Generate CSS filter code for images.', path: '/css-filter-generator', Icon: Droplets, Page: CssFilterGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Color Picker from Screen', description: 'Pick any color from your screen.', path: '/color-picker-from-screen', Icon: Eye, Page: ColorPickerFromScreenPage, category: 'Web & Developer Tools', borderColor: 'border-rose-500' },
  { name: 'CSV Viewer', description: 'View CSV data in a table format.', path: '/csv-viewer', Icon: FileText, Page: CsvViewerPage, category: 'Web & Developer Tools', borderColor: 'border-purple-500' },
  { name: 'Local Storage Viewer', description: 'View your browser\'s local storage data.', path: '/local-storage-viewer', Icon: History, Page: LocalStorageViewerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Code Snippet Runner', description: 'Run HTML, CSS, and JS snippets in the browser.', path: '/code-snippet-runner', Icon: Code2, Page: CodeSnippetRunnerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Favicon Extractor', description: 'Extract the favicon from a website.', path: '/favicon-extractor', Icon: Globe, Page: FaviconExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON to SQL Insert', description: 'Convert JSON to SQL insert statements.', path: '/json-to-sql-insert', Icon: Database, Page: JsonToSqlInsertPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Array Shuffler', description: 'Randomize the order of items in a JSON array.', path: '/json-array-shuffler', Icon: Shuffle, Page: JsonArrayShufflerPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Hex to Decimal Converter', description: 'Convert hexadecimal numbers to decimal.', path: '/hex-to-decimal-converter', Icon: Replace, Page: HexToDecimalConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'Random ID/Key Generator', description: 'Generate random IDs or keys of a specified length.', path: '/random-id-generator', Icon: Key, Page: RandomIdGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'HTML Comment Remover', description: 'Strip all comments from an HTML file.', path: '/html-comment-remover', Icon: Eraser, Page: HtmlCommentRemoverPage, category: 'Web & Developer Tools', borderColor: 'border-orange-600' },
  { name: 'CSS Comment Remover', description: 'Strip all comments from a CSS file.', path: '/css-comment-remover', Icon: Eraser, Page: CssCommentRemoverPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'JS Comment Stripper', description: 'Strip all comments from a JavaScript file.', path: '/js-comment-stripper', Icon: Eraser, Page: JsCommentStripperPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-500' },
  { name: 'HTML Prettifier', description: 'Format and beautify your HTML code.', path: '/html-prettifier', Icon: AlignLeft, Page: HtmlPrettifierPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
  { name: 'CSS Prettifier', description: 'Format and beautify your CSS code.', path: '/css-prettifier', Icon: AlignLeft, Page: CssPrettifierPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'JS Beautifier', description: 'Format and beautify your JavaScript code.', path: '/js-beautifier', Icon: AlignLeft, Page: JsBeautifierPage, category: 'Web & Developer Tools', borderColor: 'border-yellow-500' },
  { name: 'Plain Text to HTML Converter', description: 'Convert plain text into HTML paragraphs and line breaks.', path: '/plain-text-to-html-converter', Icon: Replace, Page: PlainTextToHtmlConverterPage, category: 'Web & Developer Tools', borderColor: 'border-emerald-500' },
  { name: 'HTML to Plain Text Converter', description: 'Strip all HTML tags to get plain text.', path: '/html-to-plain-text-converter', Icon: Replace, Page: HtmlToPlainTextConverterPage, category: 'Web & Developer Tools', borderColor: 'border-emerald-600' },
  { name: 'Character Set Converter', description: 'Convert text between different character sets.', path: '/character-set-converter', Icon: Languages, Page: CharacterSetConverterPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  { name: 'JSON Data Extractor', description: 'Extract data from JSON using a path.', path: '/json-data-extractor', Icon: ListTree, Page: JsonDataExtractorPage, category: 'Web & Developer Tools', borderColor: 'border-indigo-500' },
  
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
  { name: 'Crop PDF Pages', description: 'Crop the pages of a PDF document.', path: '/pdf-page-cropper', Icon: Crop, Page: PdfPageCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Viewer', description: 'View a PDF file directly in your browser.', path: '/pdf-viewer', Icon: View, Page: PdfViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to SVG Converter', description: 'Convert PDF pages to SVG images.', path: '/pdf-to-svg', Icon: FileImage, Page: PdfToSvgPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Remove PDF Page Numbers', description: 'Remove page numbers from a PDF.', path: '/pdf-page-number-remover', Icon: Eraser, Page: PdfPageNumberRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Crop PDF Document', description: 'Crop all pages of a PDF at once.', path: '/pdf-document-cropper', Icon: Crop, Page: PdfDocumentCropperPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Text Signature to PDF', description: 'Add a text signature to a PDF.', path: '/add-text-signature-to-pdf', Icon: PenTool, Page: AddTextSignatureToPdfPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Annotation Viewer', description: 'View all annotations in a PDF.', path: '/pdf-annotation-viewer', Icon: BookOpen, Page: PdfAnnotationViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Size Checker', description: 'Check the size of each page in a PDF.', path: '/pdf-page-size-checker', Icon: Maximize, Page: PdfPageSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Color Inverter', description: 'Invert the colors of a PDF.', path: '/pdf-color-inverter', Icon: Droplets, Page: PdfColorInverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF File Size Checker', description: 'Check the file size of a PDF.', path: '/pdf-file-size-checker', Icon: FileArchive, Page: PdfFileSizeCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Compression Ratio Checker', description: 'Check the compression ratio of a PDF.', path: '/pdf-compression-ratio-checker', Icon: FileArchive, Page: PdfCompressionRatioCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Metadata Editor', description: 'Edit the metadata of a PDF file.', path: '/pdf-metadata-editor', Icon: FileCog, Page: PdfMetadataEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to Grayscale Converter', description: 'Convert a PDF to grayscale.', path: '/pdf-grayscale-converter', Icon: ImageOff, Page: PdfGrayscaleConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Security Checker', description: 'Check the security settings of a PDF.', path: '/pdf-security-checker', Icon: FileLock, Page: PdfSecurityCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF to HTML Converter', description: 'Convert a PDF to an HTML file.', path: '/pdf-to-html-converter', Icon: FileCode, Page: PdfToHtmlConverterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Security Level Checker', description: 'Check the encryption level of a PDF.', path: '/pdf-security-level-checker', Icon: FileLock, Page: PdfSecurityLevelCheckerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF File Optimizer', description: 'Optimize a PDF to reduce its file size.', path: '/pdf-file-optimizer', Icon: FileArchive, Page: PdfFileOptimizerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Annotation Creator', description: 'Add annotations to a PDF.', path: '/pdf-annotation-creator', Icon: PenTool, Page: PdfAnnotationCreatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Rotate Individual PDF Pages', description: 'Rotate specific pages in a PDF.', path: '/pdf-page-rotator-individual', Icon: RotateCw, Page: PdfPageRotatorIndividualPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Extract Pages from PDF', description: 'Extract a range of pages into a new PDF.', path: '/pdf-page-extractor', Icon: Scissors, Page: PdfPageExtractorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Insert Pages into PDF', description: 'Insert pages from one PDF into another.', path: '/pdf-page-inserter', Icon: FilePlus, Page: PdfPageInserterPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Duplicate PDF Pages', description: 'Duplicate pages within a PDF.', path: '/pdf-page-duplicator', Icon: Copy, Page: PdfPageDuplicatorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Content Cleaner', description: 'Remove certain elements like images or text.', path: '/pdf-content-cleaner', Icon: Eraser, Page: PdfContentCleanerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Form Field Viewer', description: 'View all form fields in a PDF.', path: '/pdf-form-field-viewer', Icon: FileScan, Page: PdfFormFieldViewerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Header/Footer Remover', description: 'Remove headers and footers from a PDF.', path: '/pdf-header-footer-remover', Icon: Eraser, Page: PdfHeaderFooterRemoverPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Watermark Position Editor', description: 'Precisely position a watermark on a PDF.', path: '/pdf-watermark-position-editor', Icon: Droplets, Page: PdfWatermarkPositionEditorPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Page Counter (Range)', description: 'Count pages in a specific range.', path: '/pdf-page-counter-range', Icon: ListOrdered, Page: PdfPageCounterRangePage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'Add Page Numbers to PDF', description: 'Add page numbers to a PDF file.', path: '/pdf-page-number-format-changer', Icon: ListOrdered, Page: PdfPageNumberFormatChangerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },
  { name: 'PDF Text Replacer', description: 'Find and replace text within a PDF.', path: '/pdf-text-replacer', Icon: Replace, Page: PdfTextReplacerPage, category: 'PDF & Document Tools', borderColor: 'border-green-500' },

  // File Converters & Utilities
  { name: 'Excel (XLSX) to CSV', description: 'Convert Excel files to CSV.', path: '/excel-to-csv', Icon: Replace, Page: ExcelToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'CSV to Excel (XLSX)', description: 'Convert CSV files to Excel.', path: '/csv-to-excel', Icon: Replace, Page: CsvToExcelPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'TSV to CSV Converter', description: 'Convert Tab-Separated Values to Comma-Separated.', path: '/tsv-to-csv', Icon: Replace, Page: TsvToCsvPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Merger', description: 'Merge multiple text-based files into one.', path: '/file-merger', Icon: Combine, Page: FileMergerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'Batch File Renamer', description: 'Rename multiple files at once.', path: '/batch-file-renamer', Icon: FileEdit, Page: BatchFileRenamerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Checksum Calculator', description: 'Calculate the SHA-256 checksum of a file.', path: '/file-checksum-calculator', Icon: FileCheck, Page: FileChecksumCalculatorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Extension Changer', description: 'Change the extension of a file.', path: '/file-extension-changer', Icon: FileEdit, Page: FileExtensionChangerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX to Text Extractor', description: 'Extract text from a DOCX file.', path: '/docx-to-text-extractor', Icon: FileText, Page: DocxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'PPTX to Text Extractor', description: 'Extract text from a PPTX file.', path: '/pptx-to-text-extractor', Icon: FileText, Page: PptxToTextExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Size Converter', description: 'Convert between different file size units.', path: '/file-size-converter', Icon: FileArchive, Page: FileSizeConverterPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'CSV Column Selector', description: 'Extract specific columns from a CSV file.', path: '/csv-column-selector', Icon: List, Page: CsvColumnSelectorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX Header/Footer Extractor', description: 'Extract headers and footers from DOCX files.', path: '/docx-header-footer-extractor', Icon: FileText, Page: DocxHeaderFooterExtractorPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'File Type Checker', description: 'Check file type based on binary signature.', path: '/file-type-checker', Icon: FileQuestion, Page: FileTypeCheckerPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'DOCX to PDF', description: 'Convert DOCX files to PDF.', path: '/docx-to-pdf', Icon: FileUp, Page: DocxToPdfPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
  { name: 'PDF to DOCX', description: 'Convert PDF files to DOCX.', path: '/pdf-to-docx', Icon: FileDownIcon, Page: PdfToDocxPage, category: 'File Converters & Utilities', borderColor: 'border-purple-500' },
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
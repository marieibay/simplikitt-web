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
  FlipHorizontal
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
  { name: 'Image Cropper', description: 'Crop images with various aspect ratios.', path: '/image-cropper', Icon: Maximize, Page: ImageCropperPage, category: 'Image Tools', borderColor: 'border-rose-500' },
  
  // Text & List Tools
  { name: 'Case Converter', description: 'Convert text to uppercase, lowercase, etc.', path: '/case-converter', Icon: CaseSensitive, Page: CaseConverterPage, category: 'Text & List Tools', borderColor: 'border-red-500' },
  { name: 'Duplicate Line Remover', description: 'Remove duplicate lines from a list.', path: '/duplicate-line-remover', Icon: ListMinus, Page: DuplicateLineRemoverPage, category: 'Text & List Tools', borderColor: 'border-cyan-500' },
  { name: 'Word / Char Counter', description: 'Count words, characters, sentences, and paragraphs.', path: '/word-char-counter', Icon: CaseSensitive, Page: WordCounterPage, category: 'Text & List Tools', borderColor: 'border-green-500' },

  // Calculators & Time Tools
  { name: 'Percentage Calculator', description: 'Calculate percentages, fractions, and changes.', path: '/percentage-calculator', Icon: Percent, Page: PercentageCalculatorPage, category: 'Calculators & Time Tools', borderColor: 'border-teal-500' },
  { name: 'Timestamp Converter', description: 'Convert between Unix timestamps and human-readable dates.', path: '/timestamp-converter', Icon: Clock, Page: TimestampConverterPage, category: 'Calculators & Time Tools', borderColor: 'border-blue-800' },
  
  // Web & Developer Tools
  { name: 'JSON Formatter', description: 'Format and beautify your JSON data.', path: '/json-formatter', Icon: AlignLeft, Page: JsonFormatterPage, category: 'Web & Developer Tools', borderColor: 'border-blue-500' },
  { name: 'URL Encoder / Decoder', description: 'Encode or decode URL components.', path: '/url-encoder-decoder', Icon: Replace, Page: UrlEncoderDecoderPage, category: 'Web & Developer Tools', borderColor: 'border-pink-500' },
  { name: 'Password Generator', description: 'Generate strong, random passwords.', path: '/password-generator', Icon: Key, Page: PasswordGeneratorPage, category: 'Web & Developer Tools', borderColor: 'border-orange-500' },
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
  '/url-encoder-decoder',
];

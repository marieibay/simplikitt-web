import { Tool } from '../types';
import HomePage from '../pages/HomePage';
import ImageResizerPage from '../pages/ImageResizerPage';
import JsonFormatterPage from '../pages/JsonFormatterPage';
import WordCounterPage from '../pages/WordCounterPage';
import ImageConverterPage from '../pages/ImageConverterPage';
import CaseConverterPage from '../pages/CaseConverterPage';
import TimestampConverterPage from '../pages/TimestampConverterPage';
import UrlEncoderDecoderPage from '../pages/UrlEncoderDecoderPage';
import PercentageCalculatorPage from '../pages/PercentageCalculatorPage';
import PasswordGeneratorPage from '../pages/PasswordGeneratorPage';
import DuplicateLineRemoverPage from '../pages/DuplicateLineRemoverPage';
import QrCodeGeneratorPage from '../pages/QrCodeGeneratorPage';

import { ImageResizerIcon } from '../components/icons/ImageResizerIcon';
import { JsonFormatterIcon } from '../components/icons/JsonFormatterIcon';
import { WordCharCounterIcon } from '../components/icons/WordCharCounterIcon';
import { ImageConverterIcon } from '../components/icons/ImageConverterIcon';
import { CaseConverterIcon } from '../components/icons/CaseConverterIcon';
import { TimestampConverterIcon } from '../components/icons/TimestampConverterIcon';
import { UrlEncoderDecoderIcon } from '../components/icons/UrlEncoderDecoderIcon';
import { PercentageCalculatorIcon } from '../components/icons/PercentageCalculatorIcon';
import { PasswordGeneratorIcon } from '../components/icons/PasswordGeneratorIcon';
import { DuplicateLineRemoverIcon } from '../components/icons/DuplicateLineRemoverIcon';
import { QrCodeGeneratorIcon } from '../components/icons/QrCodeGeneratorIcon';


export const TOOLS: Tool[] = [
  {
    name: 'Image Resizer',
    description: 'Resize images for social media or web in seconds. Uses Canvas API.',
    path: '/image-resizer',
    Icon: ImageResizerIcon,
    Page: ImageResizerPage,
    borderColor: 'border-purple-500',
    category: 'Image Tools',
  },
  {
    name: 'JSON Formatter',
    description: 'Beautify and validate messy JSON data instantly.',
    path: '/json-formatter',
    Icon: JsonFormatterIcon,
    Page: JsonFormatterPage,
    borderColor: 'border-blue-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'Word / Char Counter',
    description: 'Count words, characters, and sentences for articles or social posts.',
    path: '/word-counter',
    Icon: WordCharCounterIcon,
    Page: WordCounterPage,
    borderColor: 'border-green-500',
    category: 'Text & List Tools',
  },
  {
    name: 'JPG & PNG Converter',
    description: 'Convert between the two most common image formats.',
    path: '/image-converter',
    Icon: ImageConverterIcon,
    Page: ImageConverterPage,
    borderColor: 'border-yellow-500',
    category: 'Image Tools',
  },
  {
    name: 'Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, or Title Case instantly.',
    path: '/case-converter',
    Icon: CaseConverterIcon,
    Page: CaseConverterPage,
    borderColor: 'border-red-500',
    category: 'Text & List Tools',
  },
  {
    name: 'Timestamp Converter',
    description: 'Convert Unix time to human-readable dates and back.',
    path: '/timestamp-converter',
    Icon: TimestampConverterIcon,
    Page: TimestampConverterPage,
    borderColor: 'border-blue-800',
    category: 'Calculators & Time Tools',
  },
  {
    name: 'URL Encoder/Decoder',
    description: 'Clean up or encode links for safety and transfer.',
    path: '/url-encoder-decoder',
    Icon: UrlEncoderDecoderIcon,
    Page: UrlEncoderDecoderPage,
    borderColor: 'border-pink-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'Percentage Calculator',
    description: 'Quickly find tax, tips, discounts, or percentage change.',
    path: '/percentage-calculator',
    Icon: PercentageCalculatorIcon,
    Page: PercentageCalculatorPage,
    borderColor: 'border-teal-500',
    category: 'Calculators & Time Tools',
  },
  {
    name: 'Password Generator',
    description: 'Create strong, random, and secure passwords instantly.',
    path: '/password-generator',
    Icon: PasswordGeneratorIcon,
    Page: PasswordGeneratorPage,
    borderColor: 'border-orange-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'QR Code Generator',
    description: 'Create and download QR codes for URLs, text, and more.',
    path: '/qr-code-generator',
    Icon: QrCodeGeneratorIcon,
    Page: QrCodeGeneratorPage,
    borderColor: 'border-indigo-500',
    category: 'Web & Developer Tools',
  },
  {
    name: 'Duplicate Line Remover',
    description: 'Clean up lists by instantly deleting redundant lines of text.',
    path: '/duplicate-line-remover',
    Icon: DuplicateLineRemoverIcon,
    Page: DuplicateLineRemoverPage,
    borderColor: 'border-cyan-500',
    category: 'Text & List Tools',
  },
];
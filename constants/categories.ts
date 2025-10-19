import { 
  CatImageToolIcon,
  CatTextToolIcon,
  CatPdfToolIcon,
  CatFileConverterIcon,
  CatCalculatorIcon,
  CatDeveloperToolIcon
} from '../components/icons/CategoryCardIcons';

export const categoryDetails = {
  'Image Tools': {
    cardDescription: 'Edit, convert, and optimize images.',
    sectionDescription: 'High demand, visually appealing tools to resize, convert, and manipulate images.',
    Icon: CatImageToolIcon,
    colorName: 'orange',
  },
  'Text & List Tools': {
    cardDescription: 'Format, clean, and analyze text.',
    sectionDescription: 'Core utilities for everyone to count words, change case, clean lists, and format text.',
    Icon: CatTextToolIcon,
    colorName: 'blue',
  },
  'PDF & Document Tools': {
    cardDescription: 'Merge, split, secure, and convert.',
    sectionDescription: 'Crucial tools for merging, splitting, converting, and securing your PDF files.',
    Icon: CatPdfToolIcon,
    colorName: 'green',
  },
  'File Converters & Utilities': {
    cardDescription: 'Convert formats, merge files, and more.',
    sectionDescription: 'Broader file handling for documents, archives, and checksums.',
    Icon: CatFileConverterIcon,
    colorName: 'purple',
  },
  'Calculators & Time Tools': {
    cardDescription: 'Solve math, convert units, and dates.',
    sectionDescription: 'Universal, everyday use tools for percentages, date differences, and time conversions.',
    Icon: CatCalculatorIcon,
    colorName: 'teal',
  },
  'Web & Developer Tools': {
    cardDescription: 'JSON, URL, hash, and code helpers.',
    sectionDescription: 'Crucial tools for developers for formatting JSON, encoding URLs, and generating secure assets.',
    Icon: CatDeveloperToolIcon,
    colorName: 'indigo',
  },
};

export const allCategories = Object.keys(categoryDetails);
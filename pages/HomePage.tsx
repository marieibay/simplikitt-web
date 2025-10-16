import React from 'react';
import { ToolCard } from '../components/ToolCard';
import { TOOLS } from '../constants/tools';
import { Tool } from '../types';
import { CategoryCard } from '../components/CategoryCard';
import { 
  CatImageToolIcon,
  CatTextToolIcon,
  CatPdfToolIcon,
  CatFileConverterIcon,
  CatCalculatorIcon,
  CatDeveloperToolIcon
} from '../components/icons/CategoryCardIcons';

// Helper to convert category name to a URL-friendly ID
const slugify = (text: string) => text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

const categoryDetails = {
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

const allCategories = [
    'Image Tools', 
    'Text & List Tools', 
    'PDF & Document Tools', 
    'File Converters & Utilities', 
    'Calculators & Time Tools', 
    'Web & Developer Tools'
];

const HomePage: React.FC = () => {
  const groupedTools = TOOLS.reduce<Record<string, Tool[]>>((acc, tool) => {
    const { category } = tool;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {});

  return (
    <div className="bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Instant, No-Cost Digital Tools
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Solve daily digital problems, fast. All tools are free, private, and run entirely in your browser.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-12">
        <section className="mb-16">
          <div className="flex flex-row flex-nowrap gap-4 md:gap-6 justify-center">
            {allCategories.map(name => {
              const details = categoryDetails[name as keyof typeof categoryDetails];
              return (
                <CategoryCard 
                  key={name}
                  title={name}
                  description={details.cardDescription}
                  Icon={details.Icon}
                  colorName={details.colorName}
                  href={`#${slugify(name)}`}
                />
              );
            })}
          </div>
        </section>
      </div>
      
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-20">
        {allCategories.map(categoryName => {
          const tools = groupedTools[categoryName];
          if (!tools || tools.length === 0) return null;
          
          const details = categoryDetails[categoryName as keyof typeof categoryDetails];
          const slug = slugify(categoryName);

          return (
            <section key={categoryName} id={slug} className="mb-16 last:mb-0 scroll-mt-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">{categoryName}</h2>
                <p className="mt-1 text-gray-600">{details.sectionDescription}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {tools.map((tool) => (
                  <ToolCard key={tool.path} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

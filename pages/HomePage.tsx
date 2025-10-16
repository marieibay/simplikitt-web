
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

const topCategories = ['Image Tools', 'Text & List Tools', 'PDF & Document Tools'];
const bottomCategories = ['File Converters & Utilities', 'Calculators & Time Tools', 'Web & Developer Tools'];
const allCategories = [...topCategories, ...bottomCategories];

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
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Explore Our Tools</h2>
        </section>
        
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCategories.map(name => {
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

        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Our 300+ Client-Side Tools</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Instant, No-Cost Utility for Everyone.</p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bottomCategories.map(name => {
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
      
      <div className="bg-white border-t border-slate-200">
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../components/CategoryCard';
import { ToolCard } from '../components/ToolCard';
import { allCategories, categoryDetails } from '../constants/categories';
import { TOOLS, POPULAR_PATHS } from '../constants/tools';
import { slugify } from '../utils/helpers';
import { useSearch } from '../contexts/SearchContext';
import {
  ImageCategoryIcon,
  TextCategoryIcon,
  PdfCategoryIcon,
  FileCategoryIcon,
  CalculatorCategoryIcon,
  DeveloperCategoryIcon
} from '../components/icons/CategoryIcons';

const categoryIcons: { [key: string]: React.FC<any> } = {
    'Image Tools': ImageCategoryIcon,
    'Text & List Tools': TextCategoryIcon,
    'PDF & Document Tools': PdfCategoryIcon,
    'File Converters & Utilities': FileCategoryIcon,
    'Calculators & Time Tools': CalculatorCategoryIcon,
    'Web & Developer Tools': DeveloperCategoryIcon,
};


const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Tools');
  const { searchQuery } = useSearch();
  
  const popularTools = TOOLS.filter(tool => POPULAR_PATHS.includes(tool.path));

  const toolsByCategory = activeFilter === 'All Tools'
    ? popularTools
    : popularTools.filter(tool => tool.category === activeFilter);
  
  const filteredTools = searchQuery
    ? toolsByCategory.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : toolsByCategory;


  return (
    <>
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
      
      <div className="bg-gray-50/50">
        <div className="container mx-auto px-4 -mt-10 md:-mt-12">
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {allCategories.map(name => {
                const details = categoryDetails[name as keyof typeof categoryDetails];
                return (
                  <CategoryCard 
                    key={name}
                    title={name}
                    description={details.cardDescription}
                    Icon={details.Icon}
                    colorName={details.colorName}
                    to={`/category/${slugify(name)}`}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
      
      <div className="bg-white border-y border-gray-200/80">
        <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Most Popular Tools</h2>
                <p className="mt-3 text-lg text-gray-600">We present the best of the best. All free, no catch.</p>
            </div>
            
            <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-10">
                {['All Tools', ...allCategories].map(filter => {
                    const isActive = activeFilter === filter;
                    const Icon = filter === 'All Tools' ? null : categoryIcons[filter];
                    return (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors flex items-center gap-2 border ${
                                isActive 
                                ? 'bg-blue-600 text-white border-blue-600 shadow' 
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                            }`}
                        >
                            {Icon && <Icon className="w-4 h-4" />}
                            {filter}
                        </button>
                    );
                })}
            </div>

            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTools.map(tool => (
                        <ToolCard key={tool.path} tool={tool} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-gray-500">
                    <h3 className="text-xl font-semibold">No Tools Found</h3>
                    <p>Try adjusting your search or filter.</p>
                </div>
            )}
            
            <div className="text-center mt-12">
                <Link to="/tools" className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-all shadow-sm">
                    View All Tools
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

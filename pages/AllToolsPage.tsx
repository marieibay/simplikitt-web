import React, { useState } from 'react';
import { TOOLS } from '../constants/tools';
import { ToolCard } from '../components/ToolCard';
import { allCategories } from '../constants/categories';
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

const AllToolsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Tools');
    const { searchQuery } = useSearch();

    const toolsByCategory = activeFilter === 'All Tools'
        ? TOOLS
        : TOOLS.filter(tool => tool.category === activeFilter);
    
    const filteredTools = searchQuery
        ? toolsByCategory.filter(tool => 
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : toolsByCategory;

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <section>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-800">All Tools</h1>
                        <p className="mt-2 text-lg text-gray-600">Browse our complete collection of free, client-side utilities.</p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-10 sticky top-[65px] bg-white/80 backdrop-blur-md py-4 z-40">
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
                            {filteredTools.map((tool) => (
                                <ToolCard key={tool.path} tool={tool} />
                            ))}
                        </div>
                    ) : (
                         <div className="text-center py-16 text-gray-500">
                            <h3 className="text-xl font-semibold">No Tools Found</h3>
                            <p>Try adjusting your search or filter.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default AllToolsPage;
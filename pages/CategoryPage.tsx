import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOOLS } from '../constants/tools';
import { ToolCard } from '../components/ToolCard';
import { categoryDetails, allCategories } from '../constants/categories';
import { slugify } from '../utils/helpers';

const categoryBgColors: { [key: string]: string } = {
  orange: 'bg-orange-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-violet-500',
  teal: 'bg-cyan-400',
  indigo: 'bg-blue-700',
};

const CategoryPage: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    const categoryName = allCategories.find(name => slugify(name) === categorySlug);

    if (!categoryName) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-red-500">Category Not Found</h1>
                <p className="mt-4 text-gray-600">The category you're looking for doesn't exist.</p>
                <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    Back to Home
                </Link>
            </div>
        );
    }

    const toolsForCategory = TOOLS.filter(tool => tool.category === categoryName);
    const details = categoryDetails[categoryName as keyof typeof categoryDetails];
    const bgColor = categoryBgColors[details.colorName as keyof typeof categoryBgColors] || 'bg-gray-500';

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 rounded-lg ${bgColor}`}>
                             <details.Icon className="w-10 h-10" />
                        </div>
                        <div>
                             <h1 className="text-4xl font-extrabold text-gray-800">{categoryName}</h1>
                             <p className="mt-1 text-lg text-gray-600">{details.sectionDescription}</p>
                        </div>
                    </div>

                    {toolsForCategory.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {toolsForCategory.map((tool) => (
                                <ToolCard key={tool.path} tool={tool} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-700">Coming Soon!</h2>
                            <p className="mt-2 text-gray-500">There are no tools in this category yet, but we're working on it.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default CategoryPage;

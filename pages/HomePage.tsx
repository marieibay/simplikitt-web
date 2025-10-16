import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { allCategories, categoryDetails } from '../constants/categories';
import { slugify } from '../utils/helpers';

const HomePage: React.FC = () => {
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
      
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-12 md:py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Explore Our Tools</h2>
            <p className="mt-2 text-gray-600">Click on a category above to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

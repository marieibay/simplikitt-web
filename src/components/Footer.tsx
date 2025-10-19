import React from 'react';
import { Link } from 'react-router-dom';
import { SimpliKittLogo } from '../assets/SimpliKittLogo';
import { allCategories } from '../constants/categories';
import { slugify } from '../utils/helpers';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <SimpliKittLogo className="h-9 w-auto" />
              <span className="text-2xl font-bold text-gray-800 tracking-tight">
                SimpliKitt
              </span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Instant, no-cost digital tools that run entirely in your browser.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
            <ul className="space-y-2">
              {allCategories.map(category => (
                <li key={category}>
                  <Link to={`/category/${slugify(category)}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
             <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SimpliKitt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

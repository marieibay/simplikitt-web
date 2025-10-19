import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SimpliKittLogo } from '../assets/SimpliKittLogo';
import { TOOLS } from '../constants/tools';
import { allCategories } from '../constants/categories';
import { slugify } from '../utils/helpers';
import { Tool } from '../types';
import { useSearch } from '../contexts/SearchContext';

export const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (location.pathname !== '/tools') {
      navigate('/tools');
    }
  };
  
  const groupedTools = TOOLS.reduce<Record<string, Tool[]>>((acc, tool) => {
    const { category } = tool;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {});

  const handleBackClick = () => {
    const currentTool = TOOLS.find(tool => tool.path === location.pathname);

    if (currentTool) {
      // If on a tool page, go up to its category page.
      navigate(`/category/${slugify(currentTool.category)}`);
    } else {
      // From any other page (category, /tools, /about, etc.), go to the homepage.
      navigate('/');
    }
  };

  const showBackButton = location.pathname !== '/';

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Back Button + Logo and Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
            {showBackButton && (
                 <button 
                    onClick={handleBackClick} 
                    aria-label="Go back"
                    className="p-2 -ml-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
            )}
            <Link to="/" className="flex items-center gap-3 group" aria-label="SimpliKitt Home">
              <SimpliKittLogo className="h-9 w-auto transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-2xl font-bold text-gray-800 tracking-tight hidden sm:block">
                SimpliKitt
              </span>
            </Link>
        </div>

        {/* Center: Navigation Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 mx-4">
          {allCategories.map(category => {
            const tools = groupedTools[category] || [];
            return (
              <div key={category} className="group relative">
                <button className="flex items-center gap-1 px-3 py-2 text-gray-600 font-semibold hover:text-blue-600 rounded-md transition-colors text-sm">
                  {category}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    {tools.length > 0 ? (
                      tools.map(tool => (
                        <Link key={tool.path} to={tool.path} className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg transition-colors">
                          <div className={`flex-shrink-0 p-1.5 rounded-md bg-gray-100 ${tool.borderColor.replace('border-', 'text-')}`}>
                            <tool.Icon className="w-5 h-5" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="font-semibold text-gray-800 truncate">{tool.name}</p>
                            <p className="text-xs text-gray-500 truncate">{tool.description}</p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        <p className="font-semibold">Coming Soon!</p>
                        <p className="text-sm">New tools for this category are on the way.</p>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link to={`/category/${slugify(category)}`} className="block w-full text-center px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          View All {category}
                      </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right: Search */}
        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <input 
              type="search" 
              placeholder="Search tools..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-48 pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

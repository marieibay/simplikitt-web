import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SearchProvider } from '@/contexts/SearchContext';
import { TOOLS } from '@/constants/tools';

import HomePage from '@/pages/HomePage';
import AllToolsPage from '@/pages/AllToolsPage';
import CategoryPage from '@/pages/CategoryPage';


// Configure the PDF.js worker, this is critical for all PDF tools.
import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://aistudiocdn.com/pdfjs-dist@5.4.296/build/pdf.worker.mjs`;


const InitialPageHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This effect ensures that on the very first load of a session (e.g., new tab),
    // the user is always directed to the homepage, regardless of the URL hash.
    // Subsequent reloads within the same tab session will behave normally.
    if (!sessionStorage.getItem('simpliKittSessionStarted')) {
      sessionStorage.setItem('simpliKittSessionStarted', 'true');
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
  }, [navigate, location.pathname]); // Dependencies ensure hooks are correctly used.

  return null; // This component does not render anything.
};


const App: React.FC = () => {
  return (
    <SearchProvider>
      <HashRouter>
        <InitialPageHandler />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<AllToolsPage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            
            {/* Tool Pages */}
            {TOOLS.map(tool => (
              <Route key={tool.path} path={tool.path} element={<tool.Page />} />
            ))}
          </Routes>
        </Layout>
      </HashRouter>
    </SearchProvider>
  );
};

export default App;

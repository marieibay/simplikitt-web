import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SearchProvider } from './contexts/SearchContext';
import { TOOLS } from './constants/tools';

import HomePage from './pages/HomePage';
import AllToolsPage from './pages/AllToolsPage';
import CategoryPage from './pages/CategoryPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

// Configure the PDF.js worker, this is critical for all PDF tools.
import * as pdfjsLib from 'pdfjs-dist';
// @ts-ignore
import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
pdfjsLib.GlobalWorkerOptions.workerSrc = PdfjsWorker;


const InitialPageHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem('simpliKittSessionStarted')) {
      sessionStorage.setItem('simpliKittSessionStarted', 'true');
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
  }, [navigate, location.pathname]);

  return null;
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
            
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

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
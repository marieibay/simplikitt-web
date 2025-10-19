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
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://esm.sh/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs`;


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
            
            {/* Static Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

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

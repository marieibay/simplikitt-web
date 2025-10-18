import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <SearchProvider>
      <HashRouter>
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
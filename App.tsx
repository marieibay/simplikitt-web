import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AllToolsPage from './pages/AllToolsPage';
import { TOOLS } from './constants/tools';
import { SearchProvider } from './contexts/SearchContext';

const App: React.FC = () => {
  return (
    <HashRouter>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<AllToolsPage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            {TOOLS.map(({ path, Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
          </Routes>
        </Layout>
      </SearchProvider>
    </HashRouter>
  );
};

export default App;

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { TOOLS } from './constants/tools';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          {TOOLS.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;

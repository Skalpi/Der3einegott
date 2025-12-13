import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProofList from './components/ProofList';
import ProofDetail from './components/ProofDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProofList />} />
          <Route path="/proof/:id" element={<ProofDetail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
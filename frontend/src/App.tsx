import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { WalletProvider } from './contexts/WalletContext';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Trading from './components/trading/Trading';
import Analytics from './components/analytics/Analytics';
import Governance from './components/governance/Governance';
import Compliance from './components/compliance/Compliance';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <WalletProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/trading" element={<Trading />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/compliance" element={<Compliance />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </WalletProvider>
    </ThemeProvider>
  );
};

export default App;

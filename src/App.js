import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/homepage';
import { ThemeProvider } from './components/ThemeToggle';
import { Account } from './components/authentication/account';

import './App.scss';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Account><Page2 /></Account>} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
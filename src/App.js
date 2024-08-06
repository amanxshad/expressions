import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/pages/intro';
import Page2 from './components/pages/gallery';
import Page3 from './components/pages/events';
import Page4 from './components/pages/shop';
import { ThemeProvider } from './components/features/ThemeToggle';
import { Account } from './components/authentication/account';

import './App.scss';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/gallery" element={<Account><Page2 /></Account>} />
        <Route path="/events" element={<Page3 />} />
        <Route path="/shop" element={<Page4 />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
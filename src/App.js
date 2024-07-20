import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/page1';
import Page2 from './components/homepage';
import { ThemeProvider } from './components/ThemeToggle';
import './App.scss';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeToggle';
import './page1.scss';

const Page1 = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  return (
    <div className="page1">
      <div className='themebttn'>
      <button onClick={() => toggleTheme('dark')} className="theme-btn">Dark</button>
      <button onClick={() => toggleTheme('light')} className="theme-btn">Light</button>
      </div>
      <button onClick={() => navigate('/page2')} className="continue-btn">Continue</button>
    </div>
  );
};

export default Page1;
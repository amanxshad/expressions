import React, { useEffect, useState } from 'react';
import Signup from './Signup';
import Login from './login';
import './homepage.scss';
import pic1 from '../pic1.jpg';
import pic2 from '../pic2.JPG';

const Homepage = () => {
  const [showDialog, setShowDialog] = useState(null);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const hasShownDialog = sessionStorage.getItem('hasShownDialog');
    if (!hasShownDialog) {
      const timer = setTimeout(() => {
        setShowDialog('signup');
        setBlur(true);
        sessionStorage.setItem('hasShownDialog', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseDialog = () => {
    setShowDialog(null);
    setBlur(false);
  };

  const switchToLogin = () => {
    setShowDialog('login');
  };

  const switchToSignup = () => {
    setShowDialog('signup');
  };

  return (
    <div className="homepage-wrapper">
      <div className={`homepage ${blur ? 'blur' : ''}`}>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </header>
        <br></br>
        <div className="grid-container">
          {Array.from({ length: 47 }).map((_, index) => (
            <img key={index} src={index % 2 === 0 ? pic2 : pic1} alt="grid item" />
          ))}
        </div>
      </div>
      {showDialog === 'signup' && <Signup onClose={handleCloseDialog} onSwitchToLogin={switchToLogin} />}
      {showDialog === 'login' && <Login onClose={handleCloseDialog} onSwitchToSignup={switchToSignup} />}
    </div>
  );
};

export default Homepage;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../authentication/Signup';
import Login from '../authentication/login';
import Forgot from '../authentication/forgot';
import './homepage.scss';
import pic1 from '../../pic1.jpg';
import pic2 from '../../pic2.jpg';

const Homepage = () => {
  const navigate = useNavigate();
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

  const switchToForgot = () => {
    setShowDialog('forgot');
  };

  return (
    <div className="homepage-wrapper">
      <div className={`homepage ${blur ? 'blur' : ''}`}>
        <header>
          <nav>
            <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li>About</li>
              <li>Contact</li>
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
      {showDialog === 'login' && <Login onClose={handleCloseDialog} onSwitchToSignup={switchToSignup} onSwitchToForgot={switchToForgot}/>}
      {showDialog === 'forgot' && <Forgot onClose={handleCloseDialog}  onSwitchToLogin={switchToLogin}/>}
    </div>
  );
};

export default Homepage;



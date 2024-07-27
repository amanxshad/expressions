// Page1.js
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeToggle';

import './page1.scss';

function Page1() {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const [moveLogo, setMoveLogo] = useState(false);
  const [moveCircles, setMoveCircles] = useState(false);
  const [moveRedCircles, setMoveRedCircles] = useState(false);
  const [moveFinal, setMoveFinal] = useState(false);

  const handleClick2 = () => {
    setMoveCircles(true);
    setTimeout(() => setMoveRedCircles(true), 1700); // Delay red circles' movement to allow blue circles to move first
  };

  const handleClick1 = () => {
    setMoveLogo(true);
  }

  const finalClick = () => {
    setMoveFinal(true);
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (event.target.tagName.toLowerCase() !== 'button') {
        handleClick1();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);



  return (
    <div className="page1">


      {/* logo split animation */}
      <div className={`logo ${moveLogo ? 'moveA' : ''}`} >
      <div className={`black logo-one ${moveLogo ? 'moveA' : ''} ${moveCircles ? 'moveB' : ''}`}></div>
      <div className={`circle black logo-two ${moveLogo ? 'moveA' : ''} ${moveCircles ? 'moveB' : ''}`}></div>
      <div className={`circle black logo-three ${moveLogo ? 'moveA' : ''} ${moveCircles ? 'moveB' : ''}`}></div>
      </div>
      <button onClick={handleClick2} className={`button text-one ${moveLogo ? 'visible' : ''} ${moveCircles ? 'moveB' : ''}`}>Visit Shop</button>
      <button onClick={handleClick2} className={`button text-two ${moveLogo ? 'visible' : ''} ${moveCircles ? 'moveB' : ''}`}>Virtual Gallery</button>
      <button onClick={handleClick2} className={`button text-three ${moveLogo ? 'visible' : ''} ${moveCircles ? 'moveB' : ''}`}>Member Login</button>


      {/* Dark Light theme buttons */}
      <div className="themebttn">
        <button onClick={() => toggleTheme('dark')} className={`theme-btn ${moveLogo ? 'visible' : ''}`}>Dark</button>
        <button onClick={() => toggleTheme('light')} className={`theme-btn ${moveLogo ? 'visible' : ''}`}>Light</button>
      </div>
      <h3 className={`continue-text ${moveLogo ? 'visible' : ''}`}>Click anywhere to Continue</h3>


      {/* page shift animation */}
      {/* RedCircles are elements that appear after page shift */}
      <div class={`semicircle-right one black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black two top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div class={`semicircle-left three black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div class={`quarter-right four black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black five bottom-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div class={`semicircle-right six black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div class={`quarter-left seven black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>

      <div className={`circle black eight top-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black nine top-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`black ten top-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div class={`quarter-right-up eleven black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black twelve bottom-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div class={`semicircle-right thirteen black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>



      <button onClick={() => {finalClick(); setTimeout(() => navigate('/page2'), 1800)}} className={`continue-btn ${moveLogo ? 'visible' : ''} ${moveRedCircles ? 'moveB' : ''} `}>Continue</button>
    </div>
  );
}

export default Page1;
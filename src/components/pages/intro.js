// Page1.js
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../features/ThemeToggle';

import './intro.scss';

function Page1() {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const [moveLogo, setMoveLogo] = useState(false);
  const [textDelay, setTextDelay]= useState(false);
  const [moveCircles, setMoveCircles] = useState(false);
  const [moveRedCircles, setMoveRedCircles] = useState(false);
  const [moveFinal, setMoveFinal] = useState(false);

  const handleClick2 = () => {
    setMoveCircles(true);
    setTextDelay(false);
    setTimeout(() => setMoveRedCircles(true), 1700); // Delay red circles' movement to allow blue circles to move first
  };

  const handleClick1 = () => {
    setMoveLogo(true);
    setTimeout(() => setTextDelay(true), 500);
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

        <div className={`L1 ${moveLogo ? 'moveA' : ''}`}>
          <div className={`black logo-one ${moveLogo ? 'moveA' : ''} ${moveCircles ? 'moveB' : ''}`}></div>
          {textDelay ? (
              <button onClick={handleClick2} className={`button text-one ${textDelay ? 'appear' : ''} ${moveCircles ? 'moveB' : ''}`}>
                  VISIT <br />SHOP
              </button>
          ) : null}
        </div>

        <div className={`L2 ${moveLogo ? 'moveA' : ''}`}>
          <div className={`circle black logo-two ${moveLogo ? 'moveA' : ''} ${moveCircles ? 'moveB' : ''}`}></div>
          {textDelay ? (
              <button onClick={handleClick2} className={`button text-two ${textDelay ? 'appear' : ''} ${moveCircles ? 'moveB' : ''}`}>
                  VIRTUAL <br />GALLERY
              </button>
          ) : null}
        </div>

        <div className={`L3 ${moveLogo ? 'moveA' : ''}`}>
        {textDelay ? (
              <button onClick={handleClick2} className={`button text-three ${textDelay ? 'appear' : ''} ${moveCircles ? 'moveB' : ''}`}>
                  MEMBER <br />LOGIN
              </button>
          ) : null}
          <div className={`circle black logo-three ${moveLogo ? 'moveA' : ''} ${moveCircles ? 'moveB' : ''}`}></div>
        </div>
      </div>

      {textDelay ? (
        <div className='info'>
        <p className='one'>"<hr></hr></p>
        <p className='two'>10 years of creativity,<br/> brilliance, legacy and love.</p>
        </div>
      ) : null }


      {/* Dark Light theme buttons */}
      <div className="themebttn">
        <button onClick={() => toggleTheme('dark')} className={`theme-btn ${moveLogo ? 'visible' : ''}`}>Dark</button>
        <button onClick={() => toggleTheme('light')} className={`theme-btn ${moveLogo ? 'visible' : ''}`}>Light</button>
      </div>
      <h3 className={`continue-text ${moveLogo ? ' moveB' : ''}`}>Click anywhere to Continue</h3>


      {/* page shift animation */}
      {/* RedCircles are elements that appear after page shift */}
      <div className={`semicircle-right one black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black two top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`semicircle-left three black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`quarter-right four black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black five bottom-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`semicircle-right six black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`quarter-left seven black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>

      <div className={`circle black eight top-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black nine top-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`black ten top-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`quarter-right-up eleven black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`circle black twelve bottom-right ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>
      <div className={`semicircle-right thirteen black top-left ${moveRedCircles ? 'moveB' : ''} ${moveFinal ? 'moveC' : ''}`}></div>



      <button onClick={() => {finalClick(); setTimeout(() => navigate('/gallery'), 1800)}} className={`continue-btn ${moveLogo ? 'visible' : ''} ${moveRedCircles ? 'moveB' : ''} `}>Continue</button>
    </div>
  );
}

export default Page1;
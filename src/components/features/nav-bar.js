import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../pages/gallery.scss';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('/gallery');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchHide = () => {
        if(showSearch === true)
        { setShowSearch(!showSearch); }
    };

    useEffect(() => {
        setActiveButton(location.pathname);
    }, [location.pathname]);

    const handleNavigate = (path) => {
        navigate(path);
        setActiveButton(path);
    };

    return (
        <div>
            <header />
            <nav>
                <button onClick={() => handleNavigate('/')} className='logo-txt'>
                    <img src='/expressions-txt1.png' alt='Expressions' />
                </button>
                <button
                    onClick={() => handleNavigate('/gallery')}
                    className={activeButton === '/gallery' ? 'active' : ''}
                >
                Gallery
                </button>
                <button
                    onClick={() => handleNavigate('/events')}
                    className={activeButton === '/events' ? 'active' : ''}
                >
                Events
                </button>
                <button
                    onClick={() => handleNavigate('/shop')}
                    className={activeButton === '/shop' ? 'active' : ''}
                >
                Shop
                </button>
                <button onClick={handleSearchClick} className='search-button'>
                Search
                </button>
                <div className='hidden-search-bar'>
                <button onClick={handleSearchHide} className={`close-search ${showSearch ? 'show' : ''}`}><i className="fa-solid fa-xmark"></i></button>
                <input
                    type='text'
                    placeholder='Search'
                    className={`search-bar ${showSearch ? 'show' : ''}`}
                />
                </div>
                <button className='members'>Members</button>
            </nav>
        </div>
    );
}

export default Navbar;

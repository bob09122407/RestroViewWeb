import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { BiHomeAlt, BiUser, BiSearch, BiBookAlt, BiBriefcaseAlt, BiLogIn, BiCaretDown } from 'react-icons/bi';
import Logo from "./logo.jpg";

const Navbar = () => {
    const location = useLocation();
    const [selectedCity, setSelectedCity] = useState('Vadodara');
    
    // Function to handle city selection
    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };

    return (
        <header className="header" id="header">
            <nav className="nav1 container">
                <div className="nav__left">
                    <Link to="/" className="nav__logo">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div className="nav__user-city_">
                        <div className="nav__item_ nav__dropdown_">
                            <div className="nav__link_ nav__dropdown-trigger_">
                                <BiCaretDown className="nav__icon-dropdown_" />
                            </div>
                            <span className="nav__selected-city">{selectedCity}</span>
                            <ul className="nav__dropdown-menu_ nav__dropdown-menu-above_">
                                <li><a href="#" onClick={() => handleCitySelect('Vadodara')}>Vadodara</a></li>
                                <li><a href="#" onClick={() => handleCitySelect('Mumbai')}>Mumbai</a></li>
                                <li><a href="#" onClick={() => handleCitySelect('Surat')}>Surat</a></li>
                                <li><a href="#" onClick={() => handleCitySelect('Akola')}>Akola</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nav__search">
                    <input type="text" placeholder="Search" className="nav__search-input" />
                    <BiSearch className="nav__search-icon" />
                </div>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active-link' : ''}`}>
                                <BiHomeAlt className='nav__icon' />
                                <span className="nav__name">Home</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/vendors" className={`nav__link ${location.pathname === '/vendors' ? 'active-link' : ''}`}>
                                <BiUser className='nav__icon' />
                                <span className="nav__name">Vendors</span>
                            </Link>
                        </li>

                        <li className="nav__item nav__dropdown">
                            <div className="nav__link nav__dropdown-trigger">
                                <BiCaretDown className="nav__icon-plus" />
                            </div>
                            <ul className="nav__dropdown-menu nav__dropdown-menu-above">
                                <li><a href="#">Vadodara</a></li>
                                <li><a href="#">Mumbai</a></li>
                                <li><a href="#">Surat</a></li>
                                <li><a href="#">Akola</a></li>
                            </ul>
                        </li>

                        <li className="nav__item">
                            <Link to="/reels" className={`nav__link ${location.pathname === '/reels' ? 'active-link' : ''}`}>
                                <BiBookAlt className='nav__icon' />
                                <span className="nav__name">Reels</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/portfolio" className={`nav__link ${location.pathname === '/portfolio' ? 'active-link' : ''}`}>
                                <BiBriefcaseAlt className='nav__icon' />
                                <span className="nav__name">Favourite</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link to="/signup">
        <BiLogIn className="nav__login-icon" size={30} />
      </Link>
            </nav>
        </header>
    );
}

export default Navbar;

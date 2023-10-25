import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import { BiHomeAlt, BiUser, BiSearch, BiBookAlt, BiBriefcaseAlt, BiLogIn, BiCaretDown } from 'react-icons/bi';
import Logo from "../../splash/logo.png";
import { useCity } from '../../../CityContext';
import { search } from '../../../actions/nearmeAction'; // Import the search action
import { useDispatch , useSelector} from 'react-redux';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const dispatch = useDispatch();
    const { selectedCity, setSelectedCity } = useCity();
    const [searchQuery, setSearchQuery] = useState('');
    // Function to handle city selection
    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };

// Selector to get the search results from the Redux store
const searchResults = useSelector((state) => state.searchReducer.results);
const handleSearchResult = () => {
    // Check if the search result is not null and contains the restaurant, cafe, or vendor data
    if (searchResults && (searchResults.restaurants || searchResults.cafes || searchResults.vendors)) {
        let idToNavigate;

        if (searchResults.restaurants && searchResults.restaurants.length > 0) {
            // If there are restaurant results, use the _id from the first restaurant
            idToNavigate = searchResults.restaurants[0]._id;
        } else if (searchResults.cafes && searchResults.cafes.length > 0) {
            // If there are cafe results, use the _id from the first cafe
            idToNavigate = searchResults.cafes[0]._id;
        } else if (searchResults.vendors && searchResults.vendors.length > 0) {
            // If there are vendor results, use the _id from the first vendor
            idToNavigate = searchResults.vendors[0]._id;
        }

        // Navigate to the details page using the extracted _id
        navigate(`/detailrestaurants/${idToNavigate}`);
    }
};

const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
        // Dispatch the search action with the searchQuery
        dispatch(search(searchQuery));
        // Since Redux actions are asynchronous, you can wait for the search results to update before handling the result.
        // You can do this by listening to changes in `searchResults`.
        // In this case, you can call `handleSearchResult` to handle the result when `searchResults` changes.
        // This will ensure that the component responds to changes in the Redux store.
        handleSearchResult();
    }
};

    return (
        <header className="header" id="header">
            <nav className="nav1 container">
                <div className="nav__left">
                    <Link to="/" className="nav__logo">
                        {/* <img src={Logo} alt="Logo"  style={{size:10}}/> */}
                    </Link>
                    <div className="nav__user-city_">
                        <div className="nav__item_ nav__dropdown_">
                            <div className="nav__link_ nav__dropdown-trigger_">
                                <BiCaretDown className="nav__icon-dropdown_" />
                            </div>
                            <span className="nav__selected-city">{selectedCity}</span>
                            <ul className="nav__dropdown-menu_ nav__dropdown-menu-above_">
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Vadodara')}>Vadodara</a></li>
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Mumbai')}>Mumbai</a></li>
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Surat')}>Surat</a></li>
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Akola')}>Akola</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nav__search">
                    <input
                        type="text"
                        placeholder="Search"
                        className="nav__search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <BiSearch className="nav__search-icon" onClick={handleSearch} />
                </div>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/home" className={`nav__link ${location.pathname === '/home' ? 'active-link' : ''}`}>
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
                            <li><a className="city_name" href="#" onClick={() => handleCitySelect('Vadodara')}>Vadodara</a></li>
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Mumbai')}>Mumbai</a></li>
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Surat')}>Surat</a></li>
                                <li><a className="city_name" href="#" onClick={() => handleCitySelect('Akola')}>Akola</a></li>
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
                                <span className="nav__name">Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link to="/signup" className='sign_up'>
                    <BiLogIn className="nav__login-icon" size={30} />
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;

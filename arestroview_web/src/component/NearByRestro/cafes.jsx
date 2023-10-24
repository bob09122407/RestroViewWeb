import React, { useState, useEffect } from 'react';
import Card from '../../cardUI/card.jsx';
import { useSelector, useDispatch } from 'react-redux'; 
import './cafe.css';
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png";
import ReactPaginate from 'react-paginate';
import { useCity } from '../../CityContext';
import { filterItemscafe } from '../../actions/cafeAction.js';
import { filterLocations } from '../../actions/nearmeAction.js';
import { useNavigate } from 'react-router-dom';
const itemsPerPage = 6; // Number of items per page

const Cafe = () => {
  const { selectedCity } = useCity();
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [isNearMeEnabledc, setIsNearMeEnabledc] = useState(false);

  // Use the useSelector hook to get the restaurant data
  const cafes = useSelector((state) => state.filterItemsReducercafe.filteredItemsc);
  const nearmecafes = useSelector((state) => state.locationsReducer.locations);

  // Determine the data to display based on the "Near Me" toggle
  const displayedData = isNearMeEnabledc ? nearmecafes : cafes;

  // Ensure that displayedData is an array before using map
  const displayedItems = Array.isArray(displayedData) ? displayedData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) : [];

  // Calculate the total number of pages based on the displayed data
  const pageCount = Math.ceil(Array.isArray(displayedData) ? displayedData.length / itemsPerPage : 0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Function to request location access
  const requestLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Get the user's latitude and longitude from the position object
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        
        // Set the location permission state to true
        setHasLocationPermission(true);
        
        // Dispatch an action to fetch nearby restaurants
        dispatch(filterLocations(  userLatitude,userLongitude,'cafe'));
        setIsNearMeEnabledc(true);
      }, (error) => {
        // Handle location access denial or errors here
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Function to handle toggling "Near Me"
  const toggleNearMec = () => {
    if (isNearMeEnabledc) {
      setIsNearMeEnabledc(false);
    } else {
      requestLocationAccess();
    }
  };

  useEffect(() => {
    // When the component mounts, fetch restaurant data by dispatching the action
    dispatch(filterItemscafe(selectedCity));
  }, [dispatch, selectedCity]);

  const handleSeeAllClick=()=>{
    navigate('/filters/cafe/All');
 }


  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <h2 className='h2'>Cafes</h2>
        <div className="header-row">
          <div className="header-section">
            <h3 onClick={handleSeeAllClick}>See All</h3>
          </div>
          <div className="header-section">
            <div className="toggle-container">
              <label className="switch-label" htmlFor="toggle1">Near Me</label>
              <input
                type="checkbox"
                name="checkbox"
                id="toggle1"
                onClick={toggleNearMec}
                checked1={isNearMeEnabledc}
              />
              <label htmlFor="toggle1" className="switch1"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-list">
        {displayedItems.map((cafe, index) => (
          <Card key={index} 
            name={cafe.name}
            title={cafe.title}
            frontImage={cafe.main_image.url}
            rating={cafe.ratings.average}
            image={waving}
            description={cafe.description}
            restaurantId={cafe._id}
            category="cafe"
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Cafe;

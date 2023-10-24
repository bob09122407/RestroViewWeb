import React, { useState, useEffect } from 'react';
import Card from '../../cardUI/card.jsx';
import { useSelector, useDispatch } from 'react-redux'; 
import './restaurant.css';
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png";
import ReactPaginate from 'react-paginate';
import { useCity } from '../../CityContext';
import { filterItemsres } from '../../actions/restaurantAction.js';
import { filterLocations } from '../../actions/nearmeAction.js';

const itemsPerPage = 6; // Number of items per page

const Restaurant = () => {
  const { selectedCity } = useCity();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [isNearMeEnabled, setIsNearMeEnabled] = useState(false);

  // Use the useSelector hook to get the restaurant data
  const restaurants = useSelector((state) => state.filterItemsReducerres.filteredItems);
  const nearmerestaurants = useSelector((state) => state.locationsReducer.locations);

  // Determine the data to display based on the "Near Me" toggle
  const displayedData = isNearMeEnabled ? nearmerestaurants : restaurants;

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
        dispatch(filterLocations(  userLatitude,userLongitude,'restaurant'));
        setIsNearMeEnabled(true);
      }, (error) => {
        // Handle location access denial or errors here
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Function to handle toggling "Near Me"
  const toggleNearMe = () => {
    if (isNearMeEnabled) {
      setIsNearMeEnabled(false);
    } else {
      requestLocationAccess();
    }
  };

  useEffect(() => {
    // When the component mounts, fetch restaurant data by dispatching the action
    dispatch(filterItemsres(selectedCity));
  }, [dispatch, selectedCity]);

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <h2 className='h2'>Restaurants</h2>
        <div className="header-row">
          <div className="header-section">
            <h3>See All</h3>
          </div>
          <div className="header-section">
            <div className="toggle-container">
              <label className="switch-label" htmlFor="toggle">Near Me</label>
              <input
                type="checkbox"
                name="checkbox"
                id="toggle"
                onClick={toggleNearMe}
                checked={isNearMeEnabled}
              />
              <label htmlFor="toggle" className="switch"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-list">
        {displayedItems.map((restaurant, index) => (
          <Card key={index} 
         
            name={restaurant.name}
            title={restaurant.title}
            frontImage={restaurant.main_image.url}
            rating={restaurant.ratings.average}
            image={waving}
            description={restaurant.description}
            restaurantId={restaurant._id}
            // type="restaurant"
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

export default Restaurant;

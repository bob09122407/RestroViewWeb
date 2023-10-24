import React, { useState, useEffect } from 'react';
import Card from '../../cardUI/card.jsx';
import { useSelector, useDispatch } from 'react-redux'; 
import './vendor.css';
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png";
import ReactPaginate from 'react-paginate';
import { useCity } from '../../CityContext';
import { filterItemsvendor } from '../../actions/vendorAction.js';
import { filterLocations } from '../../actions/nearmeAction.js';

const itemsPerPage = 6; // Number of items per page

const Vendor = () => {
  const { selectedCity } = useCity();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [isNearMeEnabledv, setIsNearMeEnabledv] = useState(false);

  // Use the useSelector hook to get the restaurant data
  const vendors= useSelector((state) => state.filterItemsReducervendor.filteredItemsv);
  const nearmevendors = useSelector((state) => state.locationsReducer.locations);

  // Determine the data to display based on the "Near Me" toggle
  const displayedData = isNearMeEnabledv ? nearmevendors : vendors;

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
        dispatch(filterLocations(  userLatitude,userLongitude,'vendors'));
        setIsNearMeEnabledv(true);
      }, (error) => {
        // Handle location access denial or errors here
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Function to handle toggling "Near Me"
  const toggleNearMev = () => {
    if (isNearMeEnabledv) {
      setIsNearMeEnabledv(false);
    } else {
      requestLocationAccess();
    }
  };

  useEffect(() => {
    // When the component mounts, fetch restaurant data by dispatching the action
    dispatch(filterItemsvendor(selectedCity));
  }, [dispatch, selectedCity]);

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <h2 className='h2'>Vendor</h2>
        <div className="header-row">
          <div className="header-section">
            <h3>See All</h3>
          </div>
          <div className="header-section">
            <div className="toggle-container">
              <label className="switch-label" htmlFor="toggle1">Near Me</label>
              <input
                type="checkbox"
                name="checkbox"
                id="toggle1"
                onClick={toggleNearMev}
                checked1={isNearMeEnabledv}
              />
              <label htmlFor="toggle1" className="switch1"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-list">
        {displayedItems.map((vendor, index) => (
          <Card key={index} 
            name={vendor.name}
            title={vendor.title}
            frontImage={vendor.main_image.url}
            rating={vendor.ratings.average}
            image={waving}
            description={vendor.description}
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

export default Vendor;

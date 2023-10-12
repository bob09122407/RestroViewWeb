import React, { useState } from 'react';
import Card from '../../cardUI/card.jsx';
import './restaurant.css';
import user from "../../assests/Gotham-Font/Gotham-Font/images/user.png"
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png"
import ReactPaginate from 'react-paginate';

const itemsPerPage = 6; // Number of items per page

const restaurants = [
  {
    name: 'Restaurant 1',
    title: 'Cuisine Type 1',
    frontImage: user,
    rating: 4.5,
    image: waving,
    description: 'Description of Restaurant 1',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 1',
    title: 'Cuisine Type 1',
    frontImage: user,
    rating: 4.5,
    image: waving,
    description: 'Description of Restaurant 1',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
  {
    name: 'Restaurant 2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Restaurant 2',
  },
 
];

const Vendors = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the restaurants array based on the current page
  const displayedRestaurants = restaurants.slice(startIndex, endIndex);

  // Total number of pages
  const pageCount = Math.ceil(restaurants.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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
              <input type="checkbox" name="checkbox" id="toggle" />
              <label htmlFor="toggle" className="switch"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurant-list">
        {displayedRestaurants.map((restaurant, index) => (
          <Card key={index} {...restaurant} />
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

export default Vendors;




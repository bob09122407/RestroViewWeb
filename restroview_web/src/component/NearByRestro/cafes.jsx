import React, { useState } from 'react';
import Card from '../../cardUI/card.jsx';
import './cafe.css';
import user from "../../assests/Gotham-Font/Gotham-Font/images/user.png"
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png"
import ReactPaginate from 'react-paginate';

const itemsPerPage = 6; // Number of items per page

const cafes = [
  {
    name: 'Cafe1',
    title: 'Cuisine Type 1',
    frontImage: user,
    rating: 4.5,
    image: waving,
    description: 'Description of Cafe1',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe1',
    title: 'Cuisine Type 1',
    frontImage: user,
    rating: 4.5,
    image: waving,
    description: 'Description of Cafe1',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
  {
    name: 'Cafe2',
    title: 'Cuisine Type 2',
    frontImage: user,
    rating: 4.0,
    image: waving,
    description: 'Description of Cafe2',
  },
];

const Cafes = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the restaurants array based on the current page
  const displayedRestaurants = cafes.slice(startIndex, endIndex);

  // Total number of pages
  const pageCount = Math.ceil(cafes.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <h2 className='h2'>Cafes</h2>
        <div className="header-row">
          <div className="header-section">
            <h3>See All</h3>
          </div>
          <div className="header-section">
            <div className="toggle-container">
              <label className="switch-label" htmlFor="toggle">Near Me</label>
              <input type="checkbox" name="checkbox1" id="toggle1" />
              <label htmlFor="toggle1" className="switch1"></label>
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

export default Cafes;




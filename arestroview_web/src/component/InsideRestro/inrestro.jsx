import React, { useState } from "react";
import "./inrestro.css";
import Price from "./price.jsx"
import Card from '../../cardUI/incard.jsx';
// import '../NearByRestro/restaurant.css';
import user from "../../assests/Gotham-Font/Gotham-Font/images/user.png"
import waving from "../../assests/Gotham-Font/Gotham-Font/images/waving-hand.png"
import ReactPaginate from 'react-paginate';
import Bobby from "../../assests/Gotham-Font/Gotham-Font/images/bobby.jpeg"
const itemsPerPage = 15; // Number of items per page

const restaurants = [
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  {
    name: 'Restaurant 1',
    jobTitle: 'Cuisine Type 1',
    followers: 100,
    open: 100,
    post: 100,
    imageSrc: Bobby,
  },
  
 
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
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
  const foodFilters = [
    "Pizza",
    "Burger",
    "Noodles",
    "Rice",
  ];

  const vegNonvegFilters = [
    "Veg",
    "Non-veg",
  ];
  const TimeFilters = [
    "Open",
    "Close",
  ];

  const handleToggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleClickFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="mainin">
    <div className="sidebar">
      <div className="top">
        <img src="" alt="" />
        <h2>Filters</h2>
      </div>
      <div className="heading">
        <ul>
          <li>Restaurants</li>
          <li>Vendors</li>
          <li>Cafes</li>
        </ul>
      </div>
      <div className="price">
        <Price />
      </div>
      <div className="food-filter">
        <h3>Food</h3>
        <ul>
          {foodFilters.map((filter) => (
            <li key={filter}>
              <a
                href="#"
                className={selectedFilter === filter ? "active" : ""}
                onClick={() => handleClickFilter(filter)}
              >
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="veg-nonveg">
        <h3>Veg/Non-veg</h3>
        <ul>
          {vegNonvegFilters.map((filter) => (
            <li key={filter}>
              <a
                href="#"
                className={selectedFilter === filter ? "active" : ""}
                onClick={() => handleClickFilter(filter)}
              >
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="veg-nonveg">
        <h3>Veg/Non-veg</h3>
        <ul>
          {TimeFilters.map((filter) => (
            <li key={filter}>
              <a
                href="#"
                className={selectedFilter === filter ? "active" : ""}
                onClick={() => handleClickFilter(filter)}
              >
                {filter}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="veg-nonveg">
      <h1>restroview</h1>
      </div>
    </div>
    <div className="right">
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
    </div>
  );
};

export default Sidebar;

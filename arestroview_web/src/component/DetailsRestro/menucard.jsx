import React, { useState } from 'react';
import SubHeading from './SubHeading.jsx';
import MenuItem from './items.jsx';
import './menucard.css';

const ITEMS_PER_PAGE = 8; // Number of items per page

const SpecialMenu = ({ menu }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All'); // Initialize active category to 'All'

  // Function to handle category filter click
  const handleCategoryFilterClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  // Filter the menu data based on the active category
  const filteredMenu = menu.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredMenu.slice(indexOfFirstItem, indexOfLastItem);

  const isPrevButtonDisabled = currentPage === 1;
  const isNextButtonDisabled = indexOfLastItem >= filteredMenu.length;

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app__specialMenus flex__center section__padding" id="menu">
      <div className="app__specialMenu-titles">
        <SubHeading title="Hello" />
        <h1 className="headtext__cormorant">MenuCard</h1>
      </div>

      {/* Category filter buttons */}
      <div className="filter-containers">
        <div className="filter-buttonss" style={{ zIndex: 2 }}>
          <button
            className={activeCategory === 'All' ? 'active' : ''}
            onClick={() => handleCategoryFilterClick('All')}
          >
            All
          </button>
          <button
            className={activeCategory === 'Pizza' ? 'active' : ''}
            onClick={() => handleCategoryFilterClick('Pizza')}
          >
            Pizza
          </button>
          {/* Add more category filter buttons here */}
        </div>
      </div>

      <div className="app__specialMenu-menus">
        {currentItems.map((item, index) => (
          <MenuItem
            key={item.itemName + index}
            title={item.itemName}
            price={item.price}
            // category={item.category}
            imageSrc={item.img.url}
          />
        ))}
      </div>

      <div className="pagination-buttons" style={{ marginTop: 15, zIndex: 2 }}>
        <button
          type="button"
          className={`custom__button ${isPrevButtonDisabled ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isPrevButtonDisabled}
        >
          Prev
        </button>
        <button
          type="button"
          className={`custom__button ${isNextButtonDisabled ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isNextButtonDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;


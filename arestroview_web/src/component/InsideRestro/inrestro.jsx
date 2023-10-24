import React, { useState, useEffect } from "react";
import "./inrestro.css";
import Card from '../../cardUI/incard.jsx';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux'; 
import { filterItemsres } from '../../actions/restaurantAction.js';
import { filterItemsvendor } from '../../actions/vendorAction.js';
import { filterItemscafe } from '../../actions/cafeAction.js';
import { useCity } from '../../CityContext';

const itemsPerPage = 15; // Number of items per page

const Sidebar = () => {
  const { selectedCity } = useCity();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("restaurant"); // Default category
  const [selectedFood, setSelectedFood] = useState("All"); // Default food
  const [selectedRating, setSelectedRating] = useState(""); // Default rating filter

  // Define a useEffect to fetch and display items based on the selected category
  useEffect(() => {
    if (selectedCategory === "restaurant") {
      dispatch(filterItemsres(selectedCity));
    } else if (selectedCategory === "cafe") {
      dispatch(filterItemscafe(selectedCity));
    } else if (selectedCategory === "vendor") {
      dispatch(filterItemsvendor(selectedCity, selectedFood));
    }
  }, [selectedCategory, selectedCity, selectedFood, dispatch]);

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Selector function to get the filtered items
  const displayedItems = useSelector(state => {
    let items = [];

    if (selectedCategory === "restaurant") {
      items = state.filterItemsReducerres.filteredItems;
    } else if (selectedCategory === "cafe") {
      items = state.filterItemsReducercafe.filteredItemsc;
    } else if (selectedCategory === "vendor") {
      if (selectedFood === "All") {
        items = state.filterItemsReducervendor.filteredItemsv;
      } else {
        items = state.filterItemsReducervendor.filteredItemsv.filter(item => item.cuisine === selectedFood);
      }
    }

    // Apply the rating filter
    if (selectedRating) {
      items = items.filter(item => item.ratings.average >= parseInt(selectedRating));
    }

    return items;
  });

  // Total number of pages
  const pageCount = Math.ceil(displayedItems.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedFood("All");
  };

  const handleFoodChange = (food) => {
    setSelectedFood(food);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="mainin">
      <div className="right">
        <div className="button-panel">
          <button onClick={() => handleCategoryChange("restaurant")}>Restaurant</button>
          <button onClick={() => handleCategoryChange("cafe")}>Cafe</button>
          <button onClick={() => handleCategoryChange("vendor")}>Vendors</button>
          <div className="dropdown">
            <select
              disabled={selectedCategory !== "vendor"}
              onChange={(e) => handleFoodChange(e.target.value)}
              value={selectedFood}
            >
              <option value="All">All</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Dabeli">Dabeli</option>
            </select>
          </div>
          <div className="dropdown">
            <select
              onChange={(e) => handleRatingChange(e.target.value)}
              value={selectedRating}
            >
              <option value="">All Ratings</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Stars</option>
            </select>
          </div>
        </div>
        <div className="restaurant-list">
          {displayedItems.slice(startIndex, endIndex).map((item, index) => (
            <Card key={index} 
              name={item.name}
              title={item.title}
              followers={item.followers}
              open="100"
              imageSrc={item.main_image.url} 
              Id={item._id}
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
    </div>
  );
};

export default Sidebar;

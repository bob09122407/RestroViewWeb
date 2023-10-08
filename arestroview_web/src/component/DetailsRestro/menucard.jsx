// import React, { useState } from 'react';
// import SubHeading from './SubHeading.jsx';
// import MenuItem from './items.jsx';
// import { data } from '../../constants';
// import './menuitem.css';

// const SpecialMenu = () => {
//   const [activeFilter, setActiveFilter] = useState('All'); // Initialize active filter to 'All'

//   // Function to handle filter button click
//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//   };

//   // Filter the data based on the active filter
//   const filteredWines = data.wines.filter((wine) =>
//     activeFilter === 'All' ? true : wine.tags.includes(activeFilter)
//   );

//   const filteredCocktails = data.cocktails.filter((cocktail) =>
//     activeFilter === 'All' ? true : cocktail.tags.includes(activeFilter)
//   );

//   return (
//     <div className="app__specialMenu flex__center section__padding" id="menu">
//       <div className="app__specialMenu-title">
//         <SubHeading title="Hello" />
//         <h1 className="headtext__cormorant">MenuCard</h1>
//       </div>

//       {/* Filter buttons */}
//       <div className="filter-buttons" style={{zIndex:2}}>
//         <button 
//           className={activeFilter === 'All' ? 'active' : ''}
//           onClick={() => handleFilterClick('All')}
//         >
//           All
//         </button>
//         <button 
//           className={activeFilter === 'Roti' ? 'active' : ''}
//           onClick={() => handleFilterClick('Roti')}
//         >
//           Roti
//         </button>
//         <button
//           className={activeFilter === 'Sabji' ? 'active' : ''}
//           onClick={() => handleFilterClick('Sabji')}
//         >
//           Sabji
//         </button>
//         <button
//           className={activeFilter === 'Tandoori' ? 'active' : ''}
//           onClick={() => handleFilterClick('Tandoori')}
//         >
//           Tandoori
//         </button>
//       </div>

//       <div className="app__specialMenu-menu">
//         <div className="app__specialMenu-menu_wine flex__center">
//           <div className="app__specialMenu_menu_items">
//             {filteredWines.map((wine, index) => (
//               <MenuItem
//                 key={wine.title + index}
//                 title={wine.title}
//                 price={wine.price}
//                 tags={wine.tags}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="app__specialMenu-menu_cocktails flex__center">
//           <div className="app__specialMenu_menu_items">
//             {filteredCocktails.map((cocktail, index) => (
//               <MenuItem
//                 key={cocktail.title + index}
//                 title={cocktail.title}
//                 price={cocktail.price}
//                 tags={cocktail.tags}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div style={{ marginTop: 15, zIndex:2 }}>
//         <button type="button" className="custom__button">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpecialMenu;

import React, { useState } from 'react';
import SubHeading from './SubHeading.jsx';
import MenuItem from './items.jsx';
import { data } from '../../constants';
import './menucard.css';

const ITEMS_PER_PAGE = 8; // Number of items per page

const SpecialMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All'); // Initialize active filter to 'All'

  // Function to handle filter button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  // Filter the data based on the active filter
  const filteredMenus = data.menus.filter((menu) =>
    activeFilter === 'All' ? true : menu.tags.includes(activeFilter)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredMenus.slice(indexOfFirstItem, indexOfLastItem);

  const isPrevButtonDisabled = currentPage === 1;
  const isNextButtonDisabled = indexOfLastItem >= filteredMenus.length;

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

      {/* Filter buttons */}
      <div className="filter-containers">
        <div className="filter-buttonss" style={{ zIndex: 2 }}>
          <button
            className={activeFilter === 'All' ? 'active' : ''}
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button
            className={activeFilter === 'Roti' ? 'active' : ''}
            onClick={() => handleFilterClick('Roti')}
          >
            Roti
          </button>
          <button
            className={activeFilter === 'Sabji' ? 'active' : ''}
            onClick={() => handleFilterClick('Sabji')}
          >
            Sabji
          </button>
          <button
            className={activeFilter === 'Tandoori' ? 'active' : ''}
            onClick={() => handleFilterClick('Tandoori')}
          >
            Tandoori
          </button>
          <button
            className={activeFilter === 'Tandoori' ? 'active' : ''}
            onClick={() => handleFilterClick('Tandoori')}
          >
            Tandoori
          </button>
          <button
            className={activeFilter === 'Tandoori' ? 'active' : ''}
            onClick={() => handleFilterClick('Tandoori')}
          >
            Tandoori
          </button>
          <button
            className={activeFilter === 'Tandoori' ? 'active' : ''}
            onClick={() => handleFilterClick('Tandoori')}
          >
            Tandoori
          </button>
          <button
            className={activeFilter === 'Tandoori' ? 'active' : ''}
            onClick={() => handleFilterClick('Tandoori')}
          >
            Tandoori
          </button>
          <button
            className={activeFilter === 'Tandoori' ? 'active' : ''}
            onClick={() => handleFilterClick('Tandoori')}
          >
            Tandoori
          </button>
          {/* Add more buttons here */}
        </div>
      </div>

      <div className="app__specialMenu-menus">
        <div className="app__specialMenu-menu_wines flex__center">
          <div className="app__specialMenu_menu_itemss" style={{ paddingRight: 40 }}>
            {currentItems.slice(0, 4).map((menu, index) => (
              <MenuItem
                key={menu.title + index}
                title={menu.title}
                price={menu.price}
                tags={menu.tags}
                imageSrc={menu.image}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_cocktailss flex__center">
          <div className="app__specialMenu_menu_itemss" style={{ paddingRight: 40 }}>
            {currentItems.slice(4, 8).map((menu, index) => (
              <MenuItem
                key={menu.title + index}
                title={menu.title}
                price={menu.price}
                tags={menu.tags}
                imageSrc={menu.image}
              />
            ))}
          </div>
        </div>
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


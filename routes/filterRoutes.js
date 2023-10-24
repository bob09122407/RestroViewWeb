const express = require('express');
const router = express.Router();
const {
  filterItemsCafe,
  filterLocations,
  filtermenu,
  filterItemsRes,
  filterItemsVen,
  followRestaurantOrCafe,
  search,
  followinglist
} = require('../utils/filter'); // Replace with the actual path to your controller

// Route to filter items (restaurants, cafes, vendors) based on common filters
router.get('/filter/res', filterItemsRes);
router.get('/filter/cafe', filterItemsCafe);
router.get('/filter/location',filterLocations);
router.get('/filter/vendor', filterItemsVen);
router.get('/menu/category', filtermenu);
router.post('/user/:userId/follow/:restaurantOrCafeOrVendorId/:category',followRestaurantOrCafe );
router.get('/search',search );
router.get('/following/:userId',followinglist);

module.exports = router;

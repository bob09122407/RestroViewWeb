const express = require('express');
const router = express.Router();
const {
  filterItems,
  filterLocations,
} = require('../utils/filter'); // Replace with the actual path to your controller

// Route to filter items (restaurants, cafes, vendors) based on common filters
router.get('/filter', filterItems);
router.get('/filter/location',filterLocations);


module.exports = router;

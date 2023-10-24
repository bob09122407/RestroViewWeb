// Import necessary modules and models
const express = require('express');
const router = express.Router();
const { openGoogleMaps } = require('../utils/googlemapapi'); // Replace with the actual path to your controller

// Define the route for opening Google Maps
router.get('/open-google-maps', openGoogleMaps);

// Export the router
module.exports = router; 

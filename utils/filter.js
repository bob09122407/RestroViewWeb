const Restaurant = require('../models/restaurantModel');
const Cafe = require('../models/cafeModel');
const Vendor = require('../models/vendorModel');

// Filter items by category and city
exports.filterItems = async (req, res) => {
  try {
    const { category, city } = req.query;

    if (!category || !city) {
      return res.status(400).json({
        success: false,
        message: 'Both "category" and "city" are required query parameters.',
      });
    }

    let result;

    switch (category) {
      case 'restaurant':
        result = await Restaurant.find({ city });
        break;
      case 'cafe':
        result = await Cafe.find({ city });
        break;
      case 'vendor':
        result = await Vendor.find({ city });
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid category' });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};


//filter location api done
exports.filterLocations = async (req, res) => {
  try {
    const { latitude, longitude, category } = req.query;
    if (!latitude || !longitude || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide "latitude," "longitude," and "category" in the query parameters.',
      });
    }

    // Convert latitude and longitude to numbers
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    // Define the maximum distance (5 km)
    const maxDistance = 5; // You can adjust this as needed

    // Define the model based on the category
    let model;
    switch (category) {
      case 'restaurant':
        model = Restaurant;
        break;
      case 'cafe':
        model = Cafe;
        break;
      case 'vendors':
        model = Vendors;
        break;
      default:
        return res.status(400).json({
          success: false,
          message: 'Invalid category. Supported categories are: restaurant, cafe, vendors.',
        });
    }

    // Find locations within the specified radius using the $nearSphere geospatial query
    const locations = await model.find({
      'address.latitude': { $exists: true },
      'address.longitude': { $exists: true },
      'address.latitude': { $gt: lat - 0.045, $lt: lat + 0.045 }, // Approx. 5 km in latitude
      'address.longitude': { $gt: lon - 0.045, $lt: lon + 0.045 }, // Approx. 5 km in longitude
    });

    res.status(200).json({ success: true, data: locations });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};



const Restaurant = require('../models/restaurantModel');
const Cafe = require('../models/cafeModel');
const Vendor = require('../models/vendorModel');
const User =require('../models/userModel');

// //follower and following list of user
// exports.followRestaurantOrCafe = async (req, res) => {
//   try {
//     const { userId, restaurantOrCafeOrVendorId } = req.params;

//     // Find the user by userId
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     // Check if the user is already following the restaurant, cafe, or vendor
//     const isFollowing = user.followingRestaurantsCafe.includes(restaurantOrCafeOrVendorId);
//     if (isFollowing) {
//       return res.status(400).json({ success: false, message: 'User is already following this restaurant, cafe, or vendor' });
//     }

//     let restaurantOrCafeOrVendor;

//     // Check if the restaurantOrCafeOrVendorId corresponds to a Restaurant, Cafe, or Vendor
//     if (await Restaurant.findById(restaurantOrCafeOrVendorId)) {
//       restaurantOrCafeOrVendor = await Restaurant.findById(restaurantOrCafeOrVendorId);
//     } else if (await Cafe.findById(restaurantOrCafeOrVendorId)) {
//       restaurantOrCafeOrVendor = await Cafe.findById(restaurantOrCafeOrVendorId);
//     } else if (await Vendor.findById(restaurantOrCafeOrVendorId)) {
//       restaurantOrCafeOrVendor = await Vendor.findById(restaurantOrCafeOrVendorId);
//     } else {
//       return res.status(404).json({ success: false, message: 'Restaurant, cafe, or vendor not found' });
//     }

//     // Add the restaurant, cafe, or vendor to the user's followingRestaurantsCafeVendors list
//     user.followingRestaurantsCafe.push(restaurantOrCafeOrVendorId);
//     await user.save();

//     // Increment the followers count of the restaurant, cafe, or vendor
//     restaurantOrCafeOrVendor.followers += 1;
//     await restaurantOrCafeOrVendor.save();

//     return res.status(200).json({ success: true, message: 'User is now following the restaurant, cafe, or vendor' });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
//   }
// };

// exports.followRestaurantOrCafe = async (req, res) => {
//   try {
//     const { userId, restaurantOrCafeOrVendorId,category } = req.params;

//     // Find the user by userId
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     // Check if the user is already following the same restaurant, cafe, or vendor
//     const isFollowing = user.followingRestaurantsCafe.some((item) => item.follow.equals(restaurantOrCafeOrVendorId));

//     if (isFollowing) {
//       return res.status(400).json({ success: false, message: 'User is already following this restaurant, cafe, or vendor' });
//     }

//     // Check if the restaurantOrCafeOrVendorId corresponds to a Restaurant, Cafe, or Vendor
//     const restaurantOrCafeOrVendor = await Restaurant.findById(restaurantOrCafeOrVendorId)
//       || await Cafe.findById(restaurantOrCafeOrVendorId)
//       || await Vendor.findById(restaurantOrCafeOrVendorId);

//     if (!restaurantOrCafeOrVendor) {
//       return res.status(404).json({ success: false, message: 'Restaurant, cafe, or vendor not found' });
//     }

//     // Add the restaurant, cafe, or vendor to the user's followingRestaurantsCafe list
//     user.followingRestaurantsCafe.push({ restaurantOrCafeOrVendorId, category });
//     await user.save();

//     // Increment the followers count of the restaurant, cafe, or vendor
//     restaurantOrCafeOrVendor.followers += 1;
//     await restaurantOrCafeOrVendor.save();

//     return res.status(200).json({ success: true, message: 'User is now following the restaurant, cafe, or vendor' });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
//   }
// };

exports.followRestaurantOrCafe = async (req, res) => {
  try {
    const { userId, restaurantOrCafeOrVendorId, category } = req.params;

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if the user is already following the same restaurant, cafe, or vendor by ID
    const isFollowing = user.followingRestaurantsCafe.some((item) =>
      item.restaurantOrCafeId.equals(restaurantOrCafeOrVendorId)
    );

    if (isFollowing) {
      return res.status(400).json({ success: false, message: 'User is already following this restaurant, cafe, or vendor' });
    }

    // Add the restaurant, cafe, or vendor to the user's followingRestaurantsCafe list
    user.followingRestaurantsCafe.push({ restaurantOrCafeId: restaurantOrCafeOrVendorId, category });
    await user.save();

    // Increment the followers count of the restaurant, cafe, or vendor
    let restaurantOrCafeOrVendor;

    if (category === 'restaurant') {
      restaurantOrCafeOrVendor = await Restaurant.findById(restaurantOrCafeOrVendorId);
    } else if (category === 'cafe') {
      restaurantOrCafeOrVendor = await Cafe.findById(restaurantOrCafeOrVendorId);
    } else if (category === 'vendor') {
      restaurantOrCafeOrVendor = await Vendor.findById(restaurantOrCafeOrVendorId);
    } else {
      return res.status(400).json({ success: false, message: 'Invalid category' });
    }

    if (!restaurantOrCafeOrVendor) {
      return res.status(404).json({ success: false, message: 'Restaurant, cafe, or vendor not found' });
    }

    restaurantOrCafeOrVendor.followers += 1;
    await restaurantOrCafeOrVendor.save();

    return res.status(200).json({ success: true, message: 'User is now following the restaurant, cafe, or vendor' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
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
        model = Vendor;
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

//filter api for menu category filter of a  restaurant, cafe and vendors
exports.filtermenu= async (req, res) => {
  try {
    const { name, category } = req.query;

    if (!name || !category) {
      return res.status(400).json({ error: 'Both name and category are required parameters.' });
    }

    let menuItems = [];

    // Search for a restaurant
    const restaurant = await Restaurant.findOne({ name });
    if (restaurant && restaurant.menu) {
      menuItems = restaurant.menu.filter((item) => item.category === category);
    }

    // If not found in restaurant, search for a cafe
    if (menuItems.length === 0) {
      const cafe = await Cafe.findOne({ name });
      if (cafe && cafe.menu) {
        menuItems = cafe.menu.filter((item) => item.category === category);
      }
    }

    // If not found in cafe, search for a vendor
    if (menuItems.length === 0) {
      const vendor = await Vendor.findOne({ name });
      if (vendor && vendor.menu) {
        menuItems = vendor.menu.filter((item) => item.category === category);
      }
    }

    if (menuItems.length === 0) {
      return res.status(404).json({ error: 'No menu items found with the given parameters.' });
    }

    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// For cafe
exports.filterItemsCafe = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: 'The "city" query parameter is required.',
      });
    }

    // Assuming there is a field like "category" in your Cafe model, you should include it in the filter query
    const result = await Cafe.find({ city });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

// For restaurant
exports.filterItemsRes = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: 'The "city" query parameter is required.',
      });
    }

    // Assuming there is a field like "category" in your Restaurant model, you should include it in the filter query
    const result = await Restaurant.find({ city });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};


//for cafe
// For restaurant
exports.filterItemsVen = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: 'The "city" query parameter is required.',
      });
    }

    // Assuming there is a field like "category" in your Restaurant model, you should include it in the filter query
    const result = await Vendor.find({ city });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};


//search api
exports.search= async (req, res) => {
  try {
    const searchName = req.query.name; // Get the search name from the query parameters
    const regex = new RegExp(searchName, 'i'); 
    // Search in the Restaurant model
    const restaurantResults = await Restaurant.find({ name: { $regex: regex } }, '_id');
    // Search in the Cafe model
    const cafeResults = await Cafe.find({ name: { $regex: regex } }, '_id');
    // Search in the Vendor model
    const vendorResults = await Vendor.find({ name: { $regex: regex } }, '_id');

    // Combine the results from all three models
    const searchResults = {
      restaurants: restaurantResults,
      cafes: cafeResults,
      vendors: vendorResults,
    };

    res.json(searchResults);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//following list


exports.followinglist= async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const followingList = user.followingRestaurantsCafe; // Get the user's following list

    const followingEntities = [];

    for (const followItem of followingList) {
      // Determine the category and retrieve the entity details
      let entity;
      if (followItem.category === 'restaurant') {
        entity = await Restaurant.findById(followItem.restaurantOrCafeId);
      } else if (followItem.category === 'cafe') {
        entity = await Cafe.findById(followItem.restaurantOrCafeId);
      } else if (followItem.category === 'vendor') {
        entity = await Vendor.findById(followItem.restaurantOrCafeId);
      }

      if (entity) {
        followingEntities.push(entity);
      }
    }

    res.status(200).json({ success: true, data: followingEntities });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};
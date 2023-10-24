const Advertisement = require('../models/advertisementModel');

// Controller to create a new advertisement
exports.createAdvertisement = async (req, res) => {
  try {
    const { image, restaurantName, description, city, category } = req.body;

    // Create a new advertisement instance
    const newAdvertisement = new Advertisement({
      image,
      restaurantName,
      description,
      city,
      category
    });

    // Save the advertisement to the database
    await newAdvertisement.save();

    res.status(201).json({ success: true, data: newAdvertisement });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to delete an advertisement by its ID
exports.deleteAdvertisement = async (req, res) => {
  try {
    const { advertisementId } = req.params;

    // Find the advertisement by its ID and delete it
    const advertisement = await Advertisement.findByIdAndDelete(advertisementId);

    if (!advertisement) {
      return res.status(404).json({ success: false, message: 'Advertisement not found' });
    }

    res.status(200).json({ success: true, message: 'Advertisement deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Controller to get restaurant advertisements by city
exports.getRestaurantAdvertisementsByCity = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ success: false, message: 'City is required.' });
    }

    const advertisements = await Advertisement.find({
      city: { $regex: new RegExp(city, 'i') }, // Case-insensitive search for city
      category: 'Restaurant', // Filter by category "Restaurant"
    });

    if (advertisements.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No restaurant advertisements found for the specified city.',
      });
    }

    res.status(200).json({ success: true, data: advertisements });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to get cafe advertisements by city
exports.getCafeAdvertisementsByCity = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ success: false, message: 'City is required.' });
    }

    const advertisements = await Advertisement.find({
      city: { $regex: new RegExp(city, 'i') }, // Case-insensitive search for city
      category: 'Cafe', // Filter by category "Cafe"
    });

    if (advertisements.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No cafe advertisements found for the specified city.',
      });
    }

    res.status(200).json({ success: true, data: advertisements });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



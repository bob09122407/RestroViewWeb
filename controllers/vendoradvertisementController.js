// controllers/vendorAdvertisementController.js

const VendorAdvertisement = require('../models/vendoradvertisementModel'); // Import the Mongoose model

// Create a new vendor advertisement
exports.createAdvertisement = async (req, res) => {
  try {
    const { title, quote, placename, famousFoodName, image, city } = req.body;
    const advertisement = new VendorAdvertisement({ title, quote, placename, famousFoodName, image, city });
    await advertisement.save();
    res.status(201).json(advertisement);
  } catch (err) {
    res.status(500).json({ error: 'Error creating vendor advertisement' });
  }
};

// Get vendor advertisements by city
exports.getAdvertisementsByCity = async (req, res) => {
  try {
    const city = req.params.city; // Assuming you're passing the city as a parameter
    const advertisements = await VendorAdvertisement.find({ city });
    res.status(200).json({ success: true, data: advertisements });
    
  } catch (err) {
    res.status(500).json({ error: 'Error fetching vendor advertisements' });
  }
};

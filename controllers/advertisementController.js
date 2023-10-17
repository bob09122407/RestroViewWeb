const Advertisement = require('../models/advertisementModel');

// Controller to create a new advertisement
exports.createAdvertisement = async (req, res) => {
  try {
    const { image, restaurantName, description } = req.body;

    // Create a new advertisement instance
    const newAdvertisement = new Advertisement({
      image,
      restaurantName,
      description,
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

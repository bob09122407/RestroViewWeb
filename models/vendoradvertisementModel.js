const mongoose = require('mongoose');

const vendorAdvertisementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  placename: {
    type: String,
    required: true,
  },
  famousFoodName: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can store the image file path or URL as a string
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const VendorAdvertisement = mongoose.model('VendorAdvertisement', vendorAdvertisementSchema);

module.exports = VendorAdvertisement;

const express = require('express');
const router = express.Router();
const {
  createAdvertisement,
  deleteAdvertisement,
  getAdvertisementByCityAndCategory,
  getRestaurantAdvertisementsByCity,
  getCafeAdvertisementsByCity
} = require('../controllers/advertisementController');

// Create a new advertisement
router.post('/createAdvertisement', createAdvertisement);

// Delete an advertisement by ID
router.delete('/delete/advertisement/:advertisementId', deleteAdvertisement);
router.get('/getrestaurantadvertisementdetails',getRestaurantAdvertisementsByCity);
router.get('/getcafeadvertisementdetails', getCafeAdvertisementsByCity); 

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createAdvertisement,
  deleteAdvertisement,
} = require('../controllers/advertisementController');

// Create a new advertisement
router.post('/createAdvertisement', createAdvertisement);

// Delete an advertisement by ID
router.delete('/delete/:advertisementId', deleteAdvertisement);

module.exports = router;

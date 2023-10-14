const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/vendorsController');


router.post('/createVendors', restaurantController.createVendor);

router.get('/allVendors', restaurantController.getAllVendors);

router.get('/Vendors/:id', restaurantController.getVendorById);

router.put('/updateVendors/:id', restaurantController.updateVendor);

router.delete('/deleteVendors/:id', restaurantController.deleteVendor);

module.exports = router;

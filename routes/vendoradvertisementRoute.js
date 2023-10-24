const express = require('express');
const router = express.Router();
const vendoradvertisementController = require('../controllers/vendoradvertisementController');


router.post('/createvendoradvertisement', vendoradvertisementController.createAdvertisement);
router.get('/citybasedadvertisement/:city' ,vendoradvertisementController.getAdvertisementsByCity);



module.exports = router;
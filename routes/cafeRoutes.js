const express = require('express');
const router = express.Router();
const CafeController = require('../controllers/cafeController');


router.post('/createCafes', CafeController.createCafe);

router.get('/allCafes', CafeController.getAllCafes);

router.get('/Cafes/:id', CafeController.getCafeById);

router.put('/updateCafes/:id', CafeController.updateCafe);

router.delete('/deleteCafes/:id', CafeController.deleteCafe);

module.exports = router;

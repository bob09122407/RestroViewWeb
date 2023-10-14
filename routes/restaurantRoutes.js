const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');


router.post('/createRestaurants', restaurantController.createRestaurant);

router.get('/allRestaurants', restaurantController.getAllRestaurants);

router.get('/restaurants/:id', restaurantController.getRestaurantById);

router.put('/updateRestaurants/:id', restaurantController.updateRestaurant);

router.delete('/deleteRestaurants/:id', restaurantController.deleteRestaurant);

module.exports = router;

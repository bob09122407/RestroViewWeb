const express = require('express');
const router = express.Router();
const {
 saveUserData
} = require('../controllers/emailController');

// Create a new advertisement
router.post('/saveemail/:email/:userId', saveUserData);


module.exports = router;

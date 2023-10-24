const express = require('express');
const router = express.Router();
const {
  createReel,
  deleteReel,
  getAllReels,
  addCommentToReel,
  updateLikes
} = require('../controllers/reelsController');
const {isAuthenticatedUser} =require("../middleware/isAuthenticated");

// Create a new reel
router.post('/createreels', createReel);

// Delete a reel by ID
router.delete('/deletereels/:reelId', deleteReel);

// Get all reels
router.get('/allreels', getAllReels);

// Add a comment to a reel
router.post('/reels/:reelId/comments', addCommentToReel);

router.put(`/api/v1/reels/:id/likes`, updateLikes);

module.exports = router;

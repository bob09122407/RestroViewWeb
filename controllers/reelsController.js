const Reels = require('../models/reelsModel'); // Assuming you've created a "Reels" model

// Create a new reel
exports.createReel = async (req, res) => {
  try {
    const { video_url, likes,comments } = req.body; // Assuming you send video_url in the request body

    // Create a new reel
    const reel = new Reels({ video_url, likes, comments });

    // Save the new reel to the database
    await reel.save();

    res.status(201).json({ success: true, data: reel });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

// Delete a reel by ID
exports.deleteReel = async (req, res) => {
  try {
    const { reelId } = req.params;

    // Find and delete the reel by its ID
    const reel = await Reels.findByIdAndRemove(reelId);

    if (!reel) {
      return res.status(404).json({ success: false, message: 'Reel not found' });
    }

    res.status(200).json({ success: true, message: 'Reel deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

// Get all reels
exports.getAllReels = async (req, res) => {
  try {
    const reels = await Reels.find();

    res.status(200).json({ success: true, data: reels });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

// Add a comment to a reel
exports.addCommentToReel = async (req, res) => {
  try {
    
    const { reelId } = req.params;
    const { name, comment } = req.body;

    // Find the reel by its ID
    const reel = await Reels.findById(reelId);

    if (!reel) {
      return res.status(404).json({ success: false, message: 'Reel not found' });
    }

    // Add a new comment to the comments array
    reel.comments.push({ name, comment });

    // Save the updated reel
    await reel.save();

    res.status(201).json({ success: true, data: reel });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};

exports.updateLikes = async (req, res) => {
  try {
    const { reelId } = req.params;

    // Find the reel by its ID
    const reel = await Reels.findById(reelId);

    if (!reel) {
      return res.status(404).json({ success: false, message: 'Reel not found' });
    }

    // Update the number of likes
    reel.likes++; // You can modify this based on your specific logic

    // Save the updated reel
    await reel.save();

    res.status(200).json({ success: true, data: reel });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};


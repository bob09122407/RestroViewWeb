const Cafe = require('../models/cafeModel');

// Create a new restaurant
exports.createCafe = async (req, res) => {
  try {
    const cafe = new Cafe(req.body);
    const savedCafe = await cafe.save();
    res.status(201).json(savedCafe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all restaurants
exports.getAllCafes = async (req, res) => {
  try {
    const cafes = await Cafe.find();
    res.json(cafes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific restaurant by ID
exports.getCafeById = async (req, res) => {
  try {
    const cafe = await Cafe.findById(req.params.id);
    if (!cafe) {
      return res.status(404).json({ error: 'Cafe not found' });
    }
    res.json(cafe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a restaurant by ID
exports.updateCafe = async (req, res) => {
  try {
    const updatedCafe = await Cafe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCafe) {
      return res.status(404).json({ error: 'Cafe not found' });
    }
    res.json(updatedCafe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a cafe by ID
exports.deleteCafe = async (req, res) => {
  try {
    const deletedCafe = await Cafe.findByIdAndDelete(req.params.id);
    if (!deletedCafe) {
      return res.status(404).json({ error: 'Cafe not found' });
    }
    res.json({ message: 'Cafe deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

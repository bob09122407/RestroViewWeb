const Cafe = require('../models/cafeModel');

// Create a new Cafe
exports.createCafe = async (req, res) => {
  try {
    const Cafe = new Cafe(req.body);
    const savedCafe = await Cafe.save();
    res.status(201).json(savedCafe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Cafes
exports.getAllCafes = async (req, res) => {
  try {
    const Cafes = await Cafe.find();
    res.json(Cafes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific Cafe by ID
exports.getCafeById = async (req, res) => {
  try {
    const Cafe = await Cafe.findById(req.params.id);
    if (!Cafe) {
      return res.status(404).json({ error: 'Cafe not found' });
    }
    res.json(Cafe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Cafe by ID
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

// Delete a Cafe by ID
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

// userController.js

const Email = require('../models/emailModel'); // Import the User model

// Controller function to save user data
const saveUserData = async (req, res) => {
  const { email, userId } = req.params;

  try {
    const newUser = new Email({ email, userId });
    await newUser.save();
    res.status(200).json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { saveUserData };

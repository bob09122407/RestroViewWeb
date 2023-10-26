// user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userId: { type: String, required: true },
});

const Email = mongoose.model('Email', userSchema);

module.exports = Email;

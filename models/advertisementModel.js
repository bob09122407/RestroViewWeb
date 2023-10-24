const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  restaurantName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  }

});

module.exports = mongoose.model('Advertisement', advertisementSchema);



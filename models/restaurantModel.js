const mongoose = require('mongoose');

// Add this code to create a geospatial index in your model file



const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please give the name of a restaurant"],
  },

  title:{
    type: String,
    require: true,
  },
  main_image:
    {
        public_id:{
          type:String,
          required:true,
        },
        url:{
          type:String,
          required:true,
        },
    },


  video:
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        },
      
    
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  menu: [
    {
      itemName: String,
      category: String,
      description: String,
      price: Number,
      img:
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
    },
  ],
  special_daymenu: [
    {
      category:String,
      itemName: String,
      description: String,
      price: Number,
      img:
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
      
    },
  ],
  offers: 
    {
      name: String,
      description: String,
      discount: Number,
      img:
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
      
    },
  
  openingHours: {
    Monday: {
      open: String,
      close: String,
    },
    Tuesday: {
      open: String,
      close: String,
    },
    Wednesday: {
      open: String,
      close: String,
    },
    Thursday: {
      open: String,
      close: String,
    },
    Friday: {
      open: String,
      close: String,
    },
    Saturday: {
      open: String,
      close: String,
    },
    Sunday: {
      open: String,
      close: String,
    },
  },

  gallery:{
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
      ]
  }
  ,
  contact: {
    phone: String,
    email: String,
    website: String,
    img:
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
  },
  created_at: {
    type: Date,
    default: Date.now,
  },

  city:{
    type:String,
    required: true,
  },

  followers:{
    type:Number,
    default:0,
  }
});

restaurantSchema.index({ 'address': '2dsphere' });
module.exports = mongoose.model('Restaurant', restaurantSchema);

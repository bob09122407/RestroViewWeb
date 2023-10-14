const mongoose = require('mongoose');
const validator =require("validator");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const crypto=require("crypto");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require: [true, "Please enter your name"],
        maxLength: [30, "Name should not exceed 30 characters"],
        minLength:[4, "Name should have more than 4 characters"],
    },
    email:{
        type:String,
        require: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },

    password:{
        type:String,
        require:[true, "Please enter your password" ],
        minLength:[7, "Password must be of 7 or more than 7 characters"],
        select: false,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});


userSchema.pre("save", async function (next) {
    //save karne se phele password ko convert kardo
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

  //JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  //compare Password
  userSchema.methods.comparePassword = async function (password) {
    //function ka use isliye kyuki ham log this ka use karna chahte hai
    return await bcrypt.compare(password, this.password);
  };
  
  //generating password reset token
  userSchema.methods.getResetPasswordToken = function () {
    //generating token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
   //hasing and adding reset password to userschema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
      this.resetPasswordExpire=Date.now() + 15*60*1000;
  
      return resetToken;
  };
  
  module.exports = mongoose.model("User", userSchema);
  
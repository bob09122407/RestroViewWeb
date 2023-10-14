const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsynError");
const jwt= require("jsonwebtoken");
const User= require("../models/userModel.js");

exports.isAuthenticatedUser=catchAsyncError(async (req, res, next)=>{
    const {token}= req.cookies;
    
     if(!token){
        return next(new ErrorHandler("Please login to excess this resource", 401));
     }

     const decodedData= jwt.verify(token, process.env.JWT_SECRET);
    req.user= await User.findById(decodedData.id);

    next();
});





//hamne jwt token use kiya hai jo bhi loging hoga uske liye if vo login nahi hoga then uska token bhi nahi milegaa
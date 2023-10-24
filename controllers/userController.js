const User = require("../models/userModel.js");
const ErrorHandler= require("../utils/errorhandler.js");
const catchAsyncError= require("../middleware/catchAsynError.js");
const sendToken= require("../utils/jwtToken.js");
const isAuthenticatedUser = require("../middleware/auth.js");

//regiter user with jwt token
exports.registerUser = catchAsyncError(async(req, res, next)=>{
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return next(new ErrorHandler("Please enter a valid name, email, and password", 400));
      }

    const user= await User.create({
    name,
    email,
    password,
   });
   sendToken(user, 200, res);
})


//login user

exports.loginUser = catchAsyncError(async(req, res, next)=>{
    const {email, password}= req.body;

    if(!email || ! password){
        return next(new ErrorHandler("Please enter the email and password", 201));
    }
    const user= await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("User not found", 401));
    }

    const isPasswordMatched=await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Please enter the valid password", 401));p
    }
    sendToken(user, 200, res);
});


//getuserdetails

exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    try {
      const userId = req.params.userId; // Assuming the user ID is provided in the route parameters
  
      // Check if the user ID is valid (you may want to validate it)
  
      // Fetch user details using the user ID
      const user = await User.findById(userId); // Replace 'User' with your User model
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // If the user is found, return the user details
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
  });
  


//update password
exports.updatePassword=catchAsyncError(async(req, res, next)=>{

    const user= await User.findById(req.user.id).select("+password");

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }    

    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Old password is incorrect", 400));
    }

    if(req.body.newPassword!=req.body.confirmPassword){
        return next( new ErrorHandler("confirm password and new password are not matched", 400));
    }
    user.password=req.body.newPassword;

await user.save();

sendToken(user, 200, res);

})

//logout
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie("validtoken", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });
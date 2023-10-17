const User = require("../models/userModel.js");
const ErrorHandler= require("../utils/errorhandler.js");
const catchAsyncError= require("../middleware/catchAsynError.js");
const sendToken= require("../utils/jwtToken.js");
const isAuthenticatedUser = require("../middleware/auth.js");

//regiter user with jwt token
exports.registerUser = catchAsyncError(async(req, res, next)=>{

    if (!name || !email || !password) {
        return next(new ErrorHandler("Please enter a valid name, email, and password", 400));
      }
      
    const {name, email, password} = req.body;

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

exports.getUserDetails=catchAsyncError(async(req, res, next)=>{

    if(!isAuthenticatedUser()){
        return res.status(401).json({success:false, message:"Unauthorized"});
    }

    try{
        if(!req.user){
            return res.status(404).json({success:false, message:"User not found"});
        }
        const user= req.user;

         res.status(200).json({
            success:true,
            user,
         })
    }
    catch{
        return res.status(500).json({success:false, message:"Intervnal server error"});
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
const express= require("express");
const {registerUser,loginUser,getUserDetails,updatePassword, logout}= require("../controllers/userController");
const router=express.Router();
const {isAuthenticatedUser} = require("../middleware/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/logout").get(isAuthenticatedUser, logout);
router.route("/password/updatePassword").put(isAuthenticatedUser, updatePassword);

module.exports=router;
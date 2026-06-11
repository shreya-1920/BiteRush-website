const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

// Auth Routes
router.post("/register", register);
router.post("/login", login);
router.get("/profile", getProfile);
router.get("/logout", logout);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);

module.exports = router;
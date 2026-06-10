const express = require ("express");//import express
const router = express.Router();//creates a mini router for authentication

//import controllers
const {
    register,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword
} = require("../controllers/authController");

//routes 
router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", getProfile);

router.post("/forgot-password",forgotPassword);

router.post("/reset-password",resetPassword);

module.exports = router;
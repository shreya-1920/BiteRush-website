const express = require("express"); //import express library

const app = express(); // create an express app

//converts json into js objects 
app.use(express.json());

//home route
app.get("/", (req, res) => {
    res.send("Backend Running");
});

//register api 
app.post("/api/auth/register", (req, res) => {
    const{name,email,password}= req.body;
     console.log("Register Request Received");
    console.log(req.body);

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: {
            name,
            email
        }
    });

});

// LOGIN API
app.post("/api/auth/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Login Request Received");
    console.log(req.body);

    res.status(200).json({
        success: true,
        message: "Login Successful",
        email
    });

});

// LOGOUT API
app.post("/api/auth/logout", (req, res) => {

    console.log("Logout Request Received");

    res.status(200).json({
        success: true,
        message: "Logout Successful"
    });

});



// GET CURRENT USER
app.get("/api/auth/me", (req, res) => {

    console.log("Get User Request Received");

    res.status(200).json({
        id: 1,
        name: "Shreya",
        email: "shreya@gmail.com"
    });

});






app.listen(5000, () => {
    console.log("Server running on port 5000");
});
const express = require("express"); //import express library

const app = express(); // create an express app

const authRoutes = require("./routes/authRoutes");

//converts json into js objects 
app.use(express.json());

app.use("/api/auth", authRoutes);

//home route
app.get("/", (req, res) => {
    res.send("Backend Running");
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
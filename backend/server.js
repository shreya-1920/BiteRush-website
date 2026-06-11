const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");

// Middleware FIRST
app.use(cors());
app.use(express.json());

// Routes AFTER middleware
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
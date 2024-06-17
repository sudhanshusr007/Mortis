require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

const port = process.env.PORT || 8000;
const mongoUri = process.env.connectionString;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;


const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello from Mortis Team");
});

app.get("/protected", authenticateToken, (req, res) => {
  res.send("This is a protected route");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

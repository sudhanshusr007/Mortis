require("dotenv").config();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");
const User = require("./models/user.model");
const { connect } = require('./connect');
const { app } = require('./app');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

connect();
// Routes
app.get("/", (req, res) => {
  res.send("Hello from Mortis Team");
});

// Error handling middleware (example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;

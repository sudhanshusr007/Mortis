// Require dotenv and configure it to load environment variables
require("dotenv").config();

const mongoose = require("mongoose");

// Function to connect to MongoDB
const connect = async () => {
  try {
    // Retrieve MongoDB URI from environment variables
    const uri = process.env.MONGO_URI;

    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1); // Exit the process if connection fails
  }
};

// Export the connect function so that it can be used elsewhere
module.exports = {
  connect,
};

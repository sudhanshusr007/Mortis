// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { messageRouter } = require('./routers/message.router');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/', // Ensure this directory exists and is writable
  })
);

// CORS Configuration
app.use(
  cors({
    origin: [process.env.USERS_URL, process.env.ADMIN_URL],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  })
);

// Routes


// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports ={app}

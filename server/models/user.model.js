const mongoose = require('mongoose');
const validator = require('validator'); // Use require for importing validator

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Provide a valid email address']
    },
    mobileNumber: {
        type: String, // Change type to String
        required: true,
        minLength: [10, 'Provide a valid mobile number'], // Corrected typo in minLength
        maxLength: [10, 'Provide a valid mobile number'] // Corrected typo in maxLength
    },
    password: {
        type: String,
        required: true,
        // Example validator for password, replace with appropriate validation logic
        validate: [(value) => value.length >= 6, 'Password must be at least 6 characters long']
    }
});

module.exports = mongoose.model("User", userSchema);

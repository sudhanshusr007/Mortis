const mongoose = require('mongoose');
const validator = require('validator'); // Import validator for email validation

const Schema = mongoose.Schema;

const messageSchema = new Schema({
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
        validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    mobileNumber: {
        type: String,
        required: true,
        minLength: [10, 'Mobile number must be 10 digits long'],
        maxLength: [10, 'Mobile number must be 10 digits long'],
    },
    message: {
        type: String,
        required: true,
        minLength: [10, 'Message must be at least 10 characters long'],
    },
});

module.exports = mongoose.model('Message', messageSchema);

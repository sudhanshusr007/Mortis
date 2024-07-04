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
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v); // Custom validator for 10-digit mobile number
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    message: {
        type: String,
        required: true,
        minlength: [10, 'Message must be at least 10 characters long'],
    },
});

// Export the Mongoose model based on the schema
// Change to ES modules syntax
export const Message = mongoose.model('Message', messageSchema);


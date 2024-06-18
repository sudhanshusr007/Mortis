const { Message } = require("../models/message.model");

const sendMessage = async (req, res, next) => {
    const { firstName, lastName, email, mobileNumber, message } = req.body;
    
    // Check if any required field is missing
    if (!firstName || !lastName || !email || !mobileNumber || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields in the form',
        });
    }

    try {
        // Create the message in the database
        const newMessage = await Message.create({ firstName, lastName, email, mobileNumber, message });

        // Send success response
        res.status(200).json({
            success: true,
            message: 'Message sent successfully',
            data: newMessage, // Optionally send the created message data back to the client
        });
    } catch (err) {
        // Check for validation errors (e.g., mongoose schema validation)
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: err.message,
            });
        }

        // Handle other errors
        console.error('Error sending message:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to send message',
        });
    }
};

module.exports = {
    sendMessage,
};

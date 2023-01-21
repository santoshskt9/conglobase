var mongoose = require('mongoose');

const subscribeModel = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
            match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid Email"],
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("subscribe", subscribeModel);
const mongoose = require("mongoose");

const user_schema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the name of the user."]
        },
        email: {
            type: String,
            required: [true, "Please add the email of the user."],
            unique: [true,"Email address already exists."],
        },
        password: {
            type: String,
            required: [true, "Enter the passowrd."]
        }
    },
    {
        timestamps: true, 
    }
);

module.exports = mongoose.model("User", user_schema);
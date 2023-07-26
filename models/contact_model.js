const mongoose = require("mongoose");

const contact_schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the name of the contact."],
        },

        email: {
            type: String,
            required: [true, "Please add the email of the contact."],
        },

        phone: {
            type: String,
            required: [true, "Please add the phone number of the contact."],
        },
    },
    {
        timestamps:true ,
    }
);
module.exports = mongoose.model("Contact", contact_schema)
const asyncHandler = require("express-async-handler");

// Get all contacts
//route GET /api/contacts
//access public
const getContacts = asyncHandler(async(req, res)  => {
    res.status(200).json({ message: `Get all contacts` });
});

// create contact
// route POST /api/contacts
// access public

const createContact = asyncHandler(async(req, res) =>  {
    console.log(req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are compulsory");
    }
    res.status(201).json({ message: `Create contact`})
});

// Get individual contact
// route GET /api/contacts/:id
// access public

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message:`Get contact for id ${req.params.id}` })
});

//update contact
//route PUT /api/contacts
//access public
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`  });
});

// delete contact
// route DELETE /api/contacts/:id
// access public
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`})
});




module.exports = {getContacts, createContact, getContact ,updateContact, deleteContact}
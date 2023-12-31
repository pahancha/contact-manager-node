const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact_model");



// Get all contacts
//route GET /api/contacts
//access private
const getContacts = asyncHandler(async(req, res)  => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

// create contact
// route POST /api/contacts
// access private

const createContact = asyncHandler(async(req, res) =>  {
    console.log(req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are compulsory");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact)
});

// Get individual contact
// route GET /api/contacts/:id
// access private

const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
});

//update contact
//route PUT /api/contacts
//access private
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found.");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Permission denied: Only authorized user can update contacts");
    }


    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    res.status(200).json(updatedContact);
});

// delete contact
// route DELETE /api/contacts/:id
// access private
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found.");
    }
    if(contact.user.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Permission Denied. User do not have the right to delete the contact.");
    }

    await Contact.deleteOne({_id: req.params.id});  
    res.status(200).json(contact)
});




module.exports = {getContacts, createContact, getContact ,updateContact, deleteContact}
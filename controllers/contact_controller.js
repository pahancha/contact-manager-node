// Get all contacts
//route GET /api/contacts
//access public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all the contacts." });
}


const createContact = (req, res) => {
    res.status(201).json({ message: "Create contact" });
};


module.exports = {getContact}
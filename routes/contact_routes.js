const express = require("express");
const router = express.Router();

const {getContacts, createContact, getContact, updateContact, deleteContact} = require("./../controllers/contact_controller")

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(this.delete);
module.exports = router;

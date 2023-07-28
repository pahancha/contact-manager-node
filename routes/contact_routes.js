const express = require("express");
const router = express.Router();

const {getContacts, createContact, getContact, updateContact, deleteContact} = require("./../controllers/contact_controller")

const validateToken = require("../middleware/validate_token_handler");
router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
module.exports = router;

const express = require("express");

const router = express.Router();

router.post("/register", (req, res)=> {
    res.json({ message: "Register User." });
});

router.post("/login", (req, res) => {
    res.json({ message: "Login user." });
});

router.get("/current", (req, res) => {
    res.json({ Message: "Current user."});
})



module.exports = router;
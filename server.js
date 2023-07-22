const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;


app.get("/api/contacts", (req, res) => {
    res.json(200).json({message: "All the contacts."});
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
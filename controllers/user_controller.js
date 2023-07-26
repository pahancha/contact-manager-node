const asyncHandler = require("express-async-handler");

// Regiser a user
// POST /api/users/register
// access - public

const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register a user." })
});

// login user
// POST /api/users/login
// access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({ message: "Login user." });
});

// current info
// POST /api/users/current
// access private

const currentUser = asyncHandler(async (req,res)=> {
    res.json({ message:"current user information."})
});

module.exports = { registerUser}
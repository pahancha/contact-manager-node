const asyncHandler = require("express-async-handler");
const User = require("../models/user_model");
const bcrypt = require("bcrypt");

// Regiser a user
// POST /api/users/register
// access - public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered.");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password" + hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);

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

module.exports = { registerUser, loginUser, currentUser }
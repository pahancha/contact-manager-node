const asyncHandler = require("express-async-handler");
const User = require("../models/user_model");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { use } = require("../routes/contact_routes");

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
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Email and Password are mandatory.");
    }
    const user = await User.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.name,
                email: user.email,
                id: user.id
            },
        },
        process.env.ACCESS_TOKEN,
        {expiresIn: "1m"}
        );
        console.log(accessToken);
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Credentials are not valid.");
    }
});

// current info
// POST /api/users/current
// access private

const currentUser = asyncHandler(async (req,res)=> {
    res.json({ message:"current user information."})
});

module.exports = { registerUser, loginUser, currentUser }
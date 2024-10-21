const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.createUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        user = new User({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        });
        await user.save();
        res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error creating user" });
    }
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Password does not match"});
        }
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {expiresIn: "1h"});

        res.status(201).json({msg:"User login successfully", token});
    } catch (error) {
        res.status(500).json({ msg: "Error logining user" });
    }
}

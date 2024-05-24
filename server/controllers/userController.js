const express = require('express');
const User = require('../models/authSchema');
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ mag: "User already exist" });
        }

        // Creating new User
        user = new User({
            name,
            email,
            password,
        });
        await user.save();
        res.send('Registered Successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

module.exports = {
    registerUser
}
const express = require('express');
const {User} = require('../models/authSchema');
const { RegisterUser } = require('../config/types');



// Register Controller
const registerUser = async (req, res) => {
    const details = req.body;
    const parsedDetails = RegisterUser.safeParse(details);
    if(!parsedDetails.success) {
        const errors = parsedDetails.error.errors.map(err => ({ field: err.path[0], message: err.message }));
        res.status(400).json({
            errors: errors
        })
        return;
    }

    try {
        let user = await User.findOne({ email: details.email });
        if (user) {
            return res.status(400).json({ msg: "User already exist" });
        }

        // Creating new User
        user = new User({
            name: details.name,
            email: details.email,
            password: details.password,
        });
        await user.save();
        res.status(200).json({msg: "Registered Successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

module.exports = {
    registerUser
}




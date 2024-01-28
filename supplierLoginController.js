
//import User from '../components/models/FPOSchema';  // Assuming you have a User model
const User = require("../models/userSupplier");
// Import necessary modules and define your User model
//import express from 'express';
const express = require('express');
//const router = express.Router();
const updatedAt = new Date().toISOString();
console.log("In supplierLoginController");
exports.loginSupplier = async (req, res) => {

    // Extract user data from the request body
    const {
        userId,
        password
    } = req.body; // Adjust the fields as per your schema

    console.log(userId);
    console.log(req.body);

    // Validate user for login
    try {
        // Find a Supplier with the provided user Id
        const user = await User.findOne({ userId });

        if (!user) {
            console.log("inside Supplier not found");
            // User not found
            return res.status(404).json({ message: 'Supplier not found' });
        }

        // Check if the password matches
        if (user.password === password) {
            console.log("Login successful");
            // Password matches, user is authenticated
            return res.status(200).json({ message: 'Login successful' });
        } else {
            console.log("Incorrect password");
            // Password does not match
            return res.status(401).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }

};




//import User from '../components/models/FPOSchema';  // Assuming you have a User model
const User = require("../models/user");
// Import necessary modules and define your User model
//import express from 'express';
const express = require('express');
//const router = express.Router();
const updatedAt = new Date().toISOString();
console.log("In UserLoginController");
exports.loginUser = async (req, res) => {

  // Extract user data from the request body
  const {
    fpoRegistrationNum,
    password
  } = req.body; // Adjust the fields as per your schema

  console.log(fpoRegistrationNum);
  console.log(req.body);

  // Validate user for login
  try {
    // Find a user with the provided username
    const user = await User.findOne({ fpoRegistrationNum });

    if (!user) {
      console.log("inside user not found");
      // User not found
      return res.status(404).json({ message: 'User not found' });
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











//import User from '../components/models/FPOSchema';  // Assuming you have a User model
//const User = require("../models/user");
const User = require("../models/userOfftaker");
// Import necessary modules and define your User model
//import express from 'express';
const express = require('express');
//const router = express.Router();
const updatedAt = new Date().toISOString();
console.log("in usercontrollerOfftaker");
exports.createOfftaker = async (req, res) => {

    // Extract Offtaker data from the request body
    const {
        firstName,
        email,
        contactNumber,
        userId,
        altContactNumber,
        contactPerson,
        address,
        selectedCountry,
        selectedState,
        selectedDistrict,
        subdistrict,
        selectedTradeSpeciality,
        pin,
        PAN,
        GST,
        selectedAgreement,
        portal,
        bankName,
        bankBranch,
        ifsc,
        upi,
        //file
        password,
        uniqueOfftakerId
    } = req.body; // Adjust the fields as per your schema

    console.log(firstName);
    console.log(email);
    console.log(selectedCountry);
    console.log(selectedState);
    console.log(req.body);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let generatedOfftakerId = '';
    const idLength = 8; // You can adjust the length as needed


    while (generatedOfftakerId.length < idLength) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedOfftakerId += characters[randomIndex];
    }

    generatedOfftakerId = firstName + generatedOfftakerId;
    console.log("Generated Offtaker ID is :");
    console.log(generatedOfftakerId);

    console.log("before creating new Offtaker, password:");
    //console.log(password);
    // Create a new user document using the User model
    try {
        const newUser = new User({
            firstName: firstName,
            email: email,
            //selectedDate: selectedDate,
            userId: userId,
            contactNumber: contactNumber,
            altContactNumber: altContactNumber,
            contactPerson: contactPerson,
            address: address,
            selectedCountry: selectedCountry,
            selectedState: selectedState,
            selectedDistrict: selectedDistrict,
            subdistrict: subdistrict,
            selectedTradeSpeciality: selectedTradeSpeciality,
            pin: pin,
            PAN: PAN,
            GST: GST,
            selectedAgreement: selectedAgreement,
            portal: portal,
            password: password,
            /*file: {
              filename: String,
              contentType: String,
              data: Buffer // Using Node.js Buffer for binary data
            },*/
            bank: {
                bankName: bankName,
                bankBranch: bankBranch,
                //accountNumber: accountNumber, // Bank Account
                ifsc: ifsc, // IFSC Code
                upi: upi // UPI Id
            },
            uniqueOfftakerId: generatedOfftakerId,
            updatedAt: updatedAt
        });

        // Validate userId from database
        try {
            // Find a offtaker with the provided offtaker name
            const user = await User.findOne({ userId });

            if (user) {
                console.log("UserID Already exists");
                return res.status(404).json({ message: 'User ID already exists' });
            }

            // Check if the Unique Offtaker ID already exists
            if (uniqueOfftakerId === generatedOfftakerId) {
                console.log("Unique Offatker ID Already exists");
                return res.status(404).json({ message: 'Unique Offtaker ID already exists' });
            }
            //else {
            //   console.log("New User will be created");
            // Unique Offtaker ID does not exist
            //    return res.status(200).json({ message: 'New User will be created' });

            //}

        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
        }
        console.log("in usercontrollerOfftaker before creating new Offtaker");
        await newUser.save(); // Save the user to the database
        console.log("after creating new Offtaker");
        res.redirect('/users'); // Redirect to a success page or user list
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
};








// JavaScript source code

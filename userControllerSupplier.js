
//import User from '../components/models/FPOSchema';  // Assuming you have a User model
//const User = require("../models/user");
const User = require("../models/userSupplier");
//const userId = require("../models/userSupplier");
// Import necessary modules and define your User model
//import express from 'express';
const express = require('express');
//const router = express.Router();
const updatedAt = new Date().toISOString();
console.log("in usercontrollersupplier");
exports.createSupplier = async (req, res) => {

  // Extract user data from the request body
  const {
    firstName,
    selectedDate,
    userId,
    email,
    contactNumber,
    altContactNumber,
    contactPerson,
    address,
    selectedCountry,
    selectedState,
    selectedDistrict,
    subdistrict,
    selectedLicense,
    selectedTradeSpeciality,
    pin,
    PAN,
    GST,
    selectedAgreement,
    //portal,
    bankName,
    bankBranch,
    ifsc,
    upi,
    password,
    uniqueSupplierId
  } = req.body; // Adjust the fields as per your schema

  console.log(firstName);
  console.log(email);
  console.log(selectedDate);
  console.log(selectedCountry);
  console.log(selectedState);
  console.log(req.body);

  console.log("before creating new user, password:");
  console.log(password);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let generatedSupplierId = '';
  const idLength = 8; // You can adjust the length as needed


  while (generatedSupplierId.length < idLength) {
     const randomIndex = Math.floor(Math.random() * characters.length);
     generatedSupplierId += characters[randomIndex];
  }

  generatedSupplierId = firstName + generatedSupplierId;
  console.log("Generated Supplier ID is :");
  console.log(generatedSupplierId);

  // Create a new user document using the User model
  try {
    const newUser = new User({
      firstName: firstName,
      email: email,
      selectedDate: selectedDate,
      userId: userId,
      contactNumber: contactNumber,
      altContactNumber: altContactNumber,
      contactPerson: contactPerson,
      address: address,
      selectedCountry: selectedCountry,
      selectedState: selectedState,
      selectedDistrict: selectedDistrict,
      subdistrict: subdistrict,
      selectedLicense: selectedLicense,
      selectedTradeSpeciality: selectedTradeSpeciality,
      pin: pin,
      PAN: PAN,
      GST: GST,
      selectedAgreement: selectedAgreement,
      //portal: portal,
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
      uniqueSupplierId: generatedSupplierId,
      updatedAt: updatedAt
    });

      // Validate userId from database
      try {
          // Find a supplier with the provided supplier name
          const user = await User.findOne({ userId });

          if (user) {
              console.log("UserID Already exists");
              return res.status(404).json({ message: 'User ID already exists' });
          }
          
          // Check if the Unique Supplier ID already exists
          if (uniqueSupplierId === generatedSupplierId) {
              console.log("Unique Supplier ID Already exists");
              return res.status(404).json({ message: 'Unique Supplier ID already exists' });
          }
          //else {
          //   console.log("New User will be created");
              // Unique Supplier ID does not exist
          //    return res.status(200).json({ message: 'New User will be created' });

          //}

      } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ message: 'Server error' });
      }
    
    console.log("in usercontrollersupplier before creating new user");
    await newUser.save(); // Save the user to the database
    console.log("after creating new user");
    res.redirect('/users'); // Redirect to a success page or user list
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};










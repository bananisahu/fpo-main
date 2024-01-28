
//import User from '../components/models/FPOSchema';  // Assuming you have a User model
const User = require("../models/user");
// Import necessary modules and define your User model
//import express from 'express';
const express = require('express');
//const router = express.Router();
const updatedAt = new Date().toISOString();
console.log("In UserController.js");
exports.createUser = async (req, res) => {

  // Extract user data from the request body
  const {
    firstName,
    year,
    email,
    cin,
    address,
    pin,
    selectedCountry,
    selectedState,
    selectedDistrict,
    subdistrict,
    block,
    contactPerson,
    contactNumber,
    PAN,
    GST,
    selectedAgreement,
    portal,
    acres,
    revenue,
    output_sale,
    input_sale,
    milk_product,
    meat_fishery,
    honey,
    ntfp,
    value_add,
    others,
    produce1,
    produce1_percent,
    produce2,
    produce2_percent,
    produce3,
    produce3_percent,
    produce_other__percent,
    produce_other,
    members,
    womenMembers,
    altContactNumber,
    bankName,
    bankBranch,
    accountNumber,
    ifsc,
    upi,
    selectedWHCapacity,
    selectedColdStorageCapacity,
    any_other_infra,
    password
  } = req.body; // Adjust the fields as per your schema

  console.log(firstName);
  console.log(email);
  console.log(cin);
  console.log(year);
  console.log(req.body);

  // Create a new user document using the User model
  try {
    const newUser = new User({
      firstName: firstName,
      email: email,
      fpoRegistrationNum: cin,
      year: year,
      contactNumber: contactNumber,
      altContactNumber: altContactNumber,
      contactPerson: contactPerson,
      address: address,
      selectedCountry: selectedCountry,
      selectedState: selectedState,
      selectedDistrict: selectedDistrict,
      subdistrict: subdistrict,
      block: block,
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
        accountNumber: accountNumber, // Bank Account
        ifsc: ifsc, // IFSC Code
        upi: upi // UPI Id
      },
      fpoDetails: {
        acres: acres,
        revenue: revenue,
        input_sale: input_sale, // Input sale percentage
        output_sale: output_sale, // Output sale percentage
        members: members,
        womenMembers: womenMembers,
        milk_product: milk_product, // Milk Product sale percentage
        honey: honey, // Honey sale percentage
        meat_fishery: meat_fishery, // Meat & Fishery sale percentage
        ntfp: ntfp, // NTFP sale percentage
        value_add: value_add, // Value Add sale percentage
        others: others, // Other sale percentage    
      },
      infraDetails: {
        selectedWHCapacity: selectedWHCapacity,
        selectedColdStorageCapacity: selectedColdStorageCapacity,
        any_other_infra: any_other_infra, // Other infrastructure  
      },
      produceDetails: {
        produce1: produce1,
        produce2: produce2,
        produce3: produce3, // Produce3
        produce_other: produce_other, // Other Produce
        produce1_percent: produce1_percent,
        produce2_percent: produce2_percent,
        produce3_percent: produce3_percent,
        produce_other__percent: produce_other__percent, // Other Produce
      },
      updatedAt: updatedAt
    });

    await newUser.save(); // Save the user to the database

    res.redirect('/users'); // Redirect to a success page or user list
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};










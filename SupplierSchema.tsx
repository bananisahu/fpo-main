import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../header.module.css';
import { Form as BootstrapForm, Col } from 'react-bootstrap';
import { useEffect } from 'react';
console.log("In SupplierSchema)");

// Import the necessary modules
import mongoose from 'mongoose';

// Define the User schema
const SupplierSchema = new mongoose.Schema({
  //id: Number,
  //customerId: String, // Unique customer ID
  name: {
    type: String,
    required: true,
  },
  yearEstablished: Number,
  //supplierRegistrationNum: String,
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    lowercase: true, // Converts email to lowercase before saving
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  altContactNumber: Number,
  contactPerson: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: String,
  subdistrict: String,
  //block: String,
  pin: {
    type: Number,
    required: true,
  },
  PAN: {
    type: Number,
    required: true,
  },
  GSTN: {
    type: String,
    required: true,
  },
  inputLicense: {
    type: String,
    required: true,
  },
  tradeSpeciality: {
    type: String,
    required: true,
  },
  consent: {
    type: String,
    required: true,
  },
  //portal: String,
  file: {
    filename: String,
    contentType: String,
    data: Buffer // Using Node.js Buffer for binary data
  },
  bank: {
    bankName: String,
    bankBranch: String,
    //accountNumber: String, // Bank Account
    ifsc: String, // IFSC Code
    upi: String // UPI Id
  },
  createdAt: Date,
  updatedAt: Date

  // Add other user properties as needed
});

// Create the User model
const Supplier = mongoose.model('User', SupplierSchema);

// Export the User model for use in other parts of your application
module.exports = Supplier;


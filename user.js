// Import the necessary modules
//import mongoose from 'mongoose';
//const mongoose = require('../../db/db'); // Import the database connection
//import mongoose from '../../db/db';
const mongoose = require('mongoose');
console.log("In User.js")

// Define the User schema
const fpoSchema = new mongoose.Schema({
  cin: Number,
  firstName: {
    type: String,
    required: true,
  },
  year: Number,
  fpoRegistrationNum: {
    type: String,
    required: true,
  },
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
  selectedCountry: {
    type: String,
    required: true,
  },
  selectedState: {
    type: String,
    required: true,
  },
  selectedDistrict: String,
  subdistrict: String,
  block: String,
  pin: {
    type: Number,
    required: true,
  },
  PAN: {
    type: String,
    required: true,
  },
  GST: {
    type: String,
    required: true,
  },
  selectedAgreement: {
    type: String,
    required: true,
  },
  portal: String,
  password: {
    type: String,
    required: true,
  },
  /*file: {
    filename: String,
    contentType: String,
    data: Buffer // Using Node.js Buffer for binary data
  },*/
  bank: {
    bankName: String,
    bankBranch: String,
    accountNumber: String, // Bank Account
    ifsc: String, // IFSC Code
    upi: String // UPI Id
  },
  fpoDetails: {
    acres: Number,
    revenue: Number,
    input_sale: Number, // Input sale percentage
    output_sale: Number, // Output sale percentage
    members: Number,
    womenMembers: Number,
    milk_product: Number, // Milk Product sale percentage
    honey: Number, // Honey sale percentage
    meat_fishery: Number, // Meat & Fishery sale percentage
    ntfp: Number, // NTFP sale percentage
    value_add: Number, // Value Add sale percentage
    others: Number, // Other sale percentage    
  },
  infraDetails: {
    selectedWHCapacity: String,
    selectedColdStorageCapacity: String,
    any_other_infra: String, // Other infrastructure  
  },
  produceDetails: {
    produce1: String,
    produce2: String,
    produce3: String, // Produce3
    produce_other: String, // Other Produce
    produce1_percent: Number,
    produce2_percent: Number,
    produce3_percent: Number,
    produce_other__percent: Number, // Other Produce
  },

  updatedAt: Date

  // Add other user properties as needed
});

// Create the User model
const User = mongoose.model('user', fpoSchema);

// Export the User model for use in other parts of your application
//module.exports = User;
//export default User;
module.exports = User;


// Import the necessary modules
//import mongoose from 'mongoose';
//const mongoose = require('../../db/db'); // Import the database connection
//import mongoose from '../../db/db';
const mongoose = require('mongoose');
console.log("in userOfftaker model");

// Define the Supplier schema
const offtakerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    userId: {
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
    selectedTradeSpeciality: {
        type: Array,
        required: true,
    },
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
        //accountNumber: String, // Bank Account
        ifsc: String, // IFSC Code
        upi: String // UPI Id
    },
    uniqueOfftakerId: String,
    updatedAt: Date

    // Add other user properties as needed
});
console.log("In modeluserOfftaker");
//console.log(OfftakerSchema);
// Create the User model
const Offtaker = mongoose.model('offtaker', offtakerSchema);
console.log("Offtaker model created");
// Export the Supplier model for use in other parts of your application
//module.exports = User;
//export default User;
module.exports = Offtaker;

// JavaScript source code

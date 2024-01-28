// Import the necessary modules
//import mongoose from 'mongoose';
//const mongoose = require('../../db/db'); // Import the database connection
//import mongoose from '../../db/db';
const mongoose = require('mongoose');
//import validator from 'validator';
//const validator = require('validator');
console.log("in userSupplier model");

// Define the Supplier schema
const supplierSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  selectedDate: Date,
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique
    lowercase: true, // Converts email to lowercase before saving
    //validate: [isEmail, 'invalid email']
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
  selectedLicense: {
    type: String,
    required: true,
  },
  selectedTradeSpeciality: {
    type: String,
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
  //portal: String,
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
  uniqueSupplierId: String,
  updatedAt: Date

  // Add other user properties as needed
});
console.log("In modeluserSupplier");
console.log("supplierSchema:")
console.log(supplierSchema);
// Create the User model
const Supplier = mongoose.model('supplier', supplierSchema);
console.log("Supplier model created");
// Export the Supplier model for use in other parts of your application
//module.exports = User;
//export default User;
module.exports = Supplier;


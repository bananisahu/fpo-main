const express = require('express');
const cors = require('cors'); // Import the cors middleware
const mongoose = require('mongoose');
const twilio = require('twilio');
const userLoginController = require('./controllers/userLoginController');
const supplierLoginController = require('./controllers/supplierLoginController');
const offtakerLoginController = require('./controllers/offtakerLoginController');
const userController = require('./controllers/userController');
const forgotPassController = require('./controllers/forgotPassController');
//const forgotPassController = require('./controllers/forgotPassController');
console.log("in server.js before calling usercontrollersupplier");
const userControllerSupplier = require('./controllers/userControllerSupplier');
const userControllerOfftaker = require('./controllers/userControllerOfftaker');


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // Middleware to parse JSON data

// Enable CORS for a specific origin (replace 'http://localhost:3000' with your React app's origin)
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/vriddhi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Configure Twilio with your account SID and authentication token
const accountSid = 'AC447966d0a067746097734682af24c102';
const authToken = 'e2a04ac17dc6698c0fa1ff1999a287fa';
const client = new twilio(accountSid, authToken);

//app.set('view engine', 'ejs'); // Set the view engine to EJS (not needed since rendering happening with react tsx)
app.use(express.urlencoded({ extended: true })); // Parse form data

app.get('/', (req, res) => {
    res.send('Welcome to the user registration app');
});
console.log("in server.js before creating user");
//app.get('/users', userController.getAllUsers); // List all users
//app.get('/users/register', userController.getRegistrationForm); // Show registration form
app.post('/users/login', userLoginController.loginUser); // Login user
app.post('/users/loginSupplier', supplierLoginController.loginSupplier); // Login Supplier
app.post('/users/loginOfftaker', offtakerLoginController.loginOfftaker); // Login Offtaker
app.post('/users/forgotPass', forgotPassController.forgotPass); // Login user
app.post('/users/create', userController.createUser); // Create FPO
app.post('/users/createSupplier', userControllerSupplier.createSupplier); //create new supplier
app.post('/users/createOfftaker', userControllerOfftaker.createOfftaker); //create new offtaker
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

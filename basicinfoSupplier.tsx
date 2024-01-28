import React, { useState , useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../header.module.css';
import dp1Insta from "../../images/instagram.jpeg"
import dp1Face from "../../images/facebook.png"
import dp1Linked from "../../images/LinkedIn.png"
import dp1Twit from "../../images/Twitter.png"
import { Form as BootstrapForm, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Container, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { Right } from 'react-bootstrap/lib/Media';
//import React, { useEffect } from 'react';
//import CapitalLetter from "./CapitalLetter";


//const validator = require('validator');

console.log("in basicinfosupplier");

const Form: React.FC = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        //selectedDate: '',
        userId: '',
        email: '',
        contactNumber: '',
        altContactNumber: '',
        contactPerson: '',
        address: '',
        //selectedCountry: '',
        //selectedState: '',
        //selectedDistrict: '',
        subDistrict: '',
        //selectedlicense: '',
        //selectedTradeSpeciality: '',
        pin: '',
        PAN: '',
        GST: '',
        //selectedAgreement: '',
        bankName: '',
        bankBranch: '',
        ifsc: '',
        upi: ''
        //validationFlag: true
        //data: '',
        // Add other form fields here
    });

    const [errors, setErrors] = useState({
        email: ''
    });

    const nextPage = () => {
        setPage(page + 1);

    };

    const previousPage = () => {
        setPage(page - 1);
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    //Setting the validation Flag in session storage

    //sessionStorage.setItem('validationFlag', 'true');

    // Get the validation flag from sessionStorage
    //const validationFlag = sessionStorage.getItem('validationFlag');

    const [isValidData, setValidData] = useState(true);

    //Email syntax validation 

    const [isValidEmail, setIsValidEmail] = useState(true);

    const [email, setEmail] = useState('');

    const handleEmailChange = (event: any) => {

        const inputEmail = event.target.value;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
        setEmail(inputEmail);

        //this code is not working

        //if (!isValidEmail) {
            // const handleValidation = () => {
            // Set the flag to false when email syntax is incorrect
            //setValidData(false);
        //}
        //above code is not working

    };

    //if (validationFlag === 'true') {
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // Handle form submission logic here
            // You can access the form data using the 'formData' state variable
            // For example, you can make an API request or perform validation

            //const validationErrors = validateFormData(formData);
            //setErrors(validationErrors);


            // If there are no errors, proceed with your logic (e.g., API call)
            //if (!hasErrors(validationErrors)) {
            // Your logic here (e.g., API call)


            console.log("before post in basicinfosupplier");
            const formDataWithAllParameters = {
                ...formData,
                selectedDate,
                selectedCountry,
                selectedState,
                selectedDistrict,
                selectedAgreement,
                selectedLicense,
                selectedTradeSpeciality,
                password,
                email,
                PAN,
                GST,
                contactNumber,
                altContactNumber,
                pin
            };

            

            if (isValidData) {
                try {
                    console.log("In BasicinfoSupplier");
                    const response = await fetch('http://localhost:3001/users/createSupplier', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formDataWithAllParameters),
                    });
                    // Handle the response here (e.g., show success message)
                } catch (error) {
                    console.error('Error:', error);
                }

            }
            // After form submission, you can navigate to another page
            router.push('/success');
        //}
    };

    //const validateFormData = (data) => {
        // Implement your validation logic here
        //const errors = {};
        //if (!data.isValidEmail) {
        //    errors.email = 'Email ID is required';
        //}
        //if (!data.password) {
        //    errors.password = 'Password is required';
        //}
        // Add more validation rules as needed
        //return errors;
    //};

    //const hasErrors = (errorObject) => {
    //    return Object.values(errorObject).some((error) => error !== '');
    //};

    const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        // Event handling logic goes here
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

    };

    const reactForm = BootstrapForm;
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedLicense, setSelectedLicense] = useState('');
    const [selectedTradeSpeciality, setSelectedTradeSpeciality] = useState('');
    const [selectedAgreement, setSelectedAgreement] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const countries = [
        { value: 'India', label: 'India' },
        { value: 'Canada', label: 'Canada' },
        // Add more country options
    ];

    const states: { [key: string]: { value: string; label: string }[] } = {
        India: [
            { value: 'AP', label: 'Andhra Pradesh' },
            { value: 'AR', label: 'Arunachal Pradesh' },
            { value: 'AS', label: 'Assam' },
            { value: 'BR', label: 'Bihar' },
            { value: 'CT', label: 'Chhattisgarh' },
            { value: 'GA', label: 'Goa' },
            { value: 'GJ', label: 'Gujarat' },
            { value: 'HR', label: 'Haryana' },
            { value: 'HP', label: 'Himachal Pradesh' },
            { value: 'JH', label: 'Jharkhand' },
            { value: 'KA', label: 'Karnataka' },
            { value: 'KL', label: 'Kerala' },
            { value: 'MP', label: 'Madhya Pradesh' },
            { value: 'MH', label: 'Maharashtra' },
            { value: 'MN', label: 'Manipur' },
            { value: 'ML', label: 'Meghalaya' },
            { value: 'MZ', label: 'Mizoram' },
            { value: 'NL', label: 'Nagaland' },
            { value: 'OR', label: 'Odisha' },
            { value: 'PB', label: 'Punjab' },
            { value: 'RJ', label: 'Rajasthan' },
            { value: 'SK', label: 'Sikkim' },
            { value: 'TN', label: 'Tamil Nadu' },
            { value: 'TG', label: 'Telangana' },
            { value: 'TR', label: 'Tripura' },
            { value: 'UP', label: 'Uttar Pradesh' },
            { value: 'UT', label: 'Uttarakhand' },
            { value: 'WB', label: 'West Bengal' },
            { value: 'AN', label: 'Andaman and Nicobar Islands' },
            { value: 'CH', label: 'Chandigarh' },
            { value: 'DN', label: 'Dadra and Nagar Haveli' },
            { value: 'DD', label: 'Daman and Diu' },
            { value: 'LD', label: 'Lakshadweep' },
            { value: 'DL', label: 'Delhi' },
            { value: 'PY', label: 'Puducherry' }
            // Add more state options for USA
        ],
        Canada: [
            { value: 'Ontario', label: 'Ontario' },
            { value: 'Quebec', label: 'Quebec' },
            // Add more state options for Canada
        ],
        // Add more country-specific state options
    };

    const district: { [key: string]: { value: string; label: string }[] } = {
        KA: [
            { value: 'BAG', label: 'Bagalkot' },
            { value: 'BAN', label: 'Bengaluru Rural' },

            // Add more state options for USA
        ],
        AR: [
            { value: 'Ontario', label: 'Ontario' },
            { value: 'Quebec', label: 'Quebec' },
            // Add more state options for Canada
        ],
        // Add more country-specific state options
    };

    const handleCountryChange = (event: any) => {
        const selectedCountryValue = event.target.value;
        setSelectedCountry(selectedCountryValue);
        setSelectedState(''); // Reset the selected state when the country changes
    };

    const handleStateChange = (event: any) => {
        const selectedStateValue = event.target.value;
        setSelectedState(selectedStateValue);
        setSelectedDistrict(''); // Reset the selected district when the country changes
    };

    const handleDistrictChange = (event: any) => {
        const selectedDistrictValue = event.target.value;
        setSelectedDistrict(selectedDistrictValue);
    };

    const handleSelectDrop = (event: any) => {
        const selectedLicenseValue = event.target.value;
        setSelectedLicense(selectedLicenseValue);
    };

    const handleSelectTradeSpeciality = (event: any) => {
        const selectedTradeSpecialityValue = event.target.value;
        setSelectedTradeSpeciality(selectedTradeSpecialityValue);
    };

    const handleSelectAgreement = (event: any) => {
        const selectedAgreementValue = event.target.value;
        setSelectedAgreement(selectedAgreementValue);
    };
    const handlePasswordChange = (e: any) => {
        const { value } = e.target;
        setPassword(value);
    };
    

    //PAN syntax validation

    const [isValidPAN, setIsValidPAN] = useState(true);

    const [PAN, setPAN] = useState('');

    const handlePANChange = (event: any) => {

        const inputPAN = event.target.value;

        const panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
       
        const isValid = panRegex.test(inputPAN);
        setIsValidPAN(isValid);
        setPAN(inputPAN);
    };


    //GST syntax validation

    const [isValidGST, setIsValidGST] = useState(true);

    const [GST, setGST] = useState('');

    const handleGSTChange = (event: any) => {

        const inputGST = event.target.value;

        //const gstRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        const gstRegex = /^([0-9]){2}([A-Z]){5}([0-9]){4}([A-Z]){1}([1-9A-Z]){1}Z([0-9A-Z]){1}?$/; 
        const isValid = gstRegex.test(inputGST);
        setIsValidGST(isValid);
        setGST(inputGST);
    };

    //Contact Number validation

    const [isValidContactNumber, setIsValidContactNumber] = useState(true);

    const [contactNumber, setContactNumber] = useState('');

    const handleContactNumberChange = (event: any) => {

        const inputContactNumber = event.target.value;

        const numericInput = inputContactNumber.replace(/\D/g, '');

        const isValidNumber = /^\d{10}$/.test(numericInput);

        setIsValidContactNumber(isValidNumber);
        setContactNumber(inputContactNumber);
    };


    //Alternate Contact Number Validation

    const [isValidAltContactNumber, setIsValidAltContactNumber] = useState(true);

    const [altContactNumber, setAltContactNumber] = useState('');

    const handleAltContactNumberChange = (event: any) => {

        const inputAltContactNumber = event.target.value;

        const numericInput = inputAltContactNumber.replace(/\D/g, '');

        const isValidNumber = /^\d{10}$/.test(numericInput);

        setIsValidAltContactNumber(isValidNumber);
        setAltContactNumber(inputAltContactNumber);
    };

    //PIN code Validation

    const [isValidPin, setIsValidPin] = useState(true);

    const [pin, setPin] = useState('');

    const handlePinChange = (event: any) => {

        const inputPin = event.target.value;

        const pinRegex = /^([1-9]){1}([0-9]){5}?$/;

        const isValidNumber = pinRegex.test(inputPin);

        setIsValidPin(isValidNumber);
        setPin(inputPin);
    };

    //IFSC Validation

    const [isValidIfsc, setIsValidIfsc] = useState(true);

    const [ifsc, setIfsc] = useState('');

    const handleIfscChange = (event: any) => {

        const inputIfsc = event.target.value;

        const ifscRegex = /^([A-Za-z]){4}\d{7}$/;

        const isValidNumber = ifscRegex.test(inputIfsc);

        setIsValidIfsc(isValidNumber);
        setIfsc(inputIfsc);
    };


        // Create masked password and confirm password strings with asterisks
        const maskedPassword = '*'.repeat(password.length);
        const maskedConfirmPassword = '*'.repeat(confirmPassword.length);


    const [isValidConfirmedPassword, setIsValidConfirmedPassword] = useState(true);

    const handleConfirmPasswordChange = (e: any) => {
        const { value } = e.target;
        setConfirmPassword(value);
        const isValid = e.target.value;
        if (maskedPassword === maskedConfirmPassword)
            setIsValidConfirmedPassword(isValid);

    };



        /*const handleFileChange = (event: any) => {
          const file = event.target.files[0];
      
          // Store the file object in session storage
          sessionStorage.setItem('selectedFile', JSON.stringify(file));
        };*/

        const handleFileChange = (event: any) => {
            const file = event.target.files[0];

            // Store the file name in session storage
            sessionStorage.setItem('selectedFileName', file.name);
            sessionStorage.setItem('contentType', file.mimetype);
            sessionStorage.setItem('data', file.data);
        };

        const [selectedDate, setSelectedDate] = useState(null);
        const handleDateChange = (date: any) => {
            setSelectedDate(date);
        };

        // const [selectedFile, setSelectedFile] = useState<string[]>([]);

        /*const handleFileChange = (event: any) => {
          const selectedOptions: any = Array.from(event.target.selectedFile);
          setSelectedFile(selectedOptions);
        };*/


        return (
            <div className={styles.centered}>
                {page === 1 && (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.container_register}>
                            <div className={styles.box_left_line}>
                            </div>
                            <div className={styles.box}>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={styles.input_field_login} placeholder='Name of party / company' required />
                                    </label>
                                </p>
                                <p className={styles.label} >
                                    <label className={styles.label}>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    Year of Establishment&nbsp;
                                                    <DatePicker
                                                        selected={selectedDate}
                                                        onChange={handleDateChange}
                                                        dateFormat="MM/dd/yyyy"
                                                        isClearable
                                                        showYearDropdown
                                                        scrollableYearDropdown
                                                    />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={styles.input_field_login} placeholder='Proprietor / Authorized person name' required />
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="number" name="contactNumber" value={contactNumber} onChange={handleContactNumberChange} className={styles.input_field_login_small} placeholder='Contact Number' />
                                        <input type="number" name="altContactNumber" value={altContactNumber} onChange={handleAltContactNumberChange} className={styles.input_field_login_small} placeholder='Alternate Contact Number' />
                                    </label>
                                    <label className={styles.label}>
                                        {!isValidContactNumber && <p className={styles.error_message_format}>Invalid contact number</p>}
                                        {!isValidAltContactNumber && <p className={styles.error_message_format}>Invalid alternate contact number</p>}
                                    </label>
                                    
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="email" name="email" value={email} onChange={handleEmailChange} className={styles.input_field_login_small} placeholder='Contact Email' />
                                        <input type="number" name="pin" value={pin} onChange={handlePinChange} className={styles.input_field_login_small} placeholder='PIN Code' />
                                    </label>
                                    <label className={styles.label}>
                                    {!isValidEmail && <p className={styles.error_message_format}>Invalid email address</p>}
                                    {!isValidPin && <p className={styles.error_message_format}>Invalid PIN Code</p>}
                                    </label>
                                </p>
                            </div>
                            {/* Add other form fields for the first page */}
                            <div className={styles.box}>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="GST" value={GST} onChange={handleGSTChange} className={styles.input_field_login_small} placeholder='GST #' />
                                        <input type="text" name="PAN" value={PAN} onChange={handlePANChange} className={styles.input_field_login_small} pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}" placeholder='PAN # of Company' />
                                    </label>
                                    <label className={styles.label}>
                                    {!isValidGST && <p className={styles.error_message_format}>Invalid GST</p>}
                                    {!isValidPAN && <p className={styles.error_message_format}>Invalid PAN</p>}
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="address" value={formData.address} onChange={handleChange} className={styles.input_field_login} placeholder='Address' />
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <reactForm.Group as={Col} controlId="formCountry">
                                            <reactForm.Control as="select" value={selectedCountry} onChange={handleCountryChange} className={styles.input_field_login_small} required >
                                                <option value="">Select Country</option>
                                                {countries.map((country) => (
                                                    <option key={country.value} value={country.value}>
                                                        {country.label}
                                                    </option>
                                                ))}
                                            </reactForm.Control>
                                        </reactForm.Group>
                                        <reactForm.Group as={Col} controlId="formState">
                                            <reactForm.Control as="select" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry} className={styles.input_field_login_small} required >
                                                <option value="">Select State</option>
                                                {selectedCountry && states[selectedCountry] && (
                                                    states[selectedCountry].map((state) => (
                                                        <option key={state.value} value={state.value}>
                                                            {state.label}
                                                        </option>
                                                    ))
                                                )}
                                            </reactForm.Control>
                                        </reactForm.Group>
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <reactForm.Group as={Col} controlId="formDistrict">
                                            <reactForm.Control as="select" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState} className={styles.input_field_login_small}>
                                                <option value="">Select District</option>
                                                {selectedState && district[selectedState] && (
                                                    district[selectedState].map((district) => (
                                                        <option key={district.value} value={district.value}>
                                                            {district.label}
                                                        </option>
                                                    ))
                                                )}
                                            </reactForm.Control>
                                        </reactForm.Group>
                                        <input type="text" name="subDistrict" value={formData.subDistrict} onChange={handleChange} className={styles.input_field_login_small} placeholder='Sub-district' />
                                    </label>
                                    <p>
                                        <label className={styles.label}>
                                            <reactForm.Group as={Col} controlId="formLicense">
                                                <reactForm.Control as="select" value={selectedLicense} onChange={handleSelectDrop} className={styles.input_field_login_small} required >
                                                    <option value="license" selected>Select Input License</option>
                                                    <option value="seeds">Seeds</option>
                                                    <option value="pesticides">Pesticides</option>
                                                    <option value="fertilizers">Fertilizers</option>
                                                </reactForm.Control>
                                            </reactForm.Group>

                                            <reactForm.Group as={Col} controlId="formTradeSpeciality">
                                                <reactForm.Control as="select" value={selectedTradeSpeciality} onChange={handleSelectTradeSpeciality} className={styles.input_field_login_small} required >
                                                    <option value="tradeSpeciality" selected>Select Trading Speciality</option>
                                                    <option value="seeds">Seeds</option>
                                                    <option value="pesticides">Pesticides</option>
                                                    <option value="fertilizers">Fertilizers</option>
                                                    <option value="machinery">Machinery</option>
                                                </reactForm.Control>
                                            </reactForm.Group>
                                        </label>
                                    </p>
                                </p>
                                <button type="button" onClick={nextPage} className={styles.button_bright_login_form_register}>Next</button>
                            </div>
                            <div className={styles.box_social}>
                                <p><br></br></p>
                                <p><br></br></p>
                                <p><br></br></p>
                                <p><img className={styles.image_right} src={dp1Insta.src as string} alt="Instagram"></img></p>
                                <p><img className={styles.image_right} src={dp1Twit.src as string} alt="Twitter"></img></p>
                                <p><img className={styles.image_right} src={dp1Face.src as string} alt="Facebook"></img></p>
                                <p><img className={styles.image_right} src={dp1Linked.src as string} alt="LinkedIn"></img></p>
                            </div>
                        </div>
                    </form>
                )}
                {page === 2 && (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.container_register}>
                            <div className={styles.box_left_line}>
                            </div>
                            <div className={styles.box}>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} className={styles.input_field_login} placeholder='Bank Name' />
                                    </label>
                                </p>
                                <p >
                                    <label className={styles.label}>
                                        <input type="text" name="bankBranch" value={formData.bankBranch} onChange={handleChange} className={styles.input_field_login} placeholder='Bank Branch' />
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="ifsc" value={ifsc} onChange={handleIfscChange} className={styles.input_field_login} placeholder='IFSC Code' />
                                    </label>
                                    <label className={styles.label}>
                                        {!isValidIfsc && <p className={styles.error_message_format}>Invalid IFSC</p>}
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="upi" value={formData.upi} onChange={handleChange} className={styles.input_field_login} placeholder='UPI Number' />
                                    </label>
                                </p>
                                <p className={styles.label}>
                                    <button type="button" onClick={previousPage} className={styles.button_bright_register_form_previous}>Previous</button>
                                </p>
                            </div>
                            <div className={styles.box}>
                                <p>
                                    <label className={styles.label}>
                                        <input type="text" name="userId" value={formData.userId} onChange={handleChange} className={styles.input_field_login} placeholder='User ID' />
                                    </label>
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <input type="password" name="password" value={maskedPassword} onChange={handlePasswordChange} className={styles.input_field_login_small} placeholder='Password' />
                                        <input type="password" name="confirmPassword" value={maskedConfirmPassword} onChange={handleConfirmPasswordChange} className={styles.input_field_login_small} placeholder='Confirm Password' />
                                    </label>
                                    {!isValidConfirmedPassword && <p style={{ color: 'red' }}>Enter correct password </p>};
                                </p>
                                <p>
                                    <label htmlFor="formFileMultiple" className={styles.label}>Upload your License Copy</label>
                                    <input className={'${styles.input_field_login} ${form-control}'} type="file" id="formFileMultiple" multiple onChange={handleFileChange} />
                                </p>
                                <p>
                                    <label className={styles.label}>
                                        <reactForm.Group as={Col} controlId="formAgreement">
                                            <reactForm.Control as="select" value={selectedAgreement} onChange={handleSelectAgreement} className={styles.input_field_login} required >
                                                <option value="enter" selected>Select your consent on E-Agreement</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </reactForm.Control>
                                        </reactForm.Group>
                                    </label>
                                </p>
                                <p className={styles.label}>
                                    <button type="submit" className={styles.button_bright_login_form_register}>Submit</button>
                                </p>
                                <p>{isValidData ? '' : 'incorrect Data'}</p>
                            </div>
                            <div className={styles.box_social}>
                                <p><br></br></p>
                                <p><br></br></p>
                                <p><br></br></p>
                                <p><img className={styles.image_right} src={dp1Insta.src as string} alt="Instagram"></img></p>
                                <p><img className={styles.image_right} src={dp1Twit.src as string} alt="Twitter"></img></p>
                                <p><img className={styles.image_right} src={dp1Face.src as string} alt="Facebook"></img></p>
                                <p><img className={styles.image_right} src={dp1Linked.src as string} alt="LinkedIn"></img></p>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        );
    };

export default Form;
   
                               
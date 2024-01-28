import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../header.module.css';
import dp1Insta from "../../images/instagram.jpeg"
import dp1Face from "../../images/facebook.png"
import dp1Linked from "../../images/LinkedIn.png"
import dp1Twit from "../../images/Twitter.png"
import { Form as BootstrapForm, Col } from 'react-bootstrap';

const Form: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    userId: '',
    email: '',
    altContactNumber: '',
    address: '',
    pin: '',
    selectedCountry: '',
    selectedState: '',
    selectedDistrict: '',
    subDistrict: '',
    contactPerson: '',
    contactNumber: '',
    selectedTradeSpeciality: '',
    selectedAgreement: '',
    GST: '',
    PAN: '',
    bankName: '',
    bankBranch: '',
    ifsc: '',
    upi: '',
    portals: '',
    //file
    // Add other form fields here
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the 'formData' state variable
    // For example, you can make an API request or perform validation

    // After form submission, you can navigate to another page
  const formDataWithAllParameters = {
      ...formData,
      selectedCountry,
      selectedState,
      selectedDistrict,
      selectedAgreement,
      selectedTradeSpeciality,
      password
    };

    try {
      // Make a POST request to your Express API endpoint
      const response = await fetch('http://localhost:3001/users/createOfftaker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithAllParameters),

      });
      console.log(JSON.stringify(formDataWithAllParameters));
      // Check the response and handle success or error
     
    } catch (error) {
        // Handle any network or request errors
        console.error('Error:', error);
    }


    // After form submission, you can navigate to another page
    router.push('/success');
};


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
  //const [selectedTradeSpeciality, setSelectedTradeSpeciality] = useState('');
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

  const handleSelectAgreement = (event: any) => {
    const selectedAgreementValue = event.target.value;
    setSelectedAgreement(selectedAgreementValue);
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
  };


  // const [selectedFile, setSelectedFile] = useState<string[]>([]);

  /*const handleFileChange = (event: any) => {
    const selectedOptions: any = Array.from(event.target.selectedFile);
    setSelectedFile(selectedOptions);
  };*/

  const [selectedTradeSpeciality, setSelectedTradeSpeciality] = useState<string[]>([]);

  const handleSelectTradeSpeciality = (event: any) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option: HTMLOptionElement) => option.value);
    setSelectedTradeSpeciality(selectedOptions);
  };

  const handlePasswordChange = (e: any) => {
     const { value } = e.target;
     setPassword(value);
  };

  const [isValidConfirmedPassword, setIsValidConfirmedPassword] = useState(true);

  const handleConfirmPasswordChange = (e: any) => {
     const { value } = e.target;
     setConfirmPassword(value);
     const isValid = e.target.value;
     if (maskedPassword === maskedConfirmPassword)
        setIsValidConfirmedPassword(isValid);

  };

  // Create masked password and confirm password strings with asterisks
  const maskedPassword = '*'.repeat(password.length);
  const maskedConfirmPassword = '*'.repeat(confirmPassword.length);

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
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={styles.input_field_login} placeholder='Name of party / company' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="GST" value={formData.GST} onChange={handleChange} className={styles.input_field_login_small} placeholder='GST #' />
                  <input type="text" name="PAN" value={formData.PAN} onChange={handleChange} className={styles.input_field_login_small} placeholder='PAN # of Company' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={styles.input_field_login} placeholder='Proprietor / Authorized person name' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className={styles.input_field_login_small} placeholder='Contact Number' />
                  <input type="text" name="altContactNumber" value={formData.altContactNumber} onChange={handleChange} className={styles.input_field_login_small} placeholder='Alternate Contact Number' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input_field_login_small} placeholder='Contact Email' />
                  <input type="text" name="pin" value={formData.pin} onChange={handleChange} className={styles.input_field_login_small} placeholder='PIN Code' />
                </label>
              </p>
            </div>
            {/* Add other form fields for the first page */}
            <div className={styles.box}>
              <p>
                <label className={styles.label}>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className={styles.input_field_login} placeholder='Address' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <reactForm.Group as={Col} controlId="formCountry">
                    <reactForm.Control as="select" value={selectedCountry} onChange={handleCountryChange} className={styles.input_field_login_small}>
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </reactForm.Control>
                  </reactForm.Group>
                  <reactForm.Group as={Col} controlId="formState">
                    <reactForm.Control as="select" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry} className={styles.input_field_login_small}>
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
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="portals" value={formData.portals} onChange={handleChange} className={styles.input_field_login} placeholder='Registered Portals' />
                </label>
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
                <select id="formTradeSpeciality" multiple onChange={handleSelectTradeSpeciality} className={styles.input_field_multi_select} value={selectedTradeSpeciality}>
                  <option value="TradeSpeciality" selected>Select Trade Speciality</option>
                  <option value="cereals">Cereals</option>
                  <option value="oilseeds">Oilseeds</option>
                  <option value="pulses">Pulses</option>
                  <option value="spices">Spices</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="NTFP">NTFP</option>
                  <option value="dairy">Dairy Products</option>
                </select>
              </p>
              <p>
                <label htmlFor="formFileMultiple" className={styles.label}>Upload your License Copy</label>
                <input className={'${styles.input_field_login} ${form-control}'} type="file" id="formFileMultiple" multiple onChange={handleFileChange} />
              </p>
              <p>
                <label className={styles.label}>
                  <reactForm.Group as={Col} controlId="formAgreement">
                    <reactForm.Control as="select" value={selectedAgreement} onChange={handleSelectAgreement} className={styles.input_field_login}>
                      <option value="enter" selected>Select your consent on E-Agreement</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </reactForm.Control>
                  </reactForm.Group>
                </label>
              </p>
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
                </p>
              <p className={styles.label}>
                <button type="button" onClick={previousPage} className={styles.button_bright_register_form_previous}>Previous</button>
              </p>
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
                  <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} className={styles.input_field_login} placeholder='IFSC Code' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="upi" value={formData.upi} onChange={handleChange} className={styles.input_field_login} placeholder='UPI Number' />
                </label>
              </p>
              <p className={styles.label}>
                <button type="submit" className={styles.button_bright_login_form_register}>Submit</button>
              </p>
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

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../header.module.css';
import dp1Insta from "../../images/instagram.jpeg"
import dp1Face from "../../images/facebook.png"
import dp1Linked from "../../images/LinkedIn.png"
import dp1Twit from "../../images/Twitter.png"
import { Form as BootstrapForm, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import DatePicker from "react-datepicker";
import { Container, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

console.log("In BasicInfoFPO");

const Form: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    year: '',
    email: '',
    cin: '',
    address: '',
    pin: '',
    selectedCountry: '',
    selectedState: '',
    selectedDistrict: '',
    subDistrict: '',
    block: '',
    contactPerson: '',
    contactNumber: '',
    acres: '',
    revenue: '',
    output_sale: '',
    input_sale: '',
    milk_product: '',
    meat_fishery: '',
    honey: '',
    ntfp: '',
    value_add: '',
    others: '',
    selectedFarmMachines: '',
    selectedWHCapacity: '',
    selectedColdStorageCapacity: '',
    produce1: '',
    produce1_percent: '',
    produce2: '',
    produce2_percent: '',
    produce3: '',
    produce3_percent: '',
    produce_other__percent: '',
    produce_other: '',
    members: '',
    womenMembers: '',
    any_other_infra: '',
    PAN: '',
    GST: '',

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

    // Include selectedCountry from formData
    const formDataWithAllParameters = {
      ...formData,
      selectedCountry,
      selectedState,
      selectedDistrict,
      selectedFarmMachines,
      selectedWHCapacity,
      selectedColdStorageCapacity,
      selectedAgreement,
      email,
      PAN,
      GST,
      contactNumber,
      pin,
      password
    };

    try {
      // Make a POST request to your Express API endpoint
      const response = await fetch('http://localhost:3001/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithAllParameters),

      });
      console.log(JSON.stringify(formDataWithAllParameters));
      // Check the response and handle success or error
      if (response.ok) {
        // Redirect to a success page or perform any other actions
        router.push('/success');
      } else {
        // Handle error case
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      // Handle any network or request errors
      console.error('Error:', error);
    }



    // After form submission, you can navigate to another page
    router.push('/success');
  };


  const reactForm = BootstrapForm;
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWHCapacity, setSelectedWHCapacity] = useState('');
  const [selectedColdStorageCapacity, setSelectedColdStorageCapacity] = useState('');
  //const [selectedFarmMachine, setSelectedFarmMachine] = useState('');
  const [selectedFarmMachine, setSelectedFarmMachine] = useState([]);
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
    const selectedWHCapacityValue = event.target.value;
    setSelectedWHCapacity(selectedWHCapacityValue);
  };

  const handleSelectColdStorageCapacity = (event: any) => {
    const selectedColdStorageCapacityValue = event.target.value;
    setSelectedColdStorageCapacity(selectedColdStorageCapacityValue);
  };


  const [selectedFarmMachines, setSelectedFarmMachines] = useState<string[]>([]);

  const handleSelectFarmMachine = (event: any) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option: HTMLOptionElement) => option.value);
    setSelectedFarmMachines(selectedOptions);
  };

  const handleSelectAgreement = (event: any) => {
    const selectedAgreementValue = event.target.value;
    setSelectedAgreement(selectedAgreementValue);
  };

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    const { value } = e.target;
    setConfirmPassword(value);
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

    //Email syntax validation 

    const [isValidEmail, setIsValidEmail] = useState(true);

    const [email, setEmail] = useState('');

    const handleEmailChange = (event: any) => {
        //const [email, setEmail] = useState('');

        const inputEmail = event.target.value;
        //setEmail(inputEmail);

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
        setEmail(inputEmail);
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


























  // Create masked password and confirm password strings with asterisks
  const maskedPassword = '*'.repeat(password.length);
  const maskedConfirmPassword = '*'.repeat(confirmPassword.length);

  useEffect(() => {
    sessionStorage.setItem('selectedFarmMachines', JSON.stringify(selectedFarmMachines));
  }, [selectedFarmMachines]);

  // Retrieve the values from session state on component mount
  useEffect(() => {
    const storedSelectedFarmMachines = JSON.parse(sessionStorage.getItem('selectedFarmMachines') || '[]');
    setSelectedFarmMachines(storedSelectedFarmMachines);
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date: any) => {
      setSelectedDate(date);
  };

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
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={styles.input_field_login} placeholder='FPO Name' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                   <input type="text" name="cin" value={formData.cin} onChange={handleChange} className={styles.input_field_login} placeholder='Registration #' />
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
                  <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={styles.input_field_login} placeholder='Contact Person Name' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="number" name="contactNumber" value={contactNumber} onChange={handleContactNumberChange} className={styles.input_field_login} placeholder='Contact Number' />
                </label>
               {!isValidContactNumber && <p style={{ color: 'red' }}>Invalid contact number</p>}
              </p>
              <p>
                <label className={styles.label}>
                  <input type="email" name="email" value={email} onChange={handleEmailChange} className={styles.input_field_login} placeholder='Contact Email' />
                </label>
                {!isValidEmail && <p style={{ color: 'red' }}>Invalid email address</p>}
              </p>
            </div>
            {/* Add other form fields for the first page */}
            <div className={styles.box}>
              <p>
                <label className={styles.label}>
                  <input type="text" name="GST" value={GST} onChange={handleGSTChange} className={styles.input_field_login_small} placeholder='GST #' />
                  <input type="text" name="PAN" value={PAN} onChange={handlePANChange} className={styles.input_field_login_small} placeholder='PAN # of Company' />
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
                  <input type="text" name="block" value={formData.block} onChange={handleChange} className={styles.input_field_login_small} placeholder='Block' />
                  <input type="text" name="pin" value={pin} onChange={handlePinChange} className={styles.input_field_login_small} placeholder='PIN Code' />
                </label>
                {!isValidPin && <p style={{ color: 'red' }}>Invalid PIN Code</p>}
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
                  <input type="text" name="acres" value={formData.acres} onChange={handleChange} className={styles.input_field_login} placeholder='Average holding (in Acres)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="revenue" value={formData.revenue} onChange={handleChange} className={styles.input_field_login} placeholder='Per Acre farming revenue' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="input_sale" value={formData.input_sale} onChange={handleChange} className={styles.input_field_login_small} placeholder='Input Sale (%)' />
                  <input type="text" name="output_sale" value={formData.output_sale} onChange={handleChange} className={styles.input_field_login_small} placeholder='Output Sale (%)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="members" value={formData.members} onChange={handleChange} className={styles.input_field_login_small} placeholder='# Total Farmer Members' />
                  <input type="text" name="womenMembers" value={formData.womenMembers} onChange={handleChange} className={styles.input_field_login_small} placeholder='# Women Farmer Members' />
                </label>
              </p>
              <p className={styles.label}>
                <button type="button" onClick={previousPage} className={styles.button_bright_register_form_previous}>Previous</button>
              </p>
            </div>
            <div className={styles.box}>
              <p>
                <label className={styles.label}>
                  <input type="text" name="milk_product" value={formData.milk_product} onChange={handleChange} className={styles.input_field_login} placeholder='Milk & Milk Products Sale (%)' />
                </label>
              </p>
              <p >
                <label className={styles.label}>
                  <input type="text" name="meat_fishery" value={formData.meat_fishery} onChange={handleChange} className={styles.input_field_login} placeholder='Meat and Fishery Products (%)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="honey" value={formData.honey} onChange={handleChange} className={styles.input_field_login_small} placeholder='Honey (%)' />
                  <input type="text" name="ntfp" value={formData.ntfp} onChange={handleChange} className={styles.input_field_login_small} placeholder='NTFP (%)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="value_add" value={formData.value_add} onChange={handleChange} className={styles.input_field_login_small} placeholder='Value Addition (%)' />
                  <input type="text" name="others" value={formData.others} onChange={handleChange} className={styles.input_field_login_small} placeholder='Others (%)' />
                </label>
              </p>
              <p className={styles.label}>
                <button type="button" onClick={nextPage} className={styles.button_bright_login_form_register}>Next</button>
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
      {page === 3 && (
        <form onSubmit={handleSubmit}>
          <div className={styles.container_register}>
            <div className={styles.box_left_line}>
            </div>
            <div className={styles.box}>
              <p>
                <select id="formFarmMachine" multiple onChange={handleSelectFarmMachine} className={styles.input_field_multi_select} value={selectedFarmMachines}>
                  <option value="FarmMachine" selected>Select Farm Machineries you possess</option>
                  <option value="spayer">Spayer</option>
                  <option value="Tilling">Minor tilling tools</option>
                  <option value="cultivator">Cultivators, Rotators & Seed-drills</option>
                  <option value="planters">Planters</option>
                  <option value="harvester">Harvester, ballers, etc.</option>
                  <option value="threshers">Threshers, winnowers, etc</option>
                </select>
              </p>
              <p>
                <label className={styles.label}>
                  <reactForm.Group as={Col} controlId="formWHCapacity">
                    <reactForm.Control as="select" value={selectedWHCapacity} onChange={handleSelectDrop} className={styles.input_field_login_small}>
                      <option value="WHCapacity" selected>Select Warehouse Capacity</option>
                      <option value="0-10">0-10 Metric Tonnes</option>
                      <option value="11-25">11-25 Metric Tonnes</option>
                      <option value="26-60">26-60 Metric Tonnes</option>
                      <option value="61-75">61-75 Metric Tonnes</option>
                      <option value="76-100">76-100 Metric Tonnes</option>
                      <option value="100+">100+ Metric Tonnes</option>
                    </reactForm.Control>
                  </reactForm.Group>
                  <reactForm.Group as={Col} controlId="formColdStorageCapacity">
                    <reactForm.Control as="select" value={selectedColdStorageCapacity} onChange={handleSelectColdStorageCapacity} className={styles.input_field_login_small}>
                      <option value="ColdStorageCapacity" selected>Select Cold Storage Capacity</option>
                      <option value="0-10">0-10 Metric Tonnes</option>
                      <option value="11-25">11-25 Metric Tonnes</option>
                      <option value="26-60">26-60 Metric Tonnes</option>
                      <option value="61-75">61-75 Metric Tonnes</option>
                      <option value="76-100">76-100 Metric Tonnes</option>
                      <option value="100+">100+ Metric Tonnes</option>
                    </reactForm.Control>
                  </reactForm.Group>
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="any_other_infra" value={formData.any_other_infra} onChange={handleChange} className={styles.input_field_login} placeholder='Any Other Infrastructure' />
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
                  <input type="text" name="produce1" value={formData.produce1} onChange={handleChange} className={styles.input_field_login_small} placeholder='Crop / Produce 1' />
                  <input type="text" name="produce1_percent" value={formData.produce1_percent} onChange={handleChange} className={styles.input_field_login_small} placeholder='Produce 1 (% coverage)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="produce2" value={formData.produce2} onChange={handleChange} className={styles.input_field_login_small} placeholder='Crop / Produce 2' />
                  <input type="text" name="produce2_percent" value={formData.produce2_percent} onChange={handleChange} className={styles.input_field_login_small} placeholder='Produce 2 (% coverage)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="produce3" value={formData.produce3} onChange={handleChange} className={styles.input_field_login_small} placeholder='Crop / Produce 3' />
                  <input type="text" name="produce3_percent" value={formData.produce3_percent} onChange={handleChange} className={styles.input_field_login_small} placeholder='Produce 3 (% coverage)' />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  <input type="text" name="produce_other" value={formData.produce_other} onChange={handleChange} className={styles.input_field_login_small} placeholder='Other Produce' />
                  <input type="text" name="produce_other__percent" value={formData.produce_other__percent} onChange={handleChange} className={styles.input_field_login_small} placeholder='Other Produce (% coverage)' />
                </label>
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

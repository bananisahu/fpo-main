import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../header.module.css';
import Link from 'next/link';
import dp1 from "../../images/Hill.jpeg"
import Image from "next/image";
import { useParams } from 'react-router-dom';
console.log("in LoginOfftaker");

const Form: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    userId: ''
    // Add other form fields here
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const { role } = useParams();
  console.log("your role" + role);

  const [message, setMessage] = useState('');

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


    // Add logic for handling login based on the selected role
    /*if (role === 'fpo') {
      // Handle FPO login
      router.push('/viewDashboard');
    } else if (role === 'offtaker') {
      // Handle Offtaker login
      router.push('/viewDashboardOfftaker');
    } else if (role === 'supplier') {
      // Handle Supplier login
      router.push('/viewDashboardSupplier');
    }*/
      const formDataWithAllParameters = {
          ...formData,
          //userId,
          password
      };

      try {
          // Make a POST request to your Express API endpoint
          const response = await fetch('http://localhost:3001/users/loginOfftaker', {
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
              //router.push('/success');
              // After form submission, you can navigate to another page
              console.log("In login.tsx");
              router.push('/viewDashboard');
          } else {
              // Handle error case
              const errorData = await response.json();
              console.error('Error:', errorData);
              setMessage(errorData.message);
          }
      } catch (error) {
          // Handle any network or request errors
          console.error('Error:', error);
      }
  };

  const handleJoin = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form data using the 'formData' state variable
    // For example, you can make an API request or perform validation


    // Add logic for handling login based on the selected role
    /*if (role === 'fpo') {
      // Handle FPO login
      router.push('/createFPOProfile');
    } else if (role === 'offtaker') {
      // Handle Offtaker login
      router.push('/createOfftakerProfile');
    } else if (role === 'supplier') {
      // Handle Supplier login
      router.push('/createSupplierProfile');
    }*/

    // After form submission, you can navigate to another page
    router.push('/createOfftakerProfile');
  };

  const [password, setPassword] = useState('');
  // Create masked password and confirm password strings with asterisks
  const maskedPassword = '*'.repeat(password.length);
  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div className={styles.centered}>
      {page === 1 && (
        <form onSubmit={handleSubmit}>
          <div className={styles.container_register}>
            <div className={styles.box}>
              <Image className={styles.image_left} src={dp1.src as string} alt="profileCard" />
            </div>
            <div className={styles.box_separater}>
            </div>
            <div className={styles.box}>
              <p className={styles.centered}><h4>Enter Your Workspace&nbsp;&nbsp;</h4></p>
              <div><p><br /></p></div>

              <p className={styles.label_login}>
                <label className={styles.label_login}>
                  <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} className={styles.input_field_login} placeholder="User ID" />
                </label>
              </p>

              <p className={styles.label_login}>
                <label className={styles.label_login}>
                  <input type="password" name="password" value={maskedPassword} onChange={handlePasswordChange} className={styles.input_field_login} placeholder="Password" />
                </label>
              </p>

              {/* Add other form fields for the first page */}
              <p>
                <button type="submit" className={styles.button_bright_login_form}>Login</button>
              </p>
              <p>
                <button className={styles.button_bright_login_form_join} onClick={handleJoin}>Join Vriddhi</button>
              </p>
              <div><p><br /></p></div>
              <p className={styles.label_login}><h4>Forgot Password</h4></p>
            </div>
          </div>
        </form>

      )
      }</div>


    );

};

export default Form;

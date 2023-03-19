import React, { useState } from 'react';
import './signuphero.css';
import pp_master from '../Assests/pp_master.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Signup_photo from '../Assests/signup.png';
import axios from 'axios';

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Customer_Name: '',
    NIC_No: '',
    Email: '',
    Mobile_No: '',
    Password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted:', formData); // Add this line to log the form data
    try {
      await axios.post('http://localhost:8000/Registrations', formData);
      navigate('/Login');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='SIgnUpHeroSec'>
        <div className="signUpBox"/>
        <span className="signupboxtext">SIGN UP</span>

        <img src={Signup_photo} alt="Signup_photo" className="Signup_photo" />

        <span className="name">Customer Name</span>
        <input type="text" placeholder="Enter your name" name="Customer_Name" onChange={handleInputChange} className="namebox"></input>

        <span className="NIC">NIC No</span>
        <input type="text" name="NIC_No" onChange={handleInputChange} placeholder="Enter your NIC Number" className="NICbox"></input>

        <span className="email">Email</span>
        <input type="email" name="Email" onChange={handleInputChange} placeholder="Enter your E-mail" className="emailbox"></input>

        <span className="mobileno">Mobile No</span>
        <input type="number" name="Mobile_No" onChange={handleInputChange} placeholder="Enter your Mobile Number" className="mobilenobox"></input>

        <span className="password">Password</span>
        <input type="password" name="Password" onChange={handleInputChange} placeholder="Enter a Password" className="passwordbox"></input>

        <input type="checkbox" className="payby_circle"></input>
        <span className="paybycredit_text">Pay by Credit Card, Visa / Master</span>

        <img src={pp_master} alt="pp_master" className="visa_master" />

        <span className="agreed_cond">I agree the terms and conditions</span>
        <input type="checkbox"  className="agreed_button"></input >

        
        <button type="submit" className="continue_but">Sign up</button>

      </div>
    </form>
  );
}

export default RegistrationForm;

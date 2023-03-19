import React, { useState, useEffect } from 'react';
import './loginHero.css';
import Welcome_Back from '../Assests/welcome_back.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginHero() {
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth', {
        NIC_No: nic,
        Password: password,
      });
      console.log(response.data.msg);
      navigate('/Home');
      } catch (error) {
        console.log(error.response.data.msg);
        setErrorMessage('Invalid NIC or Password !!!');
      }
    };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage('');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  return (
    <div className='LoginHeroSec'>
      <div className='LoginBox' />
      <span className='LoginBox_text'>LOG IN</span>

      <span className='NIC_info'>Your NIC</span>
      <input
        type='text'
        placeholder='Enter your NIC'
        className='NICinfo_box'
        value={nic}
        onChange={(e) => setNic(e.target.value)}
      />

      <span className='password_text'>Password</span>
      <input
        type='password'
        placeholder='Enter your Password'
        className='password_box'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && <div className='error_message'>{errorMessage}</div>}

      <button className='login_but' onClick={handleLogin}>
        Log in
      </button>

      <img src={Welcome_Back} alt='Welcome' className='welcome_back' />
      <span className='welcome_text'>Welcome Back!</span>
    </div>
  );
}

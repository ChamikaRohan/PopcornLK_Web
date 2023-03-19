import './signuppage.css'
import React from 'react';
import Navbar from '../Components/Navbar'
import SignUpHero from '../Components/SignUpHero'
import Footer from '../Components/Footer';
import LoginHero from '../Components/LoginHero'
import './login.css'
import Footer_MvShowTime from '../Components/Footer_MvShowTime';

export default function Login() {
  return (
    <div className='loginpage'>
      <Navbar/>
      <LoginHero/>
    </div>
  );
}

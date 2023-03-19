import './signuppage.css'
import React from 'react';
import Navbar from '../Components/Navbar'
import SignUpHero from '../Components/SignUpHero'
import Footer from '../Components/Footer';
import Footer_MvShowTime from '../Components/Footer_MvShowTime';

export default function SignUpPage() {
  return (
    <div className='SignUp'>
      <Navbar/>
      <SignUpHero/>
    </div>
  );
}

import React from 'react';
import './navbar.css'
import logo from '../Assests/Logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <img src={logo} alt="" className="logo_head" />
          <a class="navbar-brand">
            
          </a>


          <div class="navcenter">
          <Link to="/Home"> 
            <button className='H'>Home</button>
          </Link>
          <Link to="/Showtime"> 
            <button className='M'>Movies & Theaters</button>
          </Link>
          </div>

          <Link to="/Signup">
          <button className="signup">Sign Up</button>
          </Link>

          <Link to="/Login">
          <button className="already_acount">Already have an account?</button>
          </Link>
          
          
        </div>
</nav>
    </div>
  );
}

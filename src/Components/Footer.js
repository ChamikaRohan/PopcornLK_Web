import React from 'react';
import './footer.css'
import logo from '../Assests/Logo.png'

export default function Footer() {
  return (
    <div className="footerpart">
        <span className="abouttitle">About Us</span>
        <img src={logo} alt="" className="logo_top" />
        <span className="leftdes">POPCORN.lk is an online
        entertainment portal tied up
        with leading theaters across 
        Sri Lanka to provide users the
        convenience of online ticket
        booking almost anywhere.</span>
        <span className="botdes">© 2023 POPCORN.lk. All Rights Reserved.</span>
        <span className="leftheadtop">Head Office:</span>
        <span className="rightdes">No. 35, Dharmapala Mawatha,
        Colombo 03, Sri Lanka.</span>
        <span className="rightbottopic">Support:</span>
        <span className="rightsup">support@popcorn.lk
        Monday - Friday
        9:00 am - 6:00 pm</span>
        <span className="MktAdtTopic">Marketing & Advertising:</span>
        <span className="rightbot">sales@popcorn.lk</span>
        <hr className="fotline" />
    </div>
  );
}

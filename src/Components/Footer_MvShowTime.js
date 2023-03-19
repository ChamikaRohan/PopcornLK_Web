import React from 'react';
import './footer_MvShowTime.css'
import Logo from '../Assests/Logo.png'

export default function Footer_MvShowTime() {
  return (
    <div className="footerpart_MVC">
      <span className="abouttitle2">About Us</span>
      <img src={Logo} alt="Logo" className="logo2" />
        <span className="leftdes2">POPCORN.lk is an online
        entertainment portal tied up
        with leading theaters across 
        Sri Lanka to provide users the
        convenience of online ticket
        booking almost anywhere.</span>
        <span className="botdes2">© 2023 POPCORN.lk. All Rights Reserved.</span>
        <span className="leftheadtop2">Head Office:</span>
        <span className="rightdes2">No. 35, Dharmapala Mawatha,
        Colombo 03, Sri Lanka.</span>
        <span className="rightbottopic2">Support:</span>
        <span className="rightsup2">support@popcorn.lk
        Monday - Friday
        9:00 am - 6:00 pm</span>
        <span className="MktAdtTopic2">Marketing & Advertising:</span>
        <span className="rightbot2">sales@popcorn.lk</span>
        <hr className="fotline2" />
    </div>
  );
}

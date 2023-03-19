import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import Hero_MovieShowtime from '../Components/Hero_MovieShowtime';
import Footer_MvShowTime from '../Components/Footer_MvShowTime';

export default function MovieShowtime() {
  return (
    <div>
      <Navbar/>
      <Hero_MovieShowtime/>
      <Footer_MvShowTime/>
    </div>
  );
}

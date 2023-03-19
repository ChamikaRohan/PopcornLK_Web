import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import MovieCollection from '../Components/Moviecollection';
import Footer from '../Components/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MovieCollection/>
      <Footer/>
    </div>
  );
}

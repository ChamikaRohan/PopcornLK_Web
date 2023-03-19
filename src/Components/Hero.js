import React from 'react';
import Gindari_Long from '../Assests/Gindari-3.jpg'
import Avatar from '../Assests/Ava.jpg'
import Gajaman from '../Assests/Gajaman.jpg'
import './hero.css'

export default function Hero() {
  return (
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Avatar} class="d-block w-100" alt="..."/>
      <span className="title">Avatar: The Way of Water [3D]</span>
    </div>
    <div class="carousel-item">
      <img src={Gajaman} class="d-block w-100" alt="..."/>
      <span className="title">Gajaman [3D]</span>
    </div>
    <div class="carousel-item">
      <img src={Gindari_Long} class="d-block w-100" alt="..."/>
      <span className="title">Gindari 3</span>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


    
   

</div>
  );
}

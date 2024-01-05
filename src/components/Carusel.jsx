import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import casa1 from '../assets/carusel/casa1.jpg';
import casa2 from '../assets/carusel/casa2.jpg';
import casa3 from '../assets/carusel/casa3.jpg';
import casa4 from '../assets/carusel/casa4.jpg';
import casa5 from '../assets/carusel/casa5.jpg';
import casa6 from '../assets/carusel/casa6.jpg';

import '../styles/carusel.css';


const Carusel = () => {

  const images = [
    {name: "NOMBRE DESCRIPTIVO", src: casa1},
    {name: "NOMBRE DESCRIPTIVO", src: casa2},
    {name: "NOMBRE DESCRIPTIVO", src: casa3},
    {name: "NOMBRE DESCRIPTIVO", src: casa4},
    {name: "NOMBRE DESCRIPTIVO", src: casa5},
    {name: "NOMBRE DESCRIPTIVO", src: casa6}
   ];
  
   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='carusel'>
      <div className='title'>
        <h2>Novedades destacadas</h2>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
        <div key={index} className='box'>
          <img src={image.src} alt={`Imagen ${index + 1}`} />
          <h3>{image.name}</h3>
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default Carusel
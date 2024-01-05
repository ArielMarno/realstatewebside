import '../styles/footer.css';
import React from 'react'

import facebook from '../assets/social/facebook.png';
import twitter from '../assets/social/twitter.png';
import linkedin from '../assets/social/linkedin.png';
import instagram from '../assets/social/instagram.png';
import youtube from '../assets/social/youtube.png';

import logo from '../assets/logo_negro.png';

import telegram from '../assets/social/telegram.png';
import whatsapp from '../assets/social/whatsapp.png';
import skype from '../assets/social/skype.png';

import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
      <div className='footer'>

        <div className='footer-links'>

           <div className='footer-servicios'>
            <h3>Servicios</h3>
            <div className='servicios-links'>
              <a href="#">Ventas</a>
              <a href="#">Tasaciones</a>
              <a href="#">Visitas Virtuales</a>
              <a href="#">Listado de propiedades</a>
            </div>
           </div>

            <div className='social'>
              <h4>¡SEGUINOS EN NUESTRAS REDES!</h4>
              <div className='social-icons'>
                <a href="#"><img src={linkedin} alt="linkedin"/></a>
                <a href="#"><img src={instagram} alt="instagram"/></a>
                <a href="#"><img src={facebook} alt="facebook"/></a>
                <a href="#"><img src={twitter} alt="twitter"/></a>
                <a href="#"><img src={youtube} alt="youtube"/></a>
              </div>
            </div>

            <div className='location'>
              <img src={logo} alt="" />
              <p className='location-p'>COMPRA, VENDE, RENTA, INVERTI</p>

              <div className='location-dir'>
                <p>Av.Libertador 1900,</p>
                <p>La Plata Buenos Aires,</p>
                <p>555-666-777</p>
              </div>

              <div className='location-links'>
                <a href="#"><img src={telegram} alt="telegram" /></a>
                <a href="#"><img src={whatsapp} alt="whatsapp" /></a>
                <a href="#"><img src={skype} alt="skype" /></a>
              </div>

          </div>

        </div>

        <div className='footer-line'/>

        <div className='footer-copy'>
          <a href="#inicio"><FaArrowUp className='footer-arrow'/></a>
          <p className='footer-text'>RealEstate es una empresa inmobiliaria de servicio completo de primer nivel en el país, que participa activamente en todas las fases de bienes raíces.</p>
          <p className='copy'>© 2009-2023 RealEstate Bienes Raíces.</p>
        </div>
      </div>

  )
}

export default Footer
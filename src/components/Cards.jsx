import '../styles/cards.css';
import React from 'react'

import virtual from '../assets/cards/virtual.jpg';
import construccion from '../assets/cards/construccion.jpg';
import remodelacion from '../assets/cards/remodelacion.jpg';
import listado from '../assets/cards/listado.jpg';

const Cards = () => {
  return (
    <div className='cards-container'>
      <div className='card'>
        <div className='img-container'>
          <img src={virtual} alt="visita virtual" />
        </div>
        <div className='card-body'>
          <h2>Elija comprar una propiedad de forma segura y ahorrando mucho tiempo</h2>
          <p>Las valoraciones y visitas virtuales ya están disponibles para nuestros clientes. Los recorridos virtuales de casas en venta pueden ahorrarle mucho tiempo y esfuerzo, y le permitirán concentrarse más en aumentar los ingresos de su negocio.</p>
          <p className='black-p'>Busque una propiedad desde donde este!</p>
          <a href="#" className='custom-btn'>Solicitar Visita Virtual</a>
        </div>
      </div>

      <div className='card'>
      <div className='mobile'>
          <img src={construccion} alt="construccion"  className='left'/>
          <img src={remodelacion} alt="remodelacion" className='right'/>
        </div>
        <div className='card-body'>
          <h2>Nuevos proyectos y remodelaciones</h2>
          <p>Invierte en tu futuro, construye y remodela con nosotros. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, consectetur nostrum? Reiciendis accusantium.</p>
          <p className='black-p'>¡Tu patrimonio merece lo mejor!</p>
          <a href="#" className='custom-btn'>Mas Información</a>
        </div>
        <div className='circles'>
          <img src={construccion} alt="construccion"  className='back-circle'/>
          <img src={remodelacion} alt="remodelacion" className='front-circle'/>
        </div>
      </div>

      <div className='card'>
        <div className='img-container'>
         <img src={listado} alt="listado" />
        </div>
        <div className='card-body'>
          <h2>Actualizaciones diarias</h2>
          <p>Sabemos la importancia de ser el primero cuando se trata de bienes raíces. Puede significar la diferencia entre comprar la casa de sus sueños o perder una oportunidad única. Si está buscando los listados más actuales disponibles, lo tenemos cubierto. </p>
          <p className='black-p'>Actualizaciones diarias para mantenerlo informado sobre los ultimos listados disponibles en el mercado inmobiliario.</p>
          <a href="#" className='custom-btn'>Ver Lista</a>
        </div>
      </div>

    </div>
  )
}

export default Cards
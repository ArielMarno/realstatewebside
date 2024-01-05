import '../styles/servicios.css';
import venta from '../assets/icons/venta.png';
import inversion from '../assets/icons/inversion.png';
import tasaciones from '../assets/icons/tasaciones.png';

import renta from '../assets/icons/renta.png';
import seguridad from '../assets/icons/seguridad.png';
import proyecto from '../assets/icons/proyecto.png';
import React from 'react'

const Servicio = ({image, text}) => (
  <>
    <div className='servicio'>
      <img src={image} alt="icono de servicio" />
      <p>{text}</p>
    </div>
  </>
);


const Servicios = () => {

  return (
    <div className='servicios'>
      <h2>Real Estate en Tiempo Real</h2>
      <div className='servicios-contenedor'>
        <Servicio image={venta} text="Venta de Propiedades"/>
        <Servicio image={inversion} text="Inversion Inmobiliaria"/>
        <Servicio image={tasaciones} text="Formulario de Tasaciones"/>
        <Servicio image={renta} text="Renta de Inmuebles"/>
        <Servicio image={seguridad} text="Seguridad en la Compra"/>
        <Servicio image={proyecto} text="Proyectos en Desarrollo"/>
      </div>
      <div className='text-buttom'>
        <p>¿Busca vender, alquilar o comprar? Tenemos las herramientas más recientes que necesitará para tomar las decisiones más sabias e informadas. En <span>RealEstate</span>, proporcionamos datos en tiempo real sobre el mercado inmobiliario actual, asegurándonos de que siempre reciba la información más reciente y actualizada posible.</p>
        <h3>¡Conocemos el mercado, tenemos las mejores opciones y el asesoramiento que estas buscando!</h3>
      </div>
    </div>
  )
}

export default Servicios
import '../styles/tasaciones.css';
import React from 'react'
import lupa from '../assets/icons/lupa.png';

const Tasaciones = () => {
  return (
    <div className='tasaciones'>
      <div className='input-direccion'>
       <input type="text" name="direccion" id="direccion" placeholder='Ingresa la dirección de tu propiedad'/>
       <button type='button'><img src={lupa} alt="lupa" /></button> 
      </div>
      <div className='text-aside'>
        <h2>¿CUAL ES EL VALOR DE MI PROPIEDAD?</h2>
        <p>Obtene una cifra estimada del valor de mercado para tu propiedad.</p>
        <p>Ingresa la direción del inmueble en la herramienta de tasación para obtener un valor.</p>
        <div className='input-direccion'>
           <input type="text" name="direccion" id="direccion" placeholder='Ingresa la dirección de tu propiedad'/>
           <button type='button'><img src={lupa} alt="lupa" /></button> 
        </div>
      </div>
    </div>
  )
}

export default Tasaciones
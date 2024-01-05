import '../styles/masvistas.css';
import React from 'react'
import mv1 from '../assets/casas/mv1.jpg';
import mv2 from '../assets/casas/mv2.jpg';
import mv3 from '../assets/casas/mv3.jpg';
import mv4 from '../assets/casas/mv4.jpg';
import mv5 from '../assets/casas/mv5.jpg';
import mv6 from '../assets/casas/mv6.jpg';
import mv7 from '../assets/casas/mv7.jpg';
import mv8 from '../assets/casas/mv8.jpg';
import mv9 from '../assets/casas/mv9.jpg';

const MasVistas = () => {
  return (
    <div className='masvistas'>
      <h2>Propiedades Mas Vistas</h2>
      <div className='grilla'>
        <div className='mv-box'>
          <img src={mv1} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv2} alt="casa" />
          <div className='mv-description'>
            <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv3} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>  
        </div>

        <div className='mv-box'>
          <img src={mv4} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv5} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv6} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv7} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv8} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

        <div className='mv-box'>
          <img src={mv9} alt="casa" />
          <div className='mv-description'>
          <div className='first-line'>
             <p>#1234</p>
             <p>$200,00/mes</p>
            </div>
            <div className='line'/>
            <p>24 m2 - 2 baños - 3 habitaciones</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MasVistas
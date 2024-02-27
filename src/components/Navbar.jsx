import '../styles/navbar.css';
import React, {useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logob.png';
const Menu = () =>(
  <>
    <p><a href="#">COMPRAS</a></p>
    <p><a href="#">ALQUILERES</a></p>
    <p><a href="#">VENTAS</a></p>
    <p><a href="#">INVERSIONES</a></p>
    <p><a href="#">PROYECTOS</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar' id='nav'>
      <div className='navbar-box'>
        <div className='navbar-logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='navbar-links'>
          <Menu />
        </div>

        <div className='burguer-menu'>
        {toggleMenu
      ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
      : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='burguer-menu-container'>
          <div className='burguer-menu_links'>
            <Menu/>
          </div>
        </div>
        )

      }
        </div>

        <div className='navbar-tel'>
          <div className='line'/>
          <div className='telefono'>
            <p className='text'>CONTACTANOS</p>
            <p>555-666-777</p>
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
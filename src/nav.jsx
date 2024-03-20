// Nav.jsx
import React from 'react';

function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav>
      <span className="logo"><i className='bx bxl-medium'></i></span>
      <button className="btn-menu"><i className='bx bx-menu'></i></button>
      <ul className="menu-options">
        <li><a href="#">Inicio</a></li>
        <li><a href="#tp">Sobre mi</a></li>
        <li><a href="#services-tp">Servicios</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contacto</a></li>
        <button className="switch" id="switch" onClick={toggleDarkMode}>
          <span><i className={darkMode ? 'bx bxs-sun' : 'bx bxs-moon'}></i></span>
        </button>
      </ul>
    </nav>
  );
}

export default Nav;

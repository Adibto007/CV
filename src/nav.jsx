import React, { useState, useEffect } from 'react';

function Nav() {
  
  return (
    <>
      <nav>
        <span className="logo"><i className='bx bxl-medium'></i></span>
        <button className="btn-menu"><i className='bx bx-menu'></i></button>
        <ul className="menu-options">
          <li><a href="#">Inicio</a></li>
          <li><a href="#tp">Sobre mi</a></li>
          <li><a href="#services-tp">Servicios</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="formulario.html">Contacto</a></li>
          
          
        </ul>
      </nav>
    </>
  );
}

export default Nav;

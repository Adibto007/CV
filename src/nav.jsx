import React, { useState, useEffect } from 'react';

function Nav() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const btnMenu = document.querySelector(".btn-menu");
    const menuOptions = document.querySelector(".menu-options");

    const handleMenuToggle = () => {
      menuOptions.classList.toggle("active");
      // Puedes realizar otras acciones aquí usando el estado si es necesario
      setCount((prevCount) => prevCount + 1);
    };

    btnMenu.addEventListener("click", handleMenuToggle);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      btnMenu.removeEventListener("click", handleMenuToggle);
    };
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

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
          <li><a href="#">Contacto</a></li>
          
          <button className="switch" id="switch">
            <span><i className="bx bxs-sun"></i></span>
            <span><i className="bx bxs-moon"></i></span>
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

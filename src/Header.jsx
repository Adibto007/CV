// Header.jsx
import React from 'react';
import imgOriginal from './assets/emp.png';

function Header() {
  return (
    <header>
      <div className="header__info">
        <div className="info">
          <div className="info__childs">
            <p className="hello">HOLA</p>
            <h1>Soy Jhoan</h1>
            <p className="descripcion">Software developer</p>
            <button> <a href="#tp">Conoce más!</a></button>
          </div>
        </div>
      </div>
      <div className="y-container"></div>
      <img className="foto" src={imgOriginal} alt="empresario" />
    </header>
  );
}

export default Header;

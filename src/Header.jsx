import { useState } from 'react'
import imgOriginal from './assets/emp.png'

function Header() {
    
    return (
        <>
            <header>
                <div class="header__info">
                    <div class="info">
                        <div class="info__childs">
                            <p class="hello">HOLA</p>
                            <h1>Soy Jhoan</h1>
                            <p class="descripcion">Software developer</p>
                            <button> <a href="#tp">Conoce más!</a></button>
                        </div>
                    </div>
                </div>
                <div class="y-container"></div>
                <img class="foto" src={imgOriginal} alt="empresario">
                </img>
            </header>
        </>
    )
}

export default Header

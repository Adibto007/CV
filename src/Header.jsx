import { useState } from 'react'
import imgOriginal from './assets/emp.png'

function Header() {
    const [count, setCount] = useState(0)
    
    return (
        <>
            <header>
                <div class="header__info">
                    <div class="info">
                        <div class="info__childs">
                            <p class="hello">HOLA</p>
                            <h1>Soy pepe</h1>
                            <p class="descripcion">Freelance web Designer & <br></br> Mobile UI</p>
                            <button>Conoce más!</button>
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

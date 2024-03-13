import { useState } from 'react'
import imgSecondary from './assets/emp2.png'


function Section() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main id="tp">
                <section>
                    <div class="about-img">
                        <img src={imgSecondary} alt=""></img>
                    </div>
                    <article>
                        <h2>Sobre mi</h2>
                        <p>"Soy un aprendiz desarrollador de software con sólidos conocimientos en lenguajes de programación como HTML, CSS, JavaScript, C,
                            Java y Dart. Mi experiencia abarca el manejo de bases de datos MySQL y la utilización efectiva de repositorios como GitHub. Además,
                            tengo experiencia en el uso de IDEs como NetBeans y Android Studio, así como en el trabajo con frameworks como React. Mi enfoque se
                            centra en el desarrollo de soluciones eficientes y escalables, respaldado por una sólida comprensión de los principios de programación
                            y la capacidad de trabajar en equipo." </p>
                        <div class="about-btns">
                            <button> <a href="#services-tp">Conoce más!</a></button>
                            <button id='services-tp'>Descargar CV</button>
                        </div>
                    </article>
                </section>
                <section >
                    <h2>Servicios</h2>
                    <p>Como desarrollador de software, ofrezco una gama completa de servicios para satisfacer las necesidades tecnológicas de mis clientes.
                        Mis habilidades abarcan el desarrollo como: </p>
                    <div class="grid-courses">
                        <div class="grid-course-cont">
                            <div class="bg-color blue"></div>
                            <div class="cont ">
                                <span><i class='bx bx-mobile-alt'></i></span>
                                <h3>UX Research</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>

                        <div class="grid-course-cont">
                            <div class="bg-color yellow" ></div>
                            <div class="cont ">
                                <span><i class='bx bx-code-block' ></i></span>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>
                        <div class="grid-course-cont">
                            <div class="bg-color purp"></div>
                            <div class="cont">
                                <span><i class='bx bx-code-block' ></i></span>
                                <h3>App Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>
                        <div class="grid-course-cont">
                            <div class="bg-color green"></div>
                            <div class="cont" >
                                <span><i class='bx bx-code-block' ></i></span>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Section

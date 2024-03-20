import React, { useState } from 'react';

function Formulario() {


    return (
        <div id='wrapper' >
            <form action="https://formsubmit.co/jhoanandreshernandesposada@gmail.com" method="POST" >
                <label htmlFor="Nombre">Nombre</label>
                <input type="text" name='name' />

                <label htmlFor="email">Correo Electronico</label>
                <input type="text" name='email' />

                <label htmlFor="subject">Asunto</label>
                <input type="text" name='subject' />

                <label htmlFor="comments">Comentarios</label>
                <textarea name="comments" cols="15" rows="5" ></textarea>

                <input type="submit" value='Enviar' />

            </form>
        </div>

    );
}

export default Formulario;

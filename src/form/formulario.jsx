import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sjn2wto', 'template_n7n3m0d', form.current, {
                publicKey: 'YD-6PKNW-MKGrjc3y',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='wrapper' >
            <h1>pepe<h1/>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="text" name="user_email" />
                <label>Message</label>
                <textarea name="message" cols="15" rows="5" ></textarea>

                <input type="submit" value="Send" />

            </form>
        </div>

    );
}

export default Formulario;

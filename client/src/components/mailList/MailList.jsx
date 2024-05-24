import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./mailList.css";


const MailList = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9yj0wgk', 'template_cpk1ke8', form.current, 'M_BlNb7tua4jwiQHw')
      .then(
        () => {
          setMessage('Usuario suscrito');  // Mostrar mensaje de éxito
          form.current.reset();  // Limpiar el formulario
        },
        (error) => {
          console.error('Error al enviar el correo:', error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mail">
          <h1 className="mailTitle">¡Ahorre tiempo, ahorre dinero!</h1>
          <span className="mailDesc">Regístrate y te enviaremos las mejores ofertas</span>
          <label>Correo Electronico</label>
          <input type="email" name="user_email" placeholder="example@example.com" required />
          <input type="submit" value="Suscribete" />
          {message && <p>{message}</p>}
        </div>
      </form>
      
    </div>
  );
};

export default MailList;

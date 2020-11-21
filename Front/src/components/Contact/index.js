import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : voir pour le Css
// TODO : voir pour l'envoi de formulaire

const Contact = () => (
  <div className="contact">
    <h2 className="contact_title"> Nous contacter : </h2>
    <div className="contact_main">
      <address className="contact_adress">
        <h3 className="adress_title">Nous contacter :</h3>
        <a className="adress_text" href="mailto:fermotor@wanadoo.fr">Email : fermotor@wanadoo.fr</a>
        <a className="adress_text" href="tel: +33556490863">Téléphone : 05.56.49.08.63</a>
        <p className="adress_text"> Adresse :</p>
        <p className="adress_text_content"> 5 rue Pierre Georges Latecoere 33850 Leognan France</p>
        <p className="adress_text"> Horaire : </p>
        <p className="adress_text_content">Lundi-jeudi : 07h30-12h30 et 14h-17h </p>
        <p className="adress_text_content">Vendredi : 07h30-12h30</p>
      </address>
      <iframe
        src="https://www.google.com/maps/d/u/2/embed?mid=1SzKhNHm6mIsL-cKZ7CeQ_WpTYex0I_iC" width="640"
        height="480"
      />
      <form className="contact_form">
        <h2 className="form_title"> Nous écrire : </h2>
        <input type="text" className="form_name" placeholder=" Votre nom" />
        <input type="text" className="form_firstName" placeholder=" Votre prénom" />
        <input type="email" className="inputMail" placeholder=" Votre email" />
        <input type="email" className="inputTel" placeholder=" Votre téléphone" />
        <p className="introText"> Demande d'information :</p>
        <textarea className="text" placeholder=" Nous vous écoutons..." />
        <button type="submit" className="button1">
          Envoyez
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
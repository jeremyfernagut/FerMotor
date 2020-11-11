import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : voir pour le Css
// TODO : voir pour l'envoi de formulaire

const Contact = () => (
  <div className="contact">
    <h2 className="contact_title"> Qui sommes nous ? </h2>
      <div className="contact_main">
       <address className="contact_adress">
          <h3 className="adress_title">Nous contacter :</h3>
          <p className="adress_text">Email : fermotor@wanadoo.fr</p>
          <p className="adress_text">Téléphone : 05.56.49.08.63</p>
         <p className="adress_text"> Adresse : 5 rue Pierre Georges Latecoere 33850 LEOGNAN </p>
       </address>
      <form className="contact_form">
    <h2 className="form_title"> Formulaire : </h2>
    <input type="text" className="form_name" placeholder="Votre nom" />
    <input type="text" className="form_firstName" placeholder="Votre prénom" />
    <input type="email" className="inputMail" placeholder="Votre email" />
    <input type="email" className="inputTel" placeholder="Votre téléphone" />
    <p className="introText"> Demande d'information :</p>
    <textarea className="text" placeholder="Nous vous écoutons..." />
    <button type="submit" className="form_contact_buton">Envoyez</button>
  </form>
    </div>
  </div>
);

export default Contact;
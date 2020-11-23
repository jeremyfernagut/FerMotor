import React, { useState } from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : voir pour le Css
// TODO : voir pour l'envoi de formulaire

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_qkkbzuo", {
      name,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
          "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
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
          <input
            type="text"
            className="form_name"
            placeholder="Votre nom, prénom"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoComplete="off"
          />
          <div className="email_content">
            <label id="not-mail">Email non valide</label>
            <input
              className="inputMail"
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email *"
              value={email}
              autoComplete="off"
            />
            <input
              type="text"
              className="inputTel"
              placeholder="Votre téléphone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <p className="introText"> Demande d'information :</p>
            <textarea
              className="text"
              placeholder="Nous vous écoutons."
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <input
              className="button1"
              type="button"
              value="Envoyer"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  )
};

export default Contact;
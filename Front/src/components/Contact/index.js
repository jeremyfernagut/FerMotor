import React, { useState } from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : voir pour le CSS soucis entre 600 et 700 px


const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail')
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.desplay = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  }

  const failMessage = () => {
    let formMess = document.querySelector('.form_message');

    formMess.innerHTML = ' Merci de remplir correctement les champs requis * '
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const successMessage = () => {
    let formMess = document.querySelector('.form_message');

    formMess.innerHTML= 'Message envoyé ! Nous vous recontacterons dès que possible.';
    formMess.style.background= '#34A853';
    formMess.style.opacity='1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity= '0';
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_qkkbzuo", {
        name,
        phone,
        email,
        message,
      });
    } else {
      failMessage();
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        successMessage();
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form_message').innerHTML =
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
          src="https://www.google.com/maps/d/u/2/embed?mid=1SzKhNHm6mIsL-cKZ7CeQ_WpTYex0I_iC"
        />
        <form className="contact_form">
          <h2 className="form_title"> Nous écrire : </h2>
          <input
            type="text"
            className="form_name"
            placeholder="Votre nom, prénom *"
            id="name"
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
              placeholder="Nous vous écoutons. *"
              name="message"
              id="message"
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
          <div className="form_message" />
        </form>
      </div>
    </div>
  )
};

export default Contact;
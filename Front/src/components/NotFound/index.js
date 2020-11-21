import React from 'react';
import { Link } from 'react-router-dom';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : verifier la version mobile css pour le text
const NotFound = () => (

  <div className="notFound">
    <h1 className="notFound_title">OUPS... ERREUR 404 </h1>
    <p className="notFound_text">Nous sommes désolés, mais la page que vous recherchez n'existe pas.</p>
    <Link to="/">
      <button className="button">
        retour a l'accueil
        <div className="button__horizontal" />
        <div className="button__vertical" />
      </button>
    </Link>
  </div>
);
export default NotFound;
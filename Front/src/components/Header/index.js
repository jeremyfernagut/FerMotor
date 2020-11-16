import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/petit_logo.png';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO ajouter les nav link une fois que les routes seront crées.

const Header = () => (
  <div className="header">
    <div id="header_title">
      <h1>
        <img src={logo} alt="Logo de l'entreprise fermotor" className="header_logo" />
        Fermotor
      </h1>
    </div>
    <div className="link">
      <Link to="/">
        <p className="link_detail"> Accueil </p>
      </Link>
      <Link to="/intervention">
        <p className="link_detail"> Services </p>
      </Link>
      <Link to="/contact">
        <p className="link_detail"> Contact </p>
      </Link>
      <Link to="/about">
        <p className="link_detail"> A propos </p>
      </Link>
    </div>
  </div>
);

export default Header;

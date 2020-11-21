import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/petit_logo.png';
import './style-mobile.scss';
import './style-desktop.scss';

// // TODO ajouter les nav link une fois que les routes seront crées.

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
        <div className="btn_header">
          <span>Accueil</span>
        </div>
      </Link>
      <Link to="/intervention">
        <div className="btn_header">
          <span>Services</span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="btn_header">
          <span>Contact</span>
        </div>
      </Link>
      <Link to="/about">
        <div className="btn_header">
          <span>A propos</span>
        </div>
      </Link>
    </div>
  </div>
);

export default Header;

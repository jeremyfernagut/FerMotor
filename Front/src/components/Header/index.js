import React from 'react';
import { NavLink } from 'react-router-dom';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO ajouter les nav link une fois que les routes seront crées.

const Header = () => (
  <div className="header">
    <h1 className="header_title">Fermotor</h1>
    <div className="link">
    <a className="link_detail" href="#"> Accueil </a>
    <a className="link_detail" href="#"> Services </a>
    <a className="link_detail" href="#"> Contact </a>
    <a className="link_detail" href="#"> A propos </a>
    </div>
  </div>
);

export default Header;
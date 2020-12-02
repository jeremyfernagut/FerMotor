import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/petit_logo.png';
import './style-mobile.scss';
import './style-desktop.scss';

const Footer = () => (
  <div className="footer">
    <h1 className="footer_title"> Nos Coordonnées </h1>
    <div className="footer_info">
      <div className="footer_contact"> Nous contacter : 
        <a className="footer_tel" href="tel: +33556490863"><i className="fa fa-phone" /> 05.56.49.08.63 </a>
        <a className="footer_mail" href="mailto:fermotor@wanadoo.fr"><i className="fa fa-envelope-o" /> fermotor@wanadoo.fr</a>
      </div>
      <div className="footer_horraire">
        <span><i className="fa fa-clock-o" /> Lundi-jeudi :</span>
        <span>07h30-12h30 / 14h-17h</span>
        <span>Vendredi : </span>
        <span>07h30-12h30 </span>
      </div>
      <div className="footer_adresse"><i className="fa fa-home" /> 5 rue Pierre Georges Latecoere 33850 Leognan France</div>
      <Link to="/mentions-legales">
        <p className="mention_legal_link">Mentions légales</p>
      </Link>
      <div className="footer_legal">
        <a href="#header_title">
          <img src={logo} alt="Logo de l'entreprise fermotor" className="footer_logo" />
        </a>
      </div>
    </div>
  </div>
)
export default Footer;
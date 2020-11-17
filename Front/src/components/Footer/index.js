import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/petit_logo.png';
import './style-mobile.scss';
import './style-desktop.scss';

// // TODO : Inserer les vrais informations et véirifier l'utilité des className tel horraire adresse ( css empty ) 
// TODO soucis avec le rendu du logo de l'entreprise, voir la graphiste.
// TODO voir pour faire un button pour remonter en haut de page ? 
// TODO modifier l'icone pour remonter en haut de page ( voir arrow_up dans le dossier img)

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
      <Link to ="/mentions-légales">
        <p>Mentions légales</p>
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
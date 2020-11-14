import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO : Inserer les vrais informations et véirifier l'utilité des className tel horraire adresse ( css empty ) 

const Footer = () => (
  <div className="footer">
    <h1 className="footer_title"> Nos Coordonnées :</h1>
    <div className="footer_info">
			<a className="footer_tel" href="tel: +33556490863"><i className="fa fa-phone" /> 05.56.49.08.63 </a>
    	<div className="footer_horraire"><i className="fa fa-clock-o" /> Lundi-jeudi 07h30-12h30 / 14h-17h  - Vendredi 07h30-12h30 </div>
    	<div className="footer_adresse"><i className="fa fa-home" /> 5 rue Pierre Georges Latecoere 33850 LEOGNAN </div>
      <a className="footer_mail" href="mailto:fermotor@wanadoo.fr"><i className="fa fa-envelope-o" /> fermotor@wanadoo.fr</a>
    </div>
  </div>
)
export default Footer;
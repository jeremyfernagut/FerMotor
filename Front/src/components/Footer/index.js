import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Footer = () => (
  <div className="footer">
    <h1 className="footer_title"> Nos Coordonnées </h1>
    <div className="footer_info">
			<div className="footer_tel"><i className="fa fa-phone" />05.46.25.36.95 </div>
    	<div className="footer_horraire">Horraires : Lun-Ven 8:00 - 19.00</div>
    	<div className="footer_adresse">Adresse : ZA Les Cerisiers
Villedoux, 17230</div>
    </div>
  </div>
)
export default Footer;
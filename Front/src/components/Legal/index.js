import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Legal = () => (
  <div className="legal">
    <h1 className="legal_title">Mentions légales :</h1>
    <p className="legal_fermotor">La Menuiserie Fermotor est une SARL. au capital de 340.000 euros, immatriculée au registre du commerce et des sociétés sous le numéro  326 016 367 000 53  , APE : 4332 A , N° de TVA intracommunautaire :  FR 53 326 016 367 , joignable par mail : fermotor@wanadoo.fr</p>
    <p className="legal_fermotor">Le siège social se situe à l’adresse suivante :</p>
    <p className="legal_fermotor">5 rue Pierre Georges Latecoere 33850 Leognan France</p>
    <h2 className="legal_conception_title">Conception et réalisation du site :</h2>
    <ul className="legal_ul">
      <li><a href="https://github.com/MorelRemi17"><i className="fa fa-github" /> Rémi Morel-Charpentier</a></li>
      <li><a href="https://github.com/jeremyfernagut"><i className="fa fa-github" /> Jérémy Fernagut</a></li>
    </ul>
    <p className="legal_hebergement"> Hébergement du site : OVH – 2 Rue Kellermann, 59100 Roubaix, France.</p>
    <p className="legal_fermotor">Ce site est une création intellectuelle originale qui, par conséquent entre dans le champ de protection du droit d’auteur. Son contenu est également protégé par des droits de propriété intellectuelle et/ou industrielle. Toute personne qui portera atteinte aux droits de propriété intellectuelle attachés aux différents objets de ce site internet se rend coupable du délit de contrefaçon et est passible des sanctions pénales prévues par la loi. </p>
  </div>
);

export default Legal;
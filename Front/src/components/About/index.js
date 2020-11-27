import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const About = () => (

  <div className="about">
    <h2 className="about_title"> Fermotor </h2>
    <div className="about_corp">
      <div className="about_text">La Sarl FERMOTOR  a été créée en 1983 par M FONTES. Elle est spécialisée dans la fourniture et la pose de fermetures du bâtiment :
        <ul>
          <li>
            Menuiseries extérieures : Alu, Acier, Bois, PVC
          </li>
          <li>
            Portes Garages sectionnelles, enroulables, coulissantes, traditionnelles, grilles.
          </li>
          <li>
            Occultations extérieures : Volets roulants, battants, brise-soleil, stores bannes, stores rouleaux, persiennes, jalousies.
          </li>
          <li>
            Occultations intérieures : stores à rouleaux, vénitiens, plissés, à bandes verticales.
          </li>
          <li>
            Films solaires, films occultants.
          </li>
        </ul>
        Elle a été rachetée en 2007 par Jacques FOUGERE, l’actuel gérant.Son ancienneté et son savoir-faire lui permet de répondre sur tous types de marchés (particuliers, professionnels et collectivités) et de proposer tous types de produits.
      </div>
      <img 
        src="https://cdn.discordapp.com/attachments/776028623555395634/776028867235676160/photo_fermotor_retouche.jpg"
        alt="L'entreprise Fermotor"
        className="about_img" />
    </div>
  </div>
);

export default About;

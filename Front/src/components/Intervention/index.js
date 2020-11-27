import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';


const Intervention = (props) => {
  const { list } = props;
  return (
    <div className="intervention">
      <h1 className="intervention_title">Services : </h1>
      <p className="intervention_text">Faite confiance à votre installateur pour vous guider dans la sélection ! Nous vous aidons à choisir vos produits, pour vous assurer une pose de menuiseries de qualité. Faisons en sorte que votre projet d’installation soit une réussite !</p>
      <p className="intervention_text">Les matériaux disponibles pour la fabrication ont chacun leurs avantages. Leur sélection va dépendre de vos besoins et de votre budget :</p>
      <ul className="intervention_ul">
        <li> le PVC est facile d’entretien et d’un bon rapport qualité/prix,</li>
        <li> l’aluminium est robuste, léger et disponible en divers coloris,</li>
        <li>le bois est chaleureux, esthétique et naturellement isolant,</li>
        <li>et le mixte alu-bois allie les qualité de ces deux matériaux.</li>
      </ul>
      <div className="intervention_card">
        {
          list.map((cardObject) => (
            <div className="intervention_card_unit">
              <h4 className="intervention_card_title"> {cardObject.title} </h4>
              <div className="">
                <img
                  src={cardObject.img}
                  className="intervention_card_img" 
                  alt={cardObject.alt}
                />
              </div>
              <p className="intervention_card_supplier">Fournisseurs :</p>
              <ul>
                <li className="intervention_card_detail"> {cardObject.supplier1} </li>
                <li className="intervention_card_detail"> {cardObject.supplier2} </li>
                <li className="intervention_card_detail"> {cardObject.supplier3} </li>
                <li className="intervention_card_detail"> {cardObject.supplier4} </li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Intervention;
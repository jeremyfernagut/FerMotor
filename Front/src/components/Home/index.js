import React from 'react';
import PropTypes from 'prop-types';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO faire les props 

const Home = (props) => {
  const { list } = props;
  return (
    <div className="main">
      <h1 className="main_welcome"> Bienvenue </h1>
      <div className="card">
        {
          list.map((cardObject) => (
            <div className="card_unit" key={cardObject.id}>
              <h4 className="card_title"> {cardObject.title} </h4>
              <div className="card_img_div">
                <img
                  src={cardObject.img}
                  className="card_img"
                  alt={cardObject.alt}
                  />
              </div>
              <p className="card_description"> {cardObject.description} </p>
            </div>
          ))
        }
        <div className="main_rge">
          <img
            src="https://cdn.discordapp.com/attachments/776028623555395634/777806104619909170/qualibat-1.png"
            alt="Norme RGE"
            className="main_img_rge"
          />
          <p className="main_text_rge">Le label RGE (« Reconnu Garant de l'Environnement ») est un signe de qualité lors de la réalisation de travaux d'économie d'énergie dans les logements (isolation des murs ou de la toiture, installation d'un équipement utilisant une énergie renouvelable, etc.). Il s'agit d'un dispositif reconnu par l'Etat : pour le particulier, le recours à une entreprise RGE pour faire des travaux ouvre droit à l'attribution de certaines aides publiques.
          </p>
        </div>
      </div>
    </div>
  );
};

Home.popTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
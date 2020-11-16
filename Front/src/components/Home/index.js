import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

// TODO faire les props 

const Home = ( props ) => {
  const { list } = props;
  return (
    <div className="main">
      <h1 className="main_welcome"> Bienvenue </h1>
      <div className="card">
        {
          list.map((cardObject) =>(
            <div className="card_unit">
              <h4 className="card_title"> {cardObject.title} </h4>
              <div className="">
                <img  
                  src={cardObject.img}
                  className="card_img"/>  
              </div>
              <p className="card_description"> {cardObject.description} </p>
            </div>
          ))
      }
        <div className="main_rge">
          <img 
            src="https://cdn.discordapp.com/attachments/776028623555395634/777806104619909170/qualibat-1.png"
            alt="Norme RGE"
            className="main_img_rge" />
          <p className="main_text_rge">Une société qualifiée QUALIBAT RGE
            France Menuisiers bénéficie de la qualification QUALIBAT, un gage de la qualité de nos prestations et de notre professionnalisme en tant que fabricant de menuiseries.
          </p>
        </div> 
      </div>
    </div>
)};

export default Home;
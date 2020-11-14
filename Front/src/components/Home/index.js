import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Home = ( props ) => {
  const { list } = props;
  return (
    <div className="main">
      <h1 className="main_welcome"> Bienvenue </h1>
      <div className="card">
        {
          list.map((cardObject) =>(
            <div className="card_unit">
              <h4> {cardObject.title} </h4>
              <div className="">
                <img  
                 src={cardObject.img}
                  className="card_img"/>  
              </div>
              <p> {cardObject.description} </p>
            </div>
          ))
      }
      </div>
    </div>
)};

export default Home;
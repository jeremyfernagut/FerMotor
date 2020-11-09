import React from 'react';
import Card from './Card'
import './style-mobile.scss';
import './style-desktop.scss';

const Home = ( { cards } ) => {
  console.log(cards);
    <div className="main">
      <h1 className="main_welcome"> Bienvenue </h1>
        {
         cards.map((cardObject) => (
         <Card 
           title={cardObject.title}
           img={cardObject.img}
           description={cardObject.description}
          />
      ))
    }
      </div>
};

export default Home;
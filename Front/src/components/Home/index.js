import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Home = ( props ) => {
  const { list } = props;
  return(
    <div className="main">
      <h1 className="main_welcome"> Bienvenue </h1>
      {
        list.map((cardObject) =>(
       
            <div className="card">
        <div className="cardUnit">
          <h4 className=""> {cardObject.title} </h4>
          <div className="">
            <img  src={cardObject.img}/>  
            </div>
          <span> {cardObject.description} </span>
        </div>
      </div>
        
        ))
      }
    </div>
)};

export default Home;
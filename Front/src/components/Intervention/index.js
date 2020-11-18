import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';


// TODO : faire les alt des img 

const Intervention = ( props ) => {
  const { list } = props;
  return (
    <div className="intervention">
      <h1 className="intervention_title">Services : </h1>
      <div className="intervention_card">
        {
          list.map((cardObject) =>(
            <div className="intervention_card_unit">
              <h4 className="intervention_card_title"> {cardObject.title} </h4>
              <div className="">
                <img  
                  src={cardObject.img}
                  className="intervention_card_img"/>  
              </div>
              <p className="intervention_card_description"> {cardObject.supplier} </p>
            </div>
          ))
          }
      </div>
    </div>
  )
}

export default Intervention;
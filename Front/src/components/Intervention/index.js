import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Intervention = ( props ) => {
  const { list } = props;
  return (
    <div>
      <h1>Services : </h1>
        <div>
          {
            list.map((cardObject) =>(
              <div className="card_unit">
              <h4 className="card_title"> {cardObject.title} </h4>
              <div className="">
                <img  
                  src={cardObject.img}
                  className="card_img"/>  
              </div>
              <p className="card_description"> {cardObject.supplier} </p>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Intervention;
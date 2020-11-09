import React from 'react';

const Card = ( { title, img, description }) => {
    return (
        <div className="card">
          <div className="cardUnit">
            <h4 className="">{title}</h4>
            <span className="">{img}</span>
            <span>{description}</span>

          </div>
        </div>
      );
}

export default Card;
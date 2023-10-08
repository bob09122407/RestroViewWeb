import React from 'react';
import "./card.css";


const Card = ({ name, title, frontImage,rating, image, description }) => {
  const frontStyle = {
    backgroundImage: `url(${frontImage})`,
  };

  return (
    <div className='containerc'>
      <div className='card1'>
        <div className='card-inner'>
          <div className='front' style={frontStyle}>
           
            <h3>{name}</h3>
            <p>{title}</p>
            <button>{rating}</button>
          </div>
          <div className='back'>
              <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>

            <div className="row">
              <button>Follow</button>
              <button>Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


import React from 'react'


const NasaCard = props => {
    return (
        <div className="nasa-card" key={props.id}>
          <img className="nasa-image" alt="random img" src={props.src} />
          <h2>{props.nasaimg}</h2>
        </div>
      ); 
    };
export default NasaCard;
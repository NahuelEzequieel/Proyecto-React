import React from "react";
import "../Cards.css";


function Card({imageSource, title, precio}) {
  return (
    <div>
      <div className="card">
        <img src={imageSource} alt="img" className="img" />
        <h1>{title}</h1>
        <h2>{precio}</h2>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Card;

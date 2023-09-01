import React from "react";
import Card from "./Card";
import "../Cards.css";
import MarcosAurelio from "../Imagenes/MarcosAurelio.jpg";
import FilonDeAlejandria from "../Imagenes/FilonDeAlejandria.jpg";
import Seneca from "../Imagenes/Seneca.jpg";
import Epicteto from "../Imagenes/Epicteto.jpg";

const cards = [
  {
    id: 1,
    imageSource: MarcosAurelio,
    title: "Meditaciones",
    precio: "$3.000",
  },
  {
    id: 2,
    imageSource: FilonDeAlejandria,
    title: "Todo hombre bueno es libre",
    precio: "$4.720",
  },
  {
    id: 3,
    imageSource: Seneca,
    title: "Cartas de un estoico",
    precio: "$3.350",
  },
  {
    id: 4,
    imageSource: Epicteto,
    title: "Equiridion",
    precio: "$3.800",
  },
];

function Cards() {
  console.log(cards);
  return (
    <div className="grid-card">
    <h1>Clásicos</h1>
      {cards.map((card) => (
        <Card imageSource={card.imageSource} title={card.title} precio={card.precio}/>
      ))}
    </div>
  );
}

export default Cards;

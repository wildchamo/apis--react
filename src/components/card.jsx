import React from "react";
import "./card.css";

function Card({ albumId, id, title, url }) {
  return (
    <div className="card">
      <img src={url} />
      <h2>{title}</h2>
      <p>Track No {id} del albúm {albumId}</p>
    </div>
  );
}

export { Card }; //exportación nombrada para que solo pueda ser importado con este nombre, evita errores

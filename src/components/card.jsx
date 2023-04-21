import React from "react";
import "./card.css";

function Card({ albumId, id, title, url }) {
  return (
    <div className="card">
      <img src={url} />
      <p>{albumId}</p>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
}

export { Card }; //exportación nombrada para que solo pueda ser importado con este nombre, evita errores

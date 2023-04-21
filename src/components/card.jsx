import React from "react";

function Card({ albumId, id, title, url }) {
  return (
    <>
      <img src={url} />
      <p>{albumId}</p>
      <p>{id}</p>
      <p>{title}</p>
    </>
  );
}

export { Card }; //exportación nombrada para que solo pueda ser importado con este nombre, evita errores

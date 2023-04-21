import React from "react";
import "./cardcontainer.css"

//recibo componente hijo y lo renderizo, el contenedor tiene estilos distintos a los de la card
function CardContainer({ children }) {
  return <div className="cardcontainer">{children}</div>;
}

export { CardContainer };

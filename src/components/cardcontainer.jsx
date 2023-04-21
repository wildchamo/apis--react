import React from "react";
import "./cardcontainer.css"

function CardContainer({ children }) {
  return <div className="cardcontainer">{children}</div>;
}

export { CardContainer };

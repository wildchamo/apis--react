import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { CardContainer } from "./components/cardcontainer.jsx";
import "./App.css";

//link con acceso a la api
const ENDPOINT = "https://jsonplaceholder.typicode.com/photos";

function App() {
  const [data, setData] = useState([]); //se crea un estado para guardar los datos que traeremos de la API

  //implento un efecto para ejecutar el código que trae la infor de la api cuando se monta la aplicación
  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json()) //recibo la información y la convierto a json para ser consumida desde la app
      .then((data) => setData(data)); //guardo la información en el estado
    console.log(data);
  }, []);

  return (
    <>
      <h1>Album de fotos</h1>

      <CardContainer>
        {data.map((card) => (
          <Card
            key={card.url}
            albumId={card.albumId}
            id={card.id}
            title={card.title}
            url={card.url}
          />
        ))}
      </CardContainer>
    </>
  );
}

export default App;

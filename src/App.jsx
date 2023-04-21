import { useEffect } from "react";
import "./App.css";

const ENDPOINT = "https://jsonplaceholder.typicode.com/photos";

function App() {
  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <></>;
}

export default App;

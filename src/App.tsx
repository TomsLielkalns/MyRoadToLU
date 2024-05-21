import { useState } from "react";
import "./App.css";
import "./test.scss";
import MapComponent from "./test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MapComponent></MapComponent>
    </>
  );
}

export default App;

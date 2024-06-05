import "./test.scss";
import MapComponent from "./google_maps/Map";
import Modal from "./Modal";
import Overlay from "./Overlay";
import { useState } from "react";

document.documentElement.setAttribute("data-theme", "dark");

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  console.log(isOpen);

  return (
    <>
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} setIsDark={setIsDark} />
      <MapComponent isDark={isDark} />
      <Modal />
    </>
  );
}

export default App;

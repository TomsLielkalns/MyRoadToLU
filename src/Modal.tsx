import Modal from "react-modal";

import AN_baznica from "./assets/pictures/AN_baznica.jpg";
import dailes_teatris from "./assets/pictures/dailes_teatris.jpg";
import evolution from "./assets/pictures/evolution.jpg";
import gaisa_tilts from "./assets/pictures/gaisa_tilts.jpg";
import lu from "./assets/pictures/lu.jpg";
import new_gertrudes_baznica from "./assets/pictures/new_gertrudes_baznica.jpg";
import old_gertrudes_baznica from "./assets/pictures/old_gertrudes_baznica.jpg";
import orthadox_katedrale from "./assets/pictures/orthadox_katedrale.jpg";
import brivibas_piemineklis from "./assets/pictures/brivibas_piemineklis.jpg";
import radisons from "./assets/pictures/radisons.jpg";
import stura_maja from "./assets/pictures/stura_maja.jpg";
import vef_pils from "./assets/pictures/vef_pils.jpg";
import vermanes from "./assets/pictures/vermanes darzs.jpg";

type MapKeyToTextProps = {
  currentlyOpenModal: string;
};

const MapKeyToText = ({ currentlyOpenModal }: MapKeyToTextProps) => {
  let title = "";
  let content = "";
  let image = "";
  let imageAlt = "";

  switch (currentlyOpenModal) {
    case "lu":
      title = "Latvijas Universitāte";
      content = "Latvijas Universitāte";
      image = lu;
      imageAlt = "Latvijas Universitāte";
      break;
    case "vefPalace":
      title = "VEF Kultūras pils";
      content = "VEF Kultūras pils";
      image = vef_pils;
      imageAlt = "VEF Kultūras pils";
      break;
    case "gaisaTilts":
      title = "Gaisa tilts";
      content = "Gaisa tilts";
      image = gaisa_tilts;
      imageAlt = "Gaisa tilts";
      break;
    case "evolutionBuilding":
      title = "Evolution Latvia ēka";
      content = "Evolution Latvia ēka";
      image = evolution;
      imageAlt = "Evolution Latvia ēka";
      break;
    case "newGertrudesChurch":
      title = "Rīgas Jaunā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      content = "Rīgas Jaunā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      image = new_gertrudes_baznica;
      imageAlt = "Rīgas Jaunā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      break;
    case "dailesTheater":
      title = "Dailes teātris";
      content = "Dailes teātris";
      image = dailes_teatris;
      imageAlt = "Dailes teātris";
      break;
    case "cornerHouse":
      title = "Stūra Māja";
      content = "Stūra Māja";
      image = stura_maja;
      imageAlt = "Stūra Māja";
      break;
    case "oldGertrudesChurch":
      title = "Rīgas Vecā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      content = "Rīgas Vecā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      image = old_gertrudes_baznica;
      imageAlt = "Rīgas Vecā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      break;
    case "anChurch":
      title = "Svētā Aleksandra Ņevska pareizticīgo baznīca";
      content = "Svētā Aleksandra Ņevska pareizticīgo baznīca";
      image = AN_baznica;
      imageAlt = "Svētā Aleksandra Ņevska pareizticīgo baznīca";
      break;
    case "radisons":
      title = "Radisson Blu";
      content = "Radisson Blu";
      image = radisons;
      imageAlt = "Radisson Blu";
      break;
    case "orthodoxCathedral":
      title = "Rīgas Kristus Piedzimšanas pareizticīgo katedrāle";
      content = "Rīgas Kristus Piedzimšanas pareizticīgo katedrāle";
      image = orthadox_katedrale;
      imageAlt = "Rīgas Kristus Piedzimšanas pareizticīgo katedrāle";
      break;
    case "freedomMonument":
      title = "Brīvības piemineklis";
      content = "Brīvības piemineklis";
      image = brivibas_piemineklis;
      imageAlt = "Brīvības piemineklis";
      break;
    case "vermaneGarden":
      title = "Vērmanes dārzs";
      content = "Vērmanes dārzs";
      image = vermanes;
      imageAlt = "Vērmanes dārzs";
      break;
    default:
      break;
  }
  return (
    <>
      <h1 className="text modal-h1">{title}</h1>
      <img src={image} alt={imageAlt} style={{ width: "100%" }} />
      <p>{content}</p>
    </>
  );
};

type ModalProps = {
  currentlyOpenModal: string;
  setCurrentlyOpenModal: (value: string) => void;
};

const ModalComponent = ({ currentlyOpenModal, setCurrentlyOpenModal }: ModalProps) => {
  console.log(currentlyOpenModal);
  function closeModal() {
    setCurrentlyOpenModal("");
  }

  const html = document.querySelector("html");
  const compStyles = window.getComputedStyle(html);
  const backgroundColor = compStyles.getPropertyValue("--color-background");

  return (
    <Modal
      isOpen={!!currentlyOpenModal}
      style={{
        overlay: { zIndex: 10000, backgroundColor: `${backgroundColor}BB` },
        content: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
          <button className="secondary-button modal-button" onClick={closeModal}>
            X
          </button>
        </div>
        <MapKeyToText currentlyOpenModal={currentlyOpenModal} />
      </div>
    </Modal>
  );
};

export default ModalComponent;
